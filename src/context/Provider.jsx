import { useState } from "react";
import { Context } from "./Context";
import { darkTheme } from "../theme";

export const Provider = ({children}) => {
    const [style, setStyle] = useState(darkTheme);

    return(
        <Context.Provider value={{style, setStyle}}>
            {children}
        </Context.Provider>
    )
}