import React from "react";

interface InvitationListCardBodyProps {
  data: {
    id: number;
    title: string;
    desc: string;
    date: string;
    time: string;
    from: string;
    number: string;
    name: string;
  };
  showMore: boolean;
  toggleShowMore: (id: number) => void;
}

const InvitationListCardBody: React.FC<InvitationListCardBodyProps> = ({
  data,
  showMore,
  toggleShowMore,
}) => {
  return (
    <div className="border border-solid border-[#D7D7D7] p-5 rounded-lg mx-[12px] mb-[24px]">
      <div className=" flex justify-between text-[#B5B7C0] text-xs mb-[16px]">
        <p className="">Invitation Status</p>
        <span className="lg:hidden">5h ago</span>
      </div>
      <div>
        <div className="flex lg:relative">
          <h2 className="text-base text-[#292D32] leading-[200%] tracking-[-0.16px] font-[500] ">
            {data.title}
          </h2>
          <div className="hidden lg:flex flex-col  mt-[62px] lg:mt-0 lg:absolute right-0 top-[-20px]">
            <button className="px-[43px] py-[13px]  rounded border-[0.5px] border-[#EF233C] text-[#EF233C]">
              Reject
            </button>
            <button className="px-[43px] py-[13px] mt-2 rounded bg-[#00AC4F] text-[#fff]">
              Accept
            </button>
          </div>
        </div>
        <div className="flex  ">
          <p className="lg:pr-[250px] text-sm text-justify text-[#747474] leading-[200%] tracking-[-0.14px] font-[400] ">
            {data.desc}
          </p>
        </div>

        <div
          className={` ${showMore ? "block" : "hidden"} lg:block lg:mt-[23px]`}
        >
          <div className="lg:flex lg:items-center">
            <div className="flex justify-between mt-[32px]  lg:mt-0">
              <div className="flex flex-col ">
                <p className="text-[#B5B7C0] text-xs">Date:</p>
                <span className="text-[#292D32] text-xs pt-[8px]">
                  {data.date}
                </span>
              </div>
              <div className="flex flex-col lg:ml-[52px]">
                <p className="text-[#B5B7C0] text-xs">Time:</p>
                <span className="text-[#292D32] text-xs pt-[8px]">
                  {data.time}
                </span>
              </div>
            </div>
            <div className="flex flex-col mt-[23px] lg:mt-0 lg:ml-[52px]">
              <p className="text-[#B5B7C0] text-xs">From:</p>
              <span className="text-[#292D32] text-xs pt-[8px]">
                {data.from}
              </span>
            </div>
            <div className="flex justify-between mt-[23px] lg:mt-0">
              <div className="flex flex-col lg:ml-[52px]">
                <p className="text-[#B5B7C0] text-xs">Number:</p>
                <span className="text-[#292D32] text-xs pt-[8px]">
                  {data.number}
                </span>
              </div>
              <div className="flex flex-col lg:ml-[52px]">
                <p className="text-[#B5B7C0] text-xs">Name:</p>
                <span className="text-[#292D32] text-xs pt-[8px]">
                  {data.name}
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-[62px] lg:hidden">
              <button className="px-[43px] py-[13px] rounded border-[0.5px] border-[#EF233C] text-[#EF233C]">
                Reject
              </button>
              <button className="px-[43px] py-[13px] rounded bg-[#00AC4F] text-[#fff]">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => toggleShowMore(data.id)}
        className="flex lg:hidden mt-4 text-[#747474] text-xs border border-[#D7D7D7] rounded w-[286px] h-[42px] justify-center items-center"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default InvitationListCardBody;
