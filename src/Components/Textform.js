import React, { useState } from "react";

export default function Textform(props) {
  const uppercaseButton = () => {
    let x = text.toUpperCase();
    settext(x);
    props.showAlert(" Changed to Uppercase", "success");
  };
  const lowercaseButton = () => {
    let x = text.toLowerCase();
    settext(x);
    props.showAlert(" Changed to Lowercase", "success");
  };
  const capcaseButton = () => {
    let x = text;
    x = x.trim();
    console.log(x);
    if (x !== "") {
      x = x.toLowerCase().split(/\s+/);
      console.log(x);
      for (let i = 0; i < x.length; i++) {
        x[i] = x[i][0].toUpperCase() + x[i].substring(1);
      }
      console.log(x);
      console.log(x.join(" "));
      settext(x.join(" "));
    }
    props.showAlert(" Capitalized First Letter of each Word", "success");
  };
  const clearButton = () => {
    settext("");
    props.showAlert(" Cleared Text", "success");
  };

  const copyButton = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" Copied Text to Clipboard", "success");
  };

  const handleOnChange = (event) => {
    settext(event.target.value);
  };

  const [text, settext] = useState("");
  return (
    <>
      <div
        className={`container text-${
          props.theme === "light" ? "dark" : "light"
        }`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            props.theme === "light" ? "info" : "primary"
          } text-${props.theme === "light" ? "dark" : "light"} mx-1 my-1`}
          onClick={uppercaseButton}
          disabled={text.length===0}
        >
          Uppercase All
        </button>
        <button
          className={`btn btn-${
            props.theme === "light" ? "info" : "primary"
          } text-${props.theme === "light" ? "dark" : "light"} mx-1 my-1`}
          onClick={lowercaseButton}
          disabled={text.length===0}
        >
          Lowercase All
        </button>
        <button
          className={`btn btn-${
            props.theme === "light" ? "info" : "primary"
          } text-${props.theme === "light" ? "dark" : "light"} mx-1 my-1`}
          onClick={capcaseButton}
          disabled={text.length===0}
        >
          Capitalization
        </button>
        
        <button
          className={`btn btn-${
            props.theme === "light" ? "info" : "primary"
          } text-${props.theme === "light" ? "dark" : "light"} mx-1 my-1`}
          onClick={copyButton}
          disabled={text.length===0}
        >
          Copy Text
        </button>
        <button
          className={`btn btn-${
            props.theme === "light" ? "info" : "primary"
          } text-${props.theme === "light" ? "dark" : "light"} mx-1 my-1`}
          onClick={clearButton}
          disabled={text.length===0}
        >
          Clear All
        </button>
      </div>
      <div
        className={`container text-${
          props.theme === "light" ? "dark" : "light"
        } mt-3`}
      >
        <h2>Text Analysis</h2>
        <p className="mb-0">Number of character: {text.length}</p>
        <p>
          Number of Words:{" "}
          {text.length === 0 ? "0" : text.trim().split(/\s+/).length}
        </p>

        <h2>Text Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
