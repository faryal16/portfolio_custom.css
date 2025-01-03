"use client";

import { useRef } from "react";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";


const Header = () => {
  const navRef = useRef<HTMLDivElement | null>(null);

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };
  return (
    <header className="header">
      <a href="#" className="logo">
        CodeWithFairy
        <FaLeaf />
      </a>
      <nav className="navbar" ref={navRef}>
        <a href="/" className="active">
          Home
        </a>
        <a href="/skills">My Skills</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
        <button className="nav_btn nav_btn-close" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav_btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
