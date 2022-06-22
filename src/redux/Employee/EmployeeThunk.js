import axios from "axios";
import { LoadAllEmployee, LoadAllEmployeeSchedular} from "./EmployeeAction";
import {LoadAllTypeTretmentForEmployee, LoadAllTypeTretmentForEmployeeById} from './EmployeeAction'

let UrlGetAllEmployeeSchetule=`https://localhost:44308/api/EmployeeSchetule/GetAllEmployeeSchetule`

//פונקציה לקבלת המערבת של כל העובדים
export const GetAllEmployeeSchetule= async(dispatch, getState)=>{
    try{
        debugger;
        let AllEmployeeSchetule= await axios.get(UrlGetAllEmployeeSchetule)
        await console.log(AllEmployeeSchetule.data);
        await dispatch(LoadAllEmployeeSchedular(AllEmployeeSchetule.data))
        return AllEmployeeSchetule.data
    }catch(e){
        console.log(e);
    }}

    let UrlGetAllTypeTretmentForEmploye=`https://localhost:44308/api/TypeTretmentForEmploye/GetAllTypeTretmentForEmploye`

//פונקציה לקבלת המערבת של כל העובדים
export const GetAllTypeTretmentForEmploye= async(dispatch, getState)=>{
    try{
        debugger;
        let AllTypeTretmentForEmployee= await axios.get(UrlGetAllTypeTretmentForEmploye)
        await console.log(AllTypeTretmentForEmployee.data);
        await dispatch(LoadAllTypeTretmentForEmployee(AllTypeTretmentForEmployee.data))
        return AllTypeTretmentForEmployee.data
    }catch(e){
        console.log(e);
    }}

    let UrlDeletTypeTretmentForEmploye=`https://localhost:44308/api/TypeTretmentForEmploye/DeleteTypeTretmentForEmployeById`

    export const DeleteTypeTretmentForEmploye= async(dispatch, getState, arrId)=>{
        try{
            debugger;
            let AllTypeTretmentForEmployee= await axios.delete(`${UrlDeletTypeTretmentForEmploye}/${arrId}`)
            debugger
            await console.log(AllTypeTretmentForEmployee.data);
            debugger
            await dispatch(LoadAllTypeTretmentForEmployee(AllTypeTretmentForEmployee.data))
            return AllTypeTretmentForEmployee.data
        }catch(e){
            console.log(e);
        }}

        let UrlAddTypeTretmentForEmploye=`https://localhost:44308/api/TypeTretmentForEmploye/AddTypeTretmentForEmploye`

        export const AddTypeTretmentForEmploye= async(dispatch, getState, arr)=>{
            try{
                debugger;
                let AllTypeTretmentForEmployee= await axios.post(UrlAddTypeTretmentForEmploye, arr)
                await console.log(AllTypeTretmentForEmployee.data);
                await dispatch(LoadAllTypeTretmentForEmployee(AllTypeTretmentForEmployee.data))
                return AllTypeTretmentForEmployee.data
            }catch(e){
                console.log(e);
            }}

    let UrlGetAllEmployee=`https://localhost:44308/api/Employee/GetAllEmployee`

    export const GetAllEmployee= async(dispatch, getState)=>{
        try{
            debugger;
            let AllEmployee= await axios.get(UrlGetAllEmployee)
            await console.log(AllEmployee.data);
            await dispatch(LoadAllEmployee(AllEmployee.data))
            return AllEmployee.data
        }catch(e){
            console.log(e);
        }}

        let UrlGetAllTypeTretmentForEmployeById=`https://localhost:44308/api/TypeTretmentForEmploye/GetAllTypeTretmentForEmployeById`

        export const GetAllTypeTretmentForEmployeById= async(dispatch, getState, id)=>{
            try{
                debugger;
                let AllTypeTretmentForEmployee= await axios.get(`${UrlGetAllTypeTretmentForEmployeById}/${id}`)
                await console.log(AllTypeTretmentForEmployee.data);
                debugger;
                await dispatch(LoadAllTypeTretmentForEmployeeById(AllTypeTretmentForEmployee.data))
                return AllTypeTretmentForEmployee.data
            }catch(e){
                console.log(e);
            }}