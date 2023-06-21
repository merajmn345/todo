import { useState } from "react";
import axios from "axios";
import Jobs from "./components/Jobs";
import Cards from "./components/Cards";
import { Context } from "./Context/Context";
import { useContext } from "react";
import { useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [remote, setRemote] = useState("");
  const [minExperience, setMinExperience] = useState("");
  const [maxExperience, setMaxExperience] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [employee, setEmployee] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [postData, setPostData] = useState([]);
  const [error, setError] = useState(false);
  const [next, setNext] = useState(false);

  const {
    isOpen,
    setIsOpen,
    isEditOpen,
    setIsEditOpen,
    jobData,

    id,
  } = useContext(Context);

  const handleNextClick = () => {
    if (!title) {
      setError(true);
    } else if (!companyName) {
      setError(true);
    } else if (!industry) {
      setError(true);
    } else {
      setNext(true);
    }
  };

  function handleTitle(e) {
    setTitle(e.target.value);
    // console.log(title);
  }
  function handleCompanyName(e) {
    setCompanyName(e.target.value);
    // console.log(companyName);
  }
  function handleIndustry(e) {
    setIndustry(e.target.value);
    // console.log(industry);
  }
  function handleLocation(e) {
    setLocation(e.target.value);
    // console.log(location);
  }
  function handleRemote(e) {
    setRemote(e.target.value);
    // console.log(remote);
  }

  function handleMinExp(e) {
    const minInput = e.target.value;
    const numericMinInput = minInput.replace(/\D/g, "");
    setMinExperience(numericMinInput);
    // console.log(numericMinInput);
  }
  function handleMaxExp(e) {
    const maxInput = e.target.value;
    const numericMaxInput = maxInput.replace(/\D/g, "");
    setMaxExperience(numericMaxInput);
    // console.log(maxExperience);
  }

  function handleMinSal(e) {
    const minInput = e.target.value;
    const numericMinInput = minInput.replace(/\D/g, "");
    setMinSalary(numericMinInput);
    // console.log(minSalary);
  }

  function handleMaxSal(e) {
    const maxInput = e.target.value;
    const numericMaxInput = maxInput.replace(/\D/g, "");
    setMaxSalary(numericMaxInput);
    // console.log(maxSalary);
  }
  function handleEmployee(e) {
    const totalEmp = e.target.value;
    const numericTotalEmp = totalEmp.replace(/\D/g, "");
    setEmployee(numericTotalEmp);
    // console.log(employee);
  }
  function handleRadio(e) {
    setSelectedOption(e.target.value);
    // console.log(selectedOption);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submitted");

    try {
      const response = await axios.post(
        "https://648ab5ad17f1536d65e98306.mockapi.io/tasks",
        {
          title,
          companyName,
          industry,
          location,
          remote,
          minExperience,
          maxExperience,
          minSalary,
          maxSalary,
          employee,
          selectedOption,
        }
      );
      setPostData(response.data); // Store the API response data in state
      setTitle("");
      setCompanyName("");
      setIndustry("");
      setLocation("");
      setRemote("");
      setMinExperience("");
      setMaxExperience("");
      setMinSalary("");
      setMaxSalary("");
      setEmployee("");
      setSelectedOption("");
    } catch (error) {
      console.error(error);
    }
    setIsOpen(false);
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    // const id = id;
    const updatedData = {
      title: title,
      companyName: companyName,
      industry: industry,
      location: location,
      remote: remote,
      minExperience: minExperience,
      maxExperience: maxExperience,
      minSalary: minSalary,
      maxSalary: maxSalary,
      employee: employee,
      selectedOption: selectedOption,
    };
    try {
      const response = await axios.put(
        `https://648ab5ad17f1536d65e98306.mockapi.io/tasks/${id}`,
        updatedData
      );
      setPostData(
        postData.map((data) => (data.id === id ? { ...response.data } : data))
      );
      setTitle("");
      setCompanyName("");
      setIndustry("");
      setLocation("");
      setRemote("");
      setMinExperience("");
      setMaxExperience("");
      setMinSalary("");
      setMaxSalary("");
      setEmployee("");
      setSelectedOption("");

      setIsEditOpen(false);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    if (id) {
      const found = jobData.find((item) => item.id === id);

      setTitle(found.title);
      setCompanyName(found.companyName);
      setIndustry(found.industry);
      setLocation(found.location);
      setRemote(found.remote);
      setMinExperience(found.minExperience);
      setMaxExperience(found.maxExperience);
      setMinSalary(found.minSalary);
      setMaxSalary(found.maxSalary);
      setEmployee(found.employee);
      setSelectedOption(found.selectedOption);
    }
  }, [isEditOpen]);

  return (
    <>
      <div className="">
        <button
          className="mx-8 my-8 flex flex-row justify-center items-center px-[8px] py-[16px] w-[158px] h-[40px] font-poppins not-italic font-normal text-base leading-6 text-[#FAFAFA] bg-[#1597E4] rounded-md"
          onClick={() => setIsOpen(true)}
        >
          Create Job +
        </button>

        {isEditOpen && (
          <>
            <Jobs
              id={id}
              handleTitle={handleTitle}
              title={title}
              handleCompanyName={handleCompanyName}
              companyName={companyName}
              handleIndustry={handleIndustry}
              industry={industry}
              handleLocation={handleLocation}
              location={location}
              handleRemote={handleRemote}
              remote={remote}
              handleMinExp={handleMinExp}
              minExperience={minExperience}
              handleMaxExp={handleMaxExp}
              maxExperience={maxExperience}
              handleMinSal={handleMinSal}
              minSalary={minSalary}
              handleMaxSal={handleMaxSal}
              maxSalary={maxSalary}
              handleEmployee={handleEmployee}
              employee={employee}
              handleRadio={handleRadio}
              selectedOption={selectedOption}
              handleSubmit={handleEdit}
              error={error}
              next={next}
              handleNextClick={handleNextClick}
            />
          </>
        )}

        {isOpen ? (
          <Jobs
            handleTitle={handleTitle}
            title={title}
            handleCompanyName={handleCompanyName}
            companyName={companyName}
            handleIndustry={handleIndustry}
            industry={industry}
            handleLocation={handleLocation}
            location={location}
            handleRemote={handleRemote}
            remote={remote}
            handleMinExp={handleMinExp}
            minExperience={minExperience}
            handleMaxExp={handleMaxExp}
            maxExperience={maxExperience}
            handleMinSal={handleMinSal}
            minSalary={minSalary}
            handleMaxSal={handleMaxSal}
            maxSalary={maxSalary}
            handleEmployee={handleEmployee}
            employee={employee}
            handleRadio={handleRadio}
            selectedOption={selectedOption}
            handleSubmit={handleSubmit}
            error={error}
            next={next}
            handleNextClick={handleNextClick}
          />
        ) : (
          <Cards handleEdit={handleEdit} />
        )}
      </div>
    </>
  );
}

export default App;
