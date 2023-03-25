import React, { useEffect } from "react";
import Toogle from "./Toogle";

const Navbar = () => {
  function UseColorMode() {
    const [colorMode, setColorMode] = ("colorMode", "light");

    useEffect(() => {
      const className = "dark";
      const bodyClasses = window.document.body.classList;

      colorMode === "dark"
        ? bodyClasses.add(className)
        : bodyClasses.remove(className);
    }, [colorMode]);
    return [colorMode, setColorMode];
  }

  const logoImg = ".././Logo.svg";
  const DarkThemeIcon = ".././DarkThemeIcon.svg";
  return (
    <div>
      <nav className="flex flex-row justify-end items-center h-24 mr-10">
        <Toogle/>
        <img src={logoImg} alt="pokeapi-logo" className="w-84 h-16" />
      </nav>
    </div>
  );
};

export default Navbar;
