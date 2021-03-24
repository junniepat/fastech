

import React, {useState} from "react";
import { useForm } from "./hooks/useForm";


import digg from "../img/digg.png"
import fishing from "../img/fishing.png";
import construction from "../img/construction.png";

import fashion from "../img/fashion.png";
import realestate from "../img/realestate.png";
import tourism from "../img/tourism.png";
import manufacturing from "../img/manufacturing.png";
import technology from "../img/technology.png";
import media from "../img/media.png";
import farming from "../img/farming.png";
import education from "../img/education.png";
import publick from "../img/public.png";
import administration from "../img/administration.png";
import financial from "../img/financial.png";
import legal from "../img/legal.png";
import health from "../img/health.png";
import government from "../img/government.png";
import medical from "../img/medical.png";
import security from "../img/security.png";
import logistics from "../img/logistics.png";
import robotics from "../img/robotics.png";
import automotive from "../img/automotive.png";
import transportation from "../img/transportation.png";
import customer from "../img/customer.png";



export default function Step3(props: any) {
    const { inputs, change } = useForm();
   
  
    return (
        <>
<div className="row">
    <div className="col-md-3">
        <img src={digg} alt="logo" style={{width: "100px"}} />
    </div>

    <div className="col-md-9"><p>Progress</p>
        <progress value={props.currentStep * 10} max="100" />
    </div>
</div>

<div className="text-left mt-5 mb-5">
      <span>What industries would you prefer to work in? </span>
      <div className="col-md-12 mb-4">
        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Construction" onChange={change}/>
          <div className="optionsKey"><img src={construction} alt="yes" /> Construction </div>
        </label>



        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Real Estate" onChange={change}/>
          <div className="optionsKey"><img src={realestate} alt="yes" /> Real Estate</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Tourism" onChange={change}/>
          <div className="optionsKey"><img src={tourism} alt="yes" /> Tourism</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Manufacturing" onChange={change}/>
          <div className="optionsKey"><img src={manufacturing} alt="yes" /> Manufacturing</div>
        </label>


        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Technology" onChange={change}/>
          <div className="optionsKey"><img src={technology} alt="yes" /> Technology</div>
        </label>


        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Media" onChange={change}/>
          <div className="optionsKey"><img src={media} alt="yes" /> Media</div>
        </label>


        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Farming" onChange={change}/>
          <div className="optionsKey"><img src={farming} alt="yes" /> Farming</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Fishing" onChange={change}/>
          <div className="optionsKey"><img src={fishing} alt="yes" />  Fishing</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Education" onChange={change}/>
          <div className="optionsKey"><img src={education} alt="yes" /> Education</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Public Services" onChange={change}/>
          <div className="optionsKey"><img src={publick} alt="yes" /> Public Services</div>
        </label>


        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Adminstration" onChange={change}/>
          <div className="optionsKey"><img src={administration} alt="yes" /> Adminstration</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Financial Services" onChange={change}/>
          <div className="optionsKey"><img src={financial} alt="yes" /> Financial Services</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Legal" onChange={change}/>
          <div className="optionsKey"><img src={legal} alt="yes" /> Legal</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Health Care" onChange={change}/>
          <div className="optionsKey"><img src={health} alt="yes" /> Health Care</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Government" onChange={change}/>
          <div className="optionsKey"><img src={government} alt="yes" /> Government</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Medical" onChange={change}/>
          <div className="optionsKey"><img src={medical} alt="yes" /> Medical</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Security" onChange={change}/>
          <div className="optionsKey"><img src={security} alt="yes" /> Security</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Logistics" onChange={change}/>
          <div className="optionsKey"><img src={logistics} alt="yes" /> Logistics</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Robotics" onChange={change}/>
          <div className="optionsKey"><img src={robotics} alt="yes" /> Robotics</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Fashion" onChange={change}/>
          <div className="optionsKey"><img src={fashion} alt="yes" />   Fashion</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Automotive" onChange={change}/>
          <div className="optionsKey"><img src={automotive} alt="yes" /> Automotive</div>
        </label>


        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Transportation" onChange={change}/>
          <div className="optionsKey"><img src={transportation} alt="yes" /> Transportation</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="preferredIndustries" value="Customer Support" onChange={change}/>
          <div className="optionsKey"><img src={customer} alt="yes" /> Customer Support</div>
        </label>

      </div>
    </div>
  
  
<p><button className="prev mr-4" onClick={props.previousStep}>Back</button> 
<button className="next" disabled={!inputs.preferredIndustries} onClick={props.nextStep}>Next</button></p>

        </>
    )
}