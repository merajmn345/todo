// import React, { useState } from "react";
import JobCard from "./JobCard";
import JobCard1 from "./JobCard1";

function Jobs({
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
  error,
  handleNextClick,
  next,
}) {
  return (
    <>
      {next ? (
        <JobCard1
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
        />
      ) : (
        <JobCard
          handleNextClick={handleNextClick}
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
          error={error}
        />
      )}
    </>
  );
}

export default Jobs;
