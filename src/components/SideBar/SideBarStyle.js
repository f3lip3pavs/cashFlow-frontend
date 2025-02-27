import styled from "styled-components";
import {darkTheme} from '../../theme.js'

const theme = darkTheme

export const SideBarStyle = styled.nav`
    background-color: ${theme.colors.cardBgSecondary};
    display: inline-block;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;

    div{
        margin-top: 40px;
    }
    

    img{
        display: block;
        padding: 10px 18px 10px 18px;
        width: 35px;
    }

    .user{
        position: absolute;
        bottom: 0;
        margin-bottom: 35px;
    }

    img:hover{
        cursor: pointer;
        background-color: ${prop => prop.theme.colors.neutral};
    }
`

