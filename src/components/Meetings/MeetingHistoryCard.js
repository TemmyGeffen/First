import { Icon } from "@progress/kendo-react-common";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import Popup from "reactjs-popup";
import { DeleteAMeetingAndAllTheTretment } from "../../redux/Meeting/MeetingThunk";
import App1 from '../pages/popup/temp2'
import './Table.css';

export const MeetingHistoryCard = () => {

  const AllMeet = useSelector((store) => {
    debugger
    console.log(`${store.Meeting.MeetingsForCurentUser} gggg`);
    return store.Meeting.MeetingsForCurentUser
  })
  let num = 4
  // let i;

  const dispatch = useDispatch()
  const sendToThenk = async (item) => {
    debugger
    let d = await DeleteAMeetingAndAllTheTretment(dispatch, "", item.target.dataset.foo)
    await console.log(d);
  }

  // const [myMeet, setMyMeet]=useState(AllMeet)

  const AllTretmentForuser = useSelector((store) => {
    debugger
    console.log(`${store.TretmentInSecrens.TretmentForCurentUser}nechamy`);
    return store.TretmentInSecrens.TretmentForCurentUser
  })
  AllMeet.map((item) => {
    debugger;
    console.log(AllTretmentForuser[0]);
    console.log(item);
    // AllTretmentForuser.map((curentItem)=>{
    //   if(item.Title==curentItem.idMeeting)

    // })
  })
  const x = [...AllMeet]
  const [sortedMeet, setSortedMeey] = useState(x.sort((a, b) => new Date(b.Start).getTime() - new Date(a.Start).getTime()))
  const sortMe = () => {
    const y = [...AllMeet]
    return (y.sort((a, b) => new Date(b.Start).getTime() - new Date(a.Start).getTime()))
    // setSortedMeey(c)
  }
  // setMyMeet(sortedMeet)
  // למה זה לא עובד
  // const funci=(e)=>{
  //   debugger
  //   sortedMeet.splice(sortedMeet.length)
  //   AllMeet.map((item)=>{
  //     debugger
  //     if(AllTretmentForuser.filter(x=> x.idMeeting==item.Title).length>0 && AllTretmentForuser.filter(x=> x.idMeeting==item.Title)[0].cancald==false){
  //       debugger
  //    sortedMeet.push(item)}
  //   }
  // )

  // }
  return (
    <>
      <div style={{ position: 'sticky', top: '8%', marginLeft: '87%' }} >
        <label style={{ color: 'red', position: 'absolute', fontSize: '600%', marginTop: '70%' }} class="k-icon k-i-close"><label style={{ color: 'black', fontSize: '30%', textAlign: 'center' }}>פגישות שלא התקיימו</label></label>
        <label style={{ color: 'green', position: 'absolute', fontSize: '600%' }} class="k-icon k-i-check"><label style={{ color: 'black', fontSize: '30%', textAlign: 'center' }}>פגישות שהתקיימו</label></label>
        <label onClick={() => setSortedMeey(sortedMeet.filter(x => new Date(x.Start).getTime() > new Date().getTime()))} style={{ color: 'blue', position: 'absolute', fontSize: '600%', marginTop: '140%' }} class="k-icon k-i-clock"><label style={{ color: 'black', fontSize: '30%', textAlign: 'center' }}>פגישות עתידיות</label></label>
        <label onClick={() => setSortedMeey(sortMe())} style={{ color: 'purple', position: 'absolute', fontSize: '600%', marginTop: '210%' }} class="k-icon k-i-calendar"><label style={{ color: 'black', fontSize: '30%', textAlign: 'center' }}>כל הפגישות</label></label>
      </div>
      <ul>
        {sortedMeet.map((item, index) =>

          <li className='cards__item' style={{ width: "60%", margin: 'auto', marginTop: '0.75%' }}>
            <div className='cards__item__link' style={{ boxShadow: '0 6px 20px rgba(99, 25, 121, 0.724)' }}>
              <figure data-category="{props.label}">
                <div>
                <h1 style={{ marginTop: '3%' }}>{item.Description} הזמנת תור למטפל</h1>
                  <h2 style={{ textAlign: 'center' }}> {new Date(item.Start).toDateString()} בתאריך</h2>
                  <h2 style={{ textAlign: 'center' }}>בין השעות {new Date(item.Start).getHours()}:{new Date(item.Start).getMinutes()} - {new Date(item.End).getHours()}:{new Date(item.End).getMinutes()}</h2></div>
              </figure>
              {(new Date(item.Start).getTime()) > (new Date().getTime()) ?
                <div>
                  <label style={{ marginTop: '-12%', color: 'blue', position: 'absolute', fontSize: '500%' }} class="k-icon k-i-clock"></label>
                  {/* // <Popup trigger={<input type='button' className='cards__item__text' value='לפרטים נוספים'></input>} position="right center"><h1>hi</h1></Popup>&& */}
                  <input data-foo={item.IdMeeting} style={{ width: '15%' }} type='button' onClick={(item) => sendToThenk(item)} className='cards__item__text' value='לביטול התור'></input>
                </div>
                : AllTretmentForuser.filter(x => x.idMeeting == item.Title).length > 0 &&
                  AllTretmentForuser.filter(x => x.idMeeting == item.Title)[0].cancald == true ?
                  <label style={{ color: 'red', position: 'absolute', fontSize: '500%' }} class="k-icon k-i-close"></label>
                  : AllTretmentForuser.filter(x => x.idMeeting == item.Title).length > 0 &&
                  AllTretmentForuser.filter(x => x.idMeeting == item.Title)[0].cancald == false &&
                  <label style={{ color: 'green', position: 'absolute', fontSize: '500%' }} class="k-icon k-i-check"></label>
              }


              <Popup trigger={<input type='button' style={{ width: '15%', marginLeft:'0%' }} className='cards__item__text' value='לפרטים נוספים'></input>} position="right center">
                {AllTretmentForuser.filter(x => x.idMeeting == item.Title).length > 0 &&
                // <div style={{backgroundColor: 'rgba(101, 3, 132)', direction:'rtl', width:'50%'}}>
                  <div class="containerTable12" >
                    {/* <!-- Row title --> */}
                    <table class='table12' style={{width:'500px'}}>
                    <thead class="theadtable12">
                      <tr class="trTable12">
                      <th class='thTable12'>האם שולם?</th>
                        <th class='thTable12'>טיפול באזור</th>
                      </tr>
                    </thead>
                    <tbody class="tbodyTable12">
                    {AllTretmentForuser.filter(x => x.idMeeting == item.Title).map((item) =>
                        <tr class="trTable12">
                          <td class="tdTable12">{item.needsTopay?<label class="k-icon k-i-close"></label>:<label class="k-icon k-i-check"></label>}</td>
                          <td class="tdTable12">{item.nameTypeTretment}</td>
                        </tr>
                        // {/* <ul class="more-content ulUser">
                        //   <li class="liUser">All about your meeting</li>
                        // </ul> */}
                    )}
                      </tbody>
                    </table>
                  </div>
                  // </div>
                }
              </Popup>

              <div className='cards__item__info'>
              </div>
            </div>
          </li>
        )}
      </ul>
    </>
  );
}

{/* AllTretmentForuser.filter(x=> x.idMeeting==item.Title).length>0&& */ }
{/* //   <div style={{backgroundColor: 'purple'}}> */ }
{/* //   <h6>פגישה לטיפול באזורים:</h6> */ }
{/* //   <ul> */ }
{/* //     {AllTretmentForuser.filter(x=> x.idMeeting==item.Title).map((item)=> */ }
{/* //     <> */ }
{/* //     <li>{item.nameTypeTretment}</li> */ }
{/* //     </> */ }
{/* //     ) */ }
{/* //   } */ }
{/* //   </ul></div> */ }
{/* //   } */ }