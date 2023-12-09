import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"

const Policy = () => {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <div className="bg-white w-screen min-h-screen flex flex-col dark:bg-gray-900 dark:text-white pt-32 px-7 gap-3 justify-center">
                <h1 className="text-5xl self-center font-bold mb-7">Privacy Policy</h1>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:border-gray-500 dark:bg-gray-700 ">
                    <h1 className="text-4xlmd:text-4xl text-2xl font-bold">Information We Collect</h1>
                    <h3 className="font-bold text-xl">1. Profile Information:</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">When you create an account, we collect the information you provide, such as your name, age, gender, location, and profile pictures.</p>
                    <h3 className="font-bold text-xl">2. Usage Data:</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> We collect data about how you use our app, including interactions, preferences, and the content you view.</p>
                    <h3 className="font-bold text-xl">3. Communication Data:</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">To facilitate meaningful connections, we collect information exchanged during messages and interactions within the app.</p>
                    <h3 className="font-bold text-xl">4. Device Information:</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">We may collect information about the device you use to access our app, including device type, operating system, and unique device identifiers.</p>
                    <h3 className="font-bold text-xl">5. Location Information:</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">With your consent, we may collect and process information about your precise location to enhance the matching experience.</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:border-gray-500 dark:bg-gray-700 ">
                    <h1 className="text-4xlmd:text-4xl text-2xl font-bold">How We Use Your Information</h1>
                    <h3 className="font-bold text-xl">1. Matching and Recommendations:</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">We use your profile information and preferences to provide personalized matching and recommendations.</p>
                    <h3 className="font-bold text-xl">2. Communication:</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> Your communication data is used to facilitate interactions between users and to enhance the overall user experience.</p>
                    <h3 className="font-bold text-xl">3. Improving Our Services:</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">We analyze usage patterns and feedback to continuously improve and optimize our services.</p>
                    <h3 className="font-bold text-xl">4. Security:</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">We may collect information about the device you use to access our app, including device type, operating system, and unique device identifiers.</p>
                    <h3 className="font-bold text-xl">5. Location Information:</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">We employ industry-standard security measures to protect your data and ensure a secure environment.</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:border-gray-500 dark:bg-gray-700 ">
                    <h1 className="text-4xlmd:text-4xl text-2xl font-bold">Your Choices</h1>
                    <h3 className="font-bold text-xl">1. Profile Settings:</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">You have control over the information you share on your profile, and you can update or modify it at any time.</p>
                    <h3 className="font-bold text-xl">2. Location Services:</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">You can choose to enable or disable location services on your device.</p>
                    <h3 className="font-bold text-xl">3. Communication Preferences:</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">Manage your communication preferences and notifications through the app settings.</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:border-gray-500 dark:bg-gray-700 ">
                    <h1 className="text-4xlmd:text-4xl text-2xl font-bold">Your Security Matters</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3 font-semibold">We take the security of your information seriously. While we implement measures to protect your data, no method of transmission over the internet is entirely secure. Please take steps to protect your personal information and report any security concerns to us.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Policy