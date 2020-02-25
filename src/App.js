import React from "react";
import "./styles.css";

const data = [
  {
    component: "First",
    id: 1
  },
  {
    component: "Second",
    id: 2
  },
  {
    component: "Third",
    id: 3
  },
  {
    component: "Forth",
    id: 4
  }
];
const KeyPair = () => (
  console.log("data", { ...data }),
  (
    <>
      <div className="App">
        <h1>Key Value Pair Table</h1>
        <h2>SubHeader</h2>
        <div className="paircontainer">
          <h4>Section one</h4>
          {data.map((dynamicComponent, i) => (
            <Content key={i} componentData={dynamicComponent} />
          ))}
          <h4>Section Two</h4>
          {data.map((dynamicComponent, i) => (
            <Content key={i} componentData={dynamicComponent} />
          ))}
        </div>
      </div>
    </>
  )
);

const Content = function Content(...data) {
  //console.log("dat spread", ...data);
  console.log("comp ", data[0].componentData.id);

  return (
    <React.Fragment>
      <div className="key">
        <ul>
          <li>{data[0].componentData.component}</li>
        </ul>
      </div>
      <div className="value">
        <ul>
          <li>{data[0].componentData.id}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default KeyPair;
