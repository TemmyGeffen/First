import { useDispatch } from "react-redux";
import { AddTypeTretmentForEmploye, DeleteTypeTretmentForEmploye, GetAllEmployee, GetAllTypeTretmentForEmployeById } from "../../redux/Employee/EmployeeThunk";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetAllTypeTretment } from "../../redux/TypeTretment/TypeTretmentThunk";

export const TypeTretmentForEmployee=()=>{

    const dispatch =useDispatch()
   
    const TypeTretmentForCurentEmployee = useSelector((store) => {
        debugger
        return store.Employee.TypeTretmentForCurentEmployee
      })

      const CurentEmployee = useSelector((store) => {
        debugger
        return store.Users.CurentEmployee
      })

      const TypeTretment = useSelector((store) => {
        debugger
        return store.Tretment.TypeTretment
      })

      var oldTretment=[]
      TypeTretmentForCurentEmployee.map((item)=>{oldTretment.push(item.idTypeTretment)})
  
      
    const GetAllEmployeeFromStor = useSelector((store) => {
      debugger;
      return store.Employee.AllEmployee
  })

      const [tretmentToMap, setTretmentToMap]=useState(TypeTretmentForCurentEmployee)
      const [messegeButton, setMessegeButton]=useState('לעריכה')

     
      const update=(e)=>{
        e.preventDefault()
        console.log(oldTretment); 
        debugger
        if(messegeButton=='לעריכה'){
          setMessegeButton('אשר שינויים')
          setTretmentToMap(TypeTretment)
          
        }
        else
        {
          // מכין לשרת שתי רשימות אחת למחיקה ואחת להוספה
          console.log(oldTretment); 
          let employee = GetAllEmployeeFromStor.filter(x=> x.idUser==CurentEmployee.idUser)
          let id = employee[0].idEmployee
          // let oldTretment=[]
          let addTretment=[]
          let deleteTretment=[]
          // TypeTretmentForCurentEmployee.map((item)=>{oldTretment.push(item.idTypeTretment)})
          debugger
          TypeTretment.map((item, index)=>{
            if(e.target[`checkArea${index}`].checked){
              let num=(Number)(e.target[`checkArea${index}`].dataset.foo)
              if(oldTretment.includes(num)==false){
                debugger
                const obj={
                  idEmployee: id,
                  idTypeTretment:(Number)(e.target[`checkArea${index}`].dataset.foo) 
                }
                addTretment.push(obj)
              }
            }
            else{
              debugger
              let num=(Number)(e.target[`checkArea${index}`].dataset.foo)
              if(oldTretment.includes(num))
              deleteTretment.push((Number)(e.target[`checkArea${index}`].dataset.foo))
            }  
          })
          sendToThunk(addTretment, deleteTretment)
        }
      }

      const sendToThunk=async(addTretment, deleteTretment)=>{
        debugger
        if(addTretment.length>0){
          debugger
          let a=await AddTypeTretmentForEmploye(dispatch,"",addTretment)
          await console.log(a);
        }
        if(deleteTretment.length>0){
          debugger
          let d= await DeleteTypeTretmentForEmploye(dispatch,"",deleteTretment)
          await console.log(d);
        }

      }
         
    useEffect(async () => {
        debugger;
        let ul= await GetAllTypeTretment("",dispatch)
        console.log(ul);
        let AllEmployee= await GetAllEmployee(dispatch, "")
        await console.log(AllEmployee);
        debugger
         let employee = await GetAllEmployeeFromStor.filter(x=> x.idUser==CurentEmployee.idUser)
        if(employee.length>0){
            let id = await employee[0].idEmployee
        let u = await GetAllTypeTretmentForEmployeById(dispatch, "",id)
        await console.log(u);
        }
    }, [])
    return<>
    <form  onSubmit={(e)=>update(e)}>
    {tretmentToMap.map((item, index)=>
     <div class="aaaa123" style={{display:'inline-block',padding: '8px'}}>
     <div class="page__section123 page__custom123-settings" >
       <div class="page__toggle123">
         <label class="toggle123">
           <input class="toggle__input123" data-foo={item.idTypeTretment}  defaultChecked={oldTretment.filter(x=> x==item.idTypeTretment).length>0} type="checkbox" id={`checkArea${index}`} />
           <span class="toggle__label123">
             <span class="toggle__text123" style={{ position: "left" }}>{item.nameTretment}</span>
           </span>
         </label>
       </div>
     </div>
   </div>
   )}
  <div class="centerOK">
          <button type='submit' class="fancyOK">
            <span class="top-keyOK"></span>
            <button style={{ border: 'none', background: 'none', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif' }} type='submit' class="">{messegeButton}</button>
            <span class="bottom-keyOK-1"></span>
            <span class="bottom-keyOK-2"></span>
          </button>
        </div>
        </form>
    </>
}