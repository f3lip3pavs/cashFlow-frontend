import { useForm } from "react-hook-form";
import { UpdateCardStyle } from "./UpdateCardStyle";
import {updateCard} from '../../services/cashFlowService'
import { useContext } from "react";
import { Context } from '../../context/context'

export default function UpdateCardModal({cardID, setUpdateModal}){
    const {register, handleSubmit} = useForm()
    const {style} = useContext(Context)
    
    function handleUpdate(data){
        const token = document.cookie.split('=')[1].slice(1, -1)
        const date = new Date();

        Object.entries(data).forEach(([key, value]) => {

            if(value == '' || value == null){
                delete data[key];
            }

        });
        
        if(data.date){
            data.date = date.toISOString(data.date)
        }
        
        
        updateCard(cardID, token, data)
        .then(() => window.location.reload())
        .catch(e => console.log(`erro: ${e}`))
    }

    return(
        <UpdateCardStyle theme={style}>
            <div className="container">
                <div onClick={() => setUpdateModal(false)} className="close">X</div>
                <form onSubmit={handleSubmit(handleUpdate)}>
                    <input {...register('title')} type="text" placeholder="Title"/>
                    <input {...register('tag')} type="text" placeholder="Tag"/>
                    <input {...register('value')} type="number" placeholder="Value"/>
                    <div className="check-container">
                        <label>
                            <input {...register('mov')} type="radio" value={"in"}/> Cash in
                        </label>
                        <label>
                            <input {...register('mov')} type="radio" value={"out"}/> Cash out
                        </label>
                    </div>
                    <input {...register('date')} type="date" placeholder="Date"/>
                    <textarea {...register('description')} placeholder="Description"/>
                    <div className="container-button">
                        <button className="update">Update</button>
                        <button onClick={() => setUpdateModal(false)} className="cancel-neutral">Cancel</button>
                    </div>
                </form>
            </div>
        </UpdateCardStyle>
    )
}