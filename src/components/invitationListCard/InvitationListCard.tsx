import React, { useState } from "react";
import InvitationListCardBody from "../inivitationListCardBody/InvitationListCardBody";

interface InvitationListCardProps {
  cardData: {
    id: number;
    title: string;
    desc: string;
    date: string;
    time: string;
    from: string;
    number: string;
    name: string;
  }[];
}

const InvitationListCard: React.FC<InvitationListCardProps> = ({
  cardData,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showMore, setShowMore] = useState<Record<number, boolean>>({});

  const cardsPerPage = 3;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const startIndex = indexOfFirstCard + 1;
  const endIndex =
    indexOfLastCard > cardData.length ? cardData.length : indexOfLastCard;

  const toggleShowMore = (id: number) => {
    setShowMore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      {currentCards.map((data) => (
        <InvitationListCardBody
          key={data.id}
          data={data}
          showMore={showMore[data.id] || false}
          toggleShowMore={() => toggleShowMore(data.id)}
        />
      ))}
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center mt-4 lg:mb-[51px] lg:ml-[16px]">
        <p className="text-sm text-[#B5B7C0] mb-2 lg:mb-0">
          Showing data {startIndex} to {endIndex} of {cardData.length} entries
        </p>
        <div className="flex justify-center items-center">
          <button
            onClick={() => paginate(currentPage - 1)}
            className={`px-[9px] py-[6px] mx-[12px] rounded text-xs ${
              currentPage === 1
                ? "bg-[#F5F5F5] border border-[#EEE] text-black cursor-not-allowed"
                : "bg-[#F5F5F5] border border-[#EEE] text-black"
            }`}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {[...Array(totalPages).keys()].map((number) => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`px-[9px] py-[6px] mx-[12px] rounded text-xs ${
                currentPage === number + 1
                  ? "bg-[#00AC4F] text-[#fff]"
                  : "bg-[#F5F5F5] border border-[#EEE] text-black"
              }`}
            >
              {number + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            className={`px-[9px] py-[6px] mx-[12px] rounded text-xs ${
              currentPage === totalPages
                ? "bg-[#F5F5F5] border border-[#EEE] text-black cursor-not-allowed"
                : "bg-[#F5F5F5] border border-[#EEE] text-black"
            }`}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvitationListCard;
