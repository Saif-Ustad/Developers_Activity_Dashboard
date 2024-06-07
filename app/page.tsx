"use client"

import Image from "next/image"

import RadarChart from "../components/RadarChart"
import BarGraph from "../components/BarGraph"
// import LineChart from "../components/LineChart"
import ActivityCard from "../components/ActivityCard"
import TotalActivityCard from "../components/TotalActivityCard"

import Metrics_Logo from "../public/metrics_logo.png"
import { useEffect, useState } from "react"

import axios from 'axios';


function page() {

  interface ActivityData {
    developer: string;
    chartData: Array<{ label: string; developer_count: number; fillColor: string }>;
    CombineData: Array<{ label: string; total_count: number; fillColor: string }>;
    ActiveDays: {
      TotalActiveDays: number;
      DeveloperActiveDays: number;
    };
  }


  //State Variables
  const [activeChart, setActiveChart] = useState("barChart");
  const [activityData, setActivityData] = useState<ActivityData | null>(null);
  const [activeDays, setActiveDays] = useState(0);
  const [totalActiveDays, setTotalActiveDays] = useState(1);
  const [developers, setDevelopers] = useState<string[]>([]);
  const [selectedDeveloper, setSelectedDeveloper] = useState<string>('All Developers');
  const [dates, setDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('All Dates');
  const [data, setData] = useState<any>(null); // Store the fetched data

  //fetch the api data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://developers-activity-dashboard-api.vercel.app/api/data');
        const fetchedData = response.data.data;

        const developerNames = ['All Developers', ...fetchedData.AuthorWorklog.rows.map((row: any) => row.name)];
        const dateSet: { [key: string]: boolean } = {};
        fetchedData.AuthorWorklog.rows.forEach((row: any) => {
          row.dayWiseActivity.forEach((day: any) => {
            dateSet[day.date] = true;
          });
        });

        const dateLabels = ['All Dates', ...Object.keys(dateSet)];

        setDates(dateLabels);


        setDevelopers(developerNames);
        setDates(dateLabels);


        // Set default selections
        setSelectedDeveloper('All Developers');
        setSelectedDate('All Dates');

        setData(fetchedData); // Store the fetched data

        // Initial dataset
        updateChartData(fetchedData, 'All Developers', 'All Dates');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);





  const updateChartData = (data: any, developer: string, date: string) => {
    let filteredRows = data.AuthorWorklog.rows;
    if (developer !== 'All Developers') {
      filteredRows = filteredRows.filter((row: any) => row.name === developer);
    }

    let dayWiseActivities = filteredRows.flatMap((row: any) => row.dayWiseActivity);
    if (date !== 'All Dates') {
      dayWiseActivities = dayWiseActivities.filter((day: any) => day.date === date);
    }

    const activitySummary: any = {};
    dayWiseActivities.forEach((day: any) => {
      day.items.children.forEach((activity: any) => {
        if (!activitySummary[activity.label]) {
          activitySummary[activity.label] = { count: 0, fillColor: activity.fillColor };
        }
        activitySummary[activity.label].count += parseInt(activity.count, 10);
      });
    });


    const datasetTemp: any = Object.keys(activitySummary).map(label => ({
      label: label,
      count: activitySummary[label].count,
      fillColor: activitySummary[label].fillColor
    }));


    let combineData = null;
    combineData = data.AuthorWorklog.rows.flatMap((row: any) =>
      row.dayWiseActivity.flatMap((day: any) => day.items.children)
    ).reduce((acc: any, activity: any) => {
      const label = activity.label;
      if (!acc[label]) {
        acc[label] = { count: 0, fillColor: activity.fillColor };
      }
      acc[label].count += parseInt(activity.count, 10);
      return acc;
    }, {});


    const datasetTemp2: any = Object.keys(activitySummary).map(label => ({
      label: label,
      developer_count: activitySummary[label].count,
      total_count: combineData[label].count,
      fillColor: activitySummary[label].fillColor
    }));


    // Calculate the total number of active days for the current developer
    const totalActiveDays = filteredRows[0].dayWiseActivity.length;
    setTotalActiveDays(totalActiveDays)

    // Calculate the developer's active days
    const developerActiveDays = developer !== 'All Developers'
      ? filteredRows.filter((row: any) => row.name === developer)[0].activeDays.days
      : totalActiveDays;

    setActiveDays(developerActiveDays)

    // console.log(filteredRows.filter((row: any) => row.name === developer)[0].activeDays.days)

    const dataset: any = {
      developer: developer,
      chartData: datasetTemp,
      CombineData: datasetTemp2,
      ActiveDays: {
        TotalActiveDays: totalActiveDays,
        DeveloperActiveDays: developerActiveDays,
      }
    };

    setActivityData(dataset);
  };


  const handleDeveloperChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDeveloper = event.target.value;
    setSelectedDeveloper(newDeveloper);
    setActiveDays(activeDays);
    if (data) {
      updateChartData(data, newDeveloper, selectedDate);
    }
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    if (data) {
      updateChartData(data, selectedDeveloper, newDate);
    }
  };


  return (
    <div className="container">
      <div className="px-[20px]">


        {/* Dashboard heading */}

        <div className="flex gap-[20px] bg-white p-[15px] mt-[20px] shadow-md  rounded-[15px]">
          <div>
            <Image src={Metrics_Logo} alt="Metrics_logo" width={40} height={40} />
          </div>

          <div>
            <h2 className="font-bold">DEVELOPER DASHBOARD</h2>
            <p className="text-[12px] text-[#6b7177]">Developer Performance Metrics</p>
          </div>
        </div>




        {/* total Activites cards */}

        <h2 className="my-[15px] font-medium text-[16px]">Total Activities Done</h2>

        <TotalActivityCard data={activityData} />


        {/* Invisual Developer Activities */}

        <div className=" my-[30px] rounded-[10px] ">

          <h2 className="my-[20px] font-medium text-[16px]">Indivisual Developer Activities</h2>


          {/* filters */}

          <div className="flex flex-col md:flex-row  justify-center gap-[40px] lg:gap-[100px]">
            <div className="bg-white shadow-md p-[20px] flex flex-col sm:flex-row justify-between gap-[10px] sm:gap-[20px]">
              <label className="font-medium">
                Select Developer:
              </label>
              <select className="outline-none sm:px-[10px] " value={selectedDeveloper} onChange={handleDeveloperChange}>
                {developers.map((developer) => (
                  <option key={developer} value={developer}>{developer}</option>
                ))}
              </select>
            </div>

            <div className="bg-white shadow-md p-[20px] flex flex-col sm:flex-row justify-between gap-[10px] sm:gap-[20px]">
              <label className="font-medium">
                Select Date:
              </label>
              <select className="outline-none sm:px-[10px]" value={selectedDate} onChange={handleDateChange}>
                {dates.map((date) => (
                  <option key={date} value={date}>{date}</option>
                ))}
              </select>
            </div>
          </div>


          
          <div className="my-[50px] flex flex-col lg:flex-row gap-[20px]">
            
            {/* left Part */}
            <div className="bg-white rounded-[10px] lg:w-[45%] shadow-md p-[15px]">
              <h3 className="font-semibold ">{selectedDeveloper}</h3>

              <div className="flex justify-between text-[20px] text-gray-700 font-semibold my-[10px]">
                <h2 className="">Total Active Days</h2>
                <span>{activityData?.ActiveDays.DeveloperActiveDays}</span>
              </div>

              <div className="bg-gray-300 w-full h-[15px] rounded-full">
                <div
                  className="bg-[#1e90ff] h-[15px] rounded-full"
                  style={{ width: `${(activeDays / totalActiveDays) * 100}%` }}
                ></div>
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
                  <BarGraph data={activityData} />
                ) : (
                  <RadarChart data={activityData} />
                )}
              </div>

            </div>

            {/* right part */}

            <ActivityCard data={activityData} />

          </div>

          {/* <div className="bg-white rounded-[10px] py-[20px]">
            <div className="w-full h-[350px]" >
              <LineChart data={activityData} />
            </div>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default page