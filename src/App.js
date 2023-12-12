import { useState, useEffect } from "react"
import Landing from "./Components/Landing"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About,Contact, Faq, Policy, Security  } from "./Components/Pages";
import MainTinder from "./Components/Pages/Main/Main"
import Profile from "./Components/Pages/Profile";
import { CookieProvider } from "./Context/CookieContext";
import { ConversationProvider } from "./Context/ConversationContext"
import Loader from "./Components/ui/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/Contact",
    element: <Contact />
  },
  {
    path: "/faq",
    element: <Faq />
  },
  {
    path: "/Policy",
    element: <Policy />
  },
  {
    path: "/Security",
    element: <Security />
  },
  {
    path: "/MainTinder",
    element: <MainTinder />
  },
  {
    path: "profile",
    element: <Profile />
  }
])


function App() {

  const [theme, setTheme] = useState(null)
  
  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }, [])

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("light")
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="">
      <CookieProvider>
        <ConversationProvider>
          <RouterProvider router={router} />
        </ConversationProvider>
      </CookieProvider>
    </div>
  )
}

export default App
