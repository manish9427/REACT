import React from "react";
function PropsExample(props) {
  console.log(props);
  return <h1>{props.fullname}</h1>;
}

export default PropsExample;
