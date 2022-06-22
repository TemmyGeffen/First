import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetAllUsers } from "../../redux/User/UserThunk";
import './sherch.css'
import { LoadCurentUser } from "../../redux/User/UserAction";

export const AllUsers = ({ history }) => {

    const dispatch = useDispatch();

    const CurentManager=useSelector((store)=>{
        debugger
        return store.Users.CurentManager
      })
    //האם נכון לנהל ככה את הגישות לשרת
    // לקחת משירה את פונקציית החיפוש
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
    let e=GetAllUsersFromStor.filter(x=> x.statos==0)
    const goToStatos = (item) => {
        debugger
        dispatch(LoadCurentUser(item))
        history.push({ pathname: "/status"})

    }
    const goToMetingHistory = (item) => {
        debugger
        dispatch(LoadCurentUser(item))
        history.push({ pathname: "/MeetingHistory" })

    }
    const goToAddASecrense = (item) => {
        debugger
        dispatch(LoadCurentUser(item))
        if(CurentManager.statos==1)
            history.push({ pathname: "/AddSecrens" })
        else
            history.push({ pathname: "/NewSecrenceMeeting" })
    }
    const goToAddAMeeting = (item) => {
        debugger
        dispatch(LoadCurentUser(item))
        history.push({ pathname: "/services" })

    }
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
        {/* <input placeholder="sherch" onChange={(e) => search(e.target, e.currentTarget.nextElementSibling, 1)}></input> */}
        {/* <input placeholder="sherch" onChange={(e) => search(e.target, e, 0)}></input> */}
        {/* <div class="containerTable2" style={{ marginTop: '10%' }}>
            <table class="teble11" style={{ direction: 'rtl' }}>
                <thead class="theadTable1">
                    <tr class="trTable1">
                        <th >
                            <div style={{ marginTop: '0%', marginRight: '0%' }} class="containerSearch">
                                <input class="inputSearch" type="text" onChange={(e) => search(e.target, e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement, 0)} placeholder="Search..." />
                                <div class="searchDIV"></div>
                            </div>
                        </th>
                        <th><input placeholder="sherch" onChange={(e) => search(e.target, e.currentTarget.parentElement.parentElement.parentElement.parentElement, 1)} /></th>
                        <th><input placeholder="sherch" onChange={(e) => search(e.target, e.currentTarget.parentElement.parentElement.parentElement.parentElement, 2)} /></th>
                    </tr>
                    <tr class="trTable1">
                        <th>שם פרטי</th>
                        <th>שם משפחה</th>
                        <th>דואר אלקטרוני</th>
                        <th>סטטוס</th>
                        <th>הסטוריית פגישות</th>
                        <th>הוספת תור לטיפול</th>
                        <th> הוספת סדרה חדשה</th>
                    </tr>
                </thead>

                <tbody>
                    {GetAllUsersFromStor.map((item) =>
                        <tr class="trTable1">
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td><input type='button' onClick={() => { goToStatos(item) }}></input></td>
                            <td><input type='button' onClick={() => { goToMetingHistory(item) }} /></td>
                            <td><input type='button' onClick={() => { goToAddAMeeting(item) }}></input></td>
                            <td><input type='button' onClick={() => { goToAddASecrense(item) }}></input></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div> */}




        {/* אני הכנסתי!!!!!!!!!!!!!!!!!!! */}
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
                        <th><input/></th>
                        <th><input/></th>
                    </tr>
                    <tr class="trTable12">
                        <th class="thTable12">הוספת סדרה חדשה</th>
                        <th class="thTable12">הוספת תור לטיפול</th>
                        <th class="thTable12">הסטוריית פגישות</th>
                        <th class="thTable12">סטטוס</th>
                        <th class="thTable12">דואר אלקטרוני</th>
                        <th class="thTable12">שם משפחה</th>
                        <th class="thTable12">שם פרטי</th>
                    </tr>
                </thead>
                <tbody class="tbodyTable12">
                    {GetAllUsersFromStor.map((item) =>
                        <tr class="trTable12">
                            <td class="tdTable12"><input type='button' onClick={() => { goToAddASecrense(item) }} /></td>
                            <td class="tdTable12"><input type='button' onClick={() => { goToAddAMeeting(item) }} /></td>
                            <td class="tdTable12"><input type='button' onClick={() => { goToMetingHistory(item) }} /></td>
                            <td class="tdTable12"><input type='button' onClick={() => { goToStatos(item) }} /></td>
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

// {/* <section class="wrapper"style={{margin:'auto'}} >
// {/* <!-- Row title --> */}
// <main class="row title">
//   <ul class="ulUser">
//     <li>טיפול באזור</li>
//     <li>האם שולם?</li>
//   </ul>
// </main>
// {AllTretmentForuser.filter(x => x.idMeeting == item.Title).map((item) =>
//   <article class="row nfl">
//     <ul class="ulUser">
//       <li class="liUser">{item.nameTypeTretment}</li>
//       <li class="liUser">{item.needsTopay?<label class="k-icon k-i-close"></label>:<label class="k-icon k-i-check"></label>}</li>
//     </ul>
//     <ul class="more-content ulUser">
//       <li class="liUser">All about your meeting</li>
//     </ul>
//   </article>
// )} */}
// </section>