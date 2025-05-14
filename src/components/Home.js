/** @format */

import React from "react";
import HeroImage from "../assets/hero.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="bg-gradient-to-b from-black  to-gray-800 w-full h-screen text-white ">
      <div className="max-w-screen-lg mx-auto px-4 py-28 sm:py-20 flex flex-col items-center justify-center  sm:h-full sm:flex-row">
        <div className="flex flex-col justify-center items-center mb-8 sm:items-start h-full">
          <h1 className="text-white text-4xl sm:text-7xl font-bold sm:mt-28">
            I'm a Power Platform Developer
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
                      I’m a motivated and detail-oriented Power Platform Developer with hands-on experience building low-code business solutions using PowerApps, Power Automate, Power Pages, and Dataverse. I also work with Azure services, integrating them into scalable enterprise apps for process automation and data management. 
{" "}
          </p>

          <div>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="group w-fit px-6 py-3 flex items-center justify-center bg-gradient-to-r from-amber-300 to-yellow-500 rounded-md cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-2/3 md:w-[30rem] mx-auto">
          <img
            src={HeroImage}
            className="rounded-2xl w-full sm:mt-24"
            alt="heroimg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
