import React, { useRef, useEffect } from "react";
import Image from "next/image";
import UserIMage from "@/assets/Ellipse 8.svg";
import Pen from "@/assets/Pen New Square.svg";
import DashboardIcon from "@/assets/3d-square.svg";
import ProductIcon from "@/assets/3d-square.svg";
import InvitationIcon from "@/assets/3d-square.svg";
import IncomeIcon from "@/assets/3d-square.svg";
import Link from "next/link";
import Arrow from "@/assets/chevron-right 2.svg";
import SignOut from "@/assets/Login 3.svg";

interface UserPopUpProps {
  onClose: () => void;
}

const popUpList = [
  {
    id: 1,
    name: "notification",
    img: DashboardIcon,
  },
  {
    id: 2,
    name: "inbox",
    img: ProductIcon,
  },
  {
    id: 3,
    name: "Accepted invitation",
    img: InvitationIcon,
  },
  {
    id: 4,
    name: "Setting",
    img: IncomeIcon,
  },
];

const UserPopUp: React.FC<UserPopUpProps> = ({ onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div
        ref={popupRef}
        className="relative bg-white w-[286px] h-[418px] rounded-lg z-10"
      >
        <div className="absolute top-[-7px] right-4 border-t-16 border-r-16 bg-white w-[15px] h-[15px] rotate-45" />

        <div className="flex justify-center m-[26px] pb-[26px] border-b-[1px]">
          <Image src={UserIMage} width={34} height={34} alt="logo" />
          <div className="pl-[12px]">
            <p className="text-[14px]">Hossein</p>
            <span className="text-[#757575] text-[12px]">UI/Ux Designer</span>
          </div>
          <Image
            src={Pen}
            width={24}
            height={24}
            alt=""
            className="ml-[59px] cursor-pointer"
          />
        </div>
        <div>
          {popUpList.map((list, index) => (
            <div
              key={index}
              className="flex items-center justify-between m-[27px]"
            >
              <div className="flex items-center">
                <Image src={list.img} alt="" width={24} height={24} />
                <Link href="/" className="text-[#9197B3] ml-[14px] text-[14px]">
                  {list.name}
                </Link>
              </div>
              <Image
                src={Arrow}
                alt=""
                width={16}
                height={16}
                className="text-[#9197B3] brightness-[70%]"
              />
            </div>
          ))}
          <div className="flex justify-between border border-[#EF233C] p-[16px] rounded-[10px] m-[26px]">
            <p className="text-[#EF233C] text-[14px]">Sign Out</p>
            <Image src={SignOut} alt="" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPopUp;
