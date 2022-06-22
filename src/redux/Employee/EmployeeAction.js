export function LoadAllEmployeeSchedular(item){
    console.log(item);
    return {type:"LOAD_ALL_EMPLOYEE_SCHEDULAR", payload:item}
}

export function LoadAllTypeTretmentForEmployee(item){
    console.log(item);
    return {type:"LOAD_ALL_TYPE_TRETMENT_FOR_EMPLOYEE", payload:item}
}
export function LoadAllEmployee(item){
    console.log(item);
    return {type:"LOAD_ALL_EMPLOYEE", payload:item}
}
export function LoadAllTypeTretmentForEmployeeById(item){
    console.log(item);
    return {type:"LOAD_ALL_TYPE_TRETMENT_FOR_EMPLOYEE_BY_ID", payload:item}
}