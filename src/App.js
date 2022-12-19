import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Blog from "./components/Blog";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <>
        <Header/>
        <Routes>
          <Route exact path="/Home" element={<Home />}>
            Home
          </Route>
          <Route exact path="/About" element={<About />}>
            About
          </Route>
          <Route exact path="/Blog" element={<Blog />}>
            Blog
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
