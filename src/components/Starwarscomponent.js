import React, {useState} from 'react'

function Starwarscomponent() {
    const [update, setUpdate] = useState()

    

    function characters(){
        setUpdate((pupdate) => pupdate = "r2 and friends")
    }
    function planets(){
        setUpdate((pupdate) => pupdate = "tattoine and others")
    }
    function starships(){
        setUpdate((pupdate) => pupdate = "falcon millenium")
    }

  return (
    <>
    
    <button onClick={characters}>Characters</button>
    <button onClick={planets}>Planets</button>
    <button onClick={starships}>Starships</button>
    <div>{update}</div>
    </>
  )
}

export default Starwarscomponent