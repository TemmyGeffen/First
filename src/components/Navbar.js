import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.jpg'
import Popup from 'reactjs-popup';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import ButtonA from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SignUp from './pages/SignUp';
import { color } from '@mui/system';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const curentUser = useSelector((store) => {
    return store.Users.CurentUser
  })
  const CurentEmployee = useSelector((store) => {
    debugger
    return store.Users.CurentEmployee
  })

  const CurentManager=useSelector((store)=>{
    debugger
    return store.Users.CurentManager
  })

  const [flag, setFlag]=useState(false)
  const CurentSecretary = useSelector((store) => {
    debugger
    return store.Users.CurentSecretary
  })
  window.addEventListener('resize', showButton);


  const func=(e)=>{
    debugger
    window.location.reload()
  }
  // popup
  // export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <nav className='navbar'>

        {flag &&<label onClick={(e)=>(func(e))} className='myloghuot' style={{color: 'gray',  marginTop:'-4%', position:'absolute', marginLeft:'-82%'}}>יציאה</label>}
        <h1 onClick={()=>setFlag(true)}><i class="fa fa-user-circle" style={{ color: "white", marginLeft: "-190%" }}></i></h1>
        <span style={{ color: "white" }} >{CurentManager.firstName!=undefined?'Manager':CurentSecretary.firstName==undefined? CurentEmployee.firstName == undefined ? curentUser.name != 'plony' ? curentUser.firstName : 'Guest' : CurentEmployee.firstName: CurentSecretary.firstName}</span>

        <div className='navbar-container'>
          {/* <h1><i class="fa fa-user-circle" style={{color:"white", marginLeft:"-90%"}}></i></h1> */}

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* <i class="fa fa-user-circle"></i> */}
            {/* TRVL */}
            {/* <i class='fab fa-typo3' /> */}
            <img src={logo} width={'80px'} />

          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>

              {(curentUser.name == 'plony') ?
                <Link
                  to='/sign-up'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                סטטוס נוכחי
                </Link>

                : <Link
                  to='/status'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  סטטוס נוכחי
                </Link>}
            </li>
            {/* <li className='nav-item'>

              {(curentUser.name == 'plony') ?
                <Link
                  to='/sign-up'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  היסטורית טיפולים
                </Link>

                : <Link
                  to='/MeetingHistory'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  היסטורית טיפולים
                </Link>}
            </li> */}

            <li className='nav-item'>

              {(curentUser.name == 'plony') ?
                <Link
                  to='/sign-up'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  קביעת סדרה
                </Link>

                : <Link
                  to='/NewSecrenceMeeting'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  קביעת סדרה
                </Link>}
            </li>


            <li className='nav-item'>
              {(curentUser.name == 'plony') ?
                <Link
                  to='/sign-up'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  קביעת תור
                </Link>

                : <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  קביעת תור
                </Link>}
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                <i class="fa fa-home" ></i>
              </Link>
            </li>

          </ul>

          {button && <Button buttonStyle='btn--outline' onClick={handleOpen}>כניסה</Button>}

          <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <SignUp />
              </Box>
            </Modal>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;