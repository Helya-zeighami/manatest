import React from "react";
import Image from "next/image";

import ArrowDown from "@/assets/chevron-down 2.svg";
import Logo from "@/assets/Logo.svg";
import Notification from "@/assets/Bell Bing.svg";
import Message from "@/assets/Mailbox.svg";

const DesktopInvitationListHeading = () => {
  return (
    <div className="hidden lg:flex lg:justify-between mx-[71px] mt-[40px]">
      <div className="flex items-center ">
        <p className="text-2xl">Hello Hossein </p>
        <span className="ml-2">
          <Image alt="arrow down" width={24} height={24} src={ArrowDown} />
        </span>
      </div>
      <Image alt="arrow down" width={124} height={28} src={Logo} />
      <div className="flex ">
        <div className="w-[44px] h-[44px] bg-white p-[10px] mr-[8px] ">
          <Image alt="arrow down" width={24} height={24} src={Message} />
        </div>
        <div className="w-[44px] h-[44px] bg-white p-[10px] ">
          <Image alt="arrow down" width={24} height={24} src={Notification} />
        </div>
      </div>
    </div>
  );
};

export default DesktopInvitationListHeading;
