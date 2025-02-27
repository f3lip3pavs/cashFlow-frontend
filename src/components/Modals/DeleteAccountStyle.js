import styled from "styled-components";
import { darkTheme } from "../../theme.js";

export const DeleteAccountStyle = styled.div`
    position: fixed;
    background-color: rgba(20, 20, 20, 0.5);
    width: 99vw;
    height: 100%;
    top: 0;
    left:0;

    .container{
        position: absolute;
        right: 50%;
        bottom: 50%;
        transform: translate(50%, 50%);
        background-color: ${prop => prop.theme == darkTheme ? prop.theme.colors.cardBgPrimary: 'white'};
        color: ${prop => prop.theme.colors.textPrimary};
        font-family: "Nunito", serif;
        width: 50%;
        height: 50%;
        border-radius: 20px;
    }
    
    h6{
        font-size: 30px;
        font-family: 'museoModerno', serif;
        margin-top: 20px;
    }

    p{
        font-size: 20px;
    }

    .text-container{
        display: inline-block;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }

    .close{

        position: relative;
        left: 90%;
        margin-top: 18px;
    }

    .close:hover{
        cursor: pointer;
    }

    button{
        
        font-size: 35px;
        border-radius: 50px;
        border-style: none;
        color: white;
        font-family: 'Nunito', serif;   
             
    }

    button:hover{
        cursor: pointer;
    }

    .cancel-modal{
        background-color: ${prop => prop.theme.colors.neutral};
    }

    .delete-modal{
        background-color: ${prop => prop.theme.colors.negative};
    }

    .button-container{
        display: flex;
        justify-content: space-around;
        padding: 0 15% 0 15%;
        margin-top: 30px;
    }

    input{
        width: 80%;
    }
    .input-container{
        display: inline-block;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        margin-top: 20px;
    }

    .alert{
        color: ${prop => prop.theme.colors.negative}
    }

`