import React,{ useEffect, useContext } from "react"
import { useTranslation } from "react-i18next"
import classNames from 'classnames'
import i18next from 'i18next'
import { FaGlobe } from "react-icons/fa6";
import US from 'country-flag-icons/react/3x2/US'
import FR from 'country-flag-icons/react/3x2/FR'
import SA from 'country-flag-icons/react/3x2/SA'
import {CookieContext} from "../../Context/CookieContext"

function Language() {
  const {cookies} = useContext(CookieContext)

  const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'ar',
      name: 'العربية',
      country_code: 'sa',
    },
  ]

  const currentLanguageCode = cookies['i18next'] || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()


  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const CountryFlag = ({ countryCode, opacity }) => {
    const CountryComponent = getCountryComponent(countryCode);
  
    return (
      <CountryComponent className={`w-8 h-6`} style={{ opacity }} />
    );
  };
  
  const getCountryComponent = (countryCode) => {
    switch (countryCode) {
      case 'us':
        return US;
      case 'fr':
        return FR;
      case 'sa':
        return SA;
      default:
        return US;
    }
  };
    return (
      
     <div className="container mx-auto p-4 -ml-3 translate-y-[3.5px]">
      <div className="flex items-center">
        <div className="relative group">
          <button
            className="focus:outline-none flex"
            onClick={() => {
              document.getElementById('languageDropdown').classList.toggle('hidden');
            }}
          >
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24 " strokeWidth={1.5} stroke="#e9d5ff" className="w-8 h-8 transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                        </svg>
                        <h1 className=" text-purple-100">{t('language')}</h1>

          </button>
          <ul
            id="languageDropdown"
            className=" absolute right-0 hidden mt-4 space-y-2  -translate-y-4 bg-grey-500 border border-pink-900 rounded-md shadow-md w-28"
          >
          
            {languages.map(({ code, name, country_code }) => (
              <li key={country_code} >
                <button
                  className={classNames(
                    'block px-4 py-2 w-full text-left',
                    {
                      'text-gray-500': currentLanguageCode === code,
                      'text-gray-900': currentLanguageCode !== code,
                    },
                    'focus:outline-none'
                  )}
                  onClick={() => {
                    i18next.changeLanguage(code);
                  }}
                >
                  <CountryFlag
                      countryCode={country_code}
                      opacity={currentLanguageCode === code ? 0.5 : 1}
                    />
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
 
  </div>
    );
}

export default Language;