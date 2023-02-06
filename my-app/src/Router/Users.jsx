import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
function Users() {
  const [state, setState] = useState([]);
  // const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  let initialPage = searchParams.get("page");
  const [page, setPage] = useState(Number(initialPage));
  console.log(initialPage, typeof initialPage);

  // console.log(searchParams);
  useEffect(() => {
    getUsers();
  }, [page]);

  useEffect(() => {
    setSearchParams({
      // page: page,
      page,
      // name: "manish",
      // sort: "asc",
    });
  }, [page]);
  const getUsers = async () => {
    var res = await fetch(`https://reqres.in/api/users?page=${page}`);
    var data = await res.json();
    // console.log(data);
    setState(data.data);
  };
  const handlePage = (value) => {
    var pageNumber = page + value;
    if (pageNumber >= 1 && pageNumber <= 2) {
      setPage(pageNumber);
    }
  };
  return (
    <div>
      <h1>Users Information</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
        asperiores impedit sint. Illo expedita odio voluptatum sunt error
        aperiam consequatur magni dolor sequi nemo dolorem suscipit, assumenda a
        blanditiis eius.
      </p>
      {state.length > 0 && (
        <div>
          <table
            style={{
              width: "80%",
              margin: "30px auto",
              boxShadow: "0px 0px 10px black",
              padding: "20px",
            }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            <tbody>
              {state.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      <img src={user.avatar} alt="" width={70} height={70} />
                    </td>
                    <td>
                      {user.first_name}
                      {user.last_name}
                    </td>
                    <td>{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <button
              onClick={() => {
                handlePage(-1);
              }}
            >
              prev
            </button>
            &nbsp;&nbsp;&nbsp;
            <button>{page}</button>&nbsp;&nbsp;&nbsp;
            <button
              onClick={() => {
                handlePage(1);
              }}
            >
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Users;
