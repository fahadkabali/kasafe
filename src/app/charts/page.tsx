import BasicChart from "@/components/Dashboard/Charts/BasicChart";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Chart Page | Admin Dashboard",
  description: "This is Kasafe Basic Chart page for Admin Dashboard",
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Charts" />
      <BasicChart />
    </DefaultLayout>
  );
};

export default BasicChartPage;
