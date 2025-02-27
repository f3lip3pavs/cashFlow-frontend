import styled from "styled-components";
import { darkTheme } from "../../theme.js";

export const RegisterStyle = styled.section`
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

    span{
        background-color: ${darkTheme.colors.negative};
        color: ${darkTheme.colors.textPrimary};
        font-family: 'Nunito', serif;
        padding: 3px 10px 3px 10px;
        border-radius: 30px;
        font-weight: 100;
        position: absolute;
        bottom: 120px;
    }
`