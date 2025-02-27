import pencil from '../../assets/pencil.png'
import lockImg from '../../assets/lock.png'
import userImg from '../../assets/user.png'
import trash from '../../assets/trash.png'
import { useContext, useEffect, useState } from 'react'
import { ConfigStyle } from './ConfigStyle'
import DeleteAccountModal from '../Modals/DeleteAccountModal'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { getUser } from '../../services/userService'
import { updateUser } from '../../services/userService'
import { Context } from '../../context/context'

export default function ConfigComp(){
    const [user, setUser] = useState(false);
    const [lock, setLock] = useState(false);
    const[userLog, setUserLog] = useState({}) 
    const {register, handleSubmit, setValue} = useForm()
    const {style} = useContext(Context)
    const [del, setDel] = useState(false)

    const navigate = useNavigate()
    let token;

    if(document.cookie){
        token = document.cookie.split("=")[1].slice(1, -1)
    }else{
        navigate('/')
    }
    
    useEffect(() => {
        handleUser(token)
    }, [])
    
    function handleUser(key){
        
        if(!document.cookie){
            navigate('/')
            console.log('indo para: /')
        }


        getUser(key).then(res => {
            console.log(res)
            setUserLog(res)
        })
    }
 
    function setUpdate(data){
    
        const token = document.cookie.split("=")[1].slice(1, -1)

        if(data.password == ''){
            delete data.password;
        }

        if(data.username == ''){
            delete data.username;
        }

        console.log(data)

        updateUser(data, token)
        .then(() => {
            handleUser(token)
        })

        setValue('username', '')
        setValue('password', '')
    }

    function cancel(){
        setUser(false)
        setLock(false)
        setValue('username', '')
        setValue('password', '')
    }

    return(
        <ConfigStyle theme={style}>
            <h1>{userLog.name}</h1>
            <div className='user-container'>
                <form onSubmit={handleSubmit(setUpdate)}>                       
                            {user ? 
                                <label>
                                    <img src={userImg} alt="username" />
                                    <input {...register('username')}type="text" placeholder={userLog.username}/> 
                                </label>
                                : 
                                <div className='data-container'>
                                    <img src={userImg} alt="username" />
                                    <p>{userLog.username}</p> 
                                    <img className='edit' onClick={() => setUser(true)} src={pencil} alt="edit" />
                                </div>
                            }

                            {lock ? 
                                <label>
                                    <img src={lockImg} alt="password" />
                                    <input {...register('password')} type="text" placeholder='Password'/>
                                </label>
                                :
                                <div className='data-container'> 
                                    <img src={lockImg} alt="password" />
                                    <p>.......</p>
                                    <img className='edit' onClick={() => setLock(true)} src={pencil} alt="edit" />
                                </div>              
                            }

                        {user || lock ? 
                            <div>
                                <button className='send' type='submit'>Send</button>
                                <button className='cancel' onClick={() => cancel()}>Cancel</button>
                            </div>
                            :
                            null
                        }
                </form>

                <div className='delete' onClick={() => {setDel(true)}}>
                    <img src={trash} alt="" />
                    <p>Excluir conta</p>
                </div>
            </div>

            {del ? <DeleteAccountModal setDel={setDel} username={userLog.username}/> : null}
        </ConfigStyle>

    )
}