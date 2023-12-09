import React, { useState, useMemo, useRef, useContext, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import CloseIcon from '@mui/icons-material//Close';
import StarRateIcon from '@mui/icons-material//StarRate';
import FavoriteIcon from '@mui/icons-material//Favorite';
import { IconButton } from '@mui/material';
import { CiLocationOn } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { SidebarContext } from '../../Context/SideBarContext';
import { GetCurrentLocation } from '../API/LocationAPI';
import { GetUserByGender } from '../API/ProfileAPI';
import { likeUser, superLikeUser } from '../API/Likes';



const calculateDistance = (currentLocation, profileLocation) => {
  const R = 6371;
  const lat1 = deg2rad(currentLocation?.Latitude);
  const lon1 = deg2rad(currentLocation?.Longtitude);
  const lat2 = deg2rad(profileLocation?.Latitude);
  const lon2 = deg2rad(profileLocation?.Longtitude);

  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;

  const roundedDistance = isNaN(distance) ? 0 : Number(distance.toFixed(2));

  return roundedDistance;
};


const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

const calculateAge = (birthday) => {
  const birthDate = new Date(birthday);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  const hasBirthdayOccurred =
    currentDate.getMonth() > birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate());

  if (!hasBirthdayOccurred) {
    age--;
  }

  return age;
};

const LocationComponent = ({ Long, Lat }) => {
  
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await GetCurrentLocation({ Long, Lat });
        if (res?.status === 200) {
          setLocation(`${res.data.results[0].components.state}, ${res.data.results[0].components.country}`);
        }
      } catch (error) {
        setLocation("No location provided");
      }
    };

    fetchLocation();
  }, [Long, Lat]);

  return <h5>Lives in {location}</h5>;
};

function Cardtinder() {
  const { profile, DistancePreference, onlyShowDistance, ageRange, fixedDistance, fixedAgeRange } = useContext(SidebarContext);
  const Location = profile.Location
  const gender = profile.showme;
  const likedUsers = profile.likedUsers;
  const superLikedUsers = profile.superLikedUsers;
  useEffect(() => {
    const LoadUsers = async ({ gender, likedUsers, superLikedUsers }) => {
      try {
        const res = await GetUserByGender({ gender, likedUsers, superLikedUsers });
        if (res && res.data.Profiles) {
          let filteredProfiles = res.data.Profiles;

          if (fixedAgeRange || fixedDistance) {
            filteredProfiles = filteredProfiles.filter(profile => {
              const age = calculateAge(profile.birthday);
          
              // Only show profiles within the specified age range if fixedAgeRange is true
              const isWithinAgeRange = !fixedAgeRange || (age >= ageRange[0] && age <= ageRange[1]);
          
              // Only show profiles within the specified distance if fixedDistance is true
              const isWithinDistance = !fixedDistance || DistancePreference <= calculateDistance(Location, profile?.Location) ;
              console.log("within distance", isWithinDistance)
          
              return isWithinAgeRange && isWithinDistance;
            });
          }

          setdb(filteredProfiles);
        }
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };

    LoadUsers({ gender, likedUsers, superLikedUsers });
  }, [gender, likedUsers, superLikedUsers, DistancePreference, ageRange, fixedAgeRange, fixedDistance, Location]);
  const [db, setdb] = useState([]);
  let [current, setCurrent] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    setCurrentIndex(db.length - 1);
  }, [db]);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map(() => React.createRef()),
    [db]
  );
  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); 
      console.log(`Swiped ${dir} on user with email: ${db[currentIndex].email}`);
      if (dir === 'right') {
        await likeUser(profile.email, db[currentIndex].email);
      } else if (dir === 'up') {
        await superLikeUser(profile.email, db[currentIndex].email);
      }
    }
  };


  return (
    <div>
      <div className='self-center shadow-md mr-[4rem] shadow-pink-500/50 card-container rounded-t-xl'>
        {db.map((profile, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={profile._id}
            onSwipe={(dir) => swiped(dir, profile._id, index)}
            onCardLeftScreen={() => outOfFrame(profile._id, index)}
            preventSwipe={'down'}
          >
            <div className='relative overflow-hidden rounded-t-xl'>
              <div className={`flex card`} style={{ transform: `translateX(-${current * 100}%)` }}>
                {profile.images.map((s) => (
                  <img src={s} alt='' className='object-cover rounded-t-xl -z-50' />
                ))}
              </div>

              <div className='text-white info-user1 flex flex-col -translate-y-10'>
                <h3 style={{ fontWeight: 'bolder' }}>{profile.firstname}&nbsp;{profile.lastname}</h3>
                <h2 className='text-xl text-gray-200  -translate-y-2'>{calculateAge(profile.birthday)}&nbsp;Years Old</h2>
              </div>
              <div className='text-white info-user2 -translate-y-11'>
                <BsHouseDoor />
                <LocationComponent Long={profile?.Location?.Longtitude} Lat={profile?.Location?.Latitude} />
              </div>
              <div className='text-white info-user3 -translate-y-10'>
                <CiLocationOn />
                <h5>{calculateDistance(Location, profile?.Location)}&nbsp;Kilometers away</h5>
              </div>
              <div className='text-white active -translate-y-40 ml-5 flex px-2 bg-blue-gray-600/30  w-fit rounded-md border border-white '>
                <h3>{profile.aboutme}</h3>
              </div>
            </div>

            <div className='absolute top-0 z-50 flex justify-center w-full gap-3 py-4'>
              {profile.images.map((s, i) => (
                <div
                  onClick={() => {
                    setCurrent(i);
                  }}
                  key={'circle' + i}
                  className={`squared w-16 h-1 rounded-sm cursor-pointer -z-50  ${
                    i === current ? 'bg-white' : 'bg-gray-500'
                  }`}
                ></div>
              ))}
            </div>
          </TinderCard>
        ))}
        <div className='swipe__Button'>
          <IconButton className='swipeButton__left' onClick={() => { swipe('left'); setCurrent(0); setCurrentIndex(currentIndex - 1) }}>
            <CloseIcon fontSize='large' />
          </IconButton>
          <IconButton className='swipeButton__star' onClick={() => { swipe('up'); setCurrent(0); setCurrentIndex(currentIndex - 1) }}>
            <StarRateIcon fontSize='large' />
          </IconButton>
          <IconButton className='swipeButton__right' onClick={() => { swipe('right'); setCurrent(0); setCurrentIndex(currentIndex - 1) }}>
            <FavoriteIcon fontSize='large' />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Cardtinder;
