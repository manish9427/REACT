import { useState } from "react";
function Post() {
  const [posts, setPosts] = useState([]);
  const getPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  };
  return (
    <div style={{ margin: "100px auto" }}>
      <h1>Post</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
        culpa repellendus asperiores dolores hic aspernatur dicta aperiam
        voluptatem, fugiat reiciendis maxime nesciunt modi doloribus architecto
        sint temporibus odio deserunt iure.
      </p>
      <button onClick={getPost}>Get Post</button>
      <ul>
        {posts.length > 0 &&
          posts.map((p) => {
            return <li>{p.title}</li>;
          })}
      </ul>
    </div>
  );
}
export default Post;
