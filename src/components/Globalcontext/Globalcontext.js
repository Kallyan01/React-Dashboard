import React, {useState, createContext,useRef} from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {

    const [navOpen, setNavOpen] = useState(100);
    const cardselect = useRef([])
    const cardlist = useRef([])
    const [Tab,setTab]=useState(0)
    const [ScreenWidth,setScreenWidth]=useState(window.screen.availWidth)
    const [Showpro,setShowpro]= useState(false)

    return (
        <GlobalContext.Provider value = {
            {
                nav:[navOpen, setNavOpen],
                card: cardselect,
                cards: cardlist,
                tab :[Tab,setTab],
                screen: [ScreenWidth,setScreenWidth],
            }
            }>
            {children}
        </GlobalContext.Provider>
    )
};