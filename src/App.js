import { useState } from "react";
import  styles from"./styles.module.css";

function App() {
  
    const [result,setResult]=useState("")

    const handleclick=(e)=>{
      setResult(result.concat(e.toString()))
    }

    // function for toogle neagtive and postive
    const handlepositivenegative=()=>{
      const expression=parseInt(result)* -1
      setResult(expression.toString())
    }

    // function to convert integer in float
    const float=()=>{
      const expression=parseFloat(result)/100;
      setResult(expression.toString())
    }

    // function for reset the calculator
    const reset=()=>setResult("")

    // function for removing a single digit
    const backspace=()=>setResult(result.slice(0,result.length-1))
    
      // function for calculate expression
    function calculate(){
     
        try {
        setResult(eval(result).toString())

          
        } catch (error) {
         

          setResult(result)
          
        }
        

     

    }
    return (
      <>
          <div className={styles.calculator}>
               <input type="text"  defaultValue={result} placeholder="0"/>      
                <div>
                  <button style={{backgroundColor:"red"}} onClick={reset}>AC</button>
                  <button style={{backgroundColor:"red"}} onClick={backspace}>DEL</button>
                  <button style={{backgroundColor:"#0e19f7"}} onClick={handlepositivenegative}>+/-</button>
              
                  <button style={{backgroundColor:"#0e19f7"}} onClick={float}>%</button> 
                </div>
                  <div>
                      <button onClick={()=>handleclick(7)}>7</button>
                      <button onClick={()=>handleclick(8)}>8</button>
                      <button onClick={()=>handleclick(9)}>9</button>
                      <button style={{backgroundColor:"#0e19f7"}} onClick={()=>handleclick("/")}>/</button> 
                  </div>
              <div>
                  <button onClick={()=>handleclick(4)}>4</button>
                  <button onClick={()=>handleclick(5)}>5</button>
                  <button onClick={()=>handleclick(6)}>6</button>
                  <button style={{backgroundColor:"#0e19f7"}} onClick={()=>handleclick("*")}>*</button> 
              </div>
              <div>
                  <button onClick={()=>handleclick(1)}>1</button>
                  <button onClick={()=>handleclick(2)}>2</button>
                  <button onClick={()=>handleclick(3)}>3</button>
                  <button style={{backgroundColor:"#0e19f7"}} onClick={()=>handleclick("-")}>-</button> 
              </div>
              <div>
                  <button onClick={()=>handleclick(0)}>0</button>
                  <button onClick={()=>handleclick(".")}>.</button>
                  <button style={{backgroundColor:"orange"}}onClick={calculate}>=</button>
                  <button style={{backgroundColor:"#0e19f7"}} onClick={()=>handleclick("+")}>+</button> 
              </div>
           </div>
      
      </>
    );
  }

export default App;
