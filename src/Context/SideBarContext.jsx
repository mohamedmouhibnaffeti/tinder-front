import { useState, createContext, useEffect, useContext } from "react";
import { CheckProfile, UpdateProfile } from "../Components/API/ProfileAPI";
import { GetCurrentLocation } from "../Components/API/LocationAPI";
import { CookieContext } from "./CookieContext";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const { cookies } = useContext(CookieContext);
  const [profile, setProfile] = useState({});
  const email = cookies['TinderEmail'];
  const [location, setLocation] = useState({ Longtitude: 0, Latitude: 0 });
  const [LocationData, setLocationData] = useState();
  const [LikesTabOpen, setLikesTabOpen] = useState(false);
  const [DistancePreference, setDistancePreference] = useState(80);
  const [ageRange, setAgeRange] = useState([18, 32]);
  const [fixedAgeRange, setFixedAgeRange] = useState(false);
  const [fixedDistance, setFixedDistance] = useState(false);
  const [EmailOpen, setEmailOpen] = useState(false);
  const [PhoneOpen, setPhoneOpen] = useState(false);
  const [blockOpen, setBlockOpen] = useState(false)

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  useEffect(() => {
    const success = async (pos) => {
      try {
        const crd = pos.coords;
        console.log("Your current position is:");
        console.log(`Latitude: ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
  
        setLocation({ Longitude: crd.longitude, Latitude: crd.latitude });
  
        const updateLocationRes = await UpdateProfile({
          oldEmail: email,
          Location: {
            Longtitude: crd.longitude,
            Latitude: crd.latitude,
          },
        });
  
        if (updateLocationRes && updateLocationRes.status === 202) {
          console.log("User location updated successfully");
        } else {
          console.error("Error updating user location:", updateLocationRes.message);
        }
      } catch (error) {
        console.error("Error updating user location:", error.message);
      }
    };
  
    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };
  
    const id = navigator.geolocation.getCurrentPosition(success, error, options);
  }, [email]);
  useEffect(() => {
    const CheckingProfile = async () => {
      try {
        const res = await CheckProfile({ email });
        if (res && res.data.Profile) {
          setProfile(res.data.Profile)
          if (res.data.Profile.Location) {
            setLocation({
              Longtitude: res.data.Profile.Location.Longtitude || 0,
              Latitude: res.data.Profile.Location.Latitude || 0,
            });
          }
        }
      } catch (error) {
        console.error('Error checking profile:', error);
      }
    };

    CheckingProfile();
  }, [email, setProfile, setLocation]);

  useEffect(() => {
    const Location = async () => {
      try {
        const res = await GetCurrentLocation({ location });
        if (res) {
          setLocationData(res);
          console.log("Location Data: ", res);
        }
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };
  
    Location();
  }, [location, email]);
  
  console.log("Location Data: ", LocationData)


  const [tinderOpen, setTinderOpen] = useState(true);
  const [tinderComponentOpen, setTinderComponentOpen] = useState(false);
  const [profileComponentOpen, setProfileComponentOpen] = useState(true);
  const [userOpen, setUserOpen] = useState(false);
  const [preferredLanguageOpen, setPreferredLanguageOpen] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        tinderOpen,
        setTinderOpen,
        tinderComponentOpen,
        setTinderComponentOpen,
        profileComponentOpen,
        setProfileComponentOpen,
        userOpen,
        setUserOpen,
        preferredLanguageOpen,
        setPreferredLanguageOpen,
        profile,
        LocationData,
        LikesTabOpen,
        setLikesTabOpen,
        DistancePreference,
        setDistancePreference,
        ageRange,
        setAgeRange,
        fixedAgeRange,
        fixedDistance,
        setFixedAgeRange,
        setFixedDistance,
        EmailOpen,
        setEmailOpen,
        PhoneOpen,
        setPhoneOpen,
        blockOpen,
        setBlockOpen
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
