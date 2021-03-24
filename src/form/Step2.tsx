

import React, {useState} from "react";
import { useForm } from "./hooks/useForm";
import thumbsUp from "../img/thumbsUp.png";
import thumbsDown from "../img/thumbsDown.png";
import calendar from "../img/calendar.png"
import digg from "../img/digg.png"


export default function Step2(props: any) {
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
      <span>Why do you want to come to dubai? </span>
      <div className="col-md-12 mb-4">
        <label className="radio-img">
          <input type="radio" name="whyCome" value="Lifestyle" onChange={change}/>
          <div className="optionsKey">Lifestyle </div>
        </label>

        <label className="radio-img">
          <input type="radio" name="whyCome" value="Work Opportunities" onChange={change}/>
          <div className="optionsKey">Work Opportunities </div>
        </label>

        <label className="radio-img">
          <input type="radio" name="whyCome" value="Education" onChange={change}/>
          <div className="optionsKey">Education</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="whyCome" value="Finance" onChange={change}/>
          <div className="optionsKey">Finance</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="whyCome" value="Tourism" onChange={change}/>
          <div className="optionsKey">Tourism</div>
        </label>


        <label className="radio-img">
          <input type="radio" name="whyCome" value="Family" onChange={change}/>
          <div className="optionsKey">Family</div>
        </label>


        <label className="radio-img">
          <input type="radio" name="whyCome" value="Business" onChange={change}/>
          <div className="optionsKey">Business</div>
        </label>


        <label className="radio-img">
          <input type="radio" name="whyCome" value="Security" onChange={change}/>
          <div className="optionsKey">Security</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="whyCome" value="Weather" onChange={change}/>
          <div className="optionsKey">Weather</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="whyCome" value="Meeting New People" onChange={change}/>
          <div className="optionsKey">Meeting New People</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="whyCome" value="Tourism" onChange={change}/>
          <div className="optionsKey">Culture</div>
        </label>

      </div>
    </div>
  
  
<p><button className="prev mr-4" onClick={props.previousStep}>Back</button> 
<button className="next" disabled={!inputs.whyCome} onClick={props.nextStep}>Next</button></p>

        </>
    )
}