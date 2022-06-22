import produce from "immer";
// import { LoadCurentUser } from "./UserAction";


const userInitialState={
    //מכניס את משתמש הנוכחי
    CurentUser: {name: "plony", statos: 0}, CurentEmployee: {}, CurentSecretary: {}, CurentManager: {},
    //מכניס את כל המשתמשים
    AllUsers: []
}

export const UserReducer=produce((state, action) => {

    switch(action.type)
    {
        //אם נשלחה פעולה של הכנסת או עדכון כל המשתמשים
        case 'LOAD_ALL_USERS':{
            state.AllUsers=action.payload;
            break;
        }

        //אם נשלחה פעולה של עדכון משתמש נוכחי עדכן
        case 'LOAD_CURENT_USER':{
            debugger
            state.CurentUser=action.payload;
            break;
        }

        case 'LOAD_CURENT_EMPLOYEE':{
            state.CurentEmployee=action.payload;
            break;
        }
        case 'LOAD_CURENT_SECRETARY':{
            state.CurentSecretary=action.payload;
            break;
        }
        case 'LOAD_CURENT_MANAGER':{
            state.CurentManager=action.payload;
            break;
        }
    }
}, userInitialState)