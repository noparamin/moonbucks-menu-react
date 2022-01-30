import {React, useState} from 'react';
import './App.css';
import Menu from './components/Menu';
import Nav from "./components/Nav";

function App() {
  const [category, setCategory] = useState({category: "espresso", title: "☕ 에스프레소"});
  return (
    <div className="App">
      <Nav category={category} setCategory={setCategory}/>
      <Menu category={category} setCategory={setCategory}/>
    </div>
  );
}

export default App;
