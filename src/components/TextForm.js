import React,{useState} from 'react'

export default function TextForm(props) {
    
    const [text, setText] = useState('');

    const handleOnChange =(evt)=>{  //To enable typing in textarea
        // console.log("onchange clicked")
        setText(evt.target.value); //To update the text with that value
    };

    const handleUpClick =()=>{
        // console.log("Up was clicked:"+text);
        //if(text.length>0){
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Uppercase", "success");
        //}
        /*else{
            props.showAlert("Enter the text!","warning");
        }*/
    };

    const handleLoClick =()=>{
       // if(text.length>0){
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lowercase","success");
        /*}else{
            props.showAlert("Enter the text!","warning");
        }*/
    }

    const handleAltClick =()=>{
        //if(text.length>0){
            let newText = "";
            for(let i = 0;i<text.length;i++){
                if (i%2 === 0){
                    newText += text[i].toLowerCase();
              }
              else if(text[i] === " "){
                newText += text[i];
              }
              else{
                newText += text[i].toUpperCase();
              }
            }
            setText(newText);
            props.showAlert("Converted to Alternate-case","success");
        /*}else{
            props.showAlert("Enter the text!","warning");
        }*/
    }

    const handleClear = ()=>{
        //if(text.length>0){
            let newText = "";
            setText(newText);
            props.showAlert("Text area cleared!","success");
        /*}else{
            props.showAlert("Enter the text!","warning");
        }*/ 
    };

    const handleCopy = ()=>{
        //if(text.length>0){
            let text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text copied","success");
        /*}else{
            props.showAlert("Enter the text!","warning");
        }*/
    };

    const handleExtraSpaces = ()=>{
        //if(text.length>0){
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Extra spaces removed","success");
        /*}else{
            props.showAlert("Enter the text!","warning");
        }*/
    };


    let formStyle = {
        backgroundColor : '#fffef8',
    };
    switch (props.theme) {
        case 'bright':
            formStyle.backgroundColor = '#fffef8';
            break;
        case 'sunrise':
            formStyle.backgroundColor = '#9f2608';
            break;
        case 'ocean':
            formStyle.backgroundColor = '#305f8c';
            break;
        case 'forest':
            formStyle.backgroundColor = '#456135';
            break;
        default:
            break;
    }


    return (
    <>
        {/*<div className='container' style={{color:props.mode === "dark"?"white":"black"}}>*/}
        <div className='container' style={props.style}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                {/*<textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode === "dark"?"grey":"white",color:props.mode === "dark"?"white":"black"}} id="myBox" rows="8"></textarea>*/}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{...props.style,backgroundColor:formStyle.backgroundColor}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>To Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleAltClick}>To Alternatecase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div>
            {/*<div className="container my-3" style={{color:props.mode === "dark"?"white":"black"}}>*/}
            <div className="container my-3" style={props.style}>
                <h2>Your Text Summary</h2>
                <p>{ text.split(/\s+/).filter((element)=>{
                    return element.length!==0
                }).length + ' words and ' + text.replace(/\s/g, '').length + ' characters'}</p>
                <p>{ 0.008*text.split(" ").filter((element)=>{
                    return element.length!==0
                }).length + ' minutes to read'}</p>  
                <h3>Preview</h3>
                <p>{text.length >0 ? text: 'Nothing to preview!'}</p>
            </div>
        </div>
    </>
    )
}

