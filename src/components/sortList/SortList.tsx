"use client";
import React, { useState } from "react";

interface SortListProps {
  sortData: (order: SortOrder) => void;
}

type SortOrder = "newestToOldest" | "oldestToNewest";

const SortList: React.FC<SortListProps> = ({ sortData }) => {
  const [selectedOption, setSelectedOption] =
    useState<SortOrder>("newestToOldest");

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value as SortOrder);
    sortData(event.target.value as SortOrder);
  };

  return (
    <div className="flex items-center p-3 lg:p-[10px] bg-[#F9FBFF] rounded lg:rounded-[10px] text-[10px] font-[600]">
      <span className="text-[#7E7E7E]"> sort By:</span>
      <select
        value={selectedOption}
        onChange={handleSortChange}
        className="text-[#3D3C42] outline-none bg-[#F9FBFF]"
      >
        <option value="newestToOldest">Newest</option>
        <option value="oldestToNewest">Oldest</option>
      </select>
    </div>
  );
};

export default SortList;
