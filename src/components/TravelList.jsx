import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
function TravelList() {
  const [travels, setTravelsToDisplay] = useState(travelPlansData);

  return(
    <>
  {travels.map((travelObj, i, arr) => {
      return <div key= {travelObj.id} className="travel">
        <img src={travelObj.image}></img>
        <h2>{travelObj.destination}, ({travelObj.days} Days)</h2>
        <p>{travelObj.description}</p>
        <p>Price: {travelObj.totalCost}</p>
      </div>;
    })
  }
  </>
)}

export default TravelList;
