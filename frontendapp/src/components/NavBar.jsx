import { IoBagAdd } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom"; // Import Link
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-[#bf9774]/20 backdrop-blur-sm lg:px-20 px-6 items-center justify-between flex z-6 p-4 md:p-6 fixed">
      <h1 className="font-hfont text-2xl md:text-4xl">SHOPIFY</h1>
      <button className="lg:hidden text-2xl ml-auto" onClick={toggleMenu}>
        {menuOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>
      <ul
        className={`lg:flex ${
          menuOpen ? "flex" : "hidden"
        } flex-col lg:flex-row justify-center items-center me-auto gap-3 md:gap-5 uppercase font-semibold lg:px-20 bg-white lg:bg-transparent w-full lg:w-auto absolute lg:static top-16 right-0 lg:top-auto lg:right-auto p-4 lg:p-0 rounded-lg`}
      >
        <li className="hover:bg-white hover:text-black rounded-lg px-3 py-1 md:px-4 md:py-2">
          <Link to="/">everything</Link>
        </li>
        <li className="hover:bg-white hover:text-black rounded-lg px-3 py-1 md:px-4 md:py-2">
          <Link to="/women">women</Link>
        </li>
        <li className="hover:bg-white hover:text-black rounded-lg px-3 py-1 md:px-4 md:py-2">
          <Link to="/men">men</Link>
        </li>
        <li className="hover:bg-white hover:text-black rounded-lg px-3 py-1 md:px-4 md:py-2">
          <Link to="/accessories">accessories</Link>
        </li>
        <li className="hover:bg-white hover:text-black rounded-lg px-3 py-1 md:px-4 md:py-2 lg:hidden">
          <Link to="/about">about</Link>
        </li>
        <li className="hover:bg-white hover:text-black rounded-lg px-3 py-1 md:px-4 md:py-2 lg:hidden">
          <Link to="/contact">contact</Link>
        </li>
        <div className="flex lg:hidden gap-2 text-base justify-center items-center font-semibold mt-4">
          <h1 className="text-xs">₹0.00</h1>
          <IoBagAdd className="text-lg" />
          <IoMdPerson className="text-lg" />
        </div>
      </ul>
      <div className="hidden lg:flex gap-4 md:gap-10 items-center">
        <ul className="hidden lg:flex gap-3 md:gap-5 uppercase font-semibold">
          <li className="hover:bg-white hover:text-black rounded-lg px-3 py-1 md:px-4 md:py-2">
            <Link to="/about">about</Link>
          </li>
          <li className="hover:bg-white hover:text-black rounded-lg px-3 py-1 md:px-4 md:py-2">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <div className="hidden lg:flex gap-2 md:gap-3 text-sm md:text-lg justify-center items-center font-semibold text-[20px] md:text-[25px]">
          <h1 className="text-xs md:text-base">₹0.00</h1>
          <Link to="/cart">
            <IoBagAdd className="text-base md:text-lg" />
          </Link>
          <Link
          to={'/login'}
            aria-label="Login"
            className="py-1 px-4 text-sm font-medium text-black bg-white hover:bg-black hover:text-white rounded focus:outline-none"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
