import React from 'react'
import {useState} from 'react'


function CounterComponent() {

    const [count, setCount] = useState(0) //<--counter will begin on 0 

    function increment() {
        setCount((pcount) => pcount + 1)
    }

    function decrease() {
        setCount((pcount) => pcount  - 1)
    }

    function zero(){
        setCount((pdefault) => pdefault = 0)
    }



  return (
    <div>
        <p >{count < 0 ? zero() : count}</p> 
        <p className={count === 5 ? "d-flex justify-content-center" : "d-none"}>Wow 5!</p>
        <p className={count === 10 ? "d-flex justify-content-center" : "d-none"}>Perfect 10!!</p>
        <button onClick={decrease} className="btn btn-outline-light m-2">-</button>
        <button onClick={increment} className="btn btn-outline-light m-2">+</button>
        <button onClick={zero} className="btn btn-outline-light m-2">Reset</button>
    </div>
  )
}

export default CounterComponent