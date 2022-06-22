import AddAppontmentCalender from "./AddAppontmentCalender"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { GetAllTypeTretmentForEmploye } from "../../redux/Employee/EmployeeThunk"


export const NewSecrenceMeeting=()=>{


    const dispatch=useDispatch()
    useEffect(async ()=>{
        debugger
    //צריך להעביר את זה
    let e= await GetAllTypeTretmentForEmploye(dispatch, "")
    },[])

    let idTypeTretment=5
    let time=15
    let idSecrens=[]
    let idTretment=[idTypeTretment]
    const state={HowManyTime: time, Employee: [1,2], idSec: idSecrens, idTre: idTretment}
    const location={state}
    // history.push({ pathname: "/AddAppontmentCalender", state: {HowManyTime: time, Employee: [1,2], idSec: idSecrens, idTre: idTretment}})
   return<div>
    <AddAppontmentCalender location={location}/>
    </div>
    

}
   