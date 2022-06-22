import axios from "axios";
import { LoadAllMeetings, LoadMeetingsForCurentUser } from "./MeetingAction";

//ניתוב לפגישות
let UrlMeetinngs=`https://localhost:44308/api/Meeting/`


//פונקציה לקבלת כל הפגישות והכנסה לסטור
export const GetAllMeetings= async(dispatch, getState)=>{
    try{
        debugger;
        let AllMeetings= await axios.get(`${UrlMeetinngs}GetAllMeeting`)
        await console.log(AllMeetings.data);
        await dispatch(LoadAllMeetings(AllMeetings.data))
        return AllMeetings.data
    }catch(e){
        console.log(e);
    }

}

export const GetMeetingsByUserId= async(dispatch, getState, id)=>{
    try{
        debugger;
        let AllMeetingsForUser= await axios.get(`${UrlMeetinngs}GetMeetingsByUserId/${id}`)
        await console.log(AllMeetingsForUser.data);
        await dispatch(LoadMeetingsForCurentUser(AllMeetingsForUser.data))
        return AllMeetingsForUser.data
    }catch(e){
        console.log(e);
    }

}



// פונקציה להוספת פגישה והכנסה לסטור
//את כל הפגישות המעודכנות
export const AddAMeeting= async(dispatch, getState, meet)=>{
    try{
        debugger;
    //      //בנית משתנים בעלי תאריכים מתאימים לפי בקשת המשתמש
    //     const d=new Date(m[0].Start.getFullYear(), m[0].Start.getMonth(), m[0].Start.getDate())
    //     const d1=new Date(m[0].Start.getFullYear(), m[0].Start.getMonth(), m[0].Start.getDate(),m[0].Start.getHours(),m[0].Start.getMinutes())
    //     const d2=new Date(m[0].End.getFullYear(), m[0].End.getMonth(), m[0].End.getDate(),m[0].End.getHours(), m[0].End.getMinutes())
    //     console.log(d);
    //     console.log(d1);
    //     console.log(d2);
    //     let meet ={
    //         IdEmployee: m[0].RoomID,
    //         IdUser: (Number)(m[0].Title),
    //         Date: d,
    //         FromHoure: d1,
    //         UntilHoure: d2
    //    }
    //    console.log(meet);
    //    debugger;
        let AllMeetings= await axios.post(`${UrlMeetinngs}AddAMeeting`, meet)
        debugger;
        await console.log(AllMeetings.data);
        //איך אני ידע אם זה הוסיף 
        await dispatch(LoadAllMeetings(AllMeetings.data))
        return AllMeetings.data
    }catch(e){
        console.log(e);
    }
}


    // פונקציה לעדכון פגישה והכנסה לסטור
    //את כל הפגישות המעודכנות
    export const UpdateAMeeting= async(dispatch, getState, m)=>{
        try{
            debugger;
            //בנית משתנים בעלי תאריכים מתאימים לפי בקשת המשתמש
            const d=new Date(m[0].Start.getFullYear(), m[0].Start.getMonth(), m[0].Start.getDate())
            const d1=new Date(m[0].Start.getFullYear(), m[0].Start.getMonth(), m[0].Start.getDate(),m[0].Start.getHours(),m[0].Start.getMinutes())
            const d2=new Date(m[0].End.getFullYear(), m[0].End.getMonth(), m[0].End.getDate(),m[0].End.getHours(), m[0].End.getMinutes())
            console.log(d);
            console.log(d1);
            console.log(d2);
            let meet ={
                IdMeeting: m[0].Title,
                IdEmployee: m[0].RoomID,
                IdUser: 5,
                Date: d,
                FromHoure: d1,
                UntilHoure: d2
        }
        console.log(meet);
        debugger;
            let AllMeetings= await axios.put(`${UrlMeetinngs}UpdateAMeeting`, meet)
            debugger;
            await console.log(AllMeetings.data);
            await dispatch(LoadAllMeetings(AllMeetings.data))
            return AllMeetings.data
        }catch(e){
            console.log(e);
        }
    }


    // פונקציה למחיקת פגישה והכנסה לסטור
    //את כל הפגישות המעודכנות
    export const DeleteAMeeting= async(dispatch, getState, m)=>{
        try{
        debugger;
            let AllMeetings= await axios.delete(`${UrlMeetinngs}DeleteAMeeting/${m[0].Title}`)
            debugger;
            await console.log(AllMeetings.data);
            await dispatch(LoadAllMeetings(AllMeetings.data))
            return AllMeetings.data
        }catch(e){
            console.log(e);
        }
    }

    export const DeleteAMeetingAndAllTheTretment= async(dispatch, getState, id)=>{
        try{
        debugger;
            let AllMeetings= await axios.delete(`${UrlMeetinngs}DeleteAMeetingAndAllTheTretment/${id}`)
            debugger;
            await console.log(AllMeetings.data);
            await dispatch(LoadMeetingsForCurentUser(AllMeetings.data))
            return AllMeetings.data
        }catch(e){
            console.log(e);
        }
    }


    export const AddAMeetingEndTretment= async(dispatch, getState, meet, listTretment)=>{
        try{
            debugger;
            let AllMeetings= await axios.post(`${UrlMeetinngs}AddAMeetingEndTretment`, meet, listTretment)
            debugger;
            await console.log(AllMeetings.data);
            await dispatch(LoadAllMeetings(AllMeetings.data))
            return AllMeetings.data
        }catch(e){
            console.log(e);
        }
    }
    