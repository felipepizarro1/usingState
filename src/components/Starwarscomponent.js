import React, {useState, useEffect} from 'react'

function Starwarscomponent() {
    const [update, setUpdate] = useState("people")
    const [content, setContent] = useState([])

    useEffect(()=>{
      fetch(`https://swapi.dev/api/${update}`)
      .then(response => response.json())
      .then(json => setContent(json.results))
    }, [update])

    

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
    
    <button className='btn btn-outline-light m-2' onClick={characters}>Characters</button>
    <button className='btn btn-outline-light m-2' onClick={planets}>Planets</button>
    <button className='btn btn-outline-light m-2' onClick={starships}>Starships</button>
    <div>{update}</div>
    <div className='card bg-transparent'>
    {content.map((item, i) =>{
      return (
        <p key={i}>  

            {JSON.stringify(item.name)}
            
        </p>
      )
    })}
    {update === "people" ? content.map((item, i) =>{
      return (
        <p key={i}>  

            {JSON.stringify(item.height)}
            
        </p>
      )
    }) : null }

    </div>
      
    </>
  )
}

export default Starwarscomponent