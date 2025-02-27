import styled from "styled-components";

export const FormCashFlowStyle = styled.section`
    
    margin-right: 50px;
    margin-top: 50px;
    width: 35%;

    form{
        display: flex;
        flex-direction: column;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;
    }

    h2{
        color: ${prop => prop.theme.colors.textPrimary};
        font-family: 'museoModerno', serif;
        font-size: 30px;
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
        width: 50%;
        height: 50px;
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 30px;
        border-style: none;
        background-color: ${prop => prop.theme.colors.positiveSecundary};
        color: white;
        margin: auto;
        font-size: 20px;
    }

    button:hover{
        cursor: pointer;
        background-color: ${prop => prop.theme.colors.hoverButton};
    }

    p{
        margin-top: 20px;
        background-color: ${prop => prop.theme.colors.negative};
        color: ${prop => prop.theme.colors.textPrimary};
        padding: 3px 6px 3px 6px;
        border-radius: 10px;
        font-family: 'Nunito', serif;
        font-weight: 300;
        font-size: 12px;
        transition: all 0.5s;
    }
`