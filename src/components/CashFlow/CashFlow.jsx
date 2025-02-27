import { Card, ContainerCards } from "./CardStyle.js"
import pencil from '../../assets/pencil.png'
import trash from '../../assets/trash.png'
import { getCashflow } from "../../services/cashFlowService.js"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import DeleteCardModal from '../Modals/DeleteCardModal.jsx'
import UpdateCardModal from "../Modals/UpdateCardModal.jsx"
import { useContext } from "react"
import { Context } from "../../context/context.js"

export default function CashFlow(){

    const [cards, setCards] = useState({docs: [] })
    const [modal, setModal] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)
    const [cardID, setCardID] = useState('')
    const {style} = useContext(Context)
    
    const navigate = useNavigate()

    //pegar o objeto com os cards do usuario

    useEffect(() => {
        if(document.cookie){

            const token = document.cookie.split('=')[1].slice(1,-1);
 
            getCashflow(token, '/cashFlow').then(res => {
                console.log('cards: ', cards)
                setCards(res)
            });

        }else{
            navigate('/');
        }
    }, [])

    function next(){

        const token = document.cookie.split('=')[1].slice(1,-1);

        getCashflow(token, cards.nextUrl).then(res => {
            setCards(res)
        });

    }

    function previous(){

        const token = document.cookie.split('=')[1].slice(1,-1);

        getCashflow(token, cards.previousURL).then(res => {
            setCards(res)
        });

    }

    function getId(data){
        setCardID(data.target.id);

        if(data.target.alt == 'delete'){
            setModal(true);
        }

        if(data.target.alt == 'update'){
            setUpdateModal(true);
        }
    }

    return(
        <ContainerCards className="container-cards" theme={style}>
            {cards.docs.length > 0 ? (
                cards.docs.map((card, index) => (

                <Card key={index} in={card.cashInflow.toString()} theme={style}>

                    <div className="container-config">
                        <span>{card.date.split('T',1)}</span>
                        <div>
                            <img onClick={(data) => getId(data)} id={card._id} src={pencil} alt="update" />
                            <img onClick={(data) => getId(data)} id={card._id} src={trash} alt="delete" />
                        </div>
                    </div>

                    <h6>{card.title}</h6>

                    <div className="text-container">
                        <p>{card.description}</p>
                        <div> 
                            <span className="tag">{card.tag}</span>
                            <span className="value">R$ {card.value}</span>
                        </div>
                    </div>
                    
                </Card>

                    ))
                ): 
                (
                    null
                )
            }

            <div className="container-paginatoin">
                <button onClick={() => previous()}className="pagination">&lt; Previous</button>
                <button onClick={() => next()} className="pagination">Next &gt;</button>
            </div>

            {modal ? <DeleteCardModal cardID={cardID} setModal={setModal}/> : null}
            {updateModal ? <UpdateCardModal cardID={cardID} setUpdateModal={setUpdateModal}/> : null}
        </ContainerCards>
    )
}