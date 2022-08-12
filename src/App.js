import "./index.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
//  import components
import { Home } from "./Home";
import { PostCards } from "./Components/PostContainer/PostCards";
// import { Form } from "./Components/Form/Form";
// import selected state

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/subreddit/:name" element={<PostCards />}></Route>
    </Routes>
  );
}

export default App;
