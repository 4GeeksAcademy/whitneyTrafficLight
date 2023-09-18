

import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import Lights from './Lights.jsx';


import "../styles/index.css";

const Home = () => {
  
  return (
     <div className="topStick">
      <div className="trafficLight">
          <div className="Light-Box">
            <Lights classList={['red', 'light']} />
            <Lights classList={['yellow', 'light']} />
            <Lights classList={['green', 'light']} />
          </div>
        </div>
      
    </div>

  );
};


ReactDOM.render(<Home />, document.querySelector("#app"));






// //import react into the bundle
// import React from "react";
// import ReactDOM from "react-dom";
// import { useState, useEffect } from "react";
// import Lights from './Light.jsx'

// // include your styles into the webpack bundle
// import "../styles/index.css";

// //import your own components
// import Home from "./component/home.jsx";

// //render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));

// const Home = () => {
//     return (
//         <div className="body">
//         <div className="traficLight">
//             <Lights classList={['red', 'light']}/>
//                 <Lights classList={['yellow', 'light']}/>
//                     <Lights classList={['green', 'light']} />
//         </div>
//         </div>

//     )
// };