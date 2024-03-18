import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
/*const [mode, setMode] = useState('light');*/
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState('bright');
  const [style, setStyle] = useState({
    color:'black',
    backgroundColor : 'white',
  });

  const showAlert = (message,type) => {
    setAlert({ 
      type: type, 
      message: message, 
    });
    setTimeout(() => {
      setAlert(null);
    }, 1250);
  };

  /*
    //Dark Mode/Light Mode
    const toggleMode =()=>{
    console.log(mode);
    if(mode === 'light'){
      setMode("dark");
      //console.log(mode);
      document.body.style.backgroundColor =  "#343a40";
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode("light");
      //console.log(mode);
      document.body.style.backgroundColor =  "#ffffff";
      showAlert("Light mode has been enabled","success");
    }
  };*/

  const changeTheme = (evt)=>{
    //console.log(theme);
    //console.log(evt.target.value);
    if(evt.target.value === "bright"){
      setTheme('bright');
      setStyle({
        color:'black',
        backgroundColor : '#fffef8',
      });
       document.body.style.backgroundColor =  "#fffef8";
      showAlert("Bright has been applied successfully!","success");
    }else if(evt.target.value === 'sunrise'){     
      setTheme('sunrise');
      setStyle({
        color:'#ffe900',
        backgroundColor : '#bb5600',
      });
       document.body.style.backgroundColor =  "#bb5600";
      showAlert("Sunrise has been applied successfully!","success");
    }else if(evt.target.value === 'ocean'){
      setTheme('ocean');
      setStyle({
        color:'#DCF2F1',
        backgroundColor : '#0b1c2c',
      });
       document.body.style.backgroundColor =  "#0b1c2c";
      showAlert("Ocean has been applied successfully!","success");
    }else if(evt.target.value === 'forest'){
      setTheme('forest');
      setStyle({
        color:'#f9bda5',
        backgroundColor : '#163020',
      });
       document.body.style.backgroundColor =  "#163020";
      showAlert("Forest has been applied successfully!","success");
    }
  }

  return (
  <>
      <Router>
        {/*<Navbar title = "PlayText" aboutText = "About Text Utils" mode= {mode} toggleMode = {toggleMode} theme = {theme} alert = {alert} changeTheme = {changeTheme} style = {style} />*/}
        <Navbar title="PlayText" aboutText="About Text Utils" alert={alert} theme={theme} changeTheme={changeTheme} style={style} />
        <Alert alert={alert} />
        <div className="container my-3 ">
          <Routes>
            <Route exact path="/about" element = {<About theme = {theme}/>}/>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" /*mode={mode}*/ theme={theme} showAlert={showAlert} style={style} />}/>
          </Routes>
        </div>
      </Router>
  </>
  );
}
export default App;
