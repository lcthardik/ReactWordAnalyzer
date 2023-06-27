import React from "react";

function Alert(props) {
  return (
    <div style={{height:"45px"}}>
    {props.alert && <div className={`alert alert-${props.alert.type} `} role="alert">
      <strong>{props.alert.type[0].toUpperCase()+props.alert.type.substring(1)}</strong>:{props.alert.msg}
    </div>}
    </div>
  );
}

export default Alert;
