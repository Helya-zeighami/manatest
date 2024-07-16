import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import Close from "@/assets/close.svg";
import DashboardIcon from "@/assets/key-square.svg";
import ProductIcon from "@/assets/3d-square.svg";
import InvitationIcon from "@/assets/3d-square.svg";
import IncomeIcon from "@/assets/wallet-money2.svg";
import PromoteIcon from "@/assets/discount-shape1.svg";
import HelpIcon from "@/assets/message-question 1.svg";
import Link from "next/link";
import Arrow from "@/assets/chevron-right 2.svg";
import UserImage from "@/assets/Ellipse 8.svg";
import Dashboard from "@/assets/Group 31.svg";

interface NavBarProps {
  open: boolean;
  onClose: () => void;
}

const menuList = [
  { id: 1, name: "Dashboard", img: DashboardIcon },
  { id: 2, name: "Product", img: ProductIcon },
  { id: 3, name: "Invitation", img: InvitationIcon },
  { id: 4, name: "Income", img: IncomeIcon },
  { id: 5, name: "Promote", img: PromoteIcon },
  { id: 6, name: "Help", img: HelpIcon },
];

const NavBar: React.FC<NavBarProps> = ({ open, onClose }) => {
  return (
    <div
      className={`fixed lg:static top-0 left-0 w-full h-full bg-white lg:w-64 lg:shadow-lg transform ${
        open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } transition-transform duration-300 ease-in-out overflow-scroll lg:overflow-auto`}
    >
      <div className="flex-col z-20">
        <div className="flex justify-between p-[40px] lg:hidden">
          <Image src={Logo} width={124} height={28} alt="logo" />
          <Image
            src={Close}
            width={14}
            height={14}
            alt="close button"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="p-[40px] hidden lg:flex lg:justify-center">
          <Image src={Logo} width={124} height={28} alt="logo" />
        </div>
        <div className="hidden lg:flex justify-center lg:mt-[130px] lg:mb-[63px]">
          <Image src={Dashboard} width={217} height={39} alt="Dashboard" />
        </div>
        <div>
          {menuList.map((list, index) => (
            <div
              key={index}
              className="flex items-center m-[40px] lg:mx-[16px] p-[13px]  justify-between rounded-lg transition duration-300 ease-in-out hover:bg-[#00AC4F]"
            >
              <div className="flex items-center">
                <Image
                  className="mr-[14px] transition-transform hover:brightness-100"
                  src={list.img}
                  alt=""
                  width={24}
                  height={24}
                />
                <Link href="/" className="text-[#9197B3]">
                  {list.name}
                </Link>
              </div>
              <Image
                className="text-[#9197B3] brightness-[50%]"
                src={Arrow}
                alt=""
                width={16}
                height={16}
              />
            </div>
          ))}
          <div className="lg:absolute bottom-[40px] left-[19px] flex justify-center mt-[150px] mb-[82px] lg:m-0">
            <Image src={UserImage} width={34} height={34} alt="user image" />
            <div className="pl-[12px]">
              <p className="text-[14px]">Hossein</p>
              <span className="text-[#757575] text-[12px]">UI/UX Designer</span>
            </div>
            <Image
              className="brightness-[50%] text-[#9197B3] ml-[63px]"
              src={Arrow}
              alt=""
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
