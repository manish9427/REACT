import React from "react";
function PropsExample(props) {
  console.log(props);
  return (
    <>
      <h1>Props</h1>
      my name is {props.fullname}
      <hr />
    </>
  );
}

export default PropsExample;
