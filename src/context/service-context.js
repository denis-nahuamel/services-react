import { createContext, useContext, useState } from "react";

const ServiceContext = createContext();
export const ServiceProvider = (props)=>{
    const [typeService, setTypeService] = useState("nocategory");
    const setTypeContext = (value)=>{
        setTypeService(value);
    }
    const value ={
        typeService,
        setTypeContext
    }
    return <ServiceContext.Provider value={value} {...props}/>
}
export const useServiceProvider = ()=>{
    return useContext(ServiceContext)
}