import {useState} from 'react'
import "./Calculator.css"

function Calculator() {
const[result,setResult]=useState("")

return (

    <div>
      <h1>CALCULATOR</h1>
      <h2></h2>
      <div>
        <input type="text"value={result}/>
      </div>
      
      <div className='container m'>
    
     <button value={7} onClick={n=> setResult( result + n.target.value)}>7</button>
     <button value={8} onClick={n=> setResult(result + n.target.value)}>8</button>
     <button value={9} onClick={n=> setResult(result + n.target.value)}>9</button>
     <button value={"+"} onClick={n=>setResult(result + n.target.value)}>+</button>
    
     <button value={4} onClick={n=> setResult(result + n.target.value)}>4</button>
     <button value={5} onClick={n=> setResult(result + n.target.value)}>5</button>
     <button value={6} onClick={n=> setResult(result + n.target.value)}>6</button>
     <button value={"-"} onClick={n=> setResult(result + n.target.value)}>-</button>
     
     <button value={1} onClick={n=> setResult(result + n.target.value)}>1</button>
     <button value={2} onClick={n=> setResult(result + n.target.value)}>2</button>
     <button value={3} onClick={n=> setResult(result + n.target.value)}>3</button>
     <button value={"*"} onClick={n=> setResult(result + n.target.value)}>*</button>
     
     <button value={0} onClick={n=> setResult(result + n.target.value)}>0</button>
     <button value={"."} onClick={n=> setResult(result + n.target.value)}>.</button>
     <button value={"="} onClick={()=> setResult(eval(result))}>=</button>
     <button value={"%"} onClick={n=> setResult(result + n.target.value)}>%</button>
     
     <button className="b1"onClick={()=> setResult(' ')}>AC</button>
      <br />
     <button className="b2"onClick={()=>setResult(result.slice(0,-1))}>DE </button>
      
      </div>

    
     
    </div>
  )
}

export default Calculator