import React from "react";

export interface MenuBarProps {
    menubar : React.MutableRefObject<HTMLDivElement|null> ;
    isMenuBarOpen : boolean ; 
    setIsMenuBarOpen : React.Dispatch<React.SetStateAction<boolean>>;
    crrPage : string ; 
    setCrrPage : React.Dispatch<React.SetStateAction<string>>;
}