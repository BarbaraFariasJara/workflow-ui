/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { MenuTree } from "./MenuTree.jsx"
import { flujos, mantenedores, reportes } from "../mocks/treeMenu.json";
import { useFilters } from "../hooks/useFilters.jsx";
import { Suspense, useEffect, useState } from "react";
import Loading from "./Loading.jsx";
import { Spinner } from "./Spinner.jsx";

const MenuArbol = ({menuBandejas, mnuMantenedores, mnuReportes, Link}) => {
    return(
        <>
            <MenuTree menu={menuBandejas} Link={Link}/>
            {
            mantenedores.length > 0 ?
                <MenuTree menu={mnuMantenedores} Link={Link}/>
            : null
            }
            {
            reportes.length > 0 ?
                <MenuTree menu={mnuReportes} Link={Link}/>
            : null
            }
        </>
    )
}

export default function Menu({Link}){    
    const { filters } = useFilters()    

    const [loading, setLoading] = useState(true);
    const [menuBandejas, setMenuBandejas] = useState([])
    const [mnuMantenedores, setmnuMantenedores] = useState([])
    const [mnuReportes, setmnuReportes] = useState([])

    useEffect(() => {
        const bandejas = flujos.filter(item => parseInt(item.id) === filters.flujo)
        setMenuBandejas(bandejas)
        setmnuMantenedores(mantenedores)
        setmnuReportes(reportes)
        setLoading(false);
    },[filters.flujo])            
    
    return (
        <div className="px-4 h-full relative">            
            {loading ? (
                <span className="absolute left-[50%] top-[50%]">
                    <Spinner />
                </span>
            ) : (
                <Suspense fallback={<Loading />}>
                    <MenuArbol menuBandejas={menuBandejas} mnuMantenedores={mnuMantenedores} mnuReportes={mnuReportes} Link={Link}/>
                </Suspense>
            )}                            
        </div>
    )
}