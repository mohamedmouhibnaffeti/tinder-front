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

export const GetUserLikes = async ({ email }) => {
    try{
        const Likes = await axios.get(`${BASE_URL}/api/profile/social/like?email=${email}`)
        return Likes
    }catch(err){
        console.log(err)
    }
}

export const GetUserSuperLikes = async ({ email }) => {
    try{
        const SuperLikes = await axios.get(`${BASE_URL}/api/profile/social/superlike?email=${email}`)
        return SuperLikes
    }catch(err){
        console.log(err)
    }
}

export const CheckLiked = async ({ email }) => {
    try{
        const Check = await axios.get(`${BASE_URL}/api/profile/social/check?email=${email}`)
        return Check
    }catch(err){
        console.log(err)
    }
}

export const likeUser = async (currentEmail, targetEmail) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/profile/social/like?targetEmail=${targetEmail}`, { currentEmail });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const superLikeUser = async (currentEmail, targetEmail) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/profile/social/superlike?targetEmail=${targetEmail}`, { currentEmail });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const blockUser = async( {targetEmail, currentEmail} ) => {
    try{
        const response = await axios.post(`${BASE_URL}/api/profile/social/block?targetEmail=${targetEmail}`, {currentEmail})
        return response
    }catch(err){
        return err.response.data
    }
}

export const getBlockedUsers = async( {userEmail} ) => {
    try{
        const response = await axios.get(`${BASE_URL}/api/profile/social/block?userEmail=${userEmail}`)
        return response
    }catch(err){
        console.log(err)
    }
}