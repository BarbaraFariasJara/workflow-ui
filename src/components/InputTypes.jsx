/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { IconForm } from "./icons"
import { useForm, Controller } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist'
import AsyncSelect from 'react-select/async';
import { name, records, selected } from '../mocks/meses.json';
import { tableName, tableRecords, tableSelected } from '../mocks/proveedores.json';
import { NumericFormat } from "react-number-format";
import { useEffect } from "react";

const InputType = ({campo, classInput, register, errors, control}) => {    
    const required = campo.FDI_CampoObligatorio === 1 ? true : false
    const selectList = (LID_Id) => {
        //Aqui hay que codificar la llamada al backend para obtener los datos de la lista de seleccion dada por el campo LID_Id        
        let placeholder
        LID_Id === 16 ? placeholder = 'Selecciona un ' + name.toLowerCase() : 'Selecciona una opción'

        const filterMeses = (inputValue) => {
        return records.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
            );
        };
        
        const loadOptions = (inputValue, callback) => {
            setTimeout(() => {
            callback(filterMeses(inputValue));
            }, 1000);
        };

        return {"name" : placeholder, "records" : loadOptions}
    }    

    //Tablas externas
    const tableList = () => {
        //Incluir parametro para identificar la tabla a leer
        let placeholder = 'Selecciona un ' + tableName.toLowerCase()        

        const filterRecords = (inputValue) => {
        return tableRecords.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
            );
        };
        
        const loadOptions = (inputValue, callback) => {
            setTimeout(() => {
            callback(filterRecords(inputValue));
            }, 1000);
        };

        return {"name" : placeholder, "records" : loadOptions}
    }    

    switch (campo.FDI_TipoCampo) {
        case 'C':   //Texto tamaño mediano
            return (
                <>
                    <input {...register(campo.FDI_NombreHTML, {required : `{${required}}`})} type="text" id={campo.FDI_NombreHTML} className={classInput} placeholder={campo.FDI_Descripcion} defaultValue={campo.DFO_Dato}/>
                    {errors[campo?.FDI_NombreHTML] && <span className="absolute right-0 top-0 text-red-500">es requerido</span>}
                </>
            )
        case 'N':   //Numerico con puntos sin decimal
            return (
                <>                    
                    <Controller
                        control={control}
                        name={campo.FDI_NombreHTML}
                        //value={campo.DFO_Dato}
                        defaultValue={campo.DFO_Dato}
                        rules={required ? { required: true } : {}}
                        render={({ field: { onChange, onBlur} }) => (
                            <NumericFormat                                
                                thousandSeparator = "."
                                decimalScale={0}
                                decimalSeparator=","
                                //prefix={"$ "}
                                type="text" id={campo.FDI_NombreHTML} 
                                className={classInput} 
                                placeholder={campo.FDI_Descripcion} 
                                defaultValue={campo.DFO_Dato} 
                                onChange={onChange} // send value to hook form                                
                                onBlur={onBlur}
                            />
                        )}
                    />
                    {errors[campo?.FDI_NombreHTML] && <span className="absolute right-0 top-0 text-red-500">es requerido</span>}
                </>
            )
        case 'D':   //Numerico con puntos y dos decimales
            return (
                <>                    
                    <Controller
                        control={control}
                        name={campo.FDI_NombreHTML}
                        value={campo.DFO_Dato}
                        defaultValue={campo.DFO_Dato}
                        rules={required ? { required: true } : {}}
                        render={({ field: { onChange, onBlur} }) => (
                            <NumericFormat                                
                                thousandSeparator = "."
                                decimalScale={2}
                                decimalSeparator=","
                                //prefix={"$ "}
                                type="text" id={campo.FDI_NombreHTML} 
                                className={classInput} 
                                placeholder={campo.FDI_Descripcion} 
                                defaultValue={campo.DFO_Dato} 
                                onChange={onChange} // send value to hook form                                
                                onBlur={onBlur}
                            />
                        )}
                    />
                    {errors[campo?.FDI_NombreHTML] && <span className="absolute right-0 top-0 text-red-500">es requerido</span>}
                </>
            )
        case 'G':   //Monto con puntos y sin decimales
            return (
                <>                    
                    <Controller
                        control={control}
                        name={campo.FDI_NombreHTML}
                        value={campo.DFO_Dato}
                        defaultValue={campo.DFO_Dato}
                        rules={required ? { required: true } : {}}
                        render={({ field: { onChange, onBlur} }) => (
                            <NumericFormat                                
                                thousandSeparator = "."
                                decimalScale={0}
                                decimalSeparator=","
                                prefix={"$ "}
                                type="text" id={campo.FDI_NombreHTML} 
                                className={classInput} 
                                placeholder={campo.FDI_Descripcion} 
                                defaultValue={campo.DFO_Dato} 
                                onChange={onChange} // send value to hook form                                
                                onBlur={onBlur}
                            />
                        )}
                    />
                    {errors[campo?.FDI_NombreHTML] && <span className="absolute right-0 top-0 text-red-500">es requerido</span>}
                </>
            )
        case 'H':   //Monto con puntos y dos decimales
            return (
                <>                    
                    <Controller
                        control={control}
                        name={campo.FDI_NombreHTML}
                        value={campo.DFO_Dato}
                        defaultValue={campo.DFO_Dato}
                        rules={required ? { required: true } : {}}
                        render={({ field: { onChange, onBlur} }) => (
                            <NumericFormat                                
                                thousandSeparator = "."
                                decimalScale={2}
                                decimalSeparator=","
                                prefix={"$ "}
                                type="text" 
                                id={campo.FDI_NombreHTML} 
                                className={classInput} 
                                placeholder={campo.FDI_Descripcion} 
                                defaultValue={campo.DFO_Dato} 
                                onChange={onChange} // send value to hook form                                
                                onBlur={onBlur}
                            />
                        )}
                    />
                    {errors[campo?.FDI_NombreHTML] && <span className="absolute right-0 top-0 text-red-500">es requerido</span>}
                </>
            )    
        case 'F':   //Fecha
            return (
                <>
                    <input {...register(campo.FDI_NombreHTML, {required : `{${required}}`})} type="date" id={campo.FDI_NombreHTML} className={classInput} placeholder={campo.FDI_Descripcion} defaultValue={campo.DFO_Dato}/>
                    {errors[campo?.FDI_NombreHTML] && <span className="absolute right-0 top-0 text-red-500">es requerido</span>}
                </>
            )
        case 'V':   //Fecha con alarma
            return (
                <>
                    <input {...register(campo.FDI_NombreHTML, {required : `{${required}}`})} type="date" id={campo.FDI_NombreHTML} className={classInput} placeholder={campo.FDI_Descripcion} defaultValue={campo.DFO_Dato}/>
                    {errors[campo?.FDI_NombreHTML] && <span className="absolute right-0 top-0 text-red-500">es requerido</span>}
                </>
            )
        case 'T':   //Texto tamaño grande
            return (
                <>
                    <textarea {...register(campo.FDI_NombreHTML, {required : `{${required}}`})} id={campo.FDI_NombreHTML} className={classInput} placeholder={campo.FDI_Descripcion} defaultValue={campo.DFO_Dato}/>
                    {errors[campo?.FDI_NombreHTML] && <span className="absolute right-0 top-0 text-red-500">es requerido</span>}
                </>
            )
        case 'L':       //Listas de selección
            return (
                <>
                    <Controller
                            control={control}
                            name={campo.FDI_NombreHTML}                            
                            rules={required ? { required: true } : {}}
                            defaultValue={selected}
                            render={({ field, onChange}) => (                                
                                <AsyncSelect 
                                    {...field}
                                    isClearable
                                    cacheOptions 
                                    loadOptions={selectList(campo.LID_Id).records}
                                    defaultOptions 
                                    className={classInput + ' !p-0'}
                                    id={campo.FDI_NombreHTML} 
                                    name={campo.FDI_NombreHTML}                                     
                                    onInputChange={onChange}
                                    placeholder={selectList(campo.LID_Id).name}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: state.isFocused ? '#0284c7' : 'transparent',
                                            backgroundColor : 'transparent',
                                            borderWidth :'0px',
                                            borderRadius:'0px 8px 8px 0px',
                                            minHeight:'36px',
                                            color:"inherit"
                                        }),
                                        singleValue:(baseStyles) => ({
                                            ...baseStyles,
                                            color:'inherit'
                                        }),
                                        menu:(baseStyles) => ({
                                            ...baseStyles,
                                            backgroundColor: 'inherit',
                                            color:'inherit'
                                        }),
                                        option:(baseStyles, state) => ({
                                            ...baseStyles,
                                            color: state.isFocused && state.isSelected ? 'white' : state.isFocused && !state.isSelected ? 'black' : !state.isFocused && state.isSelected ? 'white' : 'inherit',                    
                                        }),
                                        input:(baseStyles) => ({
                                            ...baseStyles,
                                            color:'inherit'
                                        })
                                }}/>
                            )}
                    />
                    {errors[campo?.FDI_NombreHTML] && <span className="absolute right-0 top-0 text-red-500">es requerido</span>}
                </>
            )
        case 'X1':  //Tablas externas
            return (
                <>
                    <Controller
                            control={control}
                            name={campo.FDI_NombreHTML}                            
                            rules={required ? { required: true } : {}}
                            defaultValue={tableSelected}
                            render={({ field, onChange}) => (                                
                                <AsyncSelect 
                                    {...field}
                                    isClearable
                                    cacheOptions 
                                    loadOptions={tableList().records}
                                    defaultOptions 
                                    className={classInput + ' !p-0'}
                                    id={campo.FDI_NombreHTML} 
                                    name={campo.FDI_NombreHTML}                                     
                                    onInputChange={onChange}
                                    placeholder={tableList().name}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: state.isFocused ? '#0284c7' : 'transparent',
                                            backgroundColor : 'transparent',
                                            borderWidth :'0px',
                                            borderRadius:'0px 8px 8px 0px',
                                            minHeight:'36px',
                                            color:"inherit"
                                        }),
                                        singleValue:(baseStyles) => ({
                                            ...baseStyles,
                                            color:'inherit'
                                        }),
                                        menu:(baseStyles) => ({
                                            ...baseStyles,
                                            backgroundColor: 'inherit',
                                            color:'inherit'
                                        }),
                                        option:(baseStyles, state) => ({
                                            ...baseStyles,
                                            color: state.isFocused && state.isSelected ? 'white' : state.isFocused && !state.isSelected ? 'black' : !state.isFocused && state.isSelected ? 'white' : 'inherit',                    
                                        }),
                                        input:(baseStyles) => ({
                                            ...baseStyles,
                                            color:'inherit'
                                        })
                                }}/>
                            )}
                    />
                    {errors[campo?.FDI_NombreHTML] && <span className="absolute right-0 top-0 text-red-500">es requerido</span>}
                </>
            )
        default:
            return (
                <>
                    <input {...register(campo.FDI_NombreHTML, {required : `{${required}}`})} type="text" id={campo.FDI_NombreHTML} className={classInput} placeholder={campo.FDI_Descripcion} defaultValue={campo.DFO_Dato}/>
                    {errors[campo?.FDI_NombreHTML] && <span className="absolute right-0 top-0 text-red-500">es requerido</span>}
                </>
            )
    }
}
/*function storageEvent(formWKv2){
    window.addEventListener('storage', (event) => {
        if (event.key === 'readingList') {            
            return renderReadingList(JSON.parse(event.newValue))
        }
    })
}*/

export function InputTypes({name, campos, formWFv3}){    
    const {        
        handleSubmit,
        register,
        control,
        formState: { errors, isDirty, dirtyFields },
        setValue,
        watch,
        reset
      } = useForm();

    useFormPersist("formWFv3", {
        watch, 
        setValue,
        storage: window.localStorage//, // default window.sessionStorage
        //exclude: ['baz']
      });        
    
    const onSubmit = (data) => console.log(data)   
    //console.log(formWFv3) 
    
    useEffect(()=>{
        reset({...formWFv3});
    }, [formWFv3])

    useEffect(()=>{
        isDirty ? console.log("Formulario Modificado",dirtyFields, dirtyFields['PagMes']) : null
    })

    return(
        <form 
            className='w-full pr-2'
            onSubmit={handleSubmit(onSubmit)}
            name={name}
            id={name}>
            <div className='grid grid-cols-12 gap-2'>{        
                campos?.map((campo) => {
                    let colwidth = campo.FDI_TamanoDiseno === 12 ? 'col-span-12' : campo.FDI_TamanoDiseno === 11 ? 'col-span-11' : campo.FDI_TamanoDiseno === 10 ? 'col-span-10' : campo.FDI_TamanoDiseno === 9 ? 'col-span-9' : campo.FDI_TamanoDiseno === 8 ? 'col-span-8' : campo.FDI_TamanoDiseno === 7 ? 'col-span-7' : campo.FDI_TamanoDiseno === 6 ? 'col-span-6' : campo.FDI_TamanoDiseno === 5 ? 'col-span-5' : campo.FDI_TamanoDiseno === 4 ? 'col-span-4' : campo.FDI_TamanoDiseno === 3 ? 'col-span-3' : campo.FDI_TamanoDiseno === 2 ? 'col-span-2' : 'col-span-1'
                    colwidth = colwidth + ' relative'
                    return(
                        <div key={campo.FDI_NombreHTML} className={colwidth}>
                            <label htmlFor={campo.FDI_NombreHTML} className={`${errors[campo?.FDI_NombreHTML] ? ' !text-red-500' : dirtyFields[campo?.FDI_NombreHTML] ? '!fill-green-500 !text-green-500' : ''} block mb-2 text-sm font-medium dark:text-stone-400 text-stone-500`}>{campo.FDI_Descripcion}</label>
                            <div className="flex">
                                <span className={`inline-flex items-center px-3 text-sm dark:text-stone-100 !text-stone-500 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-[#4a4a4a] dark:border-gray-600`}>
                                    <IconForm typeIcon={campo.FDI_IconoDiseno} styles={`${errors[campo?.FDI_NombreHTML] ? ' !fill-red-500 !text-red-500' : dirtyFields[campo?.FDI_NombreHTML] ? '!fill-green-500 !text-green-500' : ''}`}/>
                                </span>
                                <InputType campo={campo} register={register} errors={errors} control={control} classInput={`${errors[campo?.FDI_NombreHTML] ? ' !border-red-500' : dirtyFields[campo?.FDI_NombreHTML] ? '!border-green-500 modfield' : ''}  rounded-none rounded-e-lg bg-gray-50 border border-gray-300 dark:text-stone-100 text-stone-500 focus:border-[#deecf9] block flex-1 min-w-0 w-full text-sm p-1.5 dark:bg-[#363636] dark:border-gray-600 dark:placeholder-gray-400 focus:ring-[#0284c7] focus:border-[#0284c7] dark:focus:ring-[#0284c7] dark:focus:border-[#0284c7] outline-none `}/>                        
                            </div>
                        </div>
                    )}
                )
            }            
            </div>
        </form>
    )
}