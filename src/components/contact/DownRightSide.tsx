import React from "react";
import {
  HiLocationMarker,
  HiPhone,
  HiOutlineMail,
  HiOutlineClock,
} from "react-icons/hi";

const DownRightSide: React.FC = () => {
  return (
    <div className="lg:w-1/3 lg:pl-8 p-4 mt-4">
      <h3 className="text-lg md:text-xl tracking-wider !leading-tight">
        Dirección
      </h3>
      <div className="h-[6px] bg-primary-main w-[30px] mt-4 mb-6" />
      <div>
        <ul className="text-text-main/80">
          <li className="flex items-center py-2">
            <HiLocationMarker className="w-[25px] h-[25px] mr-2" />
            San Gabriel - Carchi
          </li>
          <li className="flex items-center py-2">
            <HiOutlineClock className="w-[25px] h-[25px] mr-2" />
            Servicio 24/7
          </li>
          <li className="flex items-center py-2">
            <HiOutlineMail className="w-[25px] h-[25px] mr-2" />
            leonardo@gmail.com
          </li>
          <li className="flex items-center py-2">
            <HiPhone className="w-[25px] h-[22px] mr-2" />
            (+593) 999 999 999
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DownRightSide;
