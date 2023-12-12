import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"

const Faq = () => {
    
    return (
        <div className="overflow-hidden">
            <Navbar />
            <div className="bg-white w-screen min-h-screen flex flex-col darmd:text-4xl text-2xl dark:bg-gray-900 dark:text-white pt-32 px-7 gap-3 justify-center">
                <h1 className="text-5xl self-center font-bold mb-7">Frequently Asked Questions (FAQ)</h1>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:border-gray-500 dark:bg-zinc-700 ">
                    <h1 className="md:text-4xl text-2xl font-bold">General Questions</h1>
                    <h3 className="font-bold text-xl">1. What is Tinder?</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">Tinder is a modern dating platform designed to connect individuals looking for meaningful relationships. Our platform focuses on smart matching algorithms, real connections, and a safe, secure environment.</p>
                    <h3 className="font-bold text-xl">2. How does Tinder work?</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> <span className="font-semibold dark:text-gray-200 text-gray-800">Smart Matching: </span> Our advanced algorithms consider various factors like interests, values, and lifestyle to match you with compatible individuals. </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> <span className="font-semibold dark:text-gray-200 text-gray-800">Profiles: </span> Users create detailed profiles, showcasing their personality and preferences.</p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> <span className="font-semibold dark:text-gray-200 text-gray-800">Communication: </span> Connect through messages and engage in meaningful conversations.</p>
                    <h3 className="font-bold text-xl">3. Is Tinder free to use?</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">Tinder offers both free and premium memberships. While basic features are available for free, premium memberships provide additional benefits, such as enhanced matching and messaging options.</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-zinc-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">Security and Privacy</h1>
                    <h3 className="font-bold text-xl">4. How do you ensure the safety of users?</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> <span className="font-semibold dark:text-gray-200 text-gray-800">Verification: </span> We encourage users to verify their profiles for added authenticity. </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> <span className="font-semibold dark:text-gray-200 text-gray-800">Moderation: </span> Our team actively monitors and moderates the platform to ensure a safe environment.</p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> <span className="font-semibold dark:text-gray-200 text-gray-800">Reporting: </span> Users can report any suspicious activity, and our team will promptly investigate and take necessary actions.</p>
                    <h3 className="font-bold text-xl">5. Is my personal information secure?</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">Absolutely. Tinder takes privacy seriously. We use industry-standard security measures to protect your data, and we never share your personal information without your consent.</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-zinc-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">Profile and Settings</h1>
                    <h3 className="font-bold text-xl">4. How do I create a profile on Tinder?</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> <span className="font-semibold dark:text-gray-200 text-gray-800">Sign Up: </span> Simply create an account by providing basic information. </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> <span className="font-semibold dark:text-gray-200 text-gray-800">Profile Details: </span>Add details about yourself, interests, and what you're looking for in a match.</p>
                    <h3 className="font-bold text-xl">7. Can I remain anonymous on Tinder?</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">While you can choose to display only limited information on your profile, we encourage users to be open and genuine to facilitate meaningful connections.</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-zinc-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">What Sets Us Apart</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300"> <span className="font-semibold dark:text-gray-200 text-gray-800">Smart Matching Algorithms: </span> We utilize cutting-edge matching algorithms that go beyond just physical attraction. We consider factors such as interests, values, and lifestyle to connect you with like-minded individuals. </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300"> <span className="font-semibold dark:text-gray-200 text-gray-800">Safe and Secure Environment:</span> Your safety is our top priority. We employ advanced security measures to ensure a secure online environment. Our team is dedicated to monitoring and addressing any concerns, so you can focus on building connections with peace of mind.</p>
                    <p className="text-lg text-gray-700 dark:text-gray-300"> <span className="font-semibold dark:text-gray-200 text-gray-800">Real People, Real Connections: </span> This is a community of real people looking for real connections. Our emphasis is on authenticity and genuine interactions. Say goodbye to catfishing and fake profiles; here, you'll find individuals who are serious about finding meaningful relationships.</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-zinc-700 dark:border-gray-500 mb-8">
                    <h1 className="md:text-4xl text-2xl font-bold">Membership and Billing</h1>
                    <h3 className="font-bold text-xl">8. What are the benefits of a premium membership?</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">Tinder is a modern dating platform designed to connect individuals looking for meaningful relationships. Our platform focuses on smart matching algorithms, real connections, and a safe, secure environment.</p>
                    <h3 className="font-bold text-xl">9. How can I upgrade to a premium membership?</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">You can upgrade to a premium membership through the settings menu on your profile. Choose a plan that suits your preferences.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Faq