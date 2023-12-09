import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"

const About = () => {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <div className="bg-white w-screen min-h-screen flex flex-col dark:bg-gray-900 dark:text-white pt-32 px-7 gap-3">
                <h1 className="text-5xl self-center font-bold mb-7">About Us</h1>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:border-gray-500 dark:bg-gray-700 ">
                    <h1 className="md:text-4xl text-2xl font-bold">Welcome</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">Here, we believe in the power of meaningful connections. Our mission is to create a space where people can discover, connect, and build relationships that enrich their lives. Whether you're looking for a lifelong partner, a new friend, or someone special to share experiences with, we're here to make your journey enjoyable and successful.</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-gray-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">Our Mission</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300"><span className="font-semibold dark:text-gray-200 text-gray-800">Connecting Hearts, Creating Bonds:</span> At the core of [Your Dating Platform] is a commitment to fostering genuine connections. We understand that each person is unique, and so are their desires and aspirations. Our platform is designed to celebrate diversity and provide a safe, inclusive space for people to explore the possibilities of love..</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-gray-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">How It All Began</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">Here, we believe in the power of meaningful connections. Our mission is to create a space where people can discover, connect, and build relationships that enrich their lives. Whether you're looking for a lifelong partner, a new friend, or someone special to share experiences with, we're here to make your journey enjoyable and successful.</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-gray-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">What Sets Us Apart</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300"> <span className="font-semibold dark:text-gray-200 text-gray-800">Smart Matching Algorithms: </span> We utilize cutting-edge matching algorithms that go beyond just physical attraction. We consider factors such as interests, values, and lifestyle to connect you with like-minded individuals. </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300"> <span className="font-semibold dark:text-gray-200 text-gray-800">Safe and Secure Environment:</span> Your safety is our top priority. We employ advanced security measures to ensure a secure online environment. Our team is dedicated to monitoring and addressing any concerns, so you can focus on building connections with peace of mind.</p>
                    <p className="text-lg text-gray-700 dark:text-gray-300"> <span className="font-semibold dark:text-gray-200 text-gray-800">Real People, Real Connections: </span> This is a community of real people looking for real connections. Our emphasis is on authenticity and genuine interactions. Say goodbye to catfishing and fake profiles; here, you'll find individuals who are serious about finding meaningful relationships.</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-gray-700 dark:border-gray-500 mb-8">
                    <h1 className="md:text-4xl text-2xl font-bold">Join Us on this Journey!</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 flex gap-4 flex-col">We invite you to be part of our community. Whether you're new to online dating or a seasoned pro, our platform is designed to cater to your needs. Take the first step toward meaningful connections by creating your profile today.<br/> <span className="self-center font-semibold text-gray-200"> Thank you for choosing us — where love meets technology! </span></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About