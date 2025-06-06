/** @format */

import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import nodeImage from "../assets/node.png";
import cpp from "../assets/cpp.png";
import reduxImage from "../assets/redux.png";
import powerApps from "../assets/powerapps.png";
import powerAutomate from "../assets/powerautomate.png";
import azure from "../assets/azure.png";
import csharp from "../assets/csharp.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: powerApps,
      title: "Power Apps",
      style: "shadow-pink-500",
    },
    {
      id: 2,
      src: powerAutomate,
      title: "Power Automate",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: azure,
      title: "Azure Portal",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: cpp,
      title: "C++",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-600",
    },
    {
      id: 10,
      src: nodeImage,
      title: "NodeJs",
      style: "shadow-lime-500",
    },
    {
      id: 11,
      src: reduxImage,
      title: "Redux",
      style: "shadow-purple-600",
    },
    {
      id: 12,
      src: csharp,
      title: "C#",
      style: "shadow-purple-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full px-4 pt-28 pb-10 sm:py-28 text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
