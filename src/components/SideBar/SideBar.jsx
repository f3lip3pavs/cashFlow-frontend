
import { SideBarStyle } from './SideBarStyle'
import home from '../../assets/home.png'
import homeFilled from '../../assets/home-filled.png'
import moon from '../../assets/moon.png'
import moonFilled from '../../assets/moon-filled.png'
import user from '../../assets/user.png'
import userFilled from '../../assets/user-filled.png'
import logoutApp from '../../assets/logout.png'
import { Link } from 'react-router'
import { useContext } from 'react'
import { Context } from '../../context/context'
import { darkTheme, lightTheme } from '../../theme'

export default function SideBar(){
    const {style, setStyle} = useContext(Context)
    const route = window.location.pathname;

    function switchTheme(){
        if(style == darkTheme){
            setStyle(lightTheme)
        }else{
            setStyle(darkTheme)
        }
    }

    function logout(){
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    }



    return(
        <>
        <SideBarStyle theme={style}>
            <div>
                <Link to="/dashboard"><img src={route == '/dashboard' ? homeFilled : home} alt="botão para a home" /></Link>
                <img onClick={() => switchTheme()} src={style == darkTheme ? moon : moonFilled} alt="botão para alterar o tema entre claro e escuro" />
                <Link to={'/config'}><img src={route == '/config' ? userFilled : user} alt="configurações de usuario" /></Link>
            </div>
            <Link to="/">
                <img onClick={() => logout()} className="user" src={logoutApp} alt="logout" />
            </Link>
         
        </SideBarStyle>
        </>
    )
}