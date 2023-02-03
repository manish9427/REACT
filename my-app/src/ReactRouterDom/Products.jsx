import { useEffect } from "react";
function Products() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className="App">
      <h1>Products</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ad
        laudantium quidem commodi quia iusto nostrum. Distinctio quasi eos
        dolorum error neque tempore, provident reiciendis placeat ab obcaecati
        eius voluptatem!
      </p>
      {Products.length > 0 ? (
        <div></div>
      ) : (
        <h2 style={{ color: "red" }}>Data is Not Available</h2>
      )}
    </div>
  );
}

export default Products;
