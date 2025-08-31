import React, { useEffect, useRef, useState } from "react";
import { createContext } from "react";

export const SideOptionAction = createContext({});

export const SideAction = ({ children }) => {
  const DexSidBar = useRef();
  const PhoneSidBar = useRef();
  const DexSearchAction = useRef();
  const MobiSearchAction = useRef();
  const [sideBarShowing, setSideBarShowing] = useState(false);
  const [searchShowing, setSearchShowing] = useState(false);

  useEffect(() => {
    const DexSide = DexSidBar.current;
    const PhoneSide = PhoneSidBar.current;

    return () => {
      if (DexSide || PhoneSide) {
        DexSide.addEventListener("click", (e) => {
          let DexTargetedDiv = e.target.closest("div");
          DexSide.querySelectorAll("div").forEach((div) => {
            div.className = "";
          });

          DexTargetedDiv.className = "DexActive lg:w-[85%] md:mx-5 lg:mx-5";
          setSideBarShowing(false);
        });

        PhoneSide.addEventListener("click", (e) => {
          let PhoneTargetedDiv = e.target.closest("div");
          PhoneSide.querySelectorAll("div").forEach((div) => {
            div.className = "";
          });

          PhoneTargetedDiv.className = "activeThis";

          setSideBarShowing(false);
        });
      }
    };
  }, []);

  useEffect(() => {
    const DexsearchBtn = DexSearchAction.current;
    const MobisearchBtn = MobiSearchAction.current;

    const handleClick = () => {
      setSearchShowing(true);
      setSideBarShowing(false);
    };

    if (DexsearchBtn) DexsearchBtn.addEventListener("click", handleClick);
    if (MobisearchBtn) MobisearchBtn.addEventListener("click", handleClick);

    return () => {
      if (DexsearchBtn) DexsearchBtn.removeEventListener("click", handleClick);
      if (MobisearchBtn)
        MobisearchBtn.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <SideOptionAction.Provider
      value={{
        DexSearchAction,
        MobiSearchAction,
        sideBarShowing,
        setSideBarShowing,
        searchShowing,
        setSearchShowing,
        DexSidBar,
        PhoneSidBar,
      }}
    >
      {children}
    </SideOptionAction.Provider>
  );
};
