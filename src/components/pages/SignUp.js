import React from 'react'
import "../../App.css";
import'./SignUp.css';
import logo from './logo.jpg'
import { useState } from "react";
import { GetUserByNameAndPass, AddUser } from '../../redux/User/UserThunk';
import { useDispatch } from "react-redux"

export default function SignUp ({history}) {


    const [check, setCheck]=useState(true)
    const dispatch=useDispatch()

    const okFormLogIn= (e)=>{
        e.preventDefault();
        debugger;
        let pass= e.target["pass"].value
        let name= e.target["user"].value
        sendToTheServerLogIn(name, pass)
        debugger;
    }

    const okFormRegister= (e)=>{
        e.preventDefault();
        debugger;
        let u={
            FirstName: e.target["firstname"].value,
            LastName: e.target["lastname"].value,
            Email: e.target["email"].value,
            Phon: e.target["phon"].value,
            Password: e.target["pass"].value
        }
        debugger;
        sendToTheServerRegister(u)
    }

    const sendToTheServerLogIn = async(name, pass)=>{
        debugger;
        const u=await GetUserByNameAndPass(dispatch,"", name, pass);
        debugger;
        await alert(u)
        await console.log(u);
        if(u=="")
        {
            debugger;
            setCheck(false)  
        }
        else
        {
            debugger
            history.push({ pathname: "/"})
        }
    }

    const sendToTheServerRegister= async(u)=>{
        debugger;
        let ua= await AddUser(dispatch, "", u)
        debugger;
        await alert(ua)
        await console.log(ua);
        if(ua!="")
        {
            debugger;
            history.push({ pathname: "/"})
        }
    }

    return<> 
    {/* <h1 className="sign-up">SIGN UP</h1>; */}
    {/* <h1>sign up</h1> */}
    <div class="container">
  <div class="screen">
    <div class="screen__content">
        <div class="login">
        {/* <div class="login-wrap"> */}
            <div class="login-html">
                <input id="tab-1" type="radio" name="tab" class="sign-in" checked={check} onClick={()=>setCheck(true)}/><label for="tab-1" class="tab" style={{marginLeft:"20%"}}>כניסה</label>
                <input id="tab-2" type="radio" name="tab" class="sign-up" checked={!check} onClick={()=>setCheck(false)}/><label for="tab-2" class="tab" style={{marginLeft:"20%"}}>הרשמה</label>
                <div class="login-form">
                    <form class="sign-in-htm" onSubmit={(e)=>okFormLogIn(e)}>
                        <div class="group">
                            <label for="user" class="label" style={{ marginLeft: "60%" }}>שם</label>
                            <input id="user" type="text" class="input" style={{color:'black'}}/>
                        </div>
                        <div class="group">
                            <label for="pass" class="label" style={{ marginLeft: "60%" }}>סיסמה</label>
                            <input id="pass" type="password" class="input" data-type="password" style={{color:'black'}}/>
                        </div>
                        {/* <div class="group">
                            <input id="check" type="checkbox" class="check" checked/>
                            <label for="check"><span class="icon"></span> Keep me Signed in</label>
                        </div> */}
                        <div class="group">
                            <input type="submit" class="button" value="כניסה"/>
                        </div>
                        <div class="hr"></div>
                        {/* <div class="foot-lnk">
                            <a href="#forgot">Forgot Password?</a>
                        </div> */}
                    </form>
                    <form class="sign-up-htm" onSubmit={(e)=>okFormRegister(e)}>
                        <div class="group">
                            <label for="user" class="label" style={{ marginLeft: "60%" }}>שם</label>
                            <input id="firstname" type="text" class="input" style={{color:'black'}}/>
                        </div>
                        <div class="group">
                            <label for="user" class="label" style={{ marginLeft: "60%" }}>שם משפחה</label>
                            <input id="lastname" type="text" class="input" style={{color:'black'}}/>
                        </div>
                        <div class="group">
                            <label for="pass" class="label" style={{ marginLeft: "60%" }}>סיסמה</label>
                            <input id="pass" type="password" class="input" data-type="password" style={{color:'black'}}/>
                        </div>
                        <div class="group">
                            <label for="pass" class="label" style={{ marginLeft: "60%" }}>טלפון</label>
                            <input id="phon" type="text" class="input" style={{color:'black'}}/>
                        </div>
                        <div class="group">
                            <label for="pass" class="label" style={{ marginLeft: "60%" }}>כתובת מייל</label>
                            <input id="email" type="email" class="input" style={{color:'black'}}/>
                        </div>
                        <div class="group">
                            <input  type="submit" class="button" value="הרשמה"/>
                        </div>
                        <div class="hr"></div>
                        {/* <div class="foot-lnk">
                            <label for="tab-1">Already Member?</label>
                        </div> */}
                    </form>
                </div>
                </div>
        {/* </div> */}
        </div> 
        {/* <div class="social-login">
        <img src={logo} width={'80px'}/>
      </div> */}
    </div>
    <div class="screen__background">
      <span class="screen__background__shape screen__background__shape4"></span>
      <span class="screen__background__shape screen__background__shape3"></span>    
      <span class="screen__background__shape screen__background__shape2"></span>
      <span class="screen__background__shape screen__background__shape1"></span>
    </div>    
  </div>
</div>
    </>
}