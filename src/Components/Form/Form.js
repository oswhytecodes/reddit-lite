import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, fetchNewSuggestions } from "../../Redux/RedditSlice";

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const suggestions = useSelector((state) => state.reddit.suggestions);

  // submit a new subreddit to the dom
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchData(value));
    setValue("");
  };

  // add search options when searching in the input field
  useEffect(() => {
    dispatch(fetchNewSuggestions(value));
  }, [dispatch, value]);

  const styles = {
    display: suggestions.length > 0 ? "flex" : "none",
    position: "fixed",
    flexDirection: "column",
  
    background: "#fff",
    padding: "1em",
    width: "15em",
    borderRadius: "8px",
    marginTop: "5px",
  }
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input
          className="input-form"
          type="text"
          placeholder="Search topic..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>

      <div
        className="input-suggestions"
        style={styles}
      >
        {suggestions.map((name, index) => (
          <li
            className="input-lists"
            style={{ listStyle: "none" }}
            key={index}
            onClick={() => {
              dispatch(fetchData(name));
              setValue("");
              window.scrollTo(0, 0)
            }}
          >
            {name}
          </li>
        ))}
      </div>
    </div>
  );
};
export default Form;
