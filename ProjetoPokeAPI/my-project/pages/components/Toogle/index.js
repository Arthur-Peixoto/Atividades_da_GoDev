import { ThemeContext } from "@/pages/contexts/ThemeContext";
import React, { useContext } from "react";



function Toogle(){
    const {theme, setTheme} = useContext(ThemeContext);
    const DarkThemeIcon = "../././DarkThemeIcon.svg"
    const LightThemeIcon = ".././LightThemeIcon.svg"
    return(
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-center bg-btn shadow-md slate-400 rounded-md p-1.5 mr-10"
        >{theme === "dark" ? <img src={LightThemeIcon} alt="light theme icon" /> : <img src={DarkThemeIcon} alt="dark theme icon" /> }</button>
    )
}

export default Toogle;