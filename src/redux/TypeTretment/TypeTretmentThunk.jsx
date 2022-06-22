
import axios from 'axios';
import {LoadTypeTretment} from './TypeTretmentAction'
let urlGetAllTypeTretment =`https://localhost:44308/api/TypeTretment/GetAllTypeTretment`
export const GetAllTypeTretment= async(getState, dispatch)=>{
    try{
        debugger;
        const allTypeTretment = await axios.get(urlGetAllTypeTretment)
        await console.log(allTypeTretment.data);
        debugger;
        await dispatch(LoadTypeTretment(allTypeTretment.data))
        return allTypeTretment.data
    }
    catch(e){
        console.log(e);
    }
}