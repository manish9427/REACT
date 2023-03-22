import { React, useState } from "react";

const APIURL = "https://jsonplaceholder.typicode.com/users";
function ApiFetch() {
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState(0);

  const getUsers = async () => {
    //write code here
    //render the list of users
    const response = await fetch(APIURL);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };
  const sortList = () => {
    //write code here
    // sort the user list by name's length
    // on first click list will sorted in assending order
    // on second click list will be sorted in descending order
    // on third click default list will be rendered
    // on fourth click again start form step 1
    let sortedUsers = [...users];
    if (sortOrder === 0) {
      sortedUsers.sort((a, b) => a.name.length - b.name.length);
      setSortOrder(1);
    } else if (sortOrder === 1) {
      sortedUsers.sort((a, b) => b.name.length - a.name.length);
      setSortOrder(2);
    } else {
      setSortOrder(0);
      return;
    }
    setUsers(sortedUsers);
  };

  return (
    <main>
      <h1>User List</h1>
      <div>
        <button onClick={getUsers}>Get Users</button>
        <button onClick={sortList}>Sort list by name's length</button>
      </div>
      <ul>
        {
          /*render the list of the users */
          users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </main>
  );
}

export default ApiFetch;
