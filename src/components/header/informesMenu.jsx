/* eslint-disable react/prop-types */
import { useSpring, animated } from "@react-spring/web";
import ContentMenu from "./contentMenu.jsx"
import Dropdown from '@mui/joy/Dropdown';
import ListItemButton from '@mui/joy/ListItemButton';
import { 
    GenReportIcon,
    DownReportIcon
    } from "../../utils/icons.jsx";

export default function Informes ({styles}) {
    const  menuAppear = useSpring({        
        to:{
            transform:'translate(0)',
            opacity:1,
        },
        from:{
            opacity:0,
            transform:'translate(150px)',
        },
        config: { duration: 150 },
        delay: 200
    });
    return (
        <animated.div style={menuAppear} className={styles}>
            <ContentMenu title={'Informe del sistema'}>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2`} onClick={()=> console.log('generar inf')}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-6">
                            <GenReportIcon styles='w-9 h-9'/>
                            <span className="!pt-2">Generar</span>
                            <span>informe</span>
                        </div>
                    </ListItemButton>                
                </Dropdown>
                <Dropdown>
                    <ListItemButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start !pt-2 `} onClick={()=> console.log('descargar inf')}>
                        <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-6">
                            <DownReportIcon styles='w-9 h-9' />
                            <span className="!pt-2">Descargar infrome</span>
                            <span>resultado</span>
                        </div>
                    </ListItemButton>                
                </Dropdown>   
            </ContentMenu>
        </animated.div>
    )    
}