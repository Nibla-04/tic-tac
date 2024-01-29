// linking everthing here
import {useState} from 'react';
import { Link } from 'react-router-dom';


import Sun from './sun.png';
import Moon from './moon.png';


const Layout=({children})=>{
    const[background,setbg]=useState("day") 
    const NoSun=()=>{
        setbg('night')
    }
    const NoMoon=()=>{
        setbg('day')
    }




    return(
        <>
         <body className={background}>

          
<button onClick={NoSun} className="SunButton"> <img className="sun" src={Moon}/></button><br/>
<button onClick={NoMoon} className="MoonButton"> <img className="Moon" src={Sun}/></button><br/>

        
        <nav>
        

        <div className="link"> 
     
      <Link to="/">Free </Link>
      <Link to="/home">Home</Link>
      <Link to="/aboutme">About Me</Link>
      <Link to="/contact">Contact Me</Link>
    
    </div>
        </nav><br/><br/><br/>
        

        {/* <Outlet/> */}
        {children}
        </body>
        </>
    )

}
export default Layout;