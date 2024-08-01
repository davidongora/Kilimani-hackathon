import React from "react";
// import HeaderStats from "components/Headers/HeaderStats.js";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";


export default function Dashboard() {
  return (
    <>
  {/* <HeaderStats /> */}
      <div className="flex flex-wrap mb-48">
        <div className="w-full xl:w-8/12 mb-48 xl:mb-0 px-4  mt-48 ">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4  mt-48">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mb-24 mt-4">
        <div className="w-full xl:w-8/12 xl:mb-0 px-4  mb-48">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4 mb-48">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
