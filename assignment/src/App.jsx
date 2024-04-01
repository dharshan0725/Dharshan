import React from "react";
import Image from "./assets/river.jpeg";
import LasVegas from "./assets/lasvegas.jpeg";
import NewJersey from "./assets/newjersey.jpeg";
import Dicks from "./assets/dicks.jpeg";
import River from "./assets/riverlogo.jpeg";
import Aviator from "./assets/aviatorlogo.jpeg";
import { Button } from "flowbite-react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      {/* Container */}
      <div
        className={`bg-${darkMode ? "gray-900" : "white"} text-${
          darkMode ? "white" : "black"
        } min-h-screen transition-colors duration-500`}
      >
        {/* header */}
        <div className="flex justify-center ">
          {/* sports */}
          <div className="text-lg font-semibold mt-2 mb-2 underline">SPORTS</div>
          <button
            onClick={toggleDarkMode}
            className="fixed top-2 right-2 px-2 py-1 bg-gray-300 text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-gray-400"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* main */}
        <div className="flex justify-center gap-4">
          <div className="border-2 border-white shadow-md p-2 w-48 h-full">
            <img className="h-60" src={Image} alt="image" />
            <div className="text-base font-semibold m-0 sm:m-1">
              Sacramento River Cats
            </div>
            <div className="border-2 p-2 flex gap-3 bg-slate-200 font-medium">
              <table>
                <td className="text-xs text-slate-500">Total Events</td>
                <tr>48 Events</tr>
              </table>
              <table>
                <td className="text-xs text-slate-500">Sports</td>
                <tr>Baseball</tr>
              </table>
            </div>
          </div>
          {/* second */}
          <div className="border-2 border-white shadow-md p-2 w-48 h-full">
            <img className="h-60" src={LasVegas} alt="image" />
            <div className="text-base font-semibold m-0 sm:m-1">
              Las Vegas Aviators{" "}
            </div>
            <div className="border-2 p-2 flex gap-3 bg-slate-200 font-medium">
              <table>
                <td className="text-xs text-slate-500">Total Events</td>
                <tr>28 Events</tr>
              </table>
              <table>
                <td className="text-xs text-slate-500">Sports</td>
                <tr>Baseball</tr>
              </table>
            </div>
          </div>
          {/* third */}
          <div className="border-2 border-white shadow-md p-2 w-48 h-full">
            <img className="h-60" src={NewJersey} alt="image" />
            <div className="text-base font-semibold m-0 sm:m-1">
              New Jersey Devils
            </div>
            <div className="border-2 p-2 flex justify-between bg-slate-200 font-medium">
              <table>
                <td className="text-xs text-slate-500">Total Events</td>
                <tr>15 Events</tr>
              </table>
              <table>
                <td className="text-xs text-slate-500">Sports</td>
                <tr>Ice Hockey</tr>
              </table>
            </div>
          </div>
          {/* fourth */}
          <div className="border-2 border-white shadow-md p-2 w-48 h-full">
            <img className="h-60" src={LasVegas} alt="image" />
            <div className="text-base font-semibold m-0 sm:m-1">
              Las Vegas Aviators
            </div>
            <div className="border-2 p-2 flex gap-3 bg-slate-200 font-medium">
              <table>
                <td className="text-xs text-slate-500">Total Events</td>
                <tr>28 Events</tr>
              </table>
              <table>
                <td className="text-xs text-slate-500">Sports</td>
                <tr>Baseball</tr>
              </table>
            </div>
          </div>
          {/* fifth */}
          <div className="border-2 border-white shadow-md p-2 w-48 h-full">
            <img className="h-40" src={Dicks} alt="image" />
            <div className="text-base font-semibold m-0 sm:m-1">
              Advertisement Title
            </div>
            <div className="text-xs">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elt, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-center m-5">
          <Button className="rounded-sm" gradientDuoTone="purpleToBlue">
            See More
          </Button>
        </div>
        {/* Second main */}
        {/* main */}
        <div className="border-2 p-8 border-white mb-4 m-auto max-w-6xl">
          {/* heading */}
          <div className="text-4xl font-bold flex justify-center dark:text-black">
            Collection Spotlight
          </div>
          {/* para */}
          <div className="m-3 font-semibold">
            <p>
              Discover the Extrodinary Moments with our Spolight Collection
              metatickets-exclusive access to premium events for an
              unforgettable experience.Grab yours Today !{" "}
            </p>
          </div>
          {/* Aorrow button */}
          <div className="flex justify-between">
            <Button outline pill>
              <HiOutlineChevronLeft className="h-4 w-4" />
            </Button>

            <Button outline pill>
              <HiOutlineChevronRight className="h-4 w-4" />
            </Button>
          </div>
          {/* Boxes */}
          <div className="flex justify-center gap-4">
            <div className="border-2 border-white shadow-md p-2 w-48 h-full">
              <img className="h-60 mb-2 " src={Aviator} alt="image" />
              {/* for dotted line */}
              <div className="border-t-2 border-dashed mb-2"></div>

              <div className="text-base font-semibold m-0 sm:mx-4">
                Las Vegas Aviators{" "}
              </div>
              {/* date */}
              <div className="text-sm font-sans font-semibold  text-gray-600">
                <p className="mx-4 mb-1">Oct 15 | SUN | 4:30PM</p>
                <p className="mx-3">Las Vegas Ballpark, Las Vegas, Nevada</p>
              </div>
              {/* button */}
              <div>
                <button className="bg-black text-slate-50 font-medium w-full mt-2 p-1 rounded-sm">
                  Take Flight Collection
                </button>
              </div>
            </div>
            {/* second */}
            <div className="border-2 border-white shadow-md p-2 w-48 h-full">
              <img className="h-60 mb-2 " src={River} alt="image" />
              {/* for dotted line */}
              <div className="border-t-2 border-dashed mb-2"></div>

              <div className="text-base font-semibold m-0 sm:m-1">
                Sacramento River Cats{" "}
              </div>
              {/* date */}
              <div className="text-sm font-sans font-semibold  text-gray-600">
                <p className="mx-4 mb-1">Oct 15 | SUN | 4:30PM</p>
                <p className="mx-3">
                  Sutter Health Park, Sacramento,California
                </p>
              </div>
              {/* button */}
              <div>
                <button className="bg-black text-slate-50 font-medium w-full mt-2 p-1 rounded-sm">
                  Orange Collection
                </button>
              </div>
            </div>
            {/* third */}
            <div className="border-2 border-white shadow-md p-2 w-48 h-full">
              <img className="h-60 mb-2 " src={Aviator} alt="image" />
              {/* for dotted line */}
              <div className="border-t-2 border-dashed mb-2"></div>

              <div className="text-base font-semibold m-0 sm:mx-4">
                Las Vegas Aviators{" "}
              </div>
              {/* date */}
              <div className="text-sm font-sans font-semibold  text-gray-600">
                <p className="mx-4 mb-1">Oct 15 | SUN | 4:30PM</p>
                <p className="mx-3">Las Vegas Ballpark, Las Vegas, Nevada</p>
              </div>
              {/* button */}
              <div>
                <button className="bg-black text-slate-50 font-medium w-full mt-2 p-1 rounded-sm">
                  Take Flight Collection
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </>
  );
}
