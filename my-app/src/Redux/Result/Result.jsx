import myStore from "../reduxStore/Store";
export default function Result(props) {
  const reduxData = myStore.getState();
  console.log(reduxData);
  return (
    <div>
      <h1>Result Component</h1>
      <h4>{myStore.getState().name}</h4>
    </div>
  );
}
