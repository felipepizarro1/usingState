import React, {useState} from 'react'

function Starwarscomponent() {
    const [update, setUpdate] = useState()

    

    function characters(){
        setUpdate((pupdate) => pupdate = "people")
    }
    function planets(){
        setUpdate((pupdate) => pupdate = "planets")
    }
    function starships(){
        setUpdate((pupdate) => pupdate = "starships")
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