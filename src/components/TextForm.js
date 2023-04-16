import React, { useState } from 'react'; 


export default function TextForm(props) {
    
    const [text, setText] = useState("")

    const handleOnChange =(event) =>{
        console.log("On Change")
        setText(event.target.value)
    }

    const handleUpClick =() =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }

    const handleDownClick =() =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }

    const handleClearClick =() =>{
        let newText = "";
        setText(newText)
        props.showAlert("Text Has been Deleted Successfully","success")
    }

    const handleCopy =() =>{
        var text = document.getElementById("Box_1")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy to Clickboard","success")
    }

    const handleRemoveExtraSpace =() =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Has been Removed","success")
    }


    return (
    <>
        <div>
            <div className="container mt-3 mb-2">
            <h3 style={props.headingColor}>{props.heading} </h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={props.myStyle} id="Box_1" rows="9"></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-1 me-2`} onClick={handleUpClick} >Convert To UpperCase</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-1 me-2`} onClick={handleDownClick}>Convert To LowerCase</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-1 me-2`} onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-1 me-2`} onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0 || text == text.split(/[ ]+/).join(" ") } className={`btn btn-${props.btnColor} my-1 me-2`} onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container mb-5">
            <h4 style={props.headingColor}>Your Text Summary</h4>
            <p style={props.contentColor}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words && {text.length} Characters</p>
            <p style={props.contentColor}>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Required to Read</p>
            <h4 style={props.headingColor}>Preview</h4>
            <p style={props.contentColor}>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
    </>
  )
}
