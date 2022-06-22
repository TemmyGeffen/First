import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { GetAllEmployeeSchetule } from '../../redux/Employee/EmployeeThunk';
import { GetAllEmployee } from '../../redux/Employee/EmployeeThunk';
import './EmployeeNew.css'

export const EmployeeSchlagle = () => {

    const dispatch = useDispatch();
    const [flag, setFlag] = useState([true, true, true, true, true, true, true]);
    const [addHour, setAddHour] = useState([false, false, false, false, false, false, false]);
    const [meesegButton, setMeesegButton] = useState(['', '', '', '', '', '', ''])
    const [d, setD] = useState();
    const EmployeeSchlagleDay = useSelector((store) => {
        debugger
        return store.Employee.EmployeeSchedular
    })

    useEffect(async () => {
        debugger;
        let es = await GetAllEmployeeSchetule(dispatch, "")
        console.log(es);
        debugger;
        let e = await GetAllEmployee(dispatch, "")
        console.log(e);
        debugger;
    }, [])


    const GetAllEmployeeFromStor = useSelector((store) => {
        debugger;
        return store.Employee.AllEmployee
    })

    const CurentEmployee = useSelector((store) => {
        debugger;
        return store.Users.CurentEmployee
    })
    const [curentEmployeeId, setcurentEmployeeId] = useState(EmployeeSchlagleDay.filter(x => x.idEmployee == 1))

    const updateMe = (e) => {
        let day = e.target['fromhoure'].dataset.foo
        let id = e.target['fromhoure'].dataset.id
        debugger
        if (meesegButton[day - 1] == '') {
            debugger
            // setFlag([false, true, true, true, true, true, true])
            flag[day - 1] = false
            setMeesegButton(['אשר', '', '', '', '', '', ''])
            // meesegButton[day-1]='אשר'
        } else {
            debugger
            let items = curentEmployeeId.filter(x => x.idSchetule == id)
            // let obj={
            //     'idSchetule': 1
            //     'idEmployee': 1
            //     'day': 1
            //     'fromHoure': "2021-12-22T09:00:00"
            //     'untilHoure': "2021-12-22T16:00:00"
            //     'firstName': "Temmy"
            //     'lastName': "Geffen"
            // }
            if (e.target['fromhoure'].value != '')
                items[0].fromHoure = e.target['fromhoure'].value
            if (e.target['untilhoure'].value != '') {
                // let d= new DateT()
                d.setHours(e.target['untilhoure'].value.splice(0, ':'))
                d.setMinutes(e.target['untilhoure'].value.splice(':'))
            }
        }
    }
    const checkMe = (e) => {
        e.preventDefault()
        debugger
        console.log(d);
        if (d == 'update')
            updateMe(e)

    }


    // let employee = GetAllEmployeeFromStor.filter(x => x.idUser == CurentEmployee.idUser)
    // let id = employee[0].idEmployee
    let id = 1
    return <>
        <section id="timelineA1">
            <h1 class="h1A1">מערכת שעות</h1>
            <p class="leaderA1 pA1">All cards must be the same height and width for space calculations on large screens.</p>

            <div class="demo-cardA1-wrapper">
                <div class="demo-cardA1 demo-cardA1--step3">
                    <div class="headA1">
                        <div class="number-boxA1">
                            <span class="apA1">03</span>
                        </div>
                        <h2 class="h2A1"><span class="smallA1 apA1">Subtitle</span> שלישי</h2>
                    </div>
                    <div class="bodyA1">
                        {curentEmployeeId.map((item) =>
                            item.day == 3 &&
                            <p class="pEmployee">from houre {new Date(item.fromHoure).getHours() + ':' + new Date(item.fromHoure).getMinutes()} until houre {new Date(item.untilHoure).getHours() + ':' + new Date(item.untilHoure).getMinutes()}</p>
                        )}
                        <p class="pA1"><input type='time' />
                            <button class="custom-btnA1 btn-5A1"><span>Read More</span></button>
                            <button class="custom-btnA1 btn-5A1"><span>Read More</span></button>
                        </p>
                        <img src="http://placehold.it/1000x500" alt="Graphic" />
                    </div>
                </div>

                <div class="demo-cardA1 demo-cardA1--step2">
                    <div class="headA1">
                        <div class="number-boxA1">
                            <span class="apA1">02</span>
                        </div>
                        <h2 class="h2A1"><span class="smallA1 apA1">Subtitle</span> שני</h2>
                    </div>
                    <div class="bodyA1">
                        <p class="pA1">
                            <button class="custom-btnA1 btn-5A1"><span>Read More</span></button>
                            <button class="custom-btnA1 btn-5A1"><span>Read More</span></button>
                        </p>
                        <img src="http://placehold.it/1000x500" alt="Graphic" />
                    </div>
                </div>

                <div class="demo-cardA1 demo-cardA1--step5">
                    <div class="headA1">
                        <div class="number-boxA1">
                            <span class="apA1">05</span>
                        </div>
                        <h2 class="h2A1"><span class="smallA1 apA1">Subtitle</span> חמישי</h2>
                    </div>
                    <div class="bodyA1">
                        <p class="pA1">
                            <button class="custom-btnA1 btn-5A1"><span>Read More</span></button>
                            <button class="custom-btnA1 btn-5A1"><span>Read More</span></button>
                        </p>
                        <img src="http://placehold.it/1000x500" alt="Graphic" />
                    </div>
                </div>

                <div class="demo-cardA1 demo-cardA1--step4">
                    <div class="headA1">
                        <div class="number-boxA1">
                            <span class="apA1">04</span>
                        </div>
                        <h2 class="h2A1"><span class="smallA1 apA1">Subtitle</span> רביעי</h2>
                    </div>
                    <div class="bodyA1">
                        <p class="pA1">
                            <button class="custom-btnA1 btn-5A1"><span>Read More</span></button>
                            <button class="custom-btnA1 btn-5A1"><span>Read More</span></button>
                        </p>
                        <img src="http://placehold.it/1000x500" alt="Graphic" />
                    </div>
                </div>

                <div class="demo-cardA1 demo-cardA1--step7">
                    <div class="headA1">
                        <div class="number-boxA1">
                            <span class="apA1">07</span>
                        </div>
                        <h2 class="h2A1"><span class="smallA1 apA1">Subtitle</span> מוצ"ש</h2>
                    </div>
                    <div class="bodyA1">
                        <p class="pA1">
                            <button class="custom-btnA1 btn-5A1"><span>Read More</span></button>
                            <button class="custom-btnA1 btn-5A1"><span>Read More</span></button>
                        </p>
                        <img src="http://placehold.it/1000x500" alt="Graphic" />
                    </div>
                </div>

                <div class="demo-cardA1 demo-cardA1--step6">
                    <div class="headA1">
                        <div class="number-boxA1">
                            <span class="apA1">06</span>
                        </div>
                        <h2 class="h2A1"><span class="smallA1 apA1">Subtitle</span> שישי</h2>
                    </div>
                    <div class="bodyA1">
                        <p class="pA1">
                            <button class="custom-btnA1 btn-5A1"><span>Read More</span></button>
                            <button class="custom-btnA1 btn-5A1"><span>Read More</span></button>
                        </p>
                        <img src="http://placehold.it/1000x500" alt="Graphic" />
                    </div>
                </div>

                <div class="demo-cardA1 demo-cardA1--step1">
                    <div class="headA1">
                        <div class="number-boxA1">
                            <span class="apA1">01</span>
                        </div>
                        <h2 class="h2A1"><span class="smallA1 apA1">Subtitle</span> ראשון</h2>
                    </div>
                    <div class="bodyA1">
                    {curentEmployeeId.map((item) =>
                            item.day == 1 &&
                            <p class="pEmployee">from houre {new Date(item.fromHoure).getHours() + ':' + new Date(item.fromHoure).getMinutes()} until houre {new Date(item.untilHoure).getHours() + ':' + new Date(item.untilHoure).getMinutes()}</p>
                        )}
                        <p class="pA1">
                            <button class="custom-btnA1 btn-5A1"><span>Read More</span></button>
                            <button class="custom-btnA1 btn-5A1"><span>Read More</span></button>
                        </p>
                        <img src="http://placehold.it/1000x500" alt="Graphic" />
                    </div>
                </div>

            </div>
        </section>

    </>
}