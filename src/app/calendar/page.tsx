import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CalendarBox from "@/components/CalenderBox";

export const metadata: Metadata = {
  title: "Calender Page | Admin Dashboard ",
  description:
    "This is Kasafe Calender page for Admin Dashboard",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Calendar" />

        <CalendarBox />
      </div>
    </DefaultLayout>
  );
};

export default CalendarPage;
