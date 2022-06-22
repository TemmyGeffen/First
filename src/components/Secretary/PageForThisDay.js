import { MeetingCalander } from "./CalanderForAllMeet"
import { GetAllMeetings } from "../../redux/Meeting/MeetingThunk";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { GetAllEmployeeSchetule } from "../../redux/Employee/EmployeeThunk";
import { useSelector } from "react-redux";
import { GetAllTretment } from "../../redux/TretmentInSecren/TretmentInSecrenThunk";

export const PageForThisDay = () => {

    function reg(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    const today = Date.now();
    const [serchedMeet, setSerchedMeet] = useState('')
    const EmployeeSchetule = useSelector((store) => {
        debugger
        return store.Employee.EmployeeSchedular
    })
    const AllMeet = useSelector((store) => {
        return store.Meeting.AllMeetings
    })

    const AllTretment = useSelector((store) => {
        return store.TretmentInSecrens.AllTretment
    })
    const obj = []

    let i = 1.1
    let m=[]
    EmployeeSchetule.map((item, index) => {
        i -= 0.2
        debugger
        console.log(new Date(today).getDay());
        if (item.day == new Date(today).getDay() + 1) {
            let newObj = {
                text: `${item.firstName} ${item.lastName}`,
                value: item.idEmployee,
                color: reg(57, 1, 90, i)
            }
            
            if (m.includes(newObj.value) == false)
            {
                obj.push(newObj)
                m.push(item.idEmployee)
            }
        }

    })
    const list = []
    AllMeet.map((item) => {
        let Start = new Date(item.Start)
        let t = new Date(today)
        if (Start.getFullYear() == t.getFullYear() && Start.getMonth() == t.getMonth() && Start.getDate() == t.getDate())
            list.push(item)
    })
    function func(e) {
        debugger;
        var filter, td, i;
        filter = e.target.value.toUpperCase();
        for (i = 0; i < list.length; i++) {
            td = list[i].Title;
            if (td) {
                // var txtValue = td.textContent || td.innerText;
                if (filter != '') {
                    if (td.toUpperCase().indexOf(filter) > -1) {
                        let s = AllTretment.filter(x => x.idMeeting == list[i].IdMeeting)
                        serchedMeet.push({ title: list[i].Title, moreDitails: s })
                    }
                } else {
                    setSerchedMeet('')

                }
            }
        }
    }


    const dispatch = useDispatch();
    useEffect(async () => {
        debugger;
        let m = await GetAllMeetings(dispatch, "")
        let s = await GetAllEmployeeSchetule(dispatch, "")
        let t = await GetAllTretment(dispatch, "")
    }, [])

    return <>
        <input onChange={(e) => func(e)} placeholder='serch by user name'  ></input>
        <div>
            {serchedMeet != '' &&
                <>
                {serchedMeet.map((item)=>
                <>
                    <h3>{item.title}</h3>
                    {item.moreDitails.length > 0 &&
                        <>
                            <label>טיפול באזור</label>
                            <ul class="more-content ulUser">
                                {item.moreDitails.map((i) =>
                                    <li class="liUser">{i.nameTypeTretment}</li>
                                )}
                            </ul>
                        </>

                    }
                </>
                )}
                </>
            }
        </div>
        <MeetingCalander obj={obj}></MeetingCalander>
    </>
}
