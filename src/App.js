import React from 'react'
import logo from './logo.svg';
import './App.css';       // <---- Edit in App.css for Styling
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

// JSX <---- Used camelCaseConventions 
// 1) className => class
// 1) for => htmlFor
// 2) {logo} <--- for getting data of javascript variable logo   not use `${logo}`
// 3) Unterminating tag is invalid   <a   />
// 4) use href="/" <-- to cancel instead of href="#" cancel warning

function App() {

  const [mode , setMode] = useState("light");     // <---- display initiale state as light
  const [text , setText] = useState("Dark Mode");     // <---- display initiale state as Dark Mode
  const [btnColor , setBtnColor] = useState("dark");     // <---- display initiale state as dark
  const [dropColor , setDropColor] = useState("light");     // <---- display initiale state as light
  const [alert , setAlert] = useState(null);              // <---- display initiale value of alert is null
  const [linkColor_1, setlinkColor_1] = useState("text-danger")
  const [linkColor_2, setlinkColor_2] = useState("text-danger")
  const [activeStatus, setActiveStaus] = useState("")
  const [myStyle , setMyStyle] = useState({
    color : "#212121",
    backgroundColor : "white"
  })
  const [btnText, setBtnText] = useState("Enable Dark Mode")
  const [headingColor , setHeadingColor] = useState({
    color : "black"
  })
  const [color , setColor] = useState({
    color : "black",
    backgroundColor : "white"
  })
  const [contentColor , setContentColor] = useState({
    color : "black",
  })    

  const toggleMode =() =>{
    if(mode === "light"){
      setMode("dark")       // setMode = "dark"  || setMode = dark    <--- Invalid
      setText("Light Mode")
      setBtnColor("primary")
      setDropColor("dark")
      showAlert("Dark Mode has been Enabled","success")
      setBtnText("Enable Light Mode")
      setContentColor({
        color : "white"
      })
      setHeadingColor({
        color : "orange"
      })
      setMyStyle({
        color : "white",
        backgroundColor : "#404040"
      })
      setColor({
        color : "white",
        backgroundColor : "#404040"
      })
      setlinkColor_1("text-info")
      setlinkColor_2("text-info")
      setActiveStaus("active")
      document.body.style.backgroundColor = "#212121"
      document.title = "TextUtil - Dark Mode"
    }else if(mode === "dark"){
      setMode("light")
      setText("Dark Mode")
      setBtnColor("dark")
      setDropColor("light")
      showAlert("Light Mode has been Enabled","danger")
      setBtnText("Enable Dark Mode")
      setContentColor({
        color : "black"
      })
      setHeadingColor({
        color : "black"
      })
      setMyStyle({
        color : "black",
        backgroundColor : "white"
      })
      setColor({
        color : "black",
        backgroundColor : "white"
      })
      setlinkColor_1("text-danger")
      setlinkColor_2("text-danger")
      setActiveStaus("active")
        document.body.style.backgroundColor = "white"
        document.title = "TextUtil - Light Mode"
      }
  }

  const showAlert = (message, type) =>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() =>{
        setAlert(null)
      }, 2000)
  }

  return (
    <>
    
    <Router>

      {/* <Navbar mode={mode} toggleMode={toggleMode} text={text} dropColor={dropColor} color={color} linkColor_1={linkColor_1}/>         <By deault props is Used */}

      {/* <Alert alert={alert} /> */}
      
      <Routes>
          <Route exact path="/about"
            element = {
              <React.Fragment>
                <Navbar mode={mode} toggleMode={toggleMode} text={text} dropColor={dropColor} color={color} linkColor_2={linkColor_2}/>         {/* <By deault props is Used */}
                <Alert alert={alert} />
                <About color={color} headingColor={headingColor} btnColor={btnColor} btnText={btnText} />
              </React.Fragment>
            }>
          </Route>
          <Route exact path="/home"
            element = {
              <React.Fragment>
                <Navbar mode={mode} toggleMode={toggleMode} text={text} dropColor={dropColor} color={color} linkColor_1={linkColor_1} activeStatus={activeStatus}/>         {/* <By deault props is Used */}
                <Alert alert={alert} />
                <TextForm heading="Enter the String"  showAlert={showAlert} myStyle={myStyle} headingColor={headingColor} contentColor={contentColor} btnColor={btnColor}/>
                <About color={color} headingColor={headingColor} btnColor={btnColor} btnText={btnText} />
              </React.Fragment>
              }>
          </Route>
          <Route exact path="/"
            element = {
              <React.Fragment>
                <Navbar mode={mode} toggleMode={toggleMode} text={text} dropColor={dropColor} color={color}/>         {/* <By deault props is Used */}
                <Alert alert={alert} />
                <TextForm heading="Enter the String"  showAlert={showAlert} myStyle={myStyle} headingColor={headingColor} contentColor={contentColor} btnColor={btnColor}/>
              </React.Fragment>
            }>
          </Route>
      </Routes>

      
      </Router>

    </>
  );
}

export default App;

