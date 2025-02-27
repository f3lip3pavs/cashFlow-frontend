import styled from "styled-components";
import { darkTheme } from "../../theme";

export const AuthStyle = styled.section`
    background-color: ${darkTheme.colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: auto;

    h1 {
        margin-bottom: 50px;
        font-family: 'museoModerno', serif;
        font-weight: 100;
        font-size: 60px;
        color: ${darkTheme.colors.textPrimary};
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form > input {
        border-radius: 20px;
        border-style: none;
        margin-bottom: 15px;
        width: 200px;
        padding: 8px;
        background-color: ${darkTheme.colors.label};
        text-align: center;
    }

    form > input:focus {
        outline: none;
        border: 1px solid ${darkTheme.colors.positiveSecundary};
    }

    form > button {
        border-style: none;
        padding: 5px;
        border-radius: 20px;
        width: 50%;
        margin-top: 20px;
        font-family: 'museoModerno', serif;
        background-color: ${darkTheme.colors.positiveSecundary};
        color: ${darkTheme.colors.textPrimary};
    }

    form > button:hover{
        cursor: pointer;
    }

    p {
        font-family: 'museoModerno', serif;
        font-weight: 200;
        font-size: 14px;
        text-decoration: underline;
        color: ${darkTheme.colors.textPrimary};
    }

    p:hover{
        cursor: pointer;
        
    }

    span{
        background-color: ${darkTheme.colors.negative};
        color: ${darkTheme.colors.textPrimary};
        padding: 3px 6px 3px 6px;
        border-radius: 10px;
        font-family: 'museoModerno', serif;
        font-weight: 300;
        font-size: 12px;
        transition: all 0.5s;
    }
`