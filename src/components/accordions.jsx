import { ListRequestByDate } from '../components/ListRequestByDate.jsx'
import { ListRequestByNumber } from '../components/LisRequestByNumber.jsx';
import { Constants } from "../constants/const.jsx";
import { ListRequestByPending } from './LisRequestByPending.jsx';

export function Accordions(filteredRequest, filters){
    const { dias, maxAccByDate, maxAccByNumber } = Constants()
    console.log('Accordions')
    //Accordion
    let requerimientoAccordion = []
    if(filteredRequest.length > 0){            
        if(filters.filter === 1){   //Fecha
            requerimientoAccordion = ListRequestByDate(filters.hoy, dias, maxAccByDate)
        }
        if(filters.filter === 2){   //Numero del requerimiento            
            requerimientoAccordion = ListRequestByNumber(filters.minReq, filters.maxReq, maxAccByNumber, filters.orderDes)
        }
        if(filters.filter === 3){   //Requerimientos atrazados            
            requerimientoAccordion = ListRequestByPending(filters.orderDes)
        }

        if(!filters.orderDes){
            requerimientoAccordion.reverse()
        }
    }

    return { requerimientoAccordion }
}