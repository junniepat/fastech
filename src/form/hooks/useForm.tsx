import { useState, createContext, useContext, ReactNode} from "react";

interface IProps {
  children: ReactNode;
  // any other props that come into the component
}

  export const InfoContext = createContext<any>({});

  function InfoProvider({ children }: IProps) {
    const [inputs, setInputs] = useState({
      fName: "",
      lName: "",
      email: "",
      gender: "",
      dob: "",
      nationality: "",
      residence: "",
      contactNumber: "",
      visitedDubai: "",
      familyFriends: "",
      stayDubai: "",
      whyCome: "",
      preferredIndustries: "",
      interests: "",
      finSavings: "",
      educationLevel: "",
      soonCome: "",
    });

    const change = (event: any) => {
      event.persist();
      setInputs((inputs) => ({
        ...inputs,
        [event.target.name]: event.target.value
      }));
    };

    const value = {
      inputs,
      change
    }

    return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
  }

 const useForm = () => {
  const context = useContext(InfoContext);
  if (context === undefined) {
    throw new Error("useForm must be used within an InfoProvider");
  }

  return context;
};

export { InfoProvider, useForm };
