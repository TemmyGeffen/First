import * as React from "react";
import * as ReactDOM from "react-dom";
import { DateInput } from "@progress/kendo-react-dateinputs";
import BookDrivingSlot from "./BookDrivingSlot";
import { useDispatch, useSelector } from "react-redux";
import { Steper } from "./Steper";
 
 export default function AddAppontmentCalender(Props){
  const [value, setValue] = React.useState(new Date());

 
  const changeDate = event => {
    setValue(event.value);
  };

  return <div>
      <BookDrivingSlot sendProps={Props}></BookDrivingSlot>
      {/* <DateInput value={value} onChange={changeDate} /> */}
      {/* קוד קשיח אולי אפשר לשנות */}
      {Props.location.state.idTre!=5 && <Steper num={1}/>}
    </div>;
};