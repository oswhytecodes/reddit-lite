import './index.css';
// import { useState, useEffect } from 'react'
import Header from './Components/Header/Header'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

export default App;
 // useEffect(() => {
  //   fetch("https://www.reddit.com/r/popular.json")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.data.children));
  // }, []);