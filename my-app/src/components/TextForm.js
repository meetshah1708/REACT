import React, { useRef, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";


export default function TextForm(props) {
  const [ text, setText ] = useState("enter text here");//using hooks
  const handleUpClick = () => {
    console.log("upper case was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleDownClick = () => {
    console.log("upper case was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
  }
  const USE = useRef(null);
  const handleOnChange = (event) => {
    console.log("on change");
   setText(USE.target.value);//to write extra in textarea
  }
 
  return (
    // can return only one thing so use jsx fragment
    <>
    <div className='container .align-content-center'>
          <h1>{props.title}</h1>
          <label htmlFor='textform'  className='form-label'>EXAMPLE FORM</label>
          <textarea className='form-control'value={text}  onChange={handleOnChange} id='example-form' rows={8}></textarea>
          <button className='btn btn-primary mx-3' onClick={handleDownClick}>CONERT TO LOWERCAse</button>
          <button className='btn btn-primary mx-3' onClick={handleUpClick}>CONERT TO UPPERCASE</button>
      </div>
      <div className="container my-2">
        <h1>TEXT SUMMARY</h1>
        <p>{text.split(" ").length} WOrds {text.length}characters </p>
        <p>{0.008*text.split(" ").length}MINUTES READ</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}

