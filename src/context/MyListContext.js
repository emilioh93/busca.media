import React, { createContext, useState } from "react";

export const MyListContext = createContext();

export const MyListProvider = ({ children }) => {
  const [myList, setMyList] = useState([]);

  return (
    <MyListContext.Provider value={{ myList, setMyList }}>
      {children}
    </MyListContext.Provider>
  );
};

export default MyListProvider;
