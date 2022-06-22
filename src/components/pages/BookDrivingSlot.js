import { dayOfWeek } from "@progress/kendo-date-math";
import { Calendar } from "@progress/kendo-react-dateinputs";
import { useEffect, useRef, useState } from "react";
import '@progress/kendo-theme-default/dist/all.css';
import { useSelector, useDispatch } from "react-redux";
import { GetAllEmployeeSchetule } from "../../redux/Employee/EmployeeThunk";
import { AddAMeeting, AddAMeetingEndTretment, GetMeetingsByUserId } from "../../redux/Meeting/MeetingThunk";
import { GetAllTretmentForUser } from "../../redux/TretmentInSecren/TretmentInSecrenThunk";

//needs to come from db//

const BookDrivingSlot = Props => {

  var meetForTheaEmployees = []
  var AllEmployeeForTheChoisTretment = []
  let myColectEmployee = []
  let m = []
  var myColectTime = Props.sendProps.location.state.HowManyTime
  var myColectSecrens = Props.sendProps.location.state.idSec
  var myColectTretment = Props.sendProps.location.state.idTre
  var freeTime = 15
  let isUpdate = false
  const [times, setTimes] = useState([])
  const [idEmployeeTime, setIdEmployeeTime] = useState([])
  const [i, setI] = useState(-1)
  const dispatch = useDispatch()

  //מביא את כל הפגישות מהסטור
  const AllMeet = useSelector((store) => {
    debugger
    return store.Meeting.AllMeetings
  })

  //לא משומש לביינתים
  const Alltretment = useSelector((store) => {
    debugger;
    return store.Tretment.TypeTretment
  })


  const currentUser = useSelector((store) => {
    debugger
    debugger
    return store.Users.CurentUser
  })

  //בעת טעינת הקומפוננטה וכל כמה דקות זה יפעל שוב
  useEffect(async () => {
    let EmployeeSchetule = await GetAllEmployeeSchetule(dispatch, "")
    debugger
    let meetForUser = await GetMeetingsByUserId(dispatch, "", currentUser.idUser)
    debugger
    let TretmentForUser = await GetAllTretmentForUser(dispatch, "", currentUser.idUser)
    // let t = await GetAllTretmentForUser(dispatch, "",currentUser.idUser)
    myColectEmployee = AllEmployeeForTheChoisTretment
  }, [isUpdate])

  // לעשות את זה לא פה שקובץ 
  // setTimeout(() => {
  //   isUpdate = !isUpdate
  // }, 1000)

  //מביא את המערסת של העובדים מהסטור
  const EmployeeSchetule = useSelector((store) => {
    debugger
    return store.Employee.EmployeeSchedular
  })

  const TypeTretmentForEmployee = useSelector((store) => {
    debugger
    return store.Employee.TypeTretmentForEmployee
  })

  const allmeetForuser = useSelector((store) => {
    debugger
    return store.Meeting.MeetingsForCurentUser
  })

  // בדוק איזה מטפלים יכולים לטפל
  TypeTretmentForEmployee.map((item) => {
    debugger
    console.log(AllEmployeeForTheChoisTretment);
    // if(AllEmployeeForTheChoisTretment.length>0)
    // הבדיקה באן לא מספיקה צריך לבדוק שהמטפל יכול לטפל בכל נטיפןלים שהמשתמש בחר
    if (myColectTretment.includes(item.idTypeTretment))
      debugger
    var flag = true
    var myE = TypeTretmentForEmployee.filter(x => x.idEmployee == item.idEmployee)
    var MyET = []
    myE.map((item) => { MyET.push(item.idTypeTretment) })
    myColectTretment.map((item) => {
      if (MyET.includes(item) == false)
        flag = false
    })
    if (flag) {
      if (AllEmployeeForTheChoisTretment.length > 0) {
        var temp = []
        AllEmployeeForTheChoisTretment.map((item) => { temp.push(item.idEmployee) })
        if (temp.includes(item.idEmployee) == false)
          AllEmployeeForTheChoisTretment.push(item)
      }
      else
        AllEmployeeForTheChoisTretment.push(item)
    }
  }
  )

  const AllTretnentForUser = useSelector((store) => {
    debugger
    return store.TretmentInSecrens.TretmentForCurentUser
  })


  const AddTheMeeting = async () => {
    debugger
    let i = times.findIndex(x => x == selectedTimeSlot)
    let id = idEmployeeTime[i]
    let d = new Date(bookingDate)
    let f = new Date(d)
    let u = new Date(d)
    let fh = (Number)(selectedTimeSlot.substring(0, 2))
    let fm = (Number)(selectedTimeSlot.substring(selectedTimeSlot.indexOf(':') + 1, selectedTimeSlot.indexOf(' ')))
    let uh = (Number)(selectedTimeSlot.substring(selectedTimeSlot.indexOf('-') + 2, selectedTimeSlot.indexOf('-') + 4))
    let um = (Number)(selectedTimeSlot.substring(selectedTimeSlot.indexOf('-') + 5))
    f.setHours(fh)
    f.setMinutes(fm)
    u.setHours(uh)
    u.setMinutes(um)
    console.log(d);
    console.log(f);
    console.log(u);
    let meet = {
      IdEmployee: id,
      IdUser: currentUser.idUser,
      Date: d,
      FromHoure: f,
      UntilHoure: u
    }
    const listTretment = []
    myColectSecrens.map((item, index) => {
      let TretmentInSecrens = {
        IdSecrens: item,
        IdMeeting: null,
        // ????
        Cancald: false,
        // ?????
        NeedsTopay: true,
        Tempecher: 0,
        Notes: "",
        // Date:d,
        // stanceBetweenTretment:0
      }
      listTretment.push(TretmentInSecrens)
    })
    let result = await AddAMeetingEndTretment(dispatch, "", meet, listTretment)
    await console.log(result);
    // isUpdate=!isUpdate
    // let idMett
    // AllMeet.map((item)=>{
    //   let s=new Date(item.Start)
    //   let e=new Date(item.End)
    //   debugger
    //   if(item.TaskID==currentUser.idUser)
    //   if(item.OwnerID==id)
    //     if (d.getDate() == s.getDate() && d.getFullYear() == s.getFullYear() && d.getMonth() == s.getMonth())
    //     if(s.getHours()==f.getHours() && s.getMinutes()==f.getMinutes())
    //     if(e.getHours()==u.getHours() && e.getMinutes()==u.getMinutes())
    //     debugger
    //     idMett=item.Title
    // // })
    // if(result){
    //   debugger





  }
  //פונקציה המחזירה את השעות הפנויות ביום מסוים
  const chooseTheFreeTimesForAMeeting = (e) => {
    debugger
    let i = e.getDay() + 1
    //לוקח את המערכות של המטפל הספציפי וביום הספציפי שהמשתמש בחר
   
    // myColectEmployee=AllEmployeeForTheChoisTretment
    // myColectEmployee.map((item)=>{})
    // let m = []
    // myColectEmployee.map((item) => { m.push(item.idEmployee) })
    let myChoseEmployee = EmployeeSchetule.filter(x => m.includes(x.idEmployee))
    let EmployeeSchetuleInASpesificDay = myChoseEmployee.filter(x => x.day == i)
    //עובר על מערכת של מטפל
    EmployeeSchetuleInASpesificDay.map((item) => {
      debugger
      var fromHoure = new Date(e)
      let temp = new Date(item.fromHoure)
      let temp1 = new Date(item.untilHoure)
      fromHoure.setHours(temp.getHours())
      fromHoure.setMinutes(temp.getMinutes())
      var untilHoure = new Date(e)
      untilHoure.setHours(temp1.getHours())
      untilHoure.setMinutes(temp1.getMinutes())
      var from = fromHoure
      var to = new Date(from)
      var flag = true
      to.setMinutes(to.getMinutes() + myColectTime + freeTime)
      console.log(`from${from}`);
      console.log(`to${to}`);
      console.log(untilHoure);
      console.log(fromHoure);
      while (to.getTime() <= untilHoure.getTime()) {
        //על בל טווח שעות בודק האם אין כבר פגישה בטווח הזה
        meetForTheaEmployees.map((item) => {
          let s = new Date(item.Start)
          let e = new Date(item.End)
          if (((s.getTime() > from.getTime()) && (s.getTime() < (to.getTime()))))
            flag = false
          if (((e.getTime() > (from.getTime())) && (s.getTime() < (to.getTime()))))
            flag = false

          debugger
        })
        debugger
        to.setMinutes(to.getMinutes() + -freeTime)
        if (flag) {
          times.push(`${from.getHours()}:${from.getMinutes()} - ${to.getHours()}:${to.getMinutes()}`)
          debugger
          idEmployeeTime.push(item.idEmployee)
        }
        flag = true
        to.setMinutes(to.getMinutes() + freeTime)
        from = new Date(to)
        to.setMinutes(to.getMinutes() + myColectTime + freeTime)
      }
    })
  }

  // פונקציה המחליפה את המטפל לפי בחירת המשתמש
  function changeForAspesifficEmployee(e, item) {
    debugger
    myColectEmployee=  AllEmployeeForTheChoisTretment
    if (e.target.checked) {
      myColectEmployee = []
      myColectEmployee.push(item)
    }
  }

  const pickSlotTimes = times => {
    console.log(Props.sendProps.location);
    return times;
  }

  const [bookingDate, setBookingDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [bookingTimes, setBookingTimes] = useState([]);
  const timeSlotCacheRef = useRef(new Map());

  useEffect(() => {
    // Bail out if there is no date selected
    if (!bookingDate) return;
    let newBookingTimes = timeSlotCacheRef.current.get(
      bookingDate.toDateString()
    );

    newBookingTimes = pickSlotTimes(times);
    timeSlotCacheRef.current.set(bookingDate.toDateString(), newBookingTimes);

    setBookingTimes(newBookingTimes);
  }, [bookingDate]);

  const onDateChange = e => {
    setSelectedTimeSlot(null);
    times.splice(0, times.length)
    idEmployeeTime.splice(0, idEmployeeTime.length)
    debugger
    AllTretnentForUser.map((item) => {
      debugger
      if (item.cancald == false) {
        if (myColectSecrens.includes(item.idSecrens)) {
          let d = new Date(item.date)
          d.setDate(d.getDate() + item.distanceBetweenTretment)
          if (d.getDate() >= e.value.getDate() && d.getFullYear() >= e.value.getFullYear() && d.getMonth() >= e.value.getMonth()) {
            alert('התור מדי קרוב לתור הקודם')
            // לעשות FLAG
            return;
          }
        }
      }
    })
    debugger
    m = []
    // if (myColectEmployee != undefined && myColectEmployee.length > 0)
      myColectEmployee.forEach(element => {
        let d = element.idEmployee
        m.push(d)
      });
    // myColectEmployee.map((item)=>{m.push()})

    //לוקח את הפגישות שיש למטפל באותו יום
    AllMeet.map((item) => {
      let d = new Date(item.Start)
      if (m.includes(item.OwnerID))
        if (d.getDate() == e.value.getDate() && d.getFullYear() == e.value.getFullYear() && d.getMonth() == e.value.getMonth())
          meetForTheaEmployees.push(item)
    })
    chooseTheFreeTimesForAMeeting(e.value)
    setBookingDate(e.value);
  };

  return (
    <div className="k-my-8" style={{ marginTop: '5%' }}>

      {/* <div style={{marginRight:'10%', direction:'rtl'}}> */}

      {/* בחר מטפל */}
      <div style={{ marginRight: '10%', direction: 'rtl', marginTop: '5%' }}>
        <div class="page__section1234 page__custom123-settings">
          <div class="page__toggle123">
            <span class="toggle__label123">
              <span class="toggle__text123" >בחר מטפל:</span>
            </span>
          </div>
        </div>
        {AllEmployeeForTheChoisTretment.map((item) =>
          <>
            <div class="page__section1234 page__custom123-settings">
              <div class="page__toggle123">
                <label class="toggle123">
                  <input class="toggle__input123" onChange={(e) => changeForAspesifficEmployee(e, item)} name='employee' type="radio" />
                  <span class="toggle__label123">
                    <span class="toggle__text123">{`${item.firstNameEmployee} ${item.lastNameEmployee}`}</span>
                  </span>
                </label>
              </div>
            </div>
          </>
        )}
        <div class="page__section1234 page__custom123-settings">
          <div class="page__toggle123">
            <label class="toggle123">
              <input class="toggle__input123" id='all' onChange={(e, item) => changeForAspesifficEmployee(e, AllEmployeeForTheChoisTretment)} defaultChecked name='employee' type="radio" />
              <span class="toggle__label123">
                <span class="toggle__text123">לא משנה לי איזה מטפל</span>
              </span>
            </label>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '-14%', marginLeft: '20%' }}>
        <div class="page__section1234 page__custom123-settings">
          <div class="page__toggle123">
            <span class="toggle__label123">
              <span class="toggle__text123" >בחר תאריך ולאחר מכן שעה</span>
            </span>
          </div>
        </div><br></br><br></br>
        <div className="k-flex k-display-flex k-mb-4">
          <Calendar value={bookingDate} onChange={onDateChange} />
          <div className="k-ml-4 k-display-flex k-flex-col">
            {times.map((time) => {
              return (
                <button
                  key={time}
                  className="k-button k-mb-4"
                  onClick={e => setSelectedTimeSlot(time)}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>

        {bookingDate && selectedTimeSlot ? (
          <div>
            <button onClick={() => AddTheMeeting()}>
              {`בשעה: ${selectedTimeSlot} לחץ לזימון תור זה ${bookingDate.toDateString()} :בחרת טיפול בתאריך`}
            </button>
          </div>

          // {
          /* <div>
        <button  class="fancyOK">
          <span class="top-keyOK"></span>
          <button style={{border:'none', background:'none', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif'}} class="">
        
        </button>
          <span class="bottom-keyOK-1"></span>
          <span class="bottom-keyOK-2"></span>
        </button>
        </div> */
          // }
        ) : null}
      </div>
    </div>
  );
};

export default BookDrivingSlot;