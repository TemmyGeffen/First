
//פעולה להכנסת רשימת הפגישות
export function LoadAllMeetings(item){
    console.log(item);
    return {type:"LOAD_ALL_MEETINGS", payload:item}
}
export function AddMeetings(item){
    debugger;
    console.log(item);
    return {type:"ADD_MEETING", payload:item}
}

export function LoadMeetingsForCurentUser(item){
    console.log(item);
    return {type:"LOAD_MEETINGS_FOR_CURENT_USER", payload:item}
}


