//פעולה לשליחת המשתמש הנוכחי
export function LoadCurentUser(item){
    debugger
    console.log(item);
    return {type:"LOAD_CURENT_USER", payload:item}
}

//פעולה להכנסת רשימת המשתמשים
export function LoadAllUsers(item){
    debugger
    console.log(item);
    return {type:"LOAD_ALL_USERS", payload:item}
}

export function LoadCurentEmployee(item){
    debugger
    console.log(item);
    return {type:"LOAD_CURENT_EMPLOYEE", payload:item}
}
export function LoadCurentSecretary(item){
    debugger
    console.log(item);
    return {type:"LOAD_CURENT_SECRETARY", payload:item}
}

export function LoadCurentManager(item){
    debugger
    console.log(item);
    return {type:"LOAD_CURENT_MANAGER", payload:item}
}