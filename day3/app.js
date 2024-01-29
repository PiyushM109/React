import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "React basics");

const Title = () => (
  <h1 id="heading" className="Heading">
    Hello World
  </h1>
);

const HedingComponent = () => {
  return <div>
    <Title />
    <h1>Hello from functional component</h1>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HedingComponent />);
