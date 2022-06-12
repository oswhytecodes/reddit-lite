import "./index.css";
import React from "react";
//  impport components
import Header from "./Components/Header/Header";
import { SubredditContainer } from "./Components/SubredditContainer/SubredditContainer";
import { PostContainer } from "./Components/PostContainer/PostContainer";
// import selected state

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section className="main-container"> 
        <SubredditContainer />
        <PostContainer />
      </section>
    </div>
  );
}

export default App;


