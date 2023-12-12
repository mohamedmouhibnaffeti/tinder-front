import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"

const Security = () => {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <div className="bg-white w-screen min-h-screen flex flex-col dark:bg-gray-900 dark:text-white pt-32 px-7 gap-3">
                <h1 className="text-5xl self-center font-bold mb-7">Security</h1>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:border-gray-500 dark:bg-zinc-700 ">
                    <h1 className="md:text-4xl text-2xl font-bold">Encryption and Data Protection</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">All data transmitted between your device and our servers is encrypted using industry-standard protocols. This encryption helps protect your information from unauthorized access and ensures the confidentiality of your data.</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-zinc-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">Secure Storage Practices</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">We employ robust security measures to protect the data stored on our servers. This includes using secure databases, access controls, and regular security audits to identify and address potential vulnerabilities.</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-zinc-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">Authentication and Access Controls</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">Access to user data is strictly controlled and limited to authorized personnel with a need to access such information for operational purposes. Multi-factor authentication is implemented to add an extra layer of security to user accounts.</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-zinc-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">User Authentication</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">We utilize secure authentication mechanisms to verify the identity of users during the login process. This helps prevent unauthorized access and protects your account from potential breaches.</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-zinc-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">Incident Response</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">In the event of a security incident, we have established protocols for prompt identification, containment, eradication, recovery, and lessons learned. Our dedicated incident response team works to minimize the impact of any potential security threats.</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-zinc-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">Reporting Security Concerns</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">We encourage our users to report any security concerns or potential vulnerabilities they may encounter. If you believe you've discovered a security issue, please contact our security team at [security@email.com]. We appreciate and value the contribution of our user community in maintaining a secure platform.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Security