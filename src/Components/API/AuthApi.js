import axios from "axios"

const BASE_URL="http://localhost:5000"

export const LoginFN = async ({email, password}) => {
    let result; 
    try{
        result = await axios.post(`${BASE_URL}/api/auth/login`, {email, password})
        return result.data
    }catch(err){
        return err.response
    }
}

export const SignupFN = async ({email, password, confirmPassword}) => {
    let result
    try{
        result = await axios.post(`${BASE_URL}/api/auth/signup`, {email, password, confirmPassword})
        return result.data
    }catch(err){
        return err.response 
    }
}

export const isAuthenticated = async ({TinderToken}) => {
    let result
    try{
        result = await axios.get(`${BASE_URL}/api/auth/checkuser`, { headers: { Authorization: `Bearer: ${TinderToken}` } })
        return result
    }catch(err){
        return err
    }
}
