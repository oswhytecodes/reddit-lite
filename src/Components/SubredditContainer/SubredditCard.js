import React, { useEffect } from "react";
import { fetchData } from "../../Redux/RedditSlice";
import { useSelector, useDispatch } from "react-redux";

export const SubredditCard = () => {
  const categories = [
    "memes",
    "Futurology",
    "learnjavascript",
    "learnprogramming",
    "webdev",
    "reactjs",
    "tailwindcss",
    "Frontend",
  ];

  const categorySubreddit = useSelector((state) => state.reddit.category);
  const dispatch = useDispatch();

  const handleClick = (x) => {
    dispatch(fetchData(x));
  };
  useEffect(() => {
    dispatch(fetchData(categorySubreddit));
  }, [dispatch, categorySubreddit]);

  return (
    <div className="SubredditCard">
      <div style={{textAlign: "center", marginTop: "1em" }}><h1>SubReddits</h1></div>
      {categories.map((category, index) => {
        return (
          <button
            onClick={() => handleClick(category)}
            key={index}
            className="category-card"
          >
            r/{category}
          </button>
        );
      })}
    </div>
  );
};
