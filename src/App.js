import './index.css';
import { useState, useEffect } from 'react'
import Header from './Components/Header/Header'


function App() {
  useEffect(() => {
    fetch("https://www.reddit.com/r/popular.json")
      .then((res) => res.json())
      .then((data) => console.log(data.data.children));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

export default App;
