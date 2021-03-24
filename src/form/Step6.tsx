

import React, {useState} from "react";
import { useForm } from "./hooks/useForm";
import highSchool from "../img/highSchool.png";
import college from "../img/college.png";
import Diploma from "../img/Diploma.png";
import Bachelors from "../img/Bachelors.png";

import calendar from "../img/calendar.png"
import digg from "../img/digg.png"


export default function Step6(props: any) {
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
      <span>What is your level of education?</span>
      <div className="col-md-12">

<label className="radio-img">
  <input type="radio" name="educationLevel" value="High school or less" onChange={change}/>
  <div className="optionsKey"><img src={highSchool} alt="yes" /> High school or less</div>
</label>

<label className="radio-img">
  <input type="radio" name="educationLevel" value="College" onChange={change}/>
  <div className="optionsKey"><img src={college} alt="yes" /> College </div>
</label>

<label className="radio-img">
  <input type="radio" name="educationLevel" value="Diploma" onChange={change}/>
  <div className="optionsKey"><img src={Diploma} alt="yes" /> Diploma </div>
</label>

<label className="radio-img">
  <input type="radio" name="educationLevel" value="Bachelors" onChange={change}/>
  <div className="optionsKey"><img src={Bachelors} alt="yes" /> Bachelors </div>
</label>

</div>
       </div>


<p><button className="prev mr-4" onClick={props.previousStep}>Back</button> 
<button className="next" disabled={!inputs.educationLevel} onClick={props.nextStep}>Next</button></p>

        </>
    )
}