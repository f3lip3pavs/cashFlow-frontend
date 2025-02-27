import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
    }

       /* html{
            width: auto;
        } */
    
        body{
            background-color: ${prop => prop.theme.colors.background};
        }

        //scrollbar
        body::-webkit-scrollbar, html::-webkit-scrollbar{
            width: 5px;
            background: transparent;
        }
        
        body::-webkit-scrollbar-thumb, html::-webkit-scrollbar-thumb{
            background: ${prop => prop.theme.colors.neutral};
            border-radius: 10px;
        }
   
    
`

export default GlobalStyle;