import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ProfileBox from "@/components/SettingBoxes";

export const metadata: Metadata = {
  title: "Settings Page | Admin",
  description: "This is Kasafe Settings page for Admin Dashboard",
};

const Settings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb pageName="Settings" />

        <ProfileBox />
      </div>
    </DefaultLayout>
  );
};

export default Settings;
