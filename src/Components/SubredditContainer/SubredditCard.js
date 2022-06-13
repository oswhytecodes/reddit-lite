import React, { useEffect } from "react";
import { fetchData } from "../../Redux/RedditSlice";
import { useSelector, useDispatch } from "react-redux";

export const SubredditCard = () => {
  // hardcoded subreddit categories for the sidebar
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
  // styles
  const styles = {
    textAlign: "center",
    marginTop: "1em",
  };
  // import the category state
  const categorySubreddit = useSelector((state) => state.reddit.category);
  const dispatch = useDispatch();

  // changes the url on each click, passing in the category state
  const handleClick = (x) => {
    dispatch(fetchData(x));
    // configure it to scroll after the data is loaded
    window.scrollTo(0, 0);
  };

//  DO I NEED THIS USEEFFECT?
  useEffect(() => {
    dispatch(fetchData(categorySubreddit));
  }, [dispatch, categorySubreddit]);

  return (
    <div className="SubredditCard">
      <div style={styles}>
        <h1>SubReddits</h1>
      </div>
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
