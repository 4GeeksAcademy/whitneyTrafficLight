
import React, { useState } from "react";

const Lights = (props) => {
  const [light, setLight] = useState(props.classList);

  const toggleLight = () => {
    if (light.includes("selected")) {
      setLight(light.filter((className) => className !== "selected"));
    } else {
      setLight([...light, "selected"]);
    }
  };

  return (
    <div
      className={light.join(" ")}
      onClick={toggleLight}
    ></div>
  );
};

export default Lights;





// import React from "react";
// import { useState,useEffect} from "react";


// const Lights = (prop) =>{
//     const [Light, selectLight] = useStae(classList)
// const classList = props.classList;
// const setSelector = () => {
//     light.push("selected";)
//     selectLight(light);
// };
// // useEffect(() => {


// // }
//     return(
//         <div className={light.join("")}  oncClick ={() => selectLight("selected")}></div>
//     )
// }


// export default Lights;