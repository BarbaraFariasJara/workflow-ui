/* eslint-disable react/prop-types */
import { useEffect, useId, useState } from 'react'
import UpdateDate from './UpdateDate.jsx';
import { useSpring, animated } from "@react-spring/web";
import { ButtonIcon } from '../../../utils/icons.jsx';

export default function Buttons({request, formulario, setOpenDialog}){
    const { FOR_Botones } = formulario;
    const grupos = FOR_Botones.map(grupo => grupo)
    const frmname = formulario.name
    const idGroups = useId()

    const [postitionTo, setPositionTo] = useState(0)
    
    let corr = 0;
    let keygrp = '';

    useEffect(()=>{
        const buttons = document.getElementById(idGroups)
        const posButtons = buttons?.getBoundingClientRect()
        setPositionTo(posButtons?.x)        
    },[idGroups])    

    
    const buttonsAnimation = useSpring({
        delay: 10,
        opacity: 0,
        position: 'absolute',        
        from: {
            transform: `translateX(${postitionTo*2}px)`,
            opacity: 0,
        },
        to: {
            transform: `translateX(0px)`,            
            opacity: 1,
        }
    });
    
    async function hanldeOnClick(event,btns){
        //const isValid = await trigger()
        //if(isValid){
            if(btns?.dialogo==='confirm'){
                setOpenDialog({
                    titulo:btns?.titulo,
                    mensaje:btns?.mensaje,
                    id:btns.id,
                    open:true,
                    frmname:frmname,
                    action:btns.action,
                    type:btns.type
                })
            }
        //}else{
        //    console.log('no valido')
        //}
    }
    return(
        <div id="buttonsRequest" className='grid text-right leading-tight absolute right-2 top-8'> 
            <div className='flex items-center gap-3 pb-2' id={idGroups}>
            {
                grupos?.map(grp => {
                    corr = corr + 1;
                    keygrp = 'btnGrp-' + corr;
                    return (
                        <animated.div key={keygrp} className='flex' style={buttonsAnimation} id={keygrp}>
                        {
                            grp[0].botones.map(btns =>
                                <button 
                                    key={btns.id} 
                                    className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                                    title={btns.nombre}
                                    onClick={() => hanldeOnClick(event, btns)}>
                                        <ButtonIcon typeButton={btns.id} styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>{
                                            btns.nombre &&
                                            <span className='text-xs font-normal leading-tight w-fit px-2'>{btns.nombre}</span>
                                        }
                                </button>
                            )
                        }
                        </animated.div>
                    )
                })
            }
            </div> 
            <UpdateDate request={request}/>      
        </div>
        
    )
}