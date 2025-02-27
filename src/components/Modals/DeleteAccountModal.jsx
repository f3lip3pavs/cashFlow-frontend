import { useContext } from "react"
import { DeleteAccountStyle } from "./DeleteAccountStyle"
import { Context } from "../../context/context"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { deleteUser } from "../../services/userService"

export default function DeleteAccountModal({setDel, username}){
    const {style} = useContext(Context)
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    let token;

    if(document.cookie){
        token = document.cookie.split('=')[1].slice(1,-1);
    }else{
        navigate('/')
    }


    function handleDeleteAccount(data){
        
        if(data.username === username){
            console.log('usuario deletado: ', data.username)
            console.log('usaario logado: ', username)

            deleteUser(token).then(res => {
                document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
                navigate('/')
                return res
            })
        }
    }

    return(
        <DeleteAccountStyle theme={style}>
            <div className="container">
                <div onClick={() => setDel(false)} className="close">X</div>
                <div className="text-container">
                    <h6>Do you want to delete this account?</h6>
                    <p className="alert">This action is irreversible</p>
                </div>
                <div className="input-container">
                    <p>To delete this account, enter your username</p>
                    <form onSubmit={handleSubmit(handleDeleteAccount)}>
                        <input {...register('username')} type="text" required/>
                        <div className="button-container">
                            <button type="submit" className="delete-modal">Delete</button>
                            <button onClick={() => setDel(false)} className="cancel-modal">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </DeleteAccountStyle>
    )
}