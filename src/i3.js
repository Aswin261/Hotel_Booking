import React from "react";

function Posts({ posts }) {
  return (
    <ul className="list-group my-4">
      {posts.map((post) => {
        return (
          <img
            src={post.avatar}
            className="rounded-5"
            height="75px"
            width="85px"
            alt="..."
          />
        );
      })}
    </ul>
  );
}

export default Posts;
