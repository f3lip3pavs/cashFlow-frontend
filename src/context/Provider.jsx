import { useState } from "react";
import { Context } from "./context.js";
import { darkTheme } from "../theme.js";

export const Provider = ({children}) => {
    const [style, setStyle] = useState(darkTheme);

    return(
        <Context.Provider value={{style, setStyle}}>
            {children}
        </Context.Provider>
    )
}