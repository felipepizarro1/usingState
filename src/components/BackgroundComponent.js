import React, {useState} from 'react'

function BackgroundComponent() {

    const [background, setBackground] = useState([]);
    const [text, setText] = useState("Click below");
    const [info, setInfo] = useState(["d-none"]);
    const [color, setColor] = useState("")

    function alarm () {

        setBackground((bg) => bg = ["bg-danger text-white"])
        setText((ptext) => ptext = "This has a red background" )
        setInfo((pinfo) => pinfo = ["d-flex justify-content-center"])
        setColor((pcolor) => pcolor = "red")
    }

    function black () {

        setBackground((bg) => bg = ["bg-dark text-white"])
        setText((ptext) => ptext = "This has a black background")
        setInfo((pinfo) => pinfo = ["d-flex justify-content-center"])
        setColor((pcolor) => pcolor = "dark")
    }

    function zero() {
        setBackground((bg) => bg = [""])
        setText((ptext) => ptext = "Click below")
        setInfo((pinfo) => pinfo = ["d-none"])
        setColor((pcolor) => pcolor = "")
    }



  return (
    <>
    <div className={background}>{text}</div>
    <h6 className={info}>This is just text that appears after you click the {color} button</h6>
    <button onClick={alarm} className="btn btn-outline-light m-2">Red</button>
    <button onClick={black} className="btn btn-outline-light m-2">Dark</button>
    <button onClick={zero} className="btn btn-outline-light m-2">Reset</button>

    </>
  )
}

export default BackgroundComponent