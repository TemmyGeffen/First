
export function LoadTypeTretment(item) {
    console.log(item);
    debugger;
    return{type: 'LOAD_TYPETRETMENT', payload: item}
}

export function LoadAllMeetings(item){
    console.log(item);
    return {type:"LOAD_ALL_MEETINGS", payload:item}
}