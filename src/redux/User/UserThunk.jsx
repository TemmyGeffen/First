import axios from "axios";
import { LoadCurentUser, LoadAllUsers, LoadCurentEmployee, LoadCurentSecretary, LoadCurentManager } from "./UserAction";


//ניתוב לקבל את כל  המשתמש
export const urlGetAllUsers = `https://localhost:44308/api/User/GetAllUser`;

export const GetAllUsers = async (dispatch) => {
    try {
        debugger;
        const AllUsers = await axios.get(`${urlGetAllUsers}`);
        await console.log(AllUsers.data);
        debugger
        await dispatch(LoadAllUsers(AllUsers.data))
        return AllUsers.data;
    } catch (e) {
        console.log(e);
    }
}

//ניתוב לקבל משתמש לפי שם וסיסמה
let urlGetUserByNameAndPass = `https://localhost:44308/api/User/GetUserByNameAndPass/`;

//
export const GetUserByNameAndPass = async (dispatch, getState, name, pass) => {
    try {
        debugger;
        const UserByNameAndPass = await axios.get(`${urlGetUserByNameAndPass}${name}/${pass}`);
        await console.log(UserByNameAndPass.data);
        //הכנס לסטור רק אם מצאת כזה משתמש
        if (UserByNameAndPass.data != '')
            if (UserByNameAndPass.data.statos == 1) {
                await dispatch(LoadCurentManager(UserByNameAndPass.data))
            }
            else
                if (UserByNameAndPass.data.statos == 2) {
                    debugger
                    await dispatch(LoadCurentEmployee(UserByNameAndPass.data))
                }
                else
                    if (UserByNameAndPass.data.statos == 3) {
                        await dispatch(LoadCurentSecretary(UserByNameAndPass.data))
                    }
                    else
                        await dispatch(LoadCurentUser(UserByNameAndPass.data))
        return UserByNameAndPass.data;
    } catch (e) {
        console.log(e);
    }
}

//ניתוב להוספת משתמש
let urlAddUser = `https://localhost:44308/api/User/AddUser`;

//פונקציה השולחת לסרוור להוספת משתמש ומחזירה את המשתמשים העדכניים
export const AddUser = async (dispatch, getState, u) => {
    try {
        debugger;
        const ActivUsers = await axios.post(urlAddUser, u);
        await console.log(ActivUsers.data);
        // הכנס לסטור רק אם הוספת בהצלחה משתמש זה
        if (ActivUsers.data != '')
            //שלב ראשון זהה אותו כמשתמש נוכחי
            await dispatch(LoadCurentUser(u))
        //שלב שני עדכן את רשימת הלקוחות
        debugger;
        await dispatch(LoadAllUsers(ActivUsers.data))
        return ActivUsers.data;
    } catch (e) {
        console.log(e);
    }
}

