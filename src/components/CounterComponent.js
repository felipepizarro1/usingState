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



  return (
    <div>
        <p>{count}</p>
        <p className={count === 5 ? "d-flex" : "d-none"}>Wow 5!</p>
        <button onClick={decrease} className="btn">-</button>
        <button onClick={increment} className="btn">+</button>
    </div>
  )
}

export default CounterComponent