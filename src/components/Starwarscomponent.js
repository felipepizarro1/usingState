import React, {useState, useEffect} from 'react'

function Starwarscomponent() {
    const [update, setUpdate] = useState("people")
    const [content, setContent] = useState([])

    useEffect(()=>{
      fetch(`https://swapi.dev/api/${update}`)
      .then(response => response.json())
      .then(json => setContent(json))
    }, [update])

    

    function characters(){
        setUpdate((pupdate) => pupdate = "people")
    }
    function planets(){
        setUpdate((pupdate) => pupdate = "planets")
    }
    function starships(){
        setUpdate((pupdate) => pupdate = "photos")
    }

  return (
    <>
    
    <button onClick={characters}>Characters</button>
    <button onClick={planets}>Planets</button>
    <button onClick={starships}>Starships</button>
    <div>{update}</div>
    {JSON.stringify(content)}
      
    </>
  )
}

export default Starwarscomponent