"use client";
import React, { useState } from "react";
import Image from "next/image";
import HamburgerMenu from "@/assets/Hamburger Menu.svg";
import Logo from "@/assets/Logo.svg";
import UserImage from "@/assets/Ellipse 8.svg";
import NavBar from "../navBar/NavBar";
import UserPopUp from "../userPopUp/UserPopUp";

const InvitationListHeading: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [showUserPopUp, setShowUserPopUp] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleUserImageClick = () => {
    setShowUserPopUp(!showUserPopUp);
  };

  const handleClose = () => {
    setOpen(false);
    setShowUserPopUp(false);
  };

  return (
    <div className="relative flex flex-col lg:flex-row lg:items-start">
      <NavBar open={open} onClose={handleClose} />
      <div className="lg:flex-1">
        <div className="lg:hidden py-[30px]">
          <div className="flex justify-between px-[30px]">
            <Image
              alt="hamburger menu"
              width={24}
              height={24}
              src={HamburgerMenu}
              className="cursor-pointer"
              onClick={handleClick}
            />
            <Image
              alt="Logo"
              width={98}
              height={22}
              src={Logo}
              className="cursor-pointer"
            />
            <div className="cursor-pointer" onClick={handleUserImageClick}>
              <Image alt="User Image" width={34} height={34} src={UserImage} />
            </div>
          </div>
        </div>
        {showUserPopUp && <UserPopUp onClose={handleUserImageClick} />}
      </div>
    </div>
  );
};

export default InvitationListHeading;
