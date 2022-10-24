import React, { useEffect, useState } from "react";
const useTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch(" https://polar-journey-63728.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [tools]);
  return [tools, setTools];
};
export default useTools;
