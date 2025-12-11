import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./Navbar";

const Title = () => (
  <div>
    <h1>React 2025 🚀</h1>
  </div>
);

const AppComponent = () => (
  <div id="container">
    <NavBar />
    <Title />
    <h1 className="heading">Hello Welcome to React-App Component 🚀</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
