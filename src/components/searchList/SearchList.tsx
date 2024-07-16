import React, { useState } from "react";
import { cardData } from "@/mock/cardDetail";
import Image from "next/image";
import SearchLogo from "@/assets/search 1.svg";

interface SearchListProps {
  updateFilteredData: (filteredData: typeof cardData) => void;
}

const SearchList: React.FC<SearchListProps> = ({ updateFilteredData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    filterData(event.target.value);
  };

  const filterData = (query: string) => {
    const filtered = cardData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    updateFilteredData(filtered);
  };

  return (
    <div className="ml-[8px] lg:relative lg:mr-[16px]">
      <div className="flex justify-center items-center w-[38px] h-[38px] lg:h-[28px] lg:rounded-[10px] rounded bg-[#F9FBFF] lg:absolute inset-y-0 left-0">
        <Image
          width={20}
          height={20}
          alt="search"
          src={SearchLogo}
          className=""
        />
      </div>
      <input
        type="text"
        className="hidden pl-10 pr-4 py-2 rounded lg:rounded-[10px] focus:outline-none focus:none lg:flex lg:bg-[#F9FBFF] text-[12px] placeholder-[12px]"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchList;
