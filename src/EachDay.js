import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Db } from "./data";

const EachDay = () => {

  const {classes,days,number} = useParams();
  var show,rate;
  if(classes === "class5"){
    show = Db[0].class5.filter((ele) => ele.name === days);
    rate = 4.97
  }else{
    show = Db[0].class6.filter((ele) => ele.name === days);
    rate = 7.45
  }
  
  const navigate = useNavigate();
  function addZeroes(num) {
    // Convert input string to a number and store as a variable.
        var value = Number(num);      
    // Split the input string into two arrays containing integers/decimals
        var res = num.split(".");     
    // If there is no decimal point or only one decimal place found.
        if(res.length === 1 || res[1].length < 3) { 
    // Set the number to two decimal places
            value = value.toFixed(3);
        }
        if(res[1]?.length > 3){
            value = value.toFixed(4)
        }
    // Return updated or original number.
    return value;
    }



  const sum = show[0].rateperPerson.reduce((prevValue,currentValue,i) => prevValue + show[0].rateGram[i] *currentValue * number ,0)
  
  return (
    <div className="basic-content">
      <p>मध्याहन भोजन :{classes === "class5" ? <span> (I-V)</span> : <span> VI - VIII </span>}</p>
      <p>छात्रों की कुल संख्या : <span>{number} </span></p>
      <p>निर्धारीत दर : <span> {Math.round(rate*100)/100} </span> </p>
      <p>MDM बनने का दिन : <span>{days}</span></p>
      <div>
      <div className="items_parent">
        <div className="items_topic">
            <p>सामान</p>
            <p>मात्रा (gr)</p>
            <p>राशि</p>
        </div>
      <div className="items_list">
      
        <div className="list_row">
          {show[0].items.map((ele) => (
            <p>{ele}</p>
          ))}
        </div>
       
        <div className="list_row">
        {show[0].rateGram.map((ele) => (
          <p>{addZeroes((ele*number).toString())}</p>
        ))}
      </div>
     

        <div className="list_row">
        {show[0].rateperPerson.map((ele,i) => (
            <p>{(ele * show[0].rateGram[i] * number).toFixed(2)}</p>
        ))}
        </div>
   
      </div>
      </div>
      <div className="total">
      Total : <span>{Math.round(sum*100)/100}</span>
  </div>
      </div>
      <button onClick={()=>navigate(`/${classes}/days`)} className="button2">
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
    </button>
    </div>
  );
};

export default EachDay;
