export function LoadAllSecrensForUser(item){
    console.log(item);
    return {type:"LOAD_ALL_SECRENS_FOR_USER", payload:item}
}