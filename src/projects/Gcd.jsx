import {useState} from 'react'

function Gcd(){

    const[first,setNo1]=useState()
    const[second,setNo2]=useState()
    const[GCD,setGCD]=useState(0)
    const[style,setStyle]=useState('hide')
    const [bg,setbg]=useState("#000000")
    const Num1=(e)=>{
        let a=e.target.value
        a=Number(a)
       setNo1(a)
       setGCD(0)
    }

    const Num2=(e)=>{
       
        let b=e.target.value
        b=Number(b)
       setNo2(b)
       setGCD(0)
       
    }

  function Result(a,b){
    if(a>b){
    if(a%b===0){
        console.log(b)
        setGCD(b)
        setStyle('show')
    }
    else{
        let r=a%b

    Result(b,r) 
   }
    

    }
    if(b>a){
        if(b%a===0){
            setGCD(a)
            setStyle('show')
        }
        else{
            let r=b%a
    
        Result(a,r) 
       }
        

    }
    

 }
 const Submit=()=>{
    let a=first
    let b=second
    Result(a,b)
 }
const Change=(e)=>{
    setbg(e.target.value)
    console.log(bg)
    
}
 

    
    return(
    <>
    <input type="color" onClick={Change}/><br/>
   <div
   style={{
    backgroundColor:`${bg}`,
    position: "absolute",
    top: "40%",
    left:"35%",
    width: "300px"
   }}>

  
    
    <input onChange={Num1} type='number'/> Enter the first Number<br/>
    <input onChange={Num2} type='number' /> Enter the second number<br/>
    <button onClick={Submit}> Submit </button><br/>
    
    <p className={style}>
        {`Greatest Common Divisor of ${first} and ${second} is ${GCD}`}<br/>
        
        
    </p>
    </div>
    </>
    )
    
}
export default Gcd;