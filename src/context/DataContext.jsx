/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todoItems"));
    setData(items || []);
  }, []);

  const value = {
    data,
    setData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
