import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"
import { useTranslation } from 'react-i18next';

const Faq = () => {

    const{t}=useTranslation()

    
    return (
        <div className="overflow-hidden">
            <Navbar />
            <div className="bg-white w-screen min-h-screen flex flex-col darmd:text-4xl text-2xl dark:bg-gray-900 dark:text-white pt-32 px-7 gap-3 justify-center">
                <h1 className="text-5xl self-center font-bold mb-7">{t('frequendasked')} (FAQ)</h1>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:border-gray-500 dark:bg-gray-700 ">
                    <h1 className="md:text-4xl text-2xl font-bold">{t('generalquestions')}</h1>
                    <h3 className="font-bold text-xl">{t('whatistinder')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('tinderis')}</p>
                    <h3 className="font-bold text-xl">{t('q2')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> <span className="font-semibold dark:text-gray-200 text-gray-800">{t('smartmatch')} </span>{t('advancedalgos')} </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> <span className="font-semibold dark:text-gray-200 text-gray-800">{t('profiles')}</span>{t('userscreate')} </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> <span className="font-semibold dark:text-gray-200 text-gray-800">{t('communication1')}  </span> {t('connect')}</p>
                    <h3 className="font-bold text-xl">{t('q3')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('offers')}</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-gray-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">{t('securityprivacy')}</h1>
                    <h3 className="font-bold text-xl">{t('q4')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> <span className="font-semibold dark:text-gray-200 text-gray-800">{t('verification')}</span> {t('weencourageusersafety')} </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> <span className="font-semibold dark:text-gray-200 text-gray-800">{t('moderation')} </span> {t('ourteam')}</p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> <span className="font-semibold dark:text-gray-200 text-gray-800">{t('report')}</span> {t('userscanreport')}</p>
                    <h3 className="font-bold text-xl">{t('q5')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('absolutely')}</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-gray-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">{t('profileand')}</h1>
                    <h3 className="font-bold text-xl">{t('q6')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> <span className="font-semibold dark:text-gray-200 text-gray-800">{t('signup')} </span> {t('simply')}  </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3"> <span className="font-semibold dark:text-gray-200 text-gray-800">{t('Profile Details:')}</span>{t('adddetail')}</p>
                    <h3 className="font-bold text-xl">{t('q7')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('whileucan')}</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-gray-700 dark:border-gray-500">
                    <h1 className="md:text-4xl text-2xl font-bold">{t('whatsets')}</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300"> <span className="font-semibold dark:text-gray-200 text-gray-800">{t('smartmatchingalgos')}</span> {t('weutilize1')} </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300"> <span className="font-semibold dark:text-gray-200 text-gray-800">{t('safeand')}</span> {t('ursafetyis')}</p>
                    <p className="text-lg text-gray-700 dark:text-gray-300"> <span className="font-semibold dark:text-gray-200 text-gray-800">{t('Real')} </span>  {t('thisis')}</p>
                </div>
                <div className="flex flex-col gap-4 px-7 py-4 bg-gray-200 rounded-lg border-2 border-gray-400 dark:bg-gray-700 dark:border-gray-500 mb-8">
                    <h1 className="md:text-4xl text-2xl font-bold">{t('membership')}</h1>
                    <h3 className="font-bold text-xl">{t('q8')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('tinderismodern')}</p>
                    <h3 className="font-bold text-xl">{t('q9')}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 px-3">{t('upgrade')}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Faq