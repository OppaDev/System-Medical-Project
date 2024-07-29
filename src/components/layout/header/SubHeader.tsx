import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
} from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiOutlineClock } from "react-icons/hi";

interface SocialLink {
  icon: React.ReactNode;
  url: string;
}

const SubHeader: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <FaFacebookF className="w-[16px] h-[16px]" />,
      url: "https://www.facebook.com",
    },
  ];

  return (
    <div className="hidden lg:flex py-0 px-0 lg:px-4 lg:py-3 text-text-main/75 dark:text-text-main/60 opacity-0 pointer-events-none bg-background-paper lg:pointer-events-auto lg:border-b-2 border-text-main/10 lg:opacity-100 items-center justify-center">
      <div className="max-w-[1140px] flex flex-grow justify-between items-center px-4">
        <div className="flex items-center">
          <div className="border-r-2 border-text-main/20 text-xs font-medium flex items-center h-full mr-5 pr-5">
            <HiLocationMarker className="w-[20px] h-[20px] mr-1.5 text-main-main" />
            San Gabriel-Carchi
          </div>

          <div className="capitalize border-r-2 border-text-main/20 text-xs font-medium flex items-center h-full mr-5 pr-5">
            <HiPhone className="w-[20px] h-[20px] mr-1.5 text-main-main" />
            +593 99 999 9999
          </div>

          <div className="capitalize text-xs font-medium flex items-center h-full">
            <HiOutlineClock className="w-[20px] h-[20px] mr-1.5 text-main-main" />
            Lunes - Viernes : 8.00 AM - 08.00 PM | Sábado : 8.00 AM - 06.00 PM | Domingo : Emergencias
          </div>
        </div>

        <div className="flex justify-center items-center">
          {socialLinks.map(({ icon, url }, index) => (
            <Link key={index} href={url}>
              <div className="ml-2 p-1 cursor-pointer hover:text-main-main">
                {icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
