import { useParams } from "react-router-dom";
function ProductsDetails() {
  const { id } = useParams();
  return (
    <div className="App">
      <h1>Products Details {id}</h1>
    </div>
  );
}

export default ProductsDetails;
