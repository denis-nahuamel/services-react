import React, { useEffect, useState } from 'react';

import 'firebase/firestore';
import CardService from './card';
import { getServices } from '../services/firestore-service';
import { useServiceProvider } from '../context/service-context';
const ListAllServices = () => {
  const {typeService, reload, setReloadContext} = useServiceProvider();
  const [services, setServices] = useState([])

  useEffect(() => {
    getServices(typeService).then(response => {
      setServices(response)
      setReloadContext(false);
    })

  }, [typeService,reload, setReloadContext])

  return (
    <div className="d-flex flex-wrap flex-row gap-3 w-100">
      {
        services.map(
          (service, index) => (<CardService key={index} data={service} />)
        )
      }
    </div>
  )
}
export default ListAllServices;