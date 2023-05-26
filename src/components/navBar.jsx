import React, { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { SlLogin } from "react-icons/sl";
import { TbSearch } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [onHoverSearch, setHoverSearch] = useState(false);
  const [onHoverCart, setHoverCart] = useState(false);
  const [onHoverLogin, setHoverLogin] = useState(false);

  return (
    <div>
      <div className="flex justify-center bg-black fixed left-0 top-0 w-screen">
        <div className="w-screen max-w-[1440px] left-0 top-0 h-20 bg-black flex justify-end items-center px-7 gap-x-4">
          <input type="text" className="hidden" />
          <TbSearch
            size={40}
            className="hidden md:block cursor-pointer"
            onMouseEnter={() => {
              setHoverSearch(!onHoverSearch);
            }}
            onMouseLeave={() => {
              setHoverSearch(!onHoverSearch);
            }}
            color={onHoverSearch ? "rgb(254 240 138)" : "white"}
          />
          <TiShoppingCart
            size={40}
            className="hidden md:block cursor-pointer"
            onMouseEnter={() => {
              setHoverCart(!onHoverCart);
            }}
            onMouseLeave={() => {
              setHoverCart(!onHoverCart);
            }}
            color={onHoverCart ? "rgb(254 240 138)" : "white"}
          />
          <SlLogin
            size={40}
            className="hidden md:block cursor-pointer"
            onMouseEnter={() => {
              setHoverLogin(!onHoverLogin);
            }}
            onMouseLeave={() => {
              setHoverLogin(!onHoverLogin);
            }}
            color={onHoverLogin ? "rgb(254 240 138)" : "white"}
          />
          <GiHamburgerMenu color="white" size={40} className="md:hidden cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
