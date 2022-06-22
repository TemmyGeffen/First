import axios from "axios";
import { LoadAllSecrensForUser } from './SecrensAction'
let UrlGetAllSecrensForUser = `https://localhost:44308/api/Secren/GetAllSecrenByUserId`

export const GetAllSecrensForUser = async (dispatch, getState, id) => {
    try {
        debugger;
        let AllSecrensForUser = await axios.get(`${UrlGetAllSecrensForUser}/${id}`)
        await console.log(AllSecrensForUser.data);
        await dispatch(LoadAllSecrensForUser(AllSecrensForUser.data))
        return AllSecrensForUser.data
    } catch (e) {
        console.log(e);
    }
}


let UrlAddASecrens = `https://localhost:44308/api/Secren/AddSecren`

export const AddASecrens = async (dispatch, getState, u) => {
    try {
        debugger;
        let AddSecren = await axios.post(UrlAddASecrens, u)
        debugger
        await console.log(AddSecren.data);
        return AddASecrens.data
    }
    catch (e) {
        debugger
        console.log(e);
    }
}