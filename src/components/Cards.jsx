import React, { useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../Context/Context";
import { useContext } from "react";

function Cards({ handleEdit }) {
  const {
    setIsEditOpen,

    setId,
    jobData,
    setJobData,
  } = useContext(Context);

  useEffect(() => {
    const load = async () => {
      await axios
        .get("https://648ab5ad17f1536d65e98306.mockapi.io/tasks")
        .then((response) => {
          setJobData(response.data);
        });
      console.log(jobData);
    };
    load();
  }, []);

  const deleteItem = async (id) => {
    try {
      await axios.delete(
        `https://648ab5ad17f1536d65e98306.mockapi.io/tasks/${id}`
      );
      const jobDelete = jobData.filter((currEle) => currEle.id !== id);
      setJobData(jobDelete);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div className="grid sm:grid-col-1 justify-center items-center lg:grid-cols-2 gap-10 px-[20px]  min-h-[100vh] w-[100%]  ">
      {jobData.map((item, id) => {
        return (
          <div
            key={item.id}
            className="flex flex-row bg-[#FFFFFF] shadow-2xl w-[600px] h-[320px] rounded-[10px] border-[1px] border-[#DADEDF] px-[16px] py-[24px]"
          >
            <div className="">
              <img
                className="flex-none order-0 grow-0 w-[48px] h-[48px] rounded-[5px]"
                src="/Netflix-Symbol.png"
                alt="img"
              />
            </div>
            <div className="relative mx-[8px] ">
              <div className="flex justify-between  ">
                <div className="  ">
                  <h1 className="  w-[272px] h-[32px] font-poppins text-[24px] not-italic font-normal leading-8 text-[#212121]  ">
                    {item.title}
                  </h1>
                  <p className="flex-none order-1 grow-0 w-[301px] h-[24px] font-poppins not-italic font-normal text-base leading-6 text-[#212121] ">
                    {item.companyName} - {item.industry}
                  </p>
                  <p className="flex-none order-2 grow-0 w-[295px] h-[24px] font-poppins not-italic font-normal text-base leading-6 text-[#4D4D4D]  ">
                    {item.location}, India ({item.remote})
                  </p>
                </div>
                <div className="absolute top-0 -right-[170px]">
                  <button
                    className="px-[20px] py-[20px]"
                    onClick={() => deleteItem(item.id)}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "#1467f5" }}
                    />
                  </button>

                  <button
                    className=""
                    onClick={() => {
                      setIsEditOpen(true);
                      setId(item.id);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faPencilAlt}
                      style={{ color: "#1467f5" }}
                    />
                  </button>
                </div>
              </div>

              <div className="py-[24px] ">
                <p className="flex-none order-0 grow-0 py-[8px]  w-[273px] h-[24px] font-poppins not-italic font-normal text-base leading-6 text-[#212121]  ">
                  Part-Time (9:00 am - 5:00 pm IST)
                </p>
                <p className="flex-none order-1 grow-0  py-[8px] w-[186px] h-[24px] font-poppins not-italic font-normal text-base leading-6 text-[#212121] ">
                  Experience {item.minExperience} - {item.maxExperience}{" "}
                </p>
                <p className="flex-none order-1 grow-0 py-[8px] w-[249px] h-[24px] font-poppins not-italic font-normal  text-base leading-6 text-[#212121]  ">
                  INR (&#8377;) {item.minSalary} - {item.maxSalary} / Month
                </p>
                <p className="flex-none order-1 grow-0 w-[147px] h-[24px] font-poppins not-italic font-normal text-base leading-6 text-[#212121]  py-[8px]  ">
                  {item.employee} employees
                </p>
                <div className="flex justify-between py-[24px] ">
                  {item.selectedOption === "quick" ? (
                    <button className="flex flex-row justify-center items-center px-[8px] py-[16px] w-[118px] h-[40px] font-poppins not-italic font-normal text-base leading-6 text-[#FAFAFA] bg-[#1597E4] rounded-md">
                      Apply Now
                    </button>
                  ) : (
                    <button className=" flex flex-row justify-center items-center px-[8px] py-[16px] gap-2 w-[147px] h-[40px] font-poppins not-italic font-normal text-base leading-6 text-[#1597E4] bg-[#FFFFFF] border-[1px] border-[#1597E4] rounded-md">
                      External Apply
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
