"use client";
import Link from "next/link";
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
        <Link href="/page" className="active">
          Home
        </Link>
        <Link href="/skills">My Skills</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
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
