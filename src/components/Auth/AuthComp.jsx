import { AuthStyle } from "./AuthStyle.js"
import { Link, useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { tokenLogin } from "../../services/userService.js"
import { useState, useEffect } from "react"

export default function AuthComp() {
    const {register, handleSubmit, whatch} = useForm()
    const [auth, setAuth] = useState('');
    const navigate = useNavigate()

    
    function expiration(hour){
        let date = new Date();
        console.log(date)
        
        date.setTime(date.getTime() + hour * 60 * 60 * 1000)
    
        return date.toUTCString()
    }

    async function login(data){
        const login = await tokenLogin(data.username, data.password);

        console.log('teste')
        
        let expire = expiration(1);

        document.cookie = `token=${login.token}; expires=${expire}; path=/`;

        setAuth(login)
    }

    useEffect(()=>{

        if(auth == ''){
            console.log('vazio')
            return
        }
        
        if(auth.message == "login successfully"){
            return navigate("/dashboard");
        }

    }, [auth])

    return(
        <AuthStyle>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(login)}>
                <input {...register("username")} type="text" placeholder="Username"/>
                <input {...register("password")} type="password" placeholder="Password" />
                {auth.message == 'invalid username or password' ? (<span>{auth.message}</span>) : (null)}
                <button type="submit">Entrar</button>
            </form>
        <Link to="/register"><p>Criar conta</p></Link>

        </AuthStyle>
    )
}