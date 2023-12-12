import axios from "axios";

const BASE_URL="http://localhost:5000"


export const CheckProfile = async ({email}) => {
    let result
    try{
        result =  await axios.get(`${BASE_URL}/api/profile?email=${email}`)
        return result
    }catch(err){
        console.log(err)
    }
}

export const CreateProfile = async({ firstname, lastname, birthday, gender, showme, aboutme, images, email, Location }) => {
    let result 
    try{
        result = await axios.post(`${BASE_URL}/api/profile`, { firstname, lastname, birthday, gender, showme, aboutme, images, email, Location})
       return result
    }catch(err){
        return err.response
    }
}

export const DeleteUser = async ({email}) => {
    let result
    try{
        result  = await axios.delete(`${BASE_URL}/api/user?email=${email}`)
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

export const GetUserByGender = async ({ gender, likedUsers, superLikedUsers }) => {
    console.log("super : ",superLikedUsers)
    console.log("liked", likedUsers)
    let result 
    try{
        result = await axios.post(`${BASE_URL}/api/profile/gender?gender=${gender}`, {likedUsers, superLikedUsers})
        return result
    }catch(err){
        console.log(err)
    }
}

export const UpdateProfile = async ({ firstname, lastname, birthday, gender, showme, aboutme, images, email, oldEmail, Location, phone }) => {
    console.log("Location", Location)
    try {
        const result = await axios.put(`${BASE_URL}/api/profile`, { firstname, lastname, birthday, gender, showme, aboutme, images, email, oldEmail, Location, phone });
        return result;
    } catch (err) {
        console.log (err)
    }
};