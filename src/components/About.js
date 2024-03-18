import React from 'react'

export default function About(props) {
    
    /*const [myStyle, setMyStyle] = useState({
        color:'black',
        backgroundColor : 'white',
        border: '2px solid black', 
      });

      const toggleStyle = ()=>{
        if(myStyle.color === "black"){
            setMyStyle({ 
                color: 'white',  
                backgroundColor: 'black',
                border: '2px solid white',
            });
            setBtnText("Enable Light mode");
        }else{
            setMyStyle({ 
                color: 'black',  
                backgroundColor: 'white',
                border: '2px solid black',
            });
            setBtnText("Enable Dark mode");
        }
      };

      const [btnText, setBtnText] = useState("Enable Dark mode");
      */let myStyle = {
        color: 'black',
        backgorundColor: 'white',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        width:'150vh',
     };
      switch (props.theme) {
        case 'bright':
            myStyle.color = 'black';
            myStyle.backgroundColor = '#f8f5f0';
            break;
        case 'sunrise':
            myStyle.color = '#ffe900';
            myStyle.backgroundColor = '#9f2608';
            break;
        case 'ocean':
            myStyle.color = '#DCF2F1';
            myStyle.backgroundColor = '#305f8c';
            break;
        case 'forest':
            myStyle.color = '#f9bda5';
            myStyle.backgroundColor = '#456135';
            break;
        default:
            break;
    }
     

  return (
    <div className='container' style={{display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    width:'150px',}}  >
      <h1 style={{...myStyle,backgroundColor:'initial !important'}}>About Us</h1>
      <div className="accordion" id="accordionExample" >
            <div className="accordion-item"  >
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"  style={myStyle} aria-controls="collapseOne">
                    Text Analytics Made Easy
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body"  style={myStyle}>
                    PlayText is a versatile text utility designed for simplicity and efficiency. Users can effortlessly input text and receive instant insights such as character count, word count, and even an estimated reading time for the entered paragraph.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Efficient Text Modification
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Beyond analytics, PlayText empowers users to modify text effortlessly. It offers tools for case conversion, removal of extra spaces, and seamless copying of the modified text to the clipboard.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">
                    Customizable User Experience
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        With various screen appearances (themes) to choose from, PlayText ensures users can personalize their experience, making it a user-friendly and versatile text manipulation tool.
                    </div>
                </div>
            </div>
        </div>
        {/*<button className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button>*/}
    </div>
  )
}
