import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

// 
export default function Cards() {

  var myPath="";
  const CurentUser=useSelector((store)=>{
    return store.Users.CurentUser
  })
  const CurentEmployee=useSelector((store)=>{
    debugger
    return store.Users.CurentEmployee
  })

  const CurentSecretary=useSelector((store)=>{
    debugger
    return store.Users.CurentSecretary
  })

  const CurentManager=useSelector((store)=>{
    debugger
    return store.Users.CurentManager
  })

  if(CurentUser.firstName=="plony")
    myPath='/sign-up'

  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* אם זה משתמש רגיל */}
          {CurentManager.firstName==undefined &&CurentEmployee.firstName==undefined && CurentSecretary.firstName==undefined &&  CurentEmployee.firstName==undefined?
          <>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='לקביעת סדרה חדשה'
              label='Adventure'
              path={(CurentUser.name!="plony")?'/NewSecrenceMeeting':'/sign-up'}
            />
            <CardItem
              src='images/img-2.jpg'
              text='לקביעת תור חדש'
              label='--->'
              path={(CurentUser.name!="plony")?'/services':'/sign-up'}
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/img-4.jpg'
              text='הסטוריית טיפולים'
              label='Adventure'
              path={(CurentUser.name!="plony")?'/MeetingHistory':'/sign-up'}
            />
             <CardItem
              src='images/img-4.jpg'
              text='סטטוס טיפולים'
              label='Adventure'
              path={(CurentUser.name!="plony")?'/status':'/sign-up'}
            />
          </ul>
          </>:
          CurentManager.firstName==undefined && CurentSecretary.firstName==undefined &&  CurentEmployee.firstName!=undefined?
          <>
          <ul>
          <CardItem
              src='images/img-4.jpg'
              text='טיפולים'
              label='Adventure'
              path='/TypeTretmentForEmployee'
            />
              <CardItem
              src='images/img-4.jpg'
              text='היום'
              label='Adventure'
              path='/TypeTretmentForEmployee'
            />
            </ul>
            <ul>
              <CardItem
              src='images/img-4.jpg'
              text='מערכת שעות'
              label='Adventure'
              path='/EmployeeSchlagle'
            />
              <CardItem
              src='images/img-4.jpg'
              text='דווח טיפול'
              label='Adventure'
              path='/TypeTretmentForEmployee'
            />
          </ul>
          </>:
          CurentSecretary.firstName!=undefined?
          <>
           <ul className='cards__items'>
           <CardItem
             src='images/img-9.jpg'
             text='לקוחות'
             label='Adventure'
             path='/Users'
           />
           <CardItem
             src='images/img-9.jpg'
             text='היום'
             label='Adventure'
             path='/PageForThisDay'
           />
           </ul>
           </>:
           <>
           <ul className='cards__items'>
           <CardItem
             src='images/img-9.jpg'
             text='לקוחות'
             label='Adventure'
             path='/Users'
           />
           <CardItem
             src='images/img-9.jpg'
             text='היום'
             label='Adventure'
             path='/PageForThisDay'
           />
            {/* <CardItem
             src='images/img-9.jpg'
             text='הוספת סידרה'
             label='Adventure'
             path='/AddSecrens'
           /> */}
           </ul>
           </>
          }
        </div>
      </div>
    </div>
  );
}

// export default Cards;