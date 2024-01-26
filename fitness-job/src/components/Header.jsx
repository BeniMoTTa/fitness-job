import { useState } from "react";

import close from "../assets/close.svg";

import menu from "../assets/menu.svg";

import { navBts } from "../mock/index.js";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h2 className="text-cover3 text-[25px] underline-offset-1">
        <span className="poor text-[30px] font-extrabold text-cover">John</span>
        Fit
      </h2>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navBts.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-merriweather font-normal cursor-pointer hover:text-cover2 text-[18px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navBts.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navBts.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navBts.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
