"use client"

import { themes } from "@/app/data";
import Themeitem from "./Themeitem";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "@/componenets/themes.css"
import { useEffect, useState } from "react";


// const getStorageColor = () => {
//     let color = 'hsl(19, 96%, 52%)';
//     if (localStorage.getItem('color')) {
//         color = localStorage.getItem('color');
//     }
//     return color;
// };

// const getStorageTheme = () => {
//     return localStorage.getItem('theme') || "light-theme";
// };

const Theme = () => {
    const [showSwitcher , setShowSwitcher] = useState(false);
    // const [color , setColor] = useState(getStorageColor());
    // const [theme , setTheme] = useState(getStorageTheme())
    const [color , setColor] = useState('hsl(339, 71%, 38% )');
    const [theme , setTheme] = useState('light-theme')

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedColor = localStorage.getItem('color') || 'hsl(339, 71%, 38% )';
            const storedTheme = localStorage.getItem('theme') || 'light-theme';
            setColor(storedColor);
            setTheme(storedTheme);
        }
    }, []);

    const changeColor = (color ) => {
        setColor(color);
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'));
    };



    useEffect(() => {
        if (typeof window !== "undefined") {
            document.documentElement.style.setProperty('--main-color', color);
            localStorage.setItem('color', color);
        }
    }, [color]);
    
    useEffect(() => {
        if (typeof window !== "undefined") {
            document.documentElement.className = theme;
            localStorage.setItem('theme', theme);
        }
    }, [theme]);
  return (
    <div>
        <div className={`${showSwitcher ? 'show_switcher' : ''} style_switcher`}>
            <div className="style_switcher-toggler" onClick={() => setShowSwitcher(!showSwitcher)}>
                <FaCog />
            </div>
            <div className="theme_toggler dark-theme" onClick={toggleTheme}>
                {theme === 'dark-theme' ? <BsSun/> : <BsMoon />}
            </div>
            <h4 className="style_switcher-title">Style Switcher</h4>
            <div className="style_switcher-items">
                {themes.map((theme, index) => {
                    return <Themeitem  key={index} {...theme} changeColor={changeColor} />
                })}
            </div>

            <div className="style_switcher-close" onClick={() => setShowSwitcher(!showSwitcher)}>&times;</div>
        </div>
    </div>
  )
}

export default Theme;