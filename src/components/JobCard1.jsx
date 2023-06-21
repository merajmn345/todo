import React from "react";

function JobCard1({
  handleMinExp,
  minExperience,
  handleMaxExp,
  maxExperience,
  handleMinSal,
  minSalary,
  handleMaxSal,
  maxSalary,
  handleEmployee,
  employee,
  handleRadio,
  selectedOption,
  handleSubmit,
}) {
  return (
    <div className=" bg-[#F5F5F5] box-border drop-shadow-md flex items-center justify-center h-screen">
      <div className="  h-[564px] w-[577px] bg-white rounded-[10px] shadow-lg p-6">
        <form className="px-[32px] py-[34px]" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-[30px]">
            <h1 className="text-[#182021] text-[20px] leading-[28px] font-poppins">
              Create a job
            </h1>
            <h1 className="text-[#182021] text-[20px] leading-[28px] font-poppins">
              Step 2
            </h1>
          </div>

          <div className="flex flex-col gap-[10px] pt-[24px]">
            <h1 className="text-[14px] font-medium font-poppins leading-5">
              Experience
            </h1>
            <div className="flex justify-between gap-[10px]">
              <input
                className="px-[12px] py-[8px] font-poppins font-normal text-[#7A7A7A] text-[14px] leading-5 border-[1px] rounded-[5px] border-[#E6E6E6] "
                type="text"
                name="minExperience"
                placeholder="Minimum"
                pattern="[0-9]*"
                value={minExperience}
                onChange={handleMinExp}
              />
              <input
                className="px-[12px] py-[8px] font-poppins font-normal text-[#7A7A7A] text-[14px] leading-5 border-[1px] rounded-[5px] border-[#E6E6E6] "
                type="text"
                name="maxExperience"
                placeholder="Maximum"
                pattern="[0-9]*"
                value={maxExperience}
                onChange={handleMaxExp}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[10px] pt-[24px]">
            <h1 className="text-[14px] font-medium font-poppins leading-5">
              Salary
            </h1>
            <div className="flex justify-between gap-[10px]">
              <input
                className="px-[12px] py-[8px] font-poppins font-normal text-[#7A7A7A] text-[14px] leading-5 border-[1px] rounded-[5px] border-[#E6E6E6] "
                type="text"
                name="minSalary"
                placeholder="Minimum"
                pattern="[0-9]*"
                value={minSalary}
                onChange={handleMinSal}
              />
              <input
                className="px-[12px] py-[8px] font-poppins font-normal text-[#7A7A7A] text-[14px] leading-5 border-[1px] rounded-[5px] border-[#E6E6E6] "
                type="text"
                name="maxSalary"
                placeholder="Maximum"
                pattern="[0-9]*"
                value={maxSalary}
                onChange={handleMaxSal}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[10px] pt-[24px]">
            <h1 className="text-[14px] font-medium font-poppins leading-5">
              Total employee
            </h1>
            <input
              className="px-[12px] py-[8px] font-poppins font-normal text-[#7A7A7A] text-[14px] leading-5 border-[1px] rounded-[5px] border-[#E6E6E6] "
              type="text"
              name="employee"
              placeholder="ex. 100"
              pattern="[0-9]*"
              value={employee}
              onChange={handleEmployee}
            />
          </div>
          <div
            className="flex flex-col gap-[10px] pt-[24px] absolute "
            value={selectedOption}
            onChange={handleRadio}
          >
            <h1 className="text-[14px] font-medium font-poppins leading-5">
              Apply type
            </h1>
            <div className="flex">
              <p className="">
                <input
                  type="radio"
                  name="apply"
                  value="quick"
                  className="border-2  border-[#D8D8D8]"
                />
                <label
                  className="pl-[4px] font-poppins font-normal text-[14px] leading-[20px] text-[#7A7A7A] "
                  htmlFor="quick"
                >
                  Quick apply
                </label>
              </p>
              <p className="pl-[16px]">
                <input
                  type="radio"
                  name="apply"
                  value="external"
                  className="border-2 border-[#D8D8D8]"
                />
                <label
                  className="pl-[4px] font-poppins font-normal text-[14px] leading-[20px] text-[#7A7A7A] "
                  htmlFor="quick"
                >
                  External apply
                </label>
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="h-[40px] w-[72px]  rounded-[6px] ms-[425px] mt-[92px] bg-[#1597E4]  font-medium text-[#FFFFFF] text-[16px] leading-[150%]"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default JobCard1;
