import React, { useEffect, useState } from 'react';

import 'firebase/firestore';
import CardService from './card';
import { firebase } from '../connection/firebase';
import { getServices } from '../services/firestore-service';
import { useServiceProvider } from '../context/service-context';
const ListAllServices = () => {
  const {typeService} = useServiceProvider();
  const [services, setServices] = useState([])

  useEffect(() => {
    getServices(typeService).then(response => setServices(response))
  }, [typeService])

  return (
    <div className="d-flex flex-row gap-3">
      {
        services.map(
          (service, index) => (<CardService key={index} data={service} />)
        )
      }
    </div>
  )
}
export default ListAllServices;