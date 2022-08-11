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
    <div>
      {update === "people" ? <h3>Name and height of some SW characters</h3> : null}
      {update === "planets" ? <h3>Name and population of some SW planets</h3> : null}
      {update === "starships" ? <h3>Name and passengers capacity of some SW starships</h3> : null}
      </div>
    <div className='container'>
      <div className='row g-2'>
    {content.map((item, i) =>{
      return (
        <div className='card col-4 bg-transparent' key={i}>  
          <p className='mt-2'>
            {JSON.stringify(item.name + ",")} 

            
          </p>
          <p>

                {update ==="people" ? " Height:"+ JSON.stringify(item.height) : null }
                {update ==="planets" ?  " Population:" + JSON.stringify(item.population) : null }
                {update ==="starships" ? " Passengers:" + JSON.stringify(item.passengers) : null }
                
            </p>
        </div>
      )
    })}

      </div>
      <h6>Done with SW API</h6>
    </div>
      
    </>
  )
}

export default Starwarscomponent