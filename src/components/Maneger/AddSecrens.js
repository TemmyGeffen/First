import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './AddSecrens.css'
import { GetAllTypeTretment } from '../../redux/TypeTretment/TypeTretmentThunk'
import { AddASecrens } from '../../redux/Secrens/SecrensThunk'

export const AddSecrens = () => {
  const dispatch = useDispatch()

  const ServicesToAdd = useSelector((store) => {
    debugger;
    return store.Tretment.TypeTretment
  })

  const curentUser = useSelector((store) => {
    return store.Users.CurentUser
  })
  
  useEffect(async () => {
    debugger;
    let x = await GetAllTypeTretment("", dispatch)
    console.log(x);
  }, [])

  const okForm=(e, item)=>{
    e.preventDefault()
    debugger
    const obj=  {
        'IdUser':curentUser.idUser,
        'IdTypeTretment':item.idTypeTretment,
        'AmountOfTime' : 0,
        'Tempecher': Number(e.target['tempecher'].value),
        'AmountOfMeeting': Number(e.target['amountofmeetings'].value),
        'Cost': Number(e.target['price'].value),
        'ManagerIsHere':false,
        'TypeOfPayment':'paypel',
        'TypeTretmentName':item.nameTretment
    }
    debugger
    sendToThuk(obj)
  }

  const sendToThuk=async(u)=>{
    debugger
   let r= await AddASecrens(dispatch, "", u)
   debugger

  //  if(r!='')
  //   alert('sucsses')
  }

  return <>
    <div class="containerCards scroll" >

      {ServicesToAdd.map((item) =>
 <form onSubmit={(e)=>okForm(e, item)}>
        <div class="cardEmployee itemAbcd">
          <div class="boxEmployee">
            <div class="contentEmployee">
              <h2 class="h2Employee">{item.nameTretment}</h2>
              <h3 class="h3Employee">{item.nameTretment}</h3>
              <p class="pEmployee">
                {/* <input placeholder='כמות של זמן' /> */}
                <label>טמפרטורה</label><br />
                <input type='number' placeholder='טמפרטורה' dir='rtl' id='tempecher' /><br />
                <label>כמות פגישות</label><br />
                <input type='number' placeholder='כמות פגישות' dir='rtl' id='amountofmeetings' /><br />
                <label>₪ מחיר</label><br />
                <input type='number' placeholder='מחיר ₪ ' dir='rtl' id='price' />
                {/* <input placeholder='מנהל נמצא' /> */}
              </p>
              <input type='submit' class="aEmployee" value='הוסף סידרה'></input>
            </div>
          </div>
        </div>
        </form>
      )}

    </div>

  </>
}