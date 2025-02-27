import { RegisterStyle } from "./registerStyle"
import { useForm } from "react-hook-form"
import { createUser } from "../../services/userService"
import { useState } from "react";
import { useNavigate } from "react-router";
export default function RegisterComp() {
    const {register, handleSubmit, setValue} = useForm();
    const [span, setSpan] = useState(false)
    const navigate = useNavigate()

    function handleUser(user){
        
        if(user.name == '' || user.username == '' || user.password == ''){
            return setSpan(true)
        }
        
        console.log(user)
        createUser(user)
        .then(() => { navigate('/') }) // posteriormente gerar token de usuario diretamente au se cadastrar e enviar usuario diretamente para /dashboard
        .catch( e => console.log(e))

        setSpan(false)
        setValue('name', '')
        setValue('username', '')
        setValue('password', '')
    }

    return(
        <RegisterStyle>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit(handleUser)}>
                <input {...register('name')} type="text" placeholder="Name"/>
                <input {...register('username')} type="text" placeholder="Username"/>
                <input {...register('password')} type="password" placeholder="Password" />
                <button type="submit">Cadastrar</button>
                {span ? <span>preencha todos os campos</span> : null}
            </form>
        </RegisterStyle>
    )
}