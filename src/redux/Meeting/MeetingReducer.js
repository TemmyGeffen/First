import produce from "immer";


const meetingInitialState={
    //מכניס את כל הפגישות
    AllMeetings: [] , colors: ['rgb(107, 7, 87)','rgb(235, 28, 193)'], MeetingsForCurentUser: []
}

// const changeToCalanderObject=()=>{

// }

export const MeetingReducer=produce((state, action) => {

    switch(action.type)
    {
        //אם נשלחה פעולה של הכנסת או עדכון כל הפגישות
        case 'LOAD_ALL_MEETINGS':{
            // const func=()=>{
            //     alert('gggg')

            // }
            state.AllMeetings=[]
            action.payload.map((item)=>{
            const obj={
                TaskID: item.idUser,
                OwnerID: item.idEmployee,
                Title: item.firstNameUser+' '+item.lastNameUser,
                // Title: <button onClick={func}>לפרטים נוספים</button>,
                Description: item.fromHoure+'-'+item.untilHoure,
                // Description: "gggg",
                IdMeeting: item.idMeeting,
                StartTimezone: null,
                Start: item.fromHoure,
                End: item.untilHoure,
                EndTimezone: null,
                RecurrenceRule: null,
                RecurrenceID: null,
                RecurrenceException: null,
                isAllDay: false
            }
            console.log(obj);
            state.AllMeetings.push(obj)
        })
            break;
        }

         //אם נשלחה פעולה של הכנסת או עדכון כל הפגישות
         case 'LOAD_MEETINGS_FOR_CURENT_USER':{
            state.MeetingsForCurentUser=[]
            action.payload.map((item)=>{
            const obj={
                TaskID: state.AllMeetings.length+1,
                OwnerID: item.idEmployee,
                Title: item.idMeeting,
                Description: item.firstNameEmployee+' '+item.lastNameEmployee,
                StartTimezone: null,
                Start: item.fromHoure,
                End: item.untilHoure,
                EndTimezone: null,
                RecurrenceRule: null,
                RecurrenceID: null,
                RecurrenceException: null,
                IdMeeting: item.idMeeting,
                isAllDay: false
            }
            console.log(obj);
            state.MeetingsForCurentUser.push(obj)
        })
            break;
        }
        case 'ADD_MEETING':{
            action.payload.map((item)=>{
                debugger;
            const obj={
                TaskID: 4,
                OwnerID: item.RoomID,
                Title: item.Title,
                Description: "",
                StartTimezone: null,
                Start: (Date)(item.Start),
                End: item.End,
                EndTimezone: null,
                RecurrenceRule: null,
                RecurrenceID: null,
                IdMeeting: item.idMeeting,
                RecurrenceException: null,
                isAllDay: item.isAllDay
            }
            console.log(obj);
            state.AllMeetings.push(obj)
        })
            break;
         }
    }
}, meetingInitialState)