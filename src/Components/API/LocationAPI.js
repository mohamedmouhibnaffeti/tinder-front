import axios from "axios"

const API_KEY = "2d57f62fac2d430fbbd32a67e5c53c23"
export const GetCurrentLocation = async ({location}) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${location.Longtitude}+${location.Latitude}&key=${API_KEY}`;
    try{
        const res = await axios.get(url)
        return res
    }catch(err){
        console.log(err)
    }
}