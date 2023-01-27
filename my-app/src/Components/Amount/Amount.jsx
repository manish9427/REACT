import { useState } from "react";
var design = {
  width: "500px",
  margin: "100px auto",
  boxShadow: "0 0 10px black",
  padding: "50px",
};
function TotalAmount() {
  const [totalAmount, setTotalAmount] = useState(0);

  // const handleDeposit = () => {
  // console.log(totalAmount);  //0
  //   setTotalAmount(totalAmount + 100);//100
  // console.log(totalAmount);  //0
  //   setTotalAmount(totalAmount + 500);//500
  // console.log(totalAmount);  //0
  //   setTotalAmount(totalAmount + 50);//50
  // console.log(totalAmount);  //0
  // };//50
  const handleDeposit = () => {
    setTotalAmount((p) => p + 100); //100
    // setTotalAmount((p) => p + 200);//300
    // setTotalAmount((p) => p + 300);//600
    // setTotalAmount(100);//100
  };

  const handleWithdraw = () => {
    setTotalAmount(totalAmount - 100);
  };

  return (
    <div style={design}>
      <h1>Current Amount : {totalAmount}</h1>
      <button onClick={handleDeposit}>Deposit 100</button>
      <button onClick={handleWithdraw}>Withdraw 100</button>
    </div>
  );
}
export default TotalAmount;
