import 'firebase/firestore';
import { firebase } from '../connection/firebase';

export const getServices = async (category) =>{ 
    const db = firebase.firestore().collection('services')
    try{
        let data = null;
        if(category !=="nocategory"){
            data = await db.where("type", "==", category).get();
        }
        else{
            data = await db.get()
        }
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        return arrayData;
    }
    catch(e){
        console.log(e)
    }
    
}
export const addService = async (service)=>{
    try {
        const db = firebase.firestore().collection('services')
        const data = await db.add(service)
        return data;
    } catch (e) {
        console.log(e)
    }
}
export const updateService = async (id,service)=>{
    try {
        const db = firebase.firestore().collection('services')
        const data = await db.doc(id).update(service)
        return data;
    } catch (e) {
        console.log(e)
    }
}
export const deleteService = async (id) =>{
    try {
        const db = firebase.firestore()
        const response = await db.collection('services').doc(id).delete();

        return response;
      } catch (e) {
        console.log(e)
      }
}