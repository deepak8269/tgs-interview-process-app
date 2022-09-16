import React, { createContext, useContext, useState, useEffect } from "react";
import { getData } from "../apis/api";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  // const [check, setCheck] = useState({});

  useEffect(() => {
    getData(setLoading, setData, setError);
  }, []);

  return (
    <DataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        loading,
        error
      }}>
      {children}
    </DataContext.Provider>
  );
};
const useData = () => useContext(DataContext);

export { useData, DataProvider };
