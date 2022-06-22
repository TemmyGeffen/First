import axios from "axios";
import {LoadTretmentForUser, LoadTretment} from './TretmentInSecrenAction'

let UrlGetTretmentForUser=`https://localhost:44308/api/TretmentInSecren/GetAllTretmentSecrenForUser`

export const GetAllTretmentForUser= async(dispatch, getState, id)=>{
    try{
        debugger;
        let AllTretmentForUser= await axios.get(`${UrlGetTretmentForUser}/${id}`)
        await console.log(AllTretmentForUser.data);
        await dispatch(LoadTretmentForUser(AllTretmentForUser.data))
        return AllTretmentForUser.data
    }catch(e){
        console.log(e);
    }}

let UrlGetTretment=`https://localhost:44308/api/TretmentInSecren/GetAllTretmentInSecren`

    export const GetAllTretment= async(dispatch, getState)=>{
        try{
            debugger;
            let AllTretment= await axios.get(UrlGetTretment)
            await console.log(AllTretment.data);
            await dispatch(LoadTretment(AllTretment.data))
            return AllTretment.data
        }catch(e){
            console.log(e);
        }}