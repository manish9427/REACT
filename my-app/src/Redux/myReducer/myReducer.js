var initiallData = {
  name: "",
  city: "",
};
const myReducer = (initiallState = initiallData, action) => {
  if (action.type === "NAME") {
    return (initiallState = {
      ...initiallState,
      name: action.payload,
    });
  }
  return initiallState;
};
export default myReducer;
