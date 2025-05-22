import { WiDaySunny } from "react-icons/wi"
import themeStore from "../store/themeStore"
import { CiDark } from "react-icons/ci"
import { useEffect } from "react";

const ThemeToggler = () => {
  const { theme, toggleTheme } = themeStore()
  
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);


  
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-white  dark:bg-black dark:text-white ">
      <div className="flex justify-center items-center flex-col bg-red-200  dark:bg-gray-600 dark:shadow-white shadow-black shadow-sm drop-shadow-md dark:drop-shadow-gray-800 drop-shadow-red-100  h-[50%] w-[30%] p-10 rounded-lg ">
      <button onClick={toggleTheme} className="bg-black dark:bg-white dark:text-black dark:border-gray-700 border-red-300 border-2  text-white p-2 rounded-[50%]">
        {theme=="dark"?<WiDaySunny/>:<CiDark/>}
      </button>
      <div className="font-display p-2 text-2xl">
        HELLO WORLD
      </div>
      <div>You are Currently Using <span className="font-bold capitalize">"{theme}"</span> theme</div>
      </div>
      
    </div>

  )
}

export default ThemeToggler