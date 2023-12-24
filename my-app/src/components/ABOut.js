import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

export default function ABOut() {
    const [ myStyle, setMyStyle ] = useState({
        color: "red",
        backgroundColor: 'blue'
    })
    const [ BtnteXT, SETBTNtext ] = useState("ENABle dark mode")
    const toggleStyle = () => {
        if (myStyle.color === "red") {

            setMyStyle({
                color: "white",
                backgroundColor: 'black'
            })
            SETBTNtext("Enable light mode")
        }
        else {
            setMyStyle({
                color: "red",
                backgroundColor: 'blue'
            })
            SETBTNtext("Enable DARK mode")
        }
    }

    return (
        <div className="container" style={myStyle}>

            <div className='accordion ' id='accordionExample'>
                <h1>ABOUT US </h1>
                <div className="accordion-item ">
                    <h2 className="accordion-header" id='headingOne'>
                        <button className='accordion-button' style={myStyle} type='button'
                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                            aria-expanded="true" aria-controls='collapseOne' >item 1</button>
                    </h2>
                    <div id="collapseOne" className=" accordion-collapse collapse show"
                        aria-labelledby='headingOne' data-bs-parent="accordionExample">
                        <div className="accordionBody">
                            <strong>Hii I am Meet shah </strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button onClick={toggleStyle} className='btn btn-success' type='button'>{BtnteXT}</button>
            </div>
        </div>
    )
}
