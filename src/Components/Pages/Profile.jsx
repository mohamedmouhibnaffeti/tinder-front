import React, {useEffect, useState, useContext} from "react";
import ProfileNav from "../ui/ProfileNav"
import Footer from "../Footer";
import ImageInput from "../ui/ImageInput";
import { CreateProfile } from "../API/ProfileAPI";
import { CookieContext } from "../../Context/CookieContext";
import { useNavigate } from "react-router-dom";
import { CheckProfile } from "../API/ProfileAPI";

export default function Profile(){
    const { cookies } = useContext(CookieContext)
    const email = cookies['TinderEmail']
    useEffect(()=>{
        const CheckingProfile = async ({email}) => {
            const res = await CheckProfile({email})
            if(res){
                navigate("/MainTinder")
            }
        }
        CheckingProfile({email})
    }, [])

    const navigate = useNavigate()

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        birthday: "",
        gender: "",
        showme: "",
        aboutme: "",
        images: [],
        email: email
    })
    const maxLength = 50
    const onChangeHandler = (field, value) => {
        setData(prevstate => ({ ...prevstate, [field]: value }) )   
    }

    const [ProfileLoading, setProfileLoading] = useState(false)

    const [Images, setImages] = useState([])

    const AddImage = (index) => {
        setImages([...Images, index])
    }

    useEffect(()=>{
        onChangeHandler("images", Images)
    }, [Images])

    const [RequestResult, setRequestResponse] = useState({status: 0})
    const OnSubmitHandler = async(data) => {
        setProfileLoading(true)
        const res = await CreateProfile(data)
        setRequestResponse(res)
        setProfileLoading(false)
    }

    useEffect(()=>{
        if(RequestResult.status === 201){
            navigate("/MainTinder")
        }
    }, [RequestResult])

    const maxLettersAbout = maxLength - data.aboutme.length

    return (
        <div className="bg-gray-white overflow-x-hidden dark:bg-gray-900">
            <div className="flex flex-col w-full h-full items-center gap-4 mb-4">
                <h1 className="mt-4 text-black dark:text-white text-4xl font-semibold cursor-none "> Create Profile </h1>
                { (RequestResult.status === 400 || RequestResult.status === 500) && <p className="text-red-800 text-lg">{RequestResult.data.message}</p>}
                <div className="w-full h-full flex lg:flex-row flex-col mt-4 gap-3 px-5 justify-center">
                    <div className="py-12 px-24 md:gap-8 gap-5 items-center flex flex-col rounded-lg border border-pink-700">
                        <div className="flex md:gap-2 gap-5 md:flex-row flex-col ">
                            <div className=" flex flex-col gap-2">
                                <label htmlFor="firstname" className="dark:text-white font-semibold text-lg">&nbsp; First Name </label>
                                <input type="text" className="border-2 rounded-lg h-12 border-purple-600 dark:bg-zinc-800 dark:text-white font-thin w-64" id="firstname" onChange={(e)=>onChangeHandler("firstname", e.target.value)}/>
                            </div>
                            <div className=" flex flex-col gap-2">
                                <label htmlFor="lastname" className="dark:text-white font-semibold text-lg">&nbsp; Last Name </label>
                                <input type="text" className="border-2 rounded-lg border-purple-600 dark:bg-gray-800 h-12 dark:text-white font-thin w-64" id="lastname" onChange={(e)=>onChangeHandler("lastname", e.target.value)} />
                            </div>
                        </div>
                        <div className=" flex flex-col gap-2">
                            <label htmlFor="lastname" className="dark:text-white font-semibold text-lg">&nbsp; Email </label>
                            <input type="text" className="border-2 rounded-lg border-purple-600 dark:bg-gray-800 h-12 dark:text-white font-thin md:w-[520px] w-64" id="email" value={data.email} disabled />
                        </div>
                        <div className=" flex flex-col gap-2">
                            <label htmlFor="lastname" className="dark:text-white font-semibold text-lg">&nbsp; Birthday </label>
                            <input type="date" className="border-2 rounded-lg border-purple-600 dark:bg-gray-800 h-12 dark:text-white font-thin md:w-[520px] w-64" id="birthday" onChange={(e)=>onChangeHandler("birthday", e.target.value)} />
                        </div>
                        <div className=" flex flex-col gap-2 md:self-start md:pl-44 lg:pl-0">
                            <p className="dark:text-white font-semibold text-lg self-start">&nbsp; Gender </p>
                            <div className="flex gap-5 ">
                                <button className={`dark:text-gray-100 border ${data.gender === 'Male' ? 'bg-slate-600 border-white ' : 'dark:btn-light btn-dark'} py-2 px-8 rounded-3xl md:w-44 w-32 transition delay-200 hover:scale-105 `} onClick={()=>onChangeHandler("gender", "Male")} > Male </button>
                                <button className={`dark:text-gray-100 border ${data.gender === 'Female' ? 'bg-slate-600 border-white ' : 'dark:btn-light btn-dark'} py-2 px-8 rounded-3xl md:w-44 w-32 transition delay-200 hover:scale-105`} onClick={()=>onChangeHandler("gender", "Female")} > Female </button>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-2 md:self-start md:pl-44 lg:pl-0">
                            <p className="dark:text-white font-semibold text-lg self-start">&nbsp; Show me </p>
                            <div className="flex gap-5 ">
                                <button className={`dark:text-gray-100 border ${data.showme === 'Male' ? 'bg-slate-600 border-white ' : 'dark:btn-light btn-dark'} py-2 px-8 rounded-3xl md:w-44 w-32 transition delay-200 hover:scale-105`} onClick={()=>onChangeHandler("showme", "Male")} > Males </button>
                                <button className={`dark:text-gray-100 border ${data.showme === 'Female' ? 'bg-slate-600 border-white ' : 'dark:btn-light btn-dark'} py-2 px-8 rounded-3xl md:w-44 w-32 transition delay-200 hover:scale-105`} onClick={()=>onChangeHandler("showme", "Female")} > Females </button>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-2">
                                <label htmlFor="lastname" className="dark:text-white font-semibold text-lg">&nbsp; Describe your self in few words <span className="font-thin dark:text-white">&nbsp;&nbsp;({maxLettersAbout})</span></label>
                                <input type="text" className="border-2 rounded-lg border-purple-600 dark:bg-zinc-800 h-12 dark:text-white font-thin md:w-[520px] w-64" maxLength={50} onChange={(e)=>onChangeHandler("aboutme", e.target.value)} />
                        </div>
                    </div>

                    <div className="py-12 px-8 gap-24 items-center flex flex-col rounded-lg border border-pink-700">
                        <div className="flex gap-3">
                            <ImageInput Images={Images} AddImage={AddImage} index={0} />
                            <ImageInput Images={Images} AddImage={AddImage} index={1} />
                            <ImageInput Images={Images} AddImage={AddImage} index={2} />
                        </div>
                        <div className="flex gap-3">
                            <ImageInput Images={Images} AddImage={AddImage} index={3} />
                            <ImageInput Images={Images} AddImage={AddImage} index={4} />
                            <ImageInput Images={Images} AddImage={AddImage} index={5} />
                        </div> 
                    </div>
                </div>
                { ProfileLoading ?
                    <span className="loader" style={{alignSelf: "center", marginTop: "18px"}}></span>
                :
                    <button className="bg-purple-700 px-6 py-2 text-lg font-semibold text-white rounded-3xl transition delay-100 hover:bg-purple-700/80 active:bg-purple-700 my-6" onClick={()=>OnSubmitHandler(data)} >Create Profile</button>
                }
                    </div>
            <Footer />
        </div>
    )
}
