import { Link } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetAllUsers } from "../../redux/User/UserThunk";

export const Users = () => {

    const dispatch = useDispatch();

    useEffect(async () => {
        debugger;
        //שולח לקובץ הזנק לקבל את כל המשתמשים
        let u = await GetAllUsers(dispatch)
        console.log(u);
    }, [])

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    return (
        <nav className='navbar' style={{width: '50%', marginTop:'3%'}}>
            <ul className={ 'nav-menu'}>
                <li className='nav-item'>
                    <Link
                        to='/AllUsers'
                        className='nav-links'
                        // onClick={closeMobileMenu}
                    >
                    לקוחות
                </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/AllEmployee'
                        className='nav-links'
                        // onClick={closeMobileMenu}
                    >
                    עובדים
                </Link>
                </li>
            </ul>

        </nav>)
}