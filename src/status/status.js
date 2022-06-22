import { color } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { MeetingHistory } from '../components/Meetings/MeetingHistory';
import { GetAllSecrensForUser } from '../redux/Secrens/SecrensThunk';
import { GetAllTretmentForUser } from '../redux/TretmentInSecren/TretmentInSecrenThunk';
import './status.css'

export const Status = ({ history }) => {

  const dispatch = useDispatch();

  useEffect(async () => {
    debugger;
    let se = await GetAllSecrensForUser(dispatch, "", CurrentUser.idUser)
    await console.log(se);
    debugger;
    let t = await GetAllTretmentForUser(dispatch, "", CurrentUser.idUser)
    await console.log(t);
    debugger;
  }, [])


  const AllTretmentForuser = useSelector((store) => {
    debugger;
    console.log(`${store.TretmentInSecrens.TretmentForCurentUser}nechamy`);
    return store.TretmentInSecrens.TretmentForCurentUser
    debugger;
  })

  const GetSecrensForUser = useSelector((store) => {
    debugger;
    return store.Secrens.SecrenseForCurentUser
  })
  const CurrentUser = useSelector((store) => {
    debugger;
    return store.Users.CurentUser
  })
  return <>
  <h1 class="h1Status" >סטטוס טיפולים</h1>
    <div class="containerTable22" >
      <table class="table22">
        <thead class="theadtable2">
          <tr class="trTable2">
            <th class="thTable2">פרטים נוספים</th>
            <th class="thTable2">פגישות עתידיות</th>
            <th class="thTable2">פגישות שהתקיימו</th>
            <th class="thTable2">כמות פגישות</th>
            <th class="thTable2">שם</th>
          </tr>
        </thead>
        <tbody class="tbodyTable2">
          {GetSecrensForUser.map((item, index) =>
            <tr class="trTable2">
              <td class="tdTable2 fill">
                <input type='Button' style={{backgroundColor:'transparent', border: 'none', color:'white'}} value="Click me ✔" onClick={() => { history.push({ pathname: "/MeetingHistory" }) }} />
              </td>
              <td class="tdTable2">{item.amountOfMeeting}</td>
              <td class="tdTable2">{AllTretmentForuser.filter(x => x.idSecrens == item.idSecrens).length}</td>
              <td class="tdTable2">{(AllTretmentForuser.filter(x => x.idSecrens == item.idSecrens).length) + (item.amountOfMeeting)}</td>
              <td class="tdTable2">{item.typeTretmentName}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>


  </>
}