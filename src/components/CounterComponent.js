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
        <button onClick={decrease}>-</button>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default CounterComponent