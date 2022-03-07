import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export function SearchContextProvider({ children }) {
  const [inputQuery, setInputQuery] = useState();

  const value = { inputQuery, setInputQuery };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useSearchContext() {
  return useContext(Context);
}
