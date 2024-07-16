"use client";
import React, { useState, useEffect } from "react";
import InvitationListCard from "../invitationListCard/InvitationListCard";
import SortList from "../sortList/SortList";
import { cardData } from "@/mock/cardDetail";
import SearchList from "../searchList/SearchList";

const InvitationListBody: React.FC = () => {
  const [sortedData, setSortedData] = useState(cardData);
  const [filteredData, setFilteredData] = useState(cardData);
  const [isAscending, setIsAscending] = useState(false);

  useEffect(() => {
    sortData();
  }, []);

  const sortData = () => {
    const sorted = [...cardData].sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`).getTime();
      const dateB = new Date(`${b.date}T${b.time}`).getTime();
      return isAscending ? dateA - dateB : dateB - dateA;
    });
    setSortedData(sorted);
    setFilteredData(sorted);
    setIsAscending(!isAscending);
  };

  const handleFilteredDataUpdate = (filteredData: typeof cardData) => {
    setFilteredData(filteredData);
  };

  return (
    <div className="mt-[35px] mx-[16px] bg-white shadow-custom-drop lg:flex lg:flex-col lg:mx-[71px]">
      <div className="flex items-center justify-between ">
        <div className="p-[25px]">
          <p className="text-[16px] font-[600]">All invite list</p>
          <span className="text-[#00AC4F] text-[12px]">
            Active invites list
          </span>
        </div>
        <div className="flex items-center mx-[16px] lg:flex lg:flex-row-reverse">
          <SortList sortData={sortData} />
          <SearchList updateFilteredData={handleFilteredDataUpdate} />
        </div>
      </div>
      <InvitationListCard cardData={filteredData} />
    </div>
  );
};

export default InvitationListBody;
