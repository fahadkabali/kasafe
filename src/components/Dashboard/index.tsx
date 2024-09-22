"use client";
import React from "react";
import ChartThree from "@/components/Dashboard/Charts/ChartThree";
import ChartTwo from "@/components/Dashboard/Charts/ChartTwo";
import MapOne from "@/components/Dashboard/Maps/MapOne";
import DataStatsOne from "@/components/Dashboard/DataStats/DataStatsOne";
import ChartOne from "@/components/Dashboard/Charts/ChartOne";

const ECommerce: React.FC = () => {
  return (
    <>
      <DataStatsOne />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
      </div>
    </>
  );
};

export default ECommerce;
