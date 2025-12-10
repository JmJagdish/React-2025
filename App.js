import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <>
      <h1>React 2025 🚀</h1>
    </>
  );
};

const AppComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Hello Welcome to React-App Component 🚀</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
