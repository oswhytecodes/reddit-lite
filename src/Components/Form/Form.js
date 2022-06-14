import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../Redux/RedditSlice";
const Form = () => {
  const [value, setValue] = useState("");
  const filteredSubReddit = useSelector((state) => state.reddit.data);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
    console.log(value);
  };
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
    </div>
  );
};
export default Form;
