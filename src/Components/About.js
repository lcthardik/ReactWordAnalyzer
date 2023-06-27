import React from "react";

export default function About(props) {


  return (
    <>
      <div className="container  my-3" style={{color:props.theme === 'dark'? 'white':'black',backgroundColor: props.theme === 'dark'? '#483838':'#de9696'}}>
        <h2>About Us</h2>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={{color:props.theme === 'dark'? 'white':'black',backgroundColor: props.theme === 'dark'? '#483838':'#de9696'}}
              >
                <strong>Motivation</strong>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{color:props.theme === 'dark'? 'white':'black',backgroundColor: props.theme === 'dark'? '#483838':'#de9696'}}>
                First web application using React.js
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={{color:props.theme === 'dark'? 'white':'black',backgroundColor: props.theme === 'dark'? '#483838':'#de9696'}}
              >
                <strong>Team</strong>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{color:props.theme === 'dark'? 'white':'black',backgroundColor: props.theme === 'dark'? '#483838':'#de9696'}}>
                Is project ke liye bhi team chahiye hogi kya ?
              </div>
            </div>
          </div>
          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                style={{color:props.theme === 'dark'? 'white':'black',backgroundColor: props.theme === 'dark'? '#483838':'#de9696'}}
              >
                <strong>Contact Us</strong>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body mb-2" style={{color:props.theme === 'dark'? 'white':'black',backgroundColor: props.theme === 'dark'? '#483838':'#de9696'}}>
                Mat karna
              </div>
            </div>
          </div>
        </div>
        {/* <button className="btn btn-outline-primary mb-2" onClick={pageMode}>
          {btntxt}
        </button> */}
      </div>
      
    </>
  );
}
