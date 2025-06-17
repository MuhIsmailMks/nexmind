import React from "react";
import { arrow } from "../../assets"; 
 
export const ButtonArrow = () => {
  return (
    <div className="image flex-center w-3 md:w-3 aspect-square flex-col overflow-hidden relative">
      <img src={arrow} alt="arrow" className="w-full absolute icon1" />
      <img src={arrow} alt="arrow" className="w-full icon2 absolute" />
    </div>
  );
};
  
