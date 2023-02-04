import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Products() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
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
      {state.length > 0 ? (
        <div
          style={{
            margin: "50px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {state.map((state) => {
            return (
              <div
                key={state.id}
                style={{
                  boxShadow: "0px 0px 100px gray",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                {/* <Link to="/productsdetails">
                  <img src={state.image} alt="" height="300px" width={300} />
                </Link> */}
                <Link to={`productsdetails/${state.id}`}>
                  <img src={state.image} alt="" height="300px" width={300} />
                </Link>
                <h3>{state.title}</h3>
                <p>${state.price}</p>
                {/* <Link to="/productsdetails">
                  <button>More Information</button>
                </Link> */}
                <Link to={`productsdetails/${state.id}/${state.price}`}>
                  <button>More Information</button>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <h2 style={{ color: "red" }}>Data is Loading...</h2>
      )}
    </div>
  );
}

export default Products;
