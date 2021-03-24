

import React, {useState} from "react";
import { useForm } from "./hooks/useForm";
import thumbsUp from "../img/thumbsUp.png";
import thumbsDown from "../img/thumbsDown.png";
import calendar from "../img/calendar.png"
import digg from "../img/digg.png"


export default function Step7(props: any) {
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
      <span>How soon do you want to come to Dubai?</span>
      <div className="col-md-12">
          <label className="radio-img">
            <input type="radio" name="soonCome" value="Right now" onChange={change}/>
            <div className="optionsKey"><img src={calendar} alt="yes" /> Right now</div>
          </label>

          <label className="radio-img">
            <input type="radio" name="soonCome" value="0 to 3 months" onChange={change}/>
            <div className="optionsKey"><img src={calendar} alt="yes" /> 0 to 3 months </div>
          </label>

          <label className="radio-img">
            <input type="radio" name="soonCome" value="3 to 6 months" onChange={change}/>
            <div className="optionsKey"><img src={calendar} alt="yes" /> 3 to 6 months </div>
          </label>

          <label className="radio-img">
            <input type="radio" name="soonCome" value="6 to 12 months" onChange={change}/>
            <div className="optionsKey"><img src={calendar} alt="yes" /> 6 to 12 months </div>
          </label>

          <label className="radio-img">
            <input type="radio" name="soonCome" value="After 1 year" onChange={change}/>
            <div className="optionsKey"><img src={calendar} alt="yes" />  After 1 year </div>
          </label>

          <label className="radio-img">
            <input type="radio" name="soonCome" value="I'm not sure" onChange={change}/>
            <div className="optionsKey"><img src={calendar} alt="yes" /> I'm not sure </div>
          </label>
      </div>
    
       </div>


<p><button className="prev mr-4" onClick={props.previousStep}>Back</button>
 <button className="next" disabled={!inputs.soonCome} onClick={props.nextStep}>Next</button></p>

        </>
    )
}