import React, { useEffect, useState } from 'react';

import 'firebase/firestore';
import CardService from './card';
import { firebase } from '../connection/firebase';
import { getServices } from '../services/firestore-service';
const ListAllServices = ({onSetType}) => {
  console.log("list services", onSetType)
  const [services, setServices] = useState([])

  useEffect(() => {
    getServices(onSetType).then(response => setServices(response))
  }, [onSetType])

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