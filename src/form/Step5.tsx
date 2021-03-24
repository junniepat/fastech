

import React, {useState} from "react";
import { useForm } from "./hooks/useForm";


import line from "../img/line.png"
import group101 from "../img/Group101.png"
import save from "../img/save.png"

import digg from "../img/digg.png"


export default function Step5(props: any) {
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
      <span>Do you have any financial savings?</span>
      <div className="col-md-12 mb-4">
        <label className="radio-img">
          <input type="radio" name="finSavings" value="No Savings" onChange={change}/>
          <div className="optionsKey"><img src={line} alt="yes" /> No Savings </div>
        </label>

        <label className="radio-img">
          <input type="radio" name="finSavings" value="0 to 1000 aed" onChange={change}/>
          <div className="optionsKey"><img src={save} alt="yes" /> 0 to 1000 aed </div>
        </label>

        <label className="radio-img">
          <input type="radio" name="finSavings" value="1000 t0 5000 aed" onChange={change}/>
          <div className="optionsKey"><img src={save} alt="yes" /> 1000 t0 5000 aed</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="finSavings" value="5000 to 10,000 aed" onChange={change}/>
          <div className="optionsKey"><img src={group101} alt="yes" /> 5000 to 10,000 aed</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="finSavings" value="10,000 to 20,000 aed" onChange={change}/>
          <div className="optionsKey"><img src={group101} alt="yes" /> 10,000 to 20,000 aed</div>
        </label>


        <label className="radio-img">
          <input type="radio" name="finSavings" value="20,000 to 50,000 aed" onChange={change}/>
          <div className="optionsKey"><img src={group101} alt="yes" /> 20,000 to 50,000 aed</div>
        </label>


        <label className="radio-img">
          <input type="radio" name="finSavings" value="+50,000 aed" onChange={change}/>
          <div className="optionsKey"><img src={group101} alt="yes" /> +50,000 aed</div>
        </label>


      </div>
    </div>
  
  
<p><button className="prev mr-4" onClick={props.previousStep}>Back</button> 
<button className="next"  disabled={!inputs.finSavings}  onClick={props.nextStep}>Next</button></p>

        </>
    )
}