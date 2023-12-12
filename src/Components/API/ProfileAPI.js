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

export const CreateProfile = async({ firstname, lastname, birthday, gender, showme, aboutme, images, email }) => {
    let result 
    try{
        result = await axios.post(`${BASE_URL}/api/profile`, { firstname, lastname, birthday, gender, showme, aboutme, images, email })
       return result
    }catch(err){
        return err.response
    }
}