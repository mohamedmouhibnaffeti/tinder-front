import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"
import { useTranslation } from 'react-i18next';

const Security = () => {
    const{t}=useTranslation()

    return (
        <div className="overflow-hidden">
            <Navbar />
            <div className="bg-white w-screen min-h-screen flex flex-col dark:bg-gray-900 dark:text-white pt-32 px-7 gap-3">
                <h1 className="text-5xl self-center font-bold mb-7">{t('security')}</h1>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:border-gray-500 dark:bg-gray-700 ">
                    <h1 className="md:text-4xl text-2xl font-bold">{t('encryption')}</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">{t('all data')} </p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-gray-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">{t('securestorage')}</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">{t('weemploy')}</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-gray-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">{t('auth')}</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">{t('accesstouser')}</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-gray-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">{t('userauth')}</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">{t('weutilize')}</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-gray-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">{t('incident')}</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">{t('intheevent')}</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-gray-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">{t('reporting')}</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">{t('weencourage')} [security@email.com].{t('weappreciate')}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Security