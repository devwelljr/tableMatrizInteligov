import React, { useState } from "react";
import { node } from "prop-types";
import Context from "./Context";

function Provider({ children }) {
  const [data, setData] = useState({});
  const [dataParse, setDataParse] = useState([]);

  return (
    <Context.Provider
      value={{
        data,
        setData,
        dataParse,
        setDataParse
      }}
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
