import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"
import { useTranslation } from 'react-i18next';


const Community = () => {
    const{t}=useTranslation()

    return (
        <div className="overflow-hidden">
            <Navbar />
            <div className="bg-white w-screen min-h-screen flex flex-col dark:bg-gray-900 dark:text-white pt-32 px-7 gap-3 justify-center">
                <h1 className="text-5xl self-center font-bold mb-7">{t('privacypolicy')}</h1>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:border-gray-500 dark:bg-gray-700 ">
                    <h1 className="text-4xlmd:text-4xl text-2xl font-bold">{t('infowecollect')}</h1>
                    <h3 className="font-bold text-xl">1{t('profileinfo')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('whenucreate')}</p>
                    <h3 className="font-bold text-xl">{t('usagedata')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> {t('wecollect')}</p>
                    <h3 className="font-bold text-xl">{t('communicationdata')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('tofacilitate')}</p>
                    <h3 className="font-bold text-xl">{t('deviceinfo')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('wemaycollect')}</p>
                    <h3 className="font-bold text-xl">{t('locationinfo')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('with your consent')}</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:border-gray-500 dark:bg-gray-700 ">
                    <h1 className="text-4xlmd:text-4xl text-2xl font-bold">{t('how we use')}</h1>
                    <h3 className="font-bold text-xl">{t('matchingandrecomm')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('weuseurprofile')}</p>
                    <h3 className="font-bold text-xl">{t('communication')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> {t('urcommunication')}</p>
                    <h3 className="font-bold text-xl">{t('improving')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('weanalyze')}</p>
                    <h3 className="font-bold text-xl">{t('security')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('wemaycollect')}</p>
                    <h3 className="font-bold text-xl">{t('locationinfo')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('weemploy1')}</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:border-gray-500 dark:bg-gray-700 ">
                    <h1 className="text-4xlmd:text-4xl text-2xl font-bold">{t('urchoices')}</h1>
                    <h3 className="font-bold text-xl">{t('profilesetting')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('uhaveaccess')}</p>
                    <h3 className="font-bold text-xl">{t('locservice')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('ucanchoose')}</p>
                    <h3 className="font-bold text-xl">{t('commpreference')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('managecomm')}</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:border-gray-500 dark:bg-gray-700 ">
                    <h1 className="text-4xlmd:text-4xl text-2xl font-bold">{t('yoursecurity')}</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3 font-semibold">{t('wetake')}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Community