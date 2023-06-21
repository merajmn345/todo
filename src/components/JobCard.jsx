import React from "react";

function JobCard({
  handleNextClick,
  handleTitle,
  title,
  handleCompanyName,
  companyName,
  handleIndustry,
  industry,
  handleLocation,
  location,
  handleRemote,
  remote,
  error,
}) {
  return (
    <div className=" bg-[#F5F5F5] box-border drop-shadow-md flex items-center justify-center h-screen">
      <div className="  h-[564px] w-[577px] bg-white rounded-[10px] shadow-lg p-6">
        <form className="px-[32px] py-[34px]">
          <div className="flex justify-between gap-[30px]">
            <h1 className="text-[#182021] text-[20px] leading-[28px] font-poppins">
              Create a job
            </h1>
            <h1 className="text-[#182021] text-[20px] leading-[28px] font-poppins">
              Step 1
            </h1>
          </div>
          <div className="flex flex-col gap-[10px] pt-[24px]">
            <h1 className="text-[14px] font-medium font-poppins leading-5">
              Job title<span className="text-red-500">&#42;</span>
            </h1>

            <input
              className=" px-[12px] py-[8px] font-poppins text-[14px] text-[#7A7A7A] font-normal border-[1px] rounded-[5px] leading-5 border-[#E6E6E6]"
              type="text"
              name="title"
              placeholder="ex. UX UI Designer"
              required
              value={title}
              onChange={handleTitle}
            />
            {/* {error && !title && (
              <p className=" bg-[#E6E6E6] text-[#D86161] p-3 rounded-md">
                Field is required
              </p>
            )} */}
          </div>
          <div className="flex flex-col gap-[10px] pt-[24px]">
            <h1 className="text-[14px] font-medium font-poppins leading-5">
              Company name<span className="text-red-500">&#42;</span>
            </h1>
            <input
              className="px-[12px] py-[8px] font-poppins font-normal text-[#7A7A7A] text-[14px] leading-5 border-[1px] rounded-[5px] border-[#E6E6E6] "
              type="text"
              name="companyName"
              placeholder="ex. Google"
              required
              value={companyName}
              onChange={handleCompanyName}
            />
          </div>
          <div className="flex flex-col gap-[10px] pt-[24px]">
            <h1 className="text-[14px] font-medium font-poppins leading-5">
              Industry<span className="text-red-500">&#42;</span>
            </h1>
            <input
              className="px-[12px] py-[8px] font-poppins font-normal text-[#7A7A7A] text-[14px] leading-5 border-[1px] rounded-[5px] border-[#E6E6E6] "
              type="text"
              name="industry"
              placeholder="ex. Information Technology"
              required
              value={industry}
              onChange={handleIndustry}
            />
          </div>
          <div className="flex justify-between gap-[10px] pt-[24px]">
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[14px] font-medium font-poppins leading-5">
                Location
              </h1>
              <input
                className="px-[12px] py-[8px] font-poppins font-normal text-[#7A7A7A] text-[14px] leading-5 border-[1px] rounded-[5px] border-[#E6E6E6] "
                type="text"
                name="location"
                placeholder="ex. Chennai"
                value={location}
                onChange={handleLocation}
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[14px] font-medium font-poppins leading-5">
                Remote type
              </h1>
              <input
                className="px-[12px] py-[8px] font-poppins font-normal text-[#7A7A7A] text-[14px] leading-5 border-[1px] rounded-[5px] border-[#E6E6E6] "
                type="text"
                name=""
                placeholder="ex. In-office"
                value={remote}
                onChange={handleRemote}
              />
            </div>
          </div>

          <button
            className="h-[40px] w-[68px]  rounded-[6px] ms-[399px] mt-[32px] bg-[#1597E4]  font-medium text-[#FFFFFF] text-[16px] leading-[150%]"
            onClick={handleNextClick}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default JobCard;
