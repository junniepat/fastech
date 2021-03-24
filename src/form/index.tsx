import React, {useState} from "react";

import { useForm } from "./hooks/useForm";
import { Button } from "reactstrap";
import StepWizard from 'react-step-wizard';

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";

import BgImg from "../img/one.png"



export const AtechyForm: React.SFC = (): JSX.Element => {
  const { inputs, change } = useForm();
  const [additionalDetails, setadditionalDetails] = useState(false);
  const [mainInfo, setmainInfo] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  function onChange() {
    console.log("uoi")
    setadditionalDetails(!additionalDetails);
    setmainInfo(!mainInfo);
  }

  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /^[0-9]{10,11}$/;

  const validatePhone = (event: any) => {
    const phone = event.target.value;
    if (phoneRegex.test(phone)) {
      change(event);
    }
    else {
      console.log("bad");
    }
  }

  const validateEmail = (event: any) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Your email looks good!');
      change(event);
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email!');
    }
  };

  return (

      <div>

      <div className="container" style={{marginTop: "5%", minHeight: "500px", border: "1px solid #f2f2f2"}}>

      {mainInfo  && (
     <div className="row">
     <div className="col-md-6 pl-0 p-0">
       <img src={BgImg} alt="bgImg" style={{width: "100%", height: "100%"}} />
     </div>
     <div className="col-md-6" style={{padding: "12% 5%", background: "#fff"}}>
     <h2 className="title is-5 mb-4 text-center">Apply now to work in Dubai </h2>
   <div className="row">
     <div className="col-md-6">
       <div className="form-floating mb-3">
         <input
           type="text"
           className="form-control"
           id="fName"
           placeholder="First Name"
           name="fName"
           value={inputs.fName}
           onChange={change}
         />
         <label htmlFor="fName">First Name</label>
       </div>
     </div>

     <div className="col-md-6">
       <div className="form-floating mb-3">
         <input
           type="text"
           className="form-control"
           id="lName"
           placeholder="Last Name"
           name="lName"
           value={inputs.lName}
           onChange={change}
         />
         <label htmlFor="lName">Last Name</label>
       </div>
     </div>

     <div className="col-md-6">
       <div className="form-floating mb-3">
         <input
           type="date"
           className="form-control"
           id="dob"
           name="dob"
           value={inputs.dob}
           onChange={change}
         />
         <label htmlFor="dob">Date of birth</label>
       </div>
     </div>

     <div className="col-md-6">
        <div>
          <div><label>Gender</label></div>
            <input id="male" className="radio-custom" type="radio" name="gender"  value="Male"  onChange={change}/>
            <label htmlFor="male" className="radio-custom-label">Male</label>
   
            <input id="female" className="radio-custom" name="gender" type="radio"  value="Female" onChange={change}/>
            <label htmlFor="female" className="radio-custom-label">Female</label>
        </div>
     </div>

     <div className="col-md-6">
       <select className="form-select form-select-lg selectField" aria-label="Default select example"
           name="nationality"
           value={inputs.nationality}
           onChange={change}>
         <option selected>Nationality</option>
         <option value="Nigeria">Nigeria</option>
         <option value="South Africa">South Africa</option>
       </select>
     </div>

     <div className="col-md-6">
       <select className="form-select form-select-lg selectField" aria-label="Default select example"                 
           name="residence"
           value={inputs.residence}
           onChange={change}>
         <option selected>Country of Residence</option>
         <option value="UAE">UAE</option>
         <option value="US">Female</option>
       </select>
     </div>



     <div className="col-md-12 mb-3 mt-3">How we can contact you?</div>

     <div className="col-md-6">
       <div className="form-floating mb-3">
         <input
           type="tel"
           className="form-control"
           id="cNumber"
           placeholder="(971)50-559-5995"
           maxLength={11}
           name="contactNumber"
           onChange={validatePhone}
         />
         <label htmlFor="cNumber">Contact Number</label>
       </div>
     </div>

     <div className="col-md-6">
       <div className="form-floating mb-3">
         <input
           type="email"
           className="form-control"
           id="eAddress"
           placeholder="name@example.com"
           name="email"
           onChange={validateEmail}
         />
         <label htmlFor="eAddress">Email Address</label>
          <div className={`message ${isValid ? 'success' : 'error'}`}>
            {message}
          </div>
       </div>
     </div>

     <div className="col-md-12 d-grid gap-2 d-md-flex justify-content-md-end">
       <Button className="pull-right btn-round btn-lg" onClick={() => onChange()}
         disabled={!inputs.fName || !inputs.lName || !inputs.email || !inputs.gender || !inputs.dob || !inputs.residence || !inputs.contactNumber}>
       Apply now</Button>
     </div>
   </div>

     </div>
   </div>

      )}


        {additionalDetails && (
          <div style={{ padding: "5% 3%" }}>
              <StepWizard>
                <Step1 onChange={onChange}/>
                <Step2 />
                <Step3 />
                <Step4 />
                <Step5 />
                <Step6 />
                <Step7 />
                <Step8 />
              </StepWizard>
          </div>
        )}
      </div>
</div>
  );
};
