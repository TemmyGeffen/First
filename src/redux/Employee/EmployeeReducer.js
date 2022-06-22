import produce from "immer";

const EmployeeInitialState={
    
    EmployeeSchedular: [], TypeTretmentForEmployee: [], AllEmployee: [], TypeTretmentForCurentEmployee:[]
}

export const EmployeeReducer=produce((state, action) => {

    switch(action.type)
    {
       
        //אם נשלחה פעולה של הכנסת או עדכון כל המשתמשים
        case 'LOAD_ALL_EMPLOYEE_SCHEDULAR':{
            debugger
            state.EmployeeSchedular=action.payload;
            break;
        }
        case 'LOAD_ALL_TYPE_TRETMENT_FOR_EMPLOYEE':{
            debugger
            state.TypeTretmentForEmployee=action.payload;
            break;
        }
        case 'LOAD_ALL_EMPLOYEE':{
            debugger
            state.AllEmployee=action.payload;
            break;
        }
        case 'LOAD_ALL_TYPE_TRETMENT_FOR_EMPLOYEE_BY_ID':{
            debugger
            state.TypeTretmentForCurentEmployee=action.payload;
            break;
        }
    }
}, EmployeeInitialState)