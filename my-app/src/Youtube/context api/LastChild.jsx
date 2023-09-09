import React from "react";
import { gender } from "./ParentClass";
import { data } from "./ParentClass";

const LastChild = () => {
  return (
    <>
      <data.Consumer>
        {(name) => {
          return (
            <gender.Consumer>
              {(gen) => {
                return (
                  <h1>
                    my name is {name} and gender {gen}
                  </h1>
                );
              }}
            </gender.Consumer>
          );
        }}
      </data.Consumer>
    </>
  );
};

export default LastChild;
