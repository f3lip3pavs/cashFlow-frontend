import { useContext, useState } from "react";
import { FormCashFlowStyle } from "./formCashFlowStyle";
import { useForm } from "react-hook-form";
import { setCashFlow } from "../../services/cashFlowService";
import { Context } from '../../context/context'
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

    return(
        <FormCashFlowStyle theme={style}>
            <div>
                <h2>Adicionar</h2>
                <h2>Movimentação</h2>
            </div>
            <form onSubmit={handleSubmit(addCard)}>
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
                <button type="submit">Adicionar</button>
            </form>
                {exception ? <p>PREENCHA OS CAMPOS OBRIGATÓRIOS: Title, Value, Cash in ou Cash out e Date</p> : null}
        </FormCashFlowStyle>
    )
}