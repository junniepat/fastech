

import React, {useState} from "react";
import { useForm } from "./hooks/useForm";
import thumbsUp from "../img/thumbsUp.png";
import thumbsDown from "../img/thumbsDown.png";
import calendar from "../img/calendar.png"
import digg from "../img/digg.png"


export default function Step1(props: any) {
    const { inputs, change } = useForm();
    
    return (
        <>
<div className="row">
    <div className="col-md-3">
        <img src={digg} alt="logo" style={{width: "100px"}} />
    </div>

    <div className="col-md-9"><p>Progress</p>
        <progress  value={props.currentStep + 14} max="100"/>
    </div>
</div>

            <div className="text-left mt-5 mb-5">
      <span>Have you ever visited Dubai?</span> 
      <div className="col-md-12 mb-4">
          <label className="radio-img">
            <input type="radio" name="visitedDubai" value="Yes" onChange={change}/>
            <div className="optionsKey"><img src={thumbsUp} alt="yes" /> Yes </div>
          </label>

          <label className="radio-img">
            <input type="radio" name="visitedDubai" value="No" onChange={change} />
            <div className="optionsKey"><img src={thumbsDown} alt="yes" /> No </div>
          </label>
      </div>

      <span> Do you have any friends or family in Dubai?</span>
        <div className="col-md-12 mb-4">
        <label className="radio-img">
          <input type="radio" name="familyFriends" value="Yes" onChange={change}/>
          <div className="optionsKey"><img src={thumbsUp} alt="yes" /> Yes </div>
        </label>

        <label className="radio-img">
          <input type="radio" name="familyFriends" value="No" onChange={change}/>
          <div className="optionsKey"><img src={thumbsDown} alt="yes" /> No </div>
        </label>
      </div>

      <span>How long do you want to stay in stay in Dubai?</span>
      <div className="col-md-12 mb-4">
        <label className="radio-img">
            <input type="radio" name="stayDubai" value="Up to 3 months" onChange={change}/>
            <div className="optionsKey"><img src={calendar} alt="yes" /> Up to 3 months </div>
          </label>

          <label className="radio-img">
            <input type="radio" name="stayDubai" value="3 to 6 months" onChange={change}/>
            <div className="optionsKey"><img src={calendar} alt="yes" /> 3 to 6 months </div>
          </label>

          <label className="radio-img">
            <input type="radio" name="stayDubai" value="6 to 12 months" onChange={change}/>
            <div className="optionsKey"><img src={calendar} alt="yes" /> 6 to 12 months </div>
          </label>

          <label className="radio-img">
            <input type="radio" name="stayDubai" value="+12 months" onChange={change}/>
            <div className="optionsKey"><img src={calendar} alt="yes" /> +12 months </div>
          </label>

          <label className="radio-img">
            <input type="radio" name="stayDubai" value="+3 years" onChange={change}/>
            <div className="optionsKey"><img src={calendar} alt="yes" />  +3 years </div>
          </label>

      </div>
    </div>
  
  
<p><button className="prev mr-4" onClick={props.onChange}>Back</button> 
<button className="next" disabled={!inputs.stayDubai || !inputs.familyFriends || !inputs.visitedDubai} onClick={props.nextStep}>Next</button></p>

        </>
    )
}