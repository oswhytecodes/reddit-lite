import React from "react";

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
  return (
    <div className="SubredditCard">
      {categories.map((category, index) => {
        return (
          <li key={index} className="category-card">
            r/{category}
          </li>
        );
      })}
    </div>
  );
};
