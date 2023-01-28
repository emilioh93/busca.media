import React, { createContext, useMemo, useState} from 'react';

export const MyListContext = createContext();

export const MyListProvider = ({ children }) => {
  const [myList, setMyList] = useState([]);
  const value = useMemo(() => ({ myList, setMyList }), [myList, setMyList]);

  return (
    <MyListContext.Provider value={value}>
      {children}
    </MyListContext.Provider>
  );
};

export default MyListProvider;
