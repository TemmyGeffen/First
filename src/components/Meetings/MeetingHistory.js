import { useState } from "react"
import { MeetingHistoryCard } from "./MeetingHistoryCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { GetMeetingsByUserId } from "../../redux/Meeting/MeetingThunk"
import { GetAllTretmentForUser } from "../../redux/TretmentInSecren/TretmentInSecrenThunk"
import { MeetingHistoryCalander } from "./MeetingHistoryCalander"

export const MeetingHistory=()=>{

    const [cardDisplay, setCardDisplay]= useState(true)
    const dispatch=useDispatch()

    const currentUser = useSelector((store) => {
        debugger
        return store.Users.CurentUser
      })
      const today = Date.now();
      function reg(r,g,b){
        return "#" + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
      }
      const obj=[{
        text: `הסטוריית טיפולים`,
        value: 1,
        color: reg(110, 14, 90)
    }
  ]

    useEffect(async ()=>{
    debugger
    let s= await GetMeetingsByUserId(dispatch,"",currentUser.idUser)
    debugger
    let t= await GetAllTretmentForUser(dispatch, "", currentUser.idUser)
    },[])
   
    return<>
    <div style={{display:'inline-block',  marginLeft: '2%'}}class="page__section1234 page__custom123-settings">
        <div class="page__toggle123">
          <label class="toggle123">
            <input class="toggle__input123" name="chekDisplay" checked={cardDisplay} onClick={()=>setCardDisplay(true)} type="radio"/>
            <span class="toggle__label123">
              <span class="toggle__text123">תצוגת כרטיסים</span>
            </span>
          </label>
        </div>
      </div>
<br></br>
      <div style={{display:'inline-block', position:'absolute',  marginLeft: '2%'}} class="page__section1234 page__custom123-settings">
        <div class="page__toggle123">
          <label class="toggle123">
            <input class="toggle__input123" name="chekDisplay" onClick={()=>setCardDisplay(false)} type="radio"/>
            <span class="toggle__label123">
              <span class="toggle__text123">תצוגת לוח שנה</span>
            </span>
          </label>
        </div>
      </div>
        {/* <label>תצוגת כרטיסים</label> */}
        {/* <input type="radio" name="chekDisplay" checked={cardDisplay} onClick={()=>setCardDisplay(true)}/><br></br> */}
        {/* <label>תצוגת לוח שנה</label> */}
        {/* <input type="radio" name="chekDisplay" onClick={()=>setCardDisplay(false)} /> */}
        {cardDisplay==true?<MeetingHistoryCard/>:<MeetingHistoryCalander obj={obj}/>}
        
    </>
}