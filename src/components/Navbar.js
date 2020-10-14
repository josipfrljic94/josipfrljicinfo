import React from 'react'
import {MdHome} from 'react-icons/md';
import {MdPerson} from 'react-icons/md';

import {MdContactMail} from 'react-icons/md';
import {Link} from "react-router-dom";

export default function Navbar() {

    // const [activemenu, setactivemenu] = useState(false);

   
   
    return (
        <div className='nav'>
              
                
            <ul className='nav-container'  >
            <Link style={{textDecoration:"none"}} to='/' ><li>Home <MdHome/></li> </Link>
                <Link style={{textDecoration:"none"}}  to='/about'><li>About me <MdPerson/> </li></Link>
               <Link style={{textDecoration:"none"}} to='/contact'> <li>Contact <MdContactMail/></li> </Link>
            </ul>
        </div>
    )
}
