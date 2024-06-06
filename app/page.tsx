"use client"

import Image from "next/image"

import RadarChart from "../components/RadarChart"
import BarGraph from "../components/BarGraph"
import LineChart from "../components/LineChart"
import ActivityCard from "../components/ActivityCard"
import TotalActivityCard from "../components/TotalActivityCard"

import Metrics_Logo from "../public/metrics_logo.png"
import { useState } from "react"


function page() {

  const [activeChart, setActiveChart] = useState("barChart");

  return (
    <div className="container">

      <div className="px-[20px]">
        <div className="flex gap-[20px] bg-white p-[15px] mt-[20px] shadow-md  rounded-[15px]">
          <div>
            <Image src={Metrics_Logo} alt="Metrics_logo" width={40} height={40} />
          </div>
          <div>
            <h2 className="font-bold">DEVELOPER DASHBOARD</h2>
            <p className="text-[12px] text-[#6b7177]">Developer Performance Metrics</p>
          </div>
        </div>

        <h2 className="my-[15px] font-medium text-[16px]">Total Activities Done</h2>

        {/* <div className="flex gap-[20px] justify-between"> */}

        <TotalActivityCard />
        {/* </div> */}


        <div className="bg-  my-[30px] rounded-[10px] ">

          <h2 className="font-medium text-[16px]">Indivisual Developer Activities</h2>

          <div className="flex justify-center gap-[100px]">
            <div className="bg-white shadow-md p-[20px] flex justify-between gap-[20px]">
              <label className="font-medium">
                Select Developer:
              </label>
              <select className="outline-none px-[10px] ">
                <option>Rishi</option>
                <option>Ritik</option>
                <option>Avijit</option>
                <option>Arvind</option>
              </select>

            </div>

            <div className="bg-white shadow-md p-[20px] flex justify-between gap-[20px]">
              <label className="font-medium">
                Select Date:
              </label>
              <select className="outline-none px-[10px]">
                <option >All Dates</option>
                <option >12-05-2024</option>
                <option >13-05-2024</option>
                <option >14-05-2024</option>
              </select>

            </div>

          </div>

          <div className="my-[50px] flex gap-[20px]">

            <div className="bg-white rounded-[10px] w-[45%] shadow-md p-[15px]">
              <h3 className="font-semibold ">Rishi Gupta</h3>

              <div className="flex justify-between text-[20px] text-gray-700 font-semibold my-[10px]">
                <h2 className="">Total Active Days</h2>
                <span>7</span>
              </div>

              <div className="bg-gray-300 w-full h-[15px] rounded-full">
                <div className="w-1/2 bg-[#1e90ff] h-[15px] rounded-full"></div>
              </div>

              <div className="my-[20px] flex gap-[20px] text-[#6b7177]">
                <span
                  className={`cursor-pointer ${activeChart === 'barChart' ? 'text-black' : 'text-[#6b7177]'}`}
                  onClick={() => setActiveChart("barChart")}
                >
                  Bar Graph
                </span>
                <span
                  className={`cursor-pointer ${activeChart === 'radarChart' ? 'text-black' : 'text-[#6b7177]'}`}
                  onClick={() => setActiveChart("radarChart")}
                >
                  Radar Chart
                </span>
              </div>


              <div className="w-full h-[350px]" >
                {activeChart == "barChart" ? (
                  <BarGraph />
                ) : (
                  <RadarChart />
                )}


              </div>


            </div>

            {/* <div className="w-[60%] grid grid-cols-3 gap-[20px]"> */}

            <ActivityCard />

            {/* </div> */}
          </div>

          <div className="bg-white rounded-[10px] py-[20px]">
            <div className="w-full h-[350px]" >
              <LineChart />
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default page