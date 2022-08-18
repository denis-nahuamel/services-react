import React, { useEffect, useState } from 'react';

import 'firebase/firestore';
import CardService from './card';
import { firebase } from '../connection/firebase';
const ListAllServices = () => {
  const [services, setServices] = useState([])

  useEffect(() => {

    const obtenerDatos = async () => {
      const db = firebase.firestore()
      try {
        const data = await db.collection('services').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setServices(arrayData)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()

  }, [])
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