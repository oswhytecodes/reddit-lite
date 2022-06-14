import React from "react";
import { PostCards } from "./PostCards";

export const PostContainer = () => {
  return (
    <section className="PostContainer">
      <PostCards />
    </section>
  );
};

/*
useEffect(() => {
  fetch("https://www.reddit.com/r/popular.json")
    .then((res) => res.json())
    .then((data) => console.log(data.data.children));
}, []);
*/
