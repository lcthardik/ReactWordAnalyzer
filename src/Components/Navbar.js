import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  
  const stylesB = {
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    cursor: "pointer",
    marginRight: "10px",
  };

  
  return (
    <nav
      className={`navbar navbar-expand-lg  navbar-${props.theme} bg-${props.theme}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            
          </ul>

          <button
            className="circular-button1"
            style={{...stylesB, backgroundColor: props.theme === 'dark' ? '#0000a2' : 'silver'}}
            onClick={props.theme1}
          />
           <button
            className="circular-button2"
            style={{...stylesB, backgroundColor: props.theme === 'dark' ? 'grey' : '#087990'}}
            onClick={props.theme2}
          />
          
          <button
            className="circular-button3"
            style={{...stylesB, backgroundColor: props.theme === 'dark' ? 'red' : 'rgb(229 154 2)'}}
            onClick={props.theme3}
          /> 

          <div
            className={`form-check form-switch text-${
              props.theme === "light" ? "dark" : "light"
            } mx-2`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggle}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Light Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };

Navbar.defaultProps = {
  title: "Enter Title",
};
