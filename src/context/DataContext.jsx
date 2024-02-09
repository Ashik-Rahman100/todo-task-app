/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const [index,setIndex] = useState(null);
  const [edit,setEdit] = useState({})

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todoItems"));
    setData(items || []);
  }, []);

  const value = {
    data,
    setData,
    setIndex,
    index,
    edit,
    setEdit
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
