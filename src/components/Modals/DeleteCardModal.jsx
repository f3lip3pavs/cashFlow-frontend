import { DeleteCardStyle } from "./DeleteCardStyle.js"
import {deleteCard} from '../../services/cashFlowService.js'
import { useContext } from "react"
import { Context } from "../../context/context.js"

//alterei a variavel deleteId para cardID
export default function DeleteCardModel({cardID, setModal}){
    const {style} = useContext(Context)
    
    function handleDelete(){
        const token = document.cookie.split('=')[1].slice(1, -1)
        deleteCard(token, cardID)
        .then(() => {window.location.reload()})
    }

    return(
        <DeleteCardStyle theme={style}>
            <div className="container">
                <div onClick={() => setModal(false)} className="close">X</div>
                <div className="text-container">
                    <h6>Do you want to delete this card?</h6>
                    <p>This action is irreversible</p>
                </div>
                <div className="button-container">
                    <button onClick={() => handleDelete()} className="delete">Delete</button>
                    <button onClick={() => setModal(false)} className="cancel">Cancel</button>
                </div>
            </div>
        </DeleteCardStyle>
    )
}