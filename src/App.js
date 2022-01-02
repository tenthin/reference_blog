import logo from './logo.svg';
import './App.css';

import Posts from "./components/Posts/Posts";

const App = ()  => {
  return (
    <div className="main-container">
      <h1 className="main-heading">
        Blog App using React js
      </h1>
      <Posts />
    </div>
  );
}

export default App;
