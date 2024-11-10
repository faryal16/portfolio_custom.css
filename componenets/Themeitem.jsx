"use client";

import Image from "next/image";

const Themeitem = ({ color, img, changeColor }) => {
  return (
    img && (
    <Image
      src={img}
      alt={`${color} theme`}
      className="theme_img"
      onClick={() => {
        changeColor(color)
      }}
    />)
  );
};

export default Themeitem;
