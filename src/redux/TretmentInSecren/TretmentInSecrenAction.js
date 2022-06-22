export function LoadTretmentForUser(item){
    console.log(item);
    return {type:"LOAD_TRETMENT_FOR_USER", payload:item}
}
export function LoadTretment(item){
    console.log(item);
    return {type:"LOAD_TRETMENT", payload:item}
}