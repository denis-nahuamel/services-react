import { createContext, useContext, useState } from "react";

const ServiceContext = createContext();
export const ServiceProvider = (props)=>{
    const [typeService, setTypeService] = useState("nocategory");
    const [reload, setReload] = useState(false);
    const [serviceUpdate, setServiceUpdate] = useState({id: '',nombre: '', descripcion: ''});
    const setTypeContext = (value)=>{
        setTypeService(value);
    }
    const setServiceUpdateContext = (value)=>{
        setServiceUpdate(value);
    }
    const setReloadContext = (value)=>{
        setReload(value);
    }
    const value ={
        typeService,
        setTypeContext,
        setReloadContext,
        reload,
        serviceUpdate,
        setServiceUpdateContext
    }
    return <ServiceContext.Provider value={value} {...props}/>
}
export const useServiceProvider = ()=>{
    return useContext(ServiceContext)
}