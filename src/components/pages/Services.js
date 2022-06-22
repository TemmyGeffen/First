import React from 'react'
import "../../App.css";
// export default function Services () {
//     return <h1>SERVICES</h1>;
// }
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllTypeTretment } from '../../redux/TypeTretment/TypeTretmentThunk'
import { GetAllMeetings } from '../../redux/Meeting/MeetingThunk'
import './AddAppontment.css'
import { GetAllSecrensForUser } from '../../redux/Secrens/SecrensThunk'
import { GetAllTypeTretmentForEmploye } from '../../redux/Employee/EmployeeThunk'
import { Steper } from './Steper';

export default function Services({ history }) {

  const [flag, setFlag] = useState(false)
  const dispatch = useDispatch()

  const currentUser = useSelector((store) => {
    debugger
    return store.Users.CurentUser
  })

  useEffect(async () => {
    debugger
    //צריך להעביר את זה
    let m = await GetAllMeetings(dispatch, "")
    console.log(m);
    let t = await GetAllTypeTretment("", dispatch)
    debugger
    let s = await GetAllSecrensForUser(dispatch, "", currentUser.idUser)
    let e = await GetAllTypeTretmentForEmploye(dispatch, "")
  }, [])

  const Alltretment = useSelector((store) => {
    debugger;
    return store.Tretment.TypeTretment
  })

  const AllSecrense = useSelector((store) => {
    debugger;
    return store.Secrens.SecrenseForCurentUser
  })

  let time = 0
  let idSecrens = []
  let idTretment = []


  const okTheSelected = (e) => {
    debugger
    //  לאפילציה
    //  if(e.target[`ChekApilatzia`].checked)
    //  {
    //     time+= (Number)(e.target[`timeoftretment`].value)
    // }
    // else
    AllSecrense.map((item, index) => {
      if (e.target[`checkArea${index}`].checked) {
        time += Alltretment.find(x => x.idTypeTretment == item.idTypeTretment).time
        idSecrens.push(item.idSecrens)
        idTretment.push(item.idTypeTretment)
      }
    })
    history.push({ pathname: "/AddAppontmentCalender", state: { HowManyTime: time, Employee: [1, 2], idSec: idSecrens, idTre: idTretment } })
  }
  const HowManyTime = () => {
    setFlag(!flag)
  }
  return <>

    <div style={{ width: "50%", margin: "auto", height: "90%" }}>
      <form onSubmit={(e) => okTheSelected(e)}>


        {/* <input type='button' value='רוצה לקבוע סדרה חדשה'></input> */}

        {/* לאפילציה */}
        {/* <div class="card__group">
                <div class="card">
                    <input class="custom" type="checkbox" id='ChekApilatzia' onChange={()=>HowManyTime()}/>
                    {(flag==true)&&<br></br>&&<label>כמה דקות טיפול</label>&&<input type='number' id='timeoftretment'></input>}
                    <label for='ChekApilatzia'>
                        <h5>אפילציה</h5>
                        <p>The week’s biggest news</p>
                    </label>
                </div>
            </div> */}
        <h2 class="news123__title">בחר אזורים לטיפול</h2><br />
        {/* יש בעיה בעצוב */}
        <div class="aaaa123">
          {AllSecrense.map((item, index) =>
            <div class=" a123">
              <div class="page__section123 a123 page__custom123-settings" >
                <div class="page__toggle123 a123">
                  <label class="toggle123">
                    <input class="toggle__input123 a123" type="checkbox" id={`checkArea${index}`} />
                    <span class="toggle__label123 a123">
                      <span class="toggle__text123 a123" >{item.typeTretmentName}</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* <button >לאישור</button> */}
        <div class="centerOK">
          <button type='submit' class="fancyOK">
            <span class="top-keyOK"></span>
            <button style={{ border: 'none', background: 'none', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif' }} type='submit' class="">אישור</button>
            <span class="bottom-keyOK-1"></span>
            <span class="bottom-keyOK-2"></span>
          </button>
        </div>

      </form>
      <Steper num={0} />
    </div>
  </>
}


//      <div class="card__group">

                //     <div class="card">
                //         <input class="custom" type="checkbox" id={`checkArea${index}`} />
                //         <label for={`check${index}`}>
                //             <h5>{item.typeTretmentName}</h5>
                //             <p>The week’s biggest news</p>
                //         </label>
                //     </div>

                // </div>