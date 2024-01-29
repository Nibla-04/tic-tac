//home
import {useState} from 'react';
import {useRef} from 'react';

function Home(){
    const[style,setStyle]=useState('hide')
    const[stylediv,setStylediv]=useState('showdiv')
    const [UserName,setUserName]=useState("")
    const [UserPassword,setUserPassword]=useState("")
    const[message,setmessage]=useState("")
    const[buttonName,setButtonName]=useState('')
    const refName = useRef(null);
    const refPwd= useRef(null)

    console.log(UserName.length)
    const Appear=()=>{
        if(style=='hide'){
            setStyle('show')
        }
        else{
            setStyle('hide')
        }
        

    }   

    const Submit=()=>{
        localStorage.setItem('Name', UserName);
      localStorage.setItem('Password', UserPassword);
      setStylediv('hidediv')

     if(UserPassword===""){
        setmessage("Enter Your Password")
        setStyle("show")
        setButtonName('Retry')
     }
     if(UserName===""){
        setmessage("Enter Your User Name")
        setStyle("show")
        setButtonName('Retry')
     }

   if(UserName!=="" && UserPassword!=="" ){
        setmessage("Logged In succesfully")
        setButtonName('Logout')
    }
     
      
     
      
      
    }


    const Remove=()=>{
        refName.current.value=""
        refPwd.current.value=""
        localStorage.removeItem('Name');
        localStorage.removeItem('Password')
        console.log(localStorage)
        setUserName("")
        setUserPassword('')
       
    }

    const Logout=()=>{
        console.log(buttonName)
        setStylediv('showdiv')
        localStorage.removeItem('Name');
        localStorage.removeItem('Password')
        console.log(localStorage)
        setUserName("")
        setUserPassword('')
      refName.current.value=""
        refPwd.current.value=""
    }

      
    return(
        <>
        <div className='HomeDiv'>

        
        <div className={stylediv}>
            
       
        <button onClick={Appear}> Login </button> 
        <div className={style}>
        Enter your Name <input ref={refName} onChange={(e)=> setUserName(e.target.value)}/> <br/>
        Enter your Password <input ref={refPwd} onChange={(e)=>setUserPassword(e.target.value)} type='password'/> <br/>
        
        <button  onClick={Submit}> Submit </button>
        <button onClick={Remove}> Remove </button>


        {UserName!=="" && 
        <div>
        <p className={style}> {`Welcome ${UserName}`}</p>
         <p> Hope you are doing fine</p>
         </div>}
    
    
        </div>

        </div>
       
       {localStorage.getItem('Name') && (
            <div>
                <p> {message}</p>
                <button onClick={Logout}> {buttonName}</button>
        

            </div>
            
        )}

        {localStorage.getItem('Name')?.length<=0 && (
            <div>
                <p> {message}</p>
                <button onClick={Logout}> {buttonName}</button>

            </div>
        )}
        </div>
        </>
    )

}
export default Home;