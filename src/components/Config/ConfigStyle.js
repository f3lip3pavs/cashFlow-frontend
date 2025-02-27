import styled from "styled-components";
import { lightTheme } from "../../theme.js";

export const ConfigStyle = styled.section`

    margin: 4vw 0 0 8vw;

    h1{
        font-family: 'Nunito', serif;
        color: ${prop => prop.theme.colors.textPrimary};
        font-size: 5vw;
        font-weight: 300;
        margin-bottom: 30px;
    }

    .data-container{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    p{
        color: ${prop => prop.theme.colors.textPrimary};
        font-family: "Nunito", serif;
        margin: 0 4px 0 4px;
        font-size: 30px;
        position: static;
        font-weight: 100;
    }

    .edit{
        width: 26px;
    }

    .edit:hover{
        cursor: pointer;
        background-color: ${prop => prop.theme.colors.neutral};
        border-radius: 50px;
        padding: 5px;
    }

    img{
        width: 40px;
        filter: ${prop => prop.theme == lightTheme ? 'invert(100%)' : 'none'};
    }

    label{
        display: flex;
        align-items: center;
    }

    input{
        border-style: none;
        border-radius: 30px;
        padding: 10px;
        width: 15vw;
    }

    input:focus{
        outline: none;
        border: 2px solid ${prop => prop.theme.colors.positiveSecundary};
    }

    button{
        border-style: none;
        border-radius: 50px;
        padding: 5px 0 5px 0;
        width: 9.5vw;
        margin-top: 10px;
        margin-right: 5px;
    }

    button:hover{
        cursor: pointer;
    }

    .send{
        background-color: ${prop => prop.theme.colors.positiveSecundary};
        color: ${prop => prop.theme.colors.textPrimary};
    }

    .cancel{
        background-color: ${prop => prop.theme.colors.neutral};
        color: ${prop => prop.theme.colors.textPrimary};
    }

    .delete{
        filter: invert(26%) sepia(85%) saturate(8485%) hue-rotate(345deg) brightness(100%) contrast(90%);
        display: flex;
        margin-top: 100px;
    }
    
    .delete > p:hover{
        cursor: pointer;
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 7px;
    }

`