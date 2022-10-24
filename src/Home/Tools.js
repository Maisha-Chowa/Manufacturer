import React, { useEffect, useState } from "react";
import useTools from "../Hooks/useTools";
import Tool from "./Tool";

const Tools = () => {
  // const [tools, setTools] = useState([]);
  // useEffect(() => {
  //   fetch("Tools.json")
  //     .then((res) => res.json())
  //     .then((data) => setTools(data));
  // }, []);
  const [tools, setTools] = useTools();
  console.log(tools);

  return (
    <div className="my-28">
      <div className="text-center ">
        <h2 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
          {/* <h2>tools : {tools.length}</h2> */}
          {tools.map((tool) => (
            <Tool tool={tool}></Tool>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
