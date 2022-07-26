import React, {useState} from 'react'

function BackgroundComponent() {

    const [background, setBackground] = useState([]);
    const [text, setText] = useState("Click below");
    const [info, setInfo] = useState(["d-none"]);
    const [color, setColor] = useState("")

    function alarm () {

        setBackground((bg) => bg = ["bg-danger text-white"])
        setText((ptext) => ptext = "This has a red background" )
        setInfo((pinfo) => pinfo = ["d-flex"])
        setColor((pcolor) => pcolor = "red")
    }

    function black () {

        setBackground((bg) => bg = ["bg-dark text-white"])
        setText((ptext) => ptext = "This has a black background")
        setInfo((pinfo) => pinfo = ["d-flex"])
        setColor((pcolor) => pcolor = "dark")
    }



  return (
    <>
    <div className={background}>{text}</div>
    <h6 className={info}>This is just text that appears after you click the {color} button</h6>
    <button onClick={alarm} className="btn outline">Red</button>
    <button onClick={black} className="btn outline">Dark</button>

    </>
  )
}

export default BackgroundComponent