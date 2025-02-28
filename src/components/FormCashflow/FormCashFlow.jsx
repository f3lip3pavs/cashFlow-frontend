import { useContext, useState } from "react";
import { FormCashFlowStyle } from "./formCashFlowStyle.js";
import { useForm } from "react-hook-form";
import { setCashFlow } from "../../services/cashFlowService.js";
import { Context } from '../../context/context.js'
export default function FormCashFlow(){
    const {register, handleSubmit, setValue} = useForm()
    const [exception, setException] = useState(false)
    const {style} = useContext(Context)

    async function validation(data){

        if(!data.mov || !data.title || !data.date || !data.value || !data.tag){

            setException(true)
            return true
        }

        setException(false)
        return false
    }
 
    async function addCard(data){
        const token = document.cookie.split("=")[1].slice(1, -1)


        setValue('title', '')
        setValue('tag', '')
        setValue('value', '')
        setValue('date', '')
        setValue('description', '')
        setValue('mov', '')

        validation(data).then((res) => {

            if(!res){
                console.log("enviando card....")
                return setCashFlow(token, data).then(() => window.location.reload())
            }
        })
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
        <FormCashFlowStyle theme={style}>
            <div>
                <h2>Adicionar</h2>
                <h2>Movimentação</h2>
            </div>
            <form onSubmit={handleSubmit(addCard)}>
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
                <button type="submit">Adicionar</button>
            </form>
                {exception ? <p>PREENCHA OS CAMPOS OBRIGATÓRIOS: Title, Value, Cash in ou Cash out e Date</p> : null}
        </FormCashFlowStyle>
    )
}

//