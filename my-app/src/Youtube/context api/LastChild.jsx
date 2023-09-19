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
                  <p>
                    my name is {name} and gender {gen}
                  </p>
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
