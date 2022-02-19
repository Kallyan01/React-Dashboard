import React, {useState, createContext,useRef} from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {

    const [navOpen, setNavOpen] = useState(100);
    const cardselect = useRef([])
    const cardlist = useRef([])
    const [Tab,setTab]=useState(0)

    return (
        <GlobalContext.Provider value = {{nav:[navOpen, setNavOpen],card: cardselect,cards: cardlist,tab :[Tab,setTab]}}>
            {children}
        </GlobalContext.Provider>
    )
};