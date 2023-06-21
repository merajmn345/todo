import { useState, createContext } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [id, setId] = useState("");
  const [jobData, setJobData] = useState([]);

  return (
    <Context.Provider
      value={{
        isOpen,
        setIsOpen,
        isEditOpen,
        setIsEditOpen,
        id,
        setId,
        jobData,
        setJobData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
