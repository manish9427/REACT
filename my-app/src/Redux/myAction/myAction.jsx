import myStore from "../reduxStore/Store";
export const myAction = (data) => {
  // alert(data);
  myStore.dispatch({
    type: "NAME",
    payload: data,
  });
};
