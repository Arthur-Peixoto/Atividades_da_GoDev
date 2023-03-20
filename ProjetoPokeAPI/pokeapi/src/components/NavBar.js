import React from "react";

const Navbar = () => {
    const logoImg = "../Logo.svg";
  return (
    <div>
      <nav>
        <img
          src = {logoImg}
          alt="pokeapi-logo"
          className="navbar-img"
        />
      </nav>
    </div>
  );
};

export default Navbar;
