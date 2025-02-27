import styled from "styled-components";
import { darkTheme } from "../../theme";

export const UpdateCardStyle = styled.div`
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
        width: 30%;
        border-radius: 20px;
        padding: 20px 50px 20px 50px;
        
    }

    form{
        display: flex;
        flex-direction: column;
    }

    input{
        border-style: none;
        margin-bottom: 20px;
        border-radius: 30px;
        height: 40px;
        background-color: ${prop => prop.theme.colors.label};
        text-align: center;
    }

    input:focus{
        outline: none;
        border: 1px solid green;
    }

    .check-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 20px;
        padding: 0 20px 0 20px;
    }

    label{
        display: flex;
        align-items: center;
        color: ${prop => prop.theme.colors.textPrimary};
        font-family: "Nunito", serif;
        font-size: 2.3vw;
        font-weight: 100;
    }

    label > input{
        margin: 0;
        float: left;
        margin-right: 2px;
        width: 2vw;
    }

    textarea{
        height: 100px;
        border-style: none;
        margin-bottom: 20px;
        border-radius: 30px;
        height: 40px;
        background-color: ${prop => prop.theme.colors.label};
        text-align: center;
        padding: 20px 2px 0px 2px;
    }

    textarea:focus{
        outline: none;
        border: 1px solid green;
    }

    button{
        width: 40%;
        height: 50px;
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 30px;
        border-style: none;
        background-color: ${prop => prop.theme.colors.positiveSecundary};
        color: white;
        margin: auto;
        font-size: 20px;
        position: relative;
    }

    button:hover{
        cursor: pointer;
    }
    
    .container-button{
        display: flex;
    }

    .cancel-neutral{
        background-color: ${prop => prop.theme.colors.neutral};
        
    }

    .update:hover{
        cursor: pointer;
        background-color: ${prop => prop.theme.colors.hoverButton};
    }


    .close{
        position: relative;
        left: 100%;
        margin-bottom: 15px;
        display: inline-block;
    }

    .close:hover{
        cursor: pointer;
    }
` 