import axios from "axios"

const BASE_URL="http://localhost:5000"

export const GetUserMatches = async({ email }) => {
    try{
        const Matches = await axios.get(`${BASE_URL}/api/profile/social/matches?email=${email}`)
        return Matches
    }catch(err){
        console.log(err)
    }
}