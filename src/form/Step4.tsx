

import React, {useState} from "react";
import { useForm } from "./hooks/useForm";

import digg from "../img/digg.png";
import outdoors from "../img/1F3D5.png";
import fitness from "../img/fitness.png";
import health from "../img/health.png";
import travel from "../img/travel.png";
import theme from "../img/theme.png";
import cooking from "../img/cooking.png";
import sports from "../img/sports.png";
import adventure from "../img/adventure.png";
import music from "../img/music.png";
import fashion from "../img/fashion.png";
import technology from "../img/technology.png";
import architecture from "../img/architecture.png";
import writing from "../img/writing.png";
import gaming from "../img/gaming.png";
import dining from "../img/dining.png";
import history from "../img/history.png";
import theatre from "../img/theatre.png";
import networking from "../img/networking.png";
import art from "../img/art.png";
import politics from "../img/politics.png";
import fishing from "../img/fishing.png";
import meetPeople from "../img/meetPeople.png";
import podcast from "../img/podcast.png";
import gambling from "../img/gambling.png";
import selfImprovement from "../img/selfImprovement.png";
import foreign from "../img/foreign.png";
import movies from "../img/movies.png";

import dating from "../img/dating.png";
import socialMedia from "../img/socialMedia.png";
import photography from "../img/photography.png";



export default function Step4(props: any) {
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
      <span>What are your interests?</span>
      <div className="col-md-12 mb-4">
        <label className="radio-img">
          <input type="radio" name="interests" value="Outdoors" onChange={change}/>
          <div className="optionsKey"><img src={outdoors} alt="yes" /> Outdoors </div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Fitness" onChange={change}/>
          <div className="optionsKey"><img src={fitness} alt="yes" /> Fitness </div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Health" onChange={change}/>
          <div className="optionsKey"><img src={health} alt="yes" /> Health</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Travel" onChange={change}/>
          <div className="optionsKey"><img src={travel} alt="yes" /> Travel</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Theme parks" onChange={change}/>
          <div className="optionsKey"><img src={theme} alt="yes" /> Theme parks</div>
        </label>


        <label className="radio-img">
          <input type="radio" name="interests" value="Cooking" onChange={change}/>
          <div className="optionsKey"><img src={cooking} alt="yes" /> Cooking</div>
        </label>


        <label className="radio-img">
          <input type="radio" name="interests" value="Sports" onChange={change}/>
          <div className="optionsKey"><img src={sports} alt="yes" /> Sports</div>
        </label>


        <label className="radio-img">
          <input type="radio" name="interests" value="Adventure" onChange={change}/>
          <div className="optionsKey"><img src={adventure} alt="yes" /> Adventure</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Music" onChange={change}/>
          <div className="optionsKey"><img src={music} alt="yes" /> Music</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Fashion" onChange={change}/>
          <div className="optionsKey"><img src={fashion} alt="yes" /> Fashion</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Technology" onChange={change}/>
          <div className="optionsKey"><img src={technology} alt="yes" /> Technology</div>
        </label>


        <label className="radio-img">
          <input type="radio" name="interests" value="Architecture" onChange={change}/>
          <div className="optionsKey"><img src={architecture} alt="yes" /> Architecture</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Writing" onChange={change}/>
          <div className="optionsKey"><img src={writing} alt="yes" /> Writing</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Gaming" onChange={change}/>
          <div className="optionsKey"><img src={gaming} alt="yes" /> Gaming</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Dining" onChange={change}/>
          <div className="optionsKey"><img src={dining} alt="yes" /> Dining</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="History" onChange={change}/>
          <div className="optionsKey"><img src={history} alt="yes" /> History</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Theatre" onChange={change}/>
          <div className="optionsKey"><img src={theatre} alt="yes" /> Theatre</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Networking" onChange={change}/>
          <div className="optionsKey"><img src={networking} alt="yes" /> Networking</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Art" onChange={change}/>
          <div className="optionsKey"><img src={art} alt="yes" /> Art</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Politics" onChange={change}/>
          <div className="optionsKey"><img src={politics} alt="yes" /> Politics</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Fishing" onChange={change}/>
          <div className="optionsKey"><img src={fishing} alt="yes" /> Fishing</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Meet People" onChange={change}/>
          <div className="optionsKey"><img src={meetPeople} alt="yes" /> Meet People</div>
        </label>


        <label className="radio-img">
          <input type="radio" name="interests" value="Podcasts" onChange={change}/>
          <div className="optionsKey"><img src={podcast} alt="yes" /> Podcasts</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Gambling" onChange={change}/>
          <div className="optionsKey"><img src={gambling} alt="yes" /> Gambling</div>
        </label>


        <label className="radio-img">
          <input type="radio" name="interests" value="Self Improvement" onChange={change}/>
          <div className="optionsKey"><img src={selfImprovement} alt="yes" /> Self Improvement</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Foreign Languages" onChange={change}/>
          <div className="optionsKey"><img src={foreign} alt="yes" /> Foreign Languages</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Movies" onChange={change}/>
          <div className="optionsKey"><img src={movies} alt="yes" /> Movies</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Celebrities" onChange={change}/>
          <div className="optionsKey"><img src={fashion} alt="yes" /> Celebrities</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Dating" onChange={change}/>
          <div className="optionsKey"><img src={dating} alt="yes" /> Dating</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Social Media" onChange={change}/>
          <div className="optionsKey"><img src={socialMedia} alt="yes" /> Social Media</div>
        </label>

        <label className="radio-img">
          <input type="radio" name="interests" value="Social Media" onChange={change}/>
          <div className="optionsKey"><img src={photography} alt="yes" /> Photography</div>
        </label>

      </div>
    </div>
  
  
<p><button className="prev mr-4" onClick={props.previousStep}>Back</button> 
<button className="next" disabled={!inputs.interests} onClick={props.nextStep}>Next</button></p>

        </>
    )
}