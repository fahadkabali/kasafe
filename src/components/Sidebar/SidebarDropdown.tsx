import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItem {
  route: string;
  label: string;
  pro?: boolean;
}

interface SidebarDropdownProps {
  items: SidebarItem[];
}

const SidebarDropdown: React.FC<SidebarDropdownProps> = ({ items }) => {
  const pathname = usePathname();
  if (!items || items.length === 0) {
    return null;
  }
  return (
    <ul className="my-2 flex flex-col gap-1.5 pl-9">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.route}
            className={`relative flex rounded-[7px] px-3.5 py-2 font-medium duration-300 ease-in-out ${
              pathname === item.route
                ? "bg-primary/[.07] text-primary dark:bg-white/10 dark:text-white"
                : "text-dark-4 hover:bg-gray-2 hover:text-dark dark:text-gray-5 dark:hover:bg-white/10 dark:hover:text-white"
            }`}
          >
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarDropdown;