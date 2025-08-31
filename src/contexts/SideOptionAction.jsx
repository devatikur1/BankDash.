import React, { useEffect, useRef, useState } from "react";
import { createContext } from "react";

export const SideOptionAction = createContext({});

export const SideAction = ({ children }) => {
  const [sideBarShowing, setSideBarShowing] = useState(false);
  const [searchShowing, setSearchShowing] = useState(true);


  return (
    <SideOptionAction.Provider
      value={{
        sideBarShowing,
        setSideBarShowing,
        searchShowing,
        setSearchShowing,
      }}
    >
      {children}
    </SideOptionAction.Provider>
  );
};
