

import React, {useState} from "react";
import { useForm } from "./hooks/useForm";
import thumbsUp from "../img/thumbsUp.png";
import thumbsDown from "../img/thumbsDown.png";
import calendar from "../img/calendar.png"
import digg from "../img/digg.png"


export default function Step8(props: any) {
    const { inputs, change } = useForm();

  
    return (
        <>
<div className="row">
    <div className="col-md-3">
        <img src={digg} alt="logo" style={{width: "100px"}} />
    </div>

    <div className="col-md-9"><p>Progress</p>
    <progress value="100" max="100" />
    </div>
</div>

<div className="text-left mt-4 mb-5">

      <h6 className="title is-4 mt-4">Complete - Review your application</h6>
    
    <div className="mt-4 mb-4" style={{background: "#F3F3F3", padding: "35px 20px"}}>
      <h4 style={{color: "#4D33E2", fontSize: "15px"}}>Basic Information</h4>
      <span className="bInfo">
        <b>Name:</b> {inputs.fName + " " + inputs.lName}
      </span>

      <span className="bInfo">
        <b>Date of birth:</b> {inputs.dob}
      </span>

      <span className="bInfo">
        <b>Gender:</b> {inputs.gender}
      </span>

      <span className="bInfo">
        <b>Nationality:</b> {inputs.nationality}
      </span>

      <span className="bInfo">
        <b>Country of residence:</b> {inputs.residence}
      </span>

      <span className="bInfo">
        <b>Contact Number:</b> {inputs.contactNumber}
      </span>

      <span className="bInfo">
        <b>Email:</b> {inputs.email}
      </span>

    </div>


    <div className="mt-4 mb-4" style={{background: "#F3F3F3", padding: "35px 20px"}}>
      <h4 style={{color: "#4D33E2", fontSize: "15px"}}>Questionnaire</h4>

      <h6 className="mt-4">Have you ever visited Dubai? <button className="edit mr-4" onClick={()=> props.goToStep(1)}><i className="fa fa-pencil"></i></button></h6>
        <span className="showSpan">{inputs.visitedDubai}</span>

      <h6 className="mt-4"> Do you have any friends or family in Dubai? <button className="edit mr-4" onClick={()=> props.goToStep(1)}><i className="fa fa-pencil"></i></button></h6>
      <span className="showSpan">{inputs.familyFriends}</span>

      <h6 className="mt-4">How long do you want to stay in stay in Dubai? <button className="edit mr-4" onClick={()=> props.goToStep(1)}><i className="fa fa-pencil"></i></button></h6>
      <span className="showSpan">{inputs.stayDubai}</span>

      <h6 className="mt-4">Why do you want to come to Dubai? <button className="edit mr-4" onClick={()=> props.goToStep(2)}><i className="fa fa-pencil"></i></button></h6>
      <span className="showSpan">{inputs.whyCome}</span>

      <h6 className="mt-4">What industries would you prefer to work in? <button className="edit mr-4" onClick={()=> props.goToStep(3)}><i className="fa fa-pencil"></i></button></h6>
      <span className="showSpan">{inputs.preferredIndustries}</span>

      <h6 className="mt-4">What are your interests? <button className="edit mr-4" onClick={()=> props.goToStep(4)}><i className="fa fa-pencil"></i></button></h6>
      <span className="showSpan">{inputs.interests}</span>

      <h6 className="mt-4">Do you have any financial savings? <button className="edit mr-4" onClick={()=> props.goToStep(5)}><i className="fa fa-pencil"></i></button></h6>
      <span className="showSpan">{inputs.finSavings}</span>

      <h6 className="mt-4">What is your level of education? <button className="edit mr-4" onClick={()=> props.goToStep(6)}><i className="fa fa-pencil"></i></button></h6>
      <span className="showSpan">{inputs.educationLevel}</span>

      <h6 className="mt-4">How soon do you want to come to Dubai? <button className="edit mr-4" onClick={()=> props.goToStep(7)}><i className="fa fa-pencil"></i></button></h6>
      <span className="showSpan">{inputs.soonCome}</span>
    </div>



       </div>


<p><button className="prev mr-4" onClick={props.previousStep}>Back</button> <button className="next" onClick={props.nextStep}>Complete Application</button></p>

        </>
    )
}