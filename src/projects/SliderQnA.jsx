import  { useState } from 'react';
import {useRef} from 'react';

function CoolForm(){
  
    let MCQ=[{id: 1 ,'Question':" 1. Javascript is _______ language? ",actualAns:"Object-Oriented", 
      Options:[{ 'ans1': 'Object-Oriented','ans2': 'Object-Base', 'ans3': 'Procedural', 'ans4':'None of the Above' }] },

      {id: 2 ,'Question':"2. Which of the following keywords is used to define a variable in Javascript? ",actualAns:"Both A and B", 
      Options:[{ 'ans1': 'Var','ans2': 'let', 'ans3': 'Both A and B', 'ans4':'None of the Above' }] },

      {id: 3 ,'Question':"3. Upon encountering empty statements, what does the Javascript Interpreter do",actualAns:"Ignores the Statements", 
      Options:[{ 'ans1': 'Throws an error','ans2': 'Ignores the Statements', 'ans3': 'Gives a warning ', 'ans4':'None of the Above' }] },

      {id: 4 ,'Question':"4. Which of the following methods can be used to display data in some form using Javascript?", actualAns:"All of the above", 
      Options:[{ 'ans1': 'document.write()','ans2': 'console.log()', 'ans3': 'window.alert() ', 'ans4':'All of the above' }] },

      {id: 5 ,'Question':"5. How can a datatype be declared to be a constant type?", actualAns:"const", 
      Options:[{ 'ans1': 'const','ans2': 'var', 'ans3': 'None', 'ans4':'constant' }] }


    
    
    
    
    
    ]

    const [selectedAns,setSelectedAns]=useState([{id:1,ans:""},{id: 2,ans:""},{id:3, ans: ""} ,{id:4, ans:""} ,{id:5, ans:""}])
const [questionNumber,setQuestionNumber]= useState(1)
const [correctAns,setCorrectAns]= useState(0)
const [attempted,setAttempted]= useState(0)

const[Correct,setCorrect]= useState('hide')
const[precent,setPercent]=useState(0)




const Next=()=>{
  if(questionNumber===5){
    setQuestionNumber(1)
  }
  else{
    setQuestionNumber(questionNumber+1)
  }
  
}


const Previous=()=>{
  if(questionNumber===1){
    setQuestionNumber(5)
  }
  else{
    setQuestionNumber(questionNumber-1)

  }
  

}

const Results=()=>{
setCorrect('show')
setQuestionNumber(questionNumber+1)
let count=0
MCQ.map((data)=>{
 
  return selectedAns.map((final)=>{
    if(final.id === data.id){
      if(final.ans===data.actualAns){
        count=count+1
      }}}
 
)
  
})
setCorrectAns(count)
let Percentile=(count*20)
setPercent(Percentile)
}

const Take=(e)=>{
  setAttempted(attempted+1)
  let quesid=Store.current.id
  selectedAns.map((id)=>{
    if(quesid===id.id){
      id.ans=e.target.value
    }
   
  })
  console.log(selectedAns)
}
  
const Restart=()=>{
  setQuestionNumber(1)
  setCorrectAns(0)
  setAttempted(0)
  setCorrect('hide')
  setPercent(0)

}
const Store= useRef();


return(
        <>
        <div className="main">
          {MCQ.map((data)=>{
            if(data.id===questionNumber ){
              return(
                <div className={data.id}> 
                {data.Options.map((choice)=>{
                  if(data.id===1){
                    return(
                      <div>
                       <p  ref={Store} id={data.id}> {data.Question}  </p> <br/>
                       <input onClick={Take} type="radio" value={choice.ans1}  name="options" /> {choice.ans1}<br/>
                       <input onClick={Take} type="radio" value={choice.ans2}  name="options" /> {choice.ans2}<br/>
                       <input onClick={Take} type="radio" value={choice.ans3}  name="options" /> {choice.ans3}<br/>
                       <input onClick={Take} type="radio" value={choice.ans4}  name="options" /> {choice.ans4}<br/>
                       <br/>
                       <button onClick={Next}> Next Question </button>
                      </div>
                       )}
                  if(data.id===5){
                  return(
                    <div>
                      <button onClick={Previous}> Previous  Ouestion </button><br/>
                      <p  ref={Store} id={data.id}> {data.Question}  </p> <br/>
                      <input onClick={Take} type="radio" value={choice.ans1}  name='options' /> {choice.ans1}<br/>
                      <input onClick={Take} type="radio" value={choice.ans2}  name="options" /> {choice.ans2}<br/>
                      <input onClick={Take} type="radio" value={choice.ans3}  name="options" /> {choice.ans3}<br/>
                      <input onClick={Take} type="radio" value={choice.ans4}  name="options" /> {choice.ans4}<br/>
                      <br/>
                     <button onClick={Results}>Submit </button>
                    </div>
                    )}
                
                  else{
                    return(
                      <div>
                        <button onClick={Previous}> Previous  Ouestion </button><br/>
                        <p  ref={Store} id={data.id}> {data.Question}  </p> <br/>
                        <input onClick={Take} type="radio" value={choice.ans1}  name="options" /> {choice.ans1}<br/>
                        <input onClick={Take} type="radio" value={choice.ans2}  name="options" /> {choice.ans2}<br/>
                        <input onClick={Take} type="radio" value={choice.ans3}  name="options" /> {choice.ans3}<br/>
                        <input onClick={Take} type="radio" value={choice.ans4}  name="options" /> {choice.ans4}<br/>
                        <br/>
                        <button onClick={Next}> Next Question </button>
                      </div>
                      )}
                })}
                </div>
  
              )

            }
            
           
            
            

          
          
          
          
          }
           
            
            
            
            
            
            )}
            <div>
          
                
              
              <p className={Correct}>
                Total Questions: 5<br/>
                {`Total Attempted: ${attempted}`}<br/>
              {`Correct Answer: ${correctAns}`}<br/>
              {`Percentage : ${precent} %`}<br/><br/>
              <button onClick={Restart}>
                Take Test Once More
              </button>
              </p>


            
              
              
              
            </div>
            
          </div>


          </>

      )

   
};

export default CoolForm;
