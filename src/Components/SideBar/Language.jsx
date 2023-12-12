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
      
     <div className="container mx-auto p-4 -ml-3 translate-y-[3.5px] transition delay-150  hover:-translate-y-1 hover:translate-x-[1px] hover:scale-110 duration-300">
      <div className="flex  items-center">
        <div className="relative group">
          <button
            className="focus:outline-none"
            onClick={() => {
              document.getElementById('languageDropdown').classList.toggle('hidden');
            }}
          >
            <FaGlobe size={"26"} color="#660099" />

          </button>
          <ul
            id="languageDropdown"
            className=" hidden absolute right-0 mt-2 space-y-2 bg-white border border-gray-300 rounded-md shadow-md translate-x-32 -translate-y-4 w-28"
          >
            <li>
              <span className="block px-4 py-2 text-gray-700">{t('language')}</span>
            </li>
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