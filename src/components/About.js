/** @format */

import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-gray-800  to-black w-full text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center px-4 w-full py-16 sm:py-28">
        <div className="pb-16 mt-20 sm:mt-0 md:mt-20">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            About
          </h2>
        </div>
        <p className="text-xl">
          I’m a motivated and detail-oriented Power Platform Developer with hands-on experience building low-code business solutions using PowerApps, Power Automate, Power Pages, and Dataverse. I also work with Azure services, integrating them into scalable enterprise apps for process automation and data management. 
        </p>
        <br />
        <p className="text-xl">
          With a strong background in C++, JavaScript, HTML, CSS, Tailwind CSS, and Node.js, I bring both traditional coding skills and low-code agility to the table. I’ve developed solutions like barcode-based inventory systems, approval workflows, and capacity planning tools integrated with D365 and Azure Functions.
        </p>
        <br />
        <p className="text-xl">
          I’ve also solved over 200 problems on LeetCode, sharpening my problem-solving mindset and logical thinking. I enjoy collaborating with teams, learning new tech, and delivering impactful, user-friendly solutions that align with business needs.


        </p>
      </div>
    </div>
  );
};

export default About;
