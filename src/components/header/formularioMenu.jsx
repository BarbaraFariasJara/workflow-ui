/* eslint-disable react/prop-types */
import { useSpring, animated } from "@react-spring/web";
import ContentMenu from "./contentMenu.jsx"

import Dropdown from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import { 
    ButtonIcon,
    } from "../../utils/icons.jsx";

const BtsFormulario = ({styles, keygrp, delay, grp, openDialog, setOpenDialog}) => {
    //const { trigger, formState: { errors } } = useFormContext()

    async function hanldeOnClick(btn){
        //const isValid = await trigger()
        //if(isValid){
            if(btn?.dialogo==='confirm'){
                setOpenDialog({
                    ...openDialog,
                    titulo:btn?.titulo,
                    mensaje:btn?.mensaje,
                    id:btn.id,                
                    frmname:btn.formname,
                    action:btn.action,
                    open:true,
                    type: btn.type,
                })
            }
        //}else{
        //    console.log('no valido', errors)
        //}
        
    }

    const menuAppear = useSpring({        
        to:{
            transform:'translate(0)',
            opacity:1,
        },
        from:{
            opacity:0,
            transform:'translate(150px)',
        },
        config: { duration: 150 },
        delay: delay
    });
    return (
        <animated.div key={keygrp} style={menuAppear} className={styles} id={keygrp}>
            <ContentMenu title={grp[0].descripcion}>{
                grp[0].botones.map(btns =>
                    <Dropdown key={btns.id}>
                        <MenuButton className={`dark:hover:!bg-[#444444] hover:!bg-[#fefffe] !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 dark:!text-stone-100 !text-stone-500 !font-thin !border-none !py-0 !my-0 !items-start`} onClick={() => hanldeOnClick(btns)} key={btns.id} >
                            <div className="flex flex-col leading-tight text-xs items-center relative text-nowrap pb-8">
                                <ButtonIcon typeButton={btns.id} styles='w-8 h-8'strokeWidth='1.3' typeIcon={2}/>
                                <span className="!pt-2">{btns.descripcion[0]}</span>
                                <span>{btns.descripcion[1]}</span>
                            </div>
                        </MenuButton>                
                    </Dropdown>
                )}
            </ContentMenu>
        </animated.div>
    )
}

export default function FormularioMenu ({styles, grupos, openDialog, setOpenDialog}) {
    return(
        grupos?.map((grp, index) => 
            (
                <BtsFormulario styles={styles} keygrp={'btnGrp-' + index} delay={200 + (index*30)} grp={grp} key={index} openDialog={openDialog} setOpenDialog={setOpenDialog}/>
            )
        )
    )
}