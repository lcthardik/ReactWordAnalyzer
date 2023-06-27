import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

document.body.style.backgroundColor = "black";

function App() {
  const [pageMode, setmode] = useState("dark");
  const [alert, setalert] = useState(null);

  const showAlert = (msg, type) => {
    setalert({
      msg: msg,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  const toggle = () => {
    if (pageMode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "#EDEBE9";
      showAlert(" Wapas DarkMode kar!!!!!!!!!", "danger");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert(" Dark Mode Enabled (Bahot Badia)", "success");
    }
  };

  const theme1 = () => {
    if (pageMode === "dark") {
      //setmode("primary");
      document.body.style.backgroundColor = "blue";
      //showAlert(" hogya", "success");
    } else {
      //setmode("muted");
      document.body.style.backgroundColor = "#C7D6D5";
      //showAlert(" hogya", "success");
    }
  };
  const theme2 = () => {
    if (pageMode === "dark") {
      //setmode("secondary");
      document.body.style.backgroundColor = "grey";
      //showAlert(" hogya", "success");
    } else {
      //setmode("info");
      document.body.style.backgroundColor = "#087990";
      //showAlert(" hogya", "success");
    }
  };
  const theme3 = () => {
    if (pageMode === "dark") {
      //setmode("danger");
      document.body.style.backgroundColor = "#7A000C";
      showAlert(" hogya", "success");
    } else {
      //setmode("warning");
      document.body.style.backgroundColor = "rgb(229 154 2)";
      //showAlert(" hogya", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="GodText"
          theme={pageMode}
          toggle={toggle}
          theme1={theme1}
          theme2={theme2}
          theme3={theme3}
        />
        <Alert alert={alert} />
        {/* <div className="container my-3">
        <Textform heading="Enter Text" theme={pageMode} showAlert={showAlert} />
      </div> */}
        <Routes>
          <Route
            exact path="/"
            element={
              <div className="container my-3">
                <Textform
                  heading="Enter Text"
                  theme={pageMode}
                  showAlert={showAlert}
                />
              </div>
            }
          />
          <Route exact path="/about" element={<About theme={pageMode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
