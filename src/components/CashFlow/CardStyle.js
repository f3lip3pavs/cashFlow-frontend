import styled from "styled-components";
import {darkTheme, lightTheme} from "../../theme.js"

const theme = darkTheme;

export const Card = styled.div`
    background-color: ${prop => prop.theme.colors.cardBgPrimary};
    color: ${prop => prop.theme.colors.textPrimary};
    padding-bottom: 10px;
    border-radius: 20px;
    font-family: "MuseoModerno", serif;
    margin-top: 10px;
    
    h6{
        font-size: 35px;
        margin-top: 10px;
        margin-bottom: 5px;
        margin-left: 10px;
    }

    .container-config{
        background-color: ${prop => prop.theme.colors.cardBgSecondary};
        color: ${prop => prop.theme == darkTheme ? darkTheme.colors.textPrimary : lightTheme.colors.textSecondary};
        padding: 5px 10px 5px 10px;
        border-radius: 20px 20px 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .container-config > div > img{
        width: 30px;
    }

    .container-config > span{
        font-weight: 200;
        font-size: 20px;
    }

    .text-container{
        display: flex;
        position: relative;
        margin: 10px;
    }

    .text-container > div {
        position: absolute;
        bottom: 0;
        right: 0;
    }
    
    .text-container > div > span{
        display: block;
        color: ${prop => prop.in == 'true' ? prop.theme.colors.positivePrimary : prop.theme.colors.negative};
    }

    .value{
        font-size: 30px;
        font-weight: 200;
    }

    .tag{
        position: absolute;
        right: 0;
        bottom: 32px;
        font-weight: 600;
        font-size: 18px;
    }

    p{
        max-width: 65%;
        font-family: "Nunito", serif;
        font-weight: 100;
    }

    img:hover{
        cursor: pointer;
    }

    `

export const ContainerCards = styled.div`

    .container-paginatoin{
        display: flex;
        justify-content: space-between;
    }

    .pagination{
        background-color: ${prop => prop.theme.colors.cardBgSecondary};
        padding: 15px 30px 15px 30px;
        font-family: 'Nunito', serif;
        font-size: 18px;
        border-radius: 30px;
        border-style: none;
        color: white;
        margin-top: 30px;
        margin-bottom: 15px;
    }

    .pagination:hover{
        cursor: pointer;
        background-color:rgb(175, 175, 175);
    }

`