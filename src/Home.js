import { Header } from "./Components/Header/Header";
import { SubredditContainer } from "./Components/SubredditContainer/SubredditContainer";
import { PostContainer } from "./Components/PostContainer/PostContainer";

import React from "react";

export const Home = () => {
  return (
    <div>
      <header className="App-header">
        <Header />
      </header>
      <section className="main-container">
        <SubredditContainer />
        <PostContainer />
      </section>
    </div>
  );
};
