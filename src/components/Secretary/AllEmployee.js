import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetAllUsers } from "../../redux/User/UserThunk";
import './sherch.css'
import { LoadCurentEmployee, LoadCurentUser } from "../../redux/User/UserAction";
import { GetAllEmployee } from "../../redux/Employee/EmployeeThunk";
import {GetAllTypeTretmentForEmployeById } from "../../redux/Employee/EmployeeThunk";


export const AllEmployee = ({ history }) => {

    const dispatch = useDispatch();

    function search(input, table, index) {
        debugger;
        var filter, tr, td, i;
        filter = input.value.toUpperCase();
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[index];
            if (td) {
                var txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
  
    // החזרת כל המשתמשים מהסטור
    const GetAllUsersFromStor = useSelector((store) => {
        debugger;
        return store.Users.AllUsers
    })

    const GetAllEmployeeFromStor = useSelector((store) => {
        debugger;
        return store.Employee.AllEmployee
    })

    const sendToTretmentForEmployee= async(item)=>{
        debugger
        let employee=GetAllEmployeeFromStor.filter(x=> x.idUser==item.idUser)
        if(employee.length>0){
            let id=employee[0].idEmployee
            await func(id)
        }
        dispatch(LoadCurentEmployee(item))
        history.push({ pathname: "/TypeTretmentForEmployee"})
        // }
    }
    const func =async(id)=>{
        let u = await GetAllTypeTretmentForEmployeById(dispatch, "",id)
        await console.log(u);
    }


    useEffect(async () => {
        debugger;
        let u = await GetAllEmployee(dispatch,"")
        console.log(u);
    }, [])

    // let e=GetAllUsersFromStor.filter(x=> x.statos==0)
       //החזרת כל המשתמשים בעת טעינת הקומפוננטה
    // useEffect(async () => {
    //     debugger;
    //     //שולח לקובץ הזנק לקבל את כל המשתמשים
    //     let u = await GetAllUsers(dispatch)
    //     console.log(u);
    // }, [])

    // const y = [...GetAllUsersFromStor]
    // const [users, setUsers] = useState(y.filter(x=>x.statos==0))
    // GETALL יחזיר סטטוס לכל משתמש
    // const [users, setUsers]=useState(GetAllUsersFromStor.filter(x=> x.statos==0))


    return <>
       
        <div class="containerTable12" style={{marginTop:'5%'}}>
            <table class="table12">
                <thead class="theadtable12">
                    <tr class="trTable12">
                        <th> <div style={{ marginTop: '0%', marginRight: '0%' }} class="containerSearch">
                            <input class="inputSearch" type="text" onChange={(e) => search(e.target, e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement, 6)} placeholder="Search..." />
                            <div class="searchDIV"></div>
                        </div></th>
                        <th><input placeholder="sherch" onChange={(e) => search(e.target, e.currentTarget.parentElement.parentElement.parentElement.parentElement, 5)} /></th>
                        <th><input placeholder="sherch" onChange={(e) => search(e.target, e.currentTarget.parentElement.parentElement.parentElement.parentElement, 4)} /></th>
                        <th><input/></th>
                        <th><input/></th>
                        {/* <th><input/></th> */}
                        {/* <th><input/></th> */}
                    </tr>
                    <tr class="trTable12">
                        {/* <th class="thTable12">פגישות שלו</th> */}
                        <th class="thTable12">טיפולים</th>
                        <th class="thTable12">מערכת שעות</th>
                        {/* <th class="thTable12">משכורת לשעה</th> */}
                        <th class="thTable12">דואר אלקטרוני</th>
                        <th class="thTable12">שם משפחה</th>
                        <th class="thTable12">שם פרטי</th>
                    </tr>
                </thead>
                <tbody class="tbodyTable12">
                    {GetAllUsersFromStor.map((item) =>
                        <tr class="trTable12">
                            {/* <td class="tdTable12"><input type='button' /></td> */}
                            <td class="tdTable12"><input type='button'onClick={()=>sendToTretmentForEmployee(item)} /></td>
                            <td class="tdTable12"><input type='button'/></td>
                            {/* <td class="tdTable12">{GetAllEmployeeFromStor.filter(x=> x.idUser==item.idUser)[0].saleryPerHuoer}</td> */}
                            <td class="tdTable12">{item.email}</td>
                            <td class="tdTable12">{item.lastName}</td>
                            <td class="tdTable12">{item.firstName}</td>

                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </>
}
