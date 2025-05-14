/** @format */

import React from "react";
import AnalogClock from "../assets/portfolio/AnalogClock.png";
import CryspyBytes from "../assets/portfolio/CryspyBytes.png";
import MealSearcher from "../assets/portfolio/MealSearcher.png";
import SongVilla from "../assets/portfolio/SongVilla.png";
import TicTacToe from "../assets/portfolio/TicTacToe.png";
import ToDoList from "../assets/portfolio/ToDoList.png";
import SwissBeauty from "../assets/portfolio/SwissBeauty.jpg";
import KBPLMDM from "../assets/portfolio/KBPLMDM.png";
import ConsolidatedPlan from "../assets/portfolio/ConsolidatedPlan.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: CryspyBytes,
      code: "https://github.com/Yash1250/crispy-bytes",
      live: "https://crispy-bytes.netlify.app/",
      title: "Cryspy Bytes",
    },
    {
      id: 2,
      src: KBPLMDM,
      code: "https://drive.google.com/drive/folders/1GwzgwJqPHsTsxgR9JvHJtgIG-Ww74J1Y?usp=drive_link",
      live: "https://drive.google.com/drive/folders/1GwzgwJqPHsTsxgR9JvHJtgIG-Ww74J1Y?usp=drive_link",
      title: "KBPL - Mater Data Management (MDM)",
    },
    {
      id: 1,
      src: SwissBeauty,
      code: "https://drive.google.com/drive/folders/1AAOpXLV7FpZ_SvaMEzSXa2DMwqJI1nE4",
      live: "https://drive.google.com/drive/folders/1AAOpXLV7FpZ_SvaMEzSXa2DMwqJI1nE4",
      title: "Swiss Beauty - Warehouse Management App",
    },
    {
     id: 2,
      src: ConsolidatedPlan,
      code: "https://github.com/Yash1250/meal-searcher",
      live: "https://mealsearcher-yash.netlify.app/",
      title: "SLMG Beverages - Consolidated Planning",
    },
    {
      id: 2,
      src: MealSearcher,
      code: "https://github.com/Yash1250/meal-searcher",
      live: "https://mealsearcher-yash.netlify.app/",
      title: "Meal Searcher",
    },
    {
      id: 6,
      src: AnalogClock,
      code: "https://github.com/Yash1250/analog-clock",
      live: "https://analog-digital-clock-by-yash.netlify.app/",
      title: "Analog Clock",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black  to-gray-800 w-full text-white pt-20">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center px-4 py-10 w-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Portfolio
          </h2>
          <h3 className="py-6">Check out some of my projects</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, code, live, title }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                <img
                  src={src}
                  alt="port"
                  className="rounded-md hover:scale-105 duration-300"
                />
                <div className="flex flex-col items-center">
                  <h2 className="mx-auto mt-6 font-bold text-xl p-4 text-center">{title}</h2>
                  <div className="flex justify-center items-center">
                    <a href={live} target="_blank" rel="noreferrer">
                      <button className="w-1/2 px-6 py-2 m-2 hover:scale-105 duration-300">
                        Live
                      </button>
                    </a>
                    <a href={code} target="_blank" rel="noreferrer">
                      {" "}
                      <button className="w-1/2 px-6 py-2 m-2 hover:scale-105 duration-300">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
