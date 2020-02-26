import React from "react";
import "./styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faHome);

const data = [
  {
    component: <div>First (Div)</div>,
    id: 1
  },
  {
    component: (
      <a href="http://www.bbc.co.uk" target="_blank">
        Link test
      </a>
    ),
    id: 2
  },
  {
    component: <FontAwesomeIcon icon={faHome} size="lg" className="icon" />,
    id: 3
  },
  {
    component: [" 1 ", " 8 ", " Array", " of ", " Objects "],
    id: 4
  },
  {
    component: "'string'",
    id: 5
  }
];
const KeyPair = () => (
  console.log("data", { ...data }),
  (
    <>
      <div className="App">
        <h1>Key Value Pair Table</h1>
        <h2>SubHeader</h2>
        <h4>Section one</h4>
        <div className="paircontainer">
          {data.map((dynamicComponent, i) => (
            <Content key={i} componentData={dynamicComponent} />
          ))}
        </div>
      </div>
    </>
  )
);

const Content = function Content(...data) {
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
