import React from "react";
import { useTranslation } from 'react-i18next';


const Testim = () => {

    const{t}=useTranslation()

    return(
        <>
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t('welcometotinder')}</h2>
                        <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">{t('stepinto')}</p>
                    </div> 
                    <div class="grid mb-8 lg:mb-12 lg:grid-cols-2 mr-4">
                        <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700 lg:rounded-tr-none rounded-tr-xl rounded-tl-xl">
                            <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{t('emily')}</h3>
                                <p class="mt-4">{t('testi1')}</p>
                            </blockquote>
                        </figure>
                        <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700 lg:rounded-tr-xl lg:rounded-b-none rounded-b-xl">
                            <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{t('soumaya')}</h3>
                                <p class="mt-4">{t('testi2')}</p>
                            </blockquote>
                        </figure>
                        <figure class="lg:flex hidden flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700 rounded-bl-xl">
                            <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{t('olivia')}</h3>
                                <p class="mt-4">{t('testi3')}</p>
                            </blockquote>
                        </figure>
                        <figure class="lg:flex hidden flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700 rounded-br-xl">
                            <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{t('natalie')}</h3>
                                <p class="mt-4">{t('testi4')}</p>
                            </blockquote>
                        </figure>
                    </div>
                </div>
        </>
    )
}

export default Testim