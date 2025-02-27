import CashFlow from '../../components/CashFlow/CashFlow.jsx'
import FormCashFlow from '../../components/FormCashflow/FormCashFlow.jsx'
import SideBar from '../../components/SideBar/SideBar.jsx'
import { HomeStyle } from './HomeStyle.js'


export default function Home(){  
    return(
        <>
        <HomeStyle>
            <CashFlow/>
            <FormCashFlow/>
        </HomeStyle>
            <SideBar/>
        </>
    )
}