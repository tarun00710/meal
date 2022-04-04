import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Db } from "../src/data";
const Days = () => {
  const [day, setday] = useState();
  const [inputValue, setInputValue] = useState();
  const { classes } = useParams();
  const navigate = useNavigate();
  return (
    <div className="Day_section">
      <div className="input_section">
        <p className="input_header">छात्रों की कुल संख्या</p>
        <input  placeholder="Type..." className="input_field" onChange={(e) => setInputValue(e.target.value)} />
      </div>
      <div className="input_radio">
        {Db[0].class5.map((ele) => {
          return (
            <div className="inputs">
              <input
             
                onClick={(e) => setday(e.target.value)}
                type="radio"
                id="html"
                name="fav_language"
                value={ele.name}
              />
              <label for={ele.name}>{ele.name}</label>
              <br />
            </div>
          );
        })}
        <Link to={`/class/${classes}/days/${day}/studentNo/${inputValue}`}>
          <button className="calculate">कैलकुलेट</button>
        </Link>
        
      </div>
      <button onClick={()=>navigate('/')} className="button2">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
    </div>
  );
};

export default Days;
