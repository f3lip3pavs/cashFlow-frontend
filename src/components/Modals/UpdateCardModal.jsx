import { useForm } from "react-hook-form";
import { UpdateCardStyle } from "./UpdateCardStyle.js";
import {updateCard} from '../../services/cashFlowService.js'
import { useContext } from "react";
import { Context } from '../../context/context.js'

export default function UpdateCardModal({cardID, setUpdateModal}){
    const {register, handleSubmit, setValue} = useForm()
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
        .then(res => {
            console.log('funciotn: updateCard from src/components/modals/UpdateCardModal.jsx', res)
            window.location.reload()
        })
        .catch(e => console.log(`erro: ${e}`))
    }

    const list = []

    function formatNumber(num) {
        if (num === null) {  
            // Se for Backspace, remove o último elemento da lista
            list.pop();
        } else if (/^\d$/.test(num)) {  
            // Só adiciona se for um número (0-9)
            list.push(num);
        }

        if (list.length > 2) {
            let inter = list.slice(0, -2);
            inter.push('.');

            let decimal = list.slice(-2);

            setValue('value', inter.join("") + decimal.join(""));
        } else {
            setValue('value', list.join("")); 
        }
    }

    return(
        <UpdateCardStyle theme={style}>
            <div className="container">
                <div onClick={() => setUpdateModal(false)} className="close">X</div>
                <form onSubmit={handleSubmit(handleUpdate)}>
                    <input {...register('title')} type="text" placeholder="Title"/>
                    <input {...register('tag')} type="text" placeholder="Tag"/>
                    <input {...register('value')} onChange={(data) => formatNumber(data.nativeEvent.data)} type="text" placeholder="Value"/>
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
                        <button type="submit" className="update">Update</button>
                        <button onClick={() => setUpdateModal(false)} className="cancel-neutral">Cancel</button>
                    </div>
                </form>
            </div>
        </UpdateCardStyle>
    )
}