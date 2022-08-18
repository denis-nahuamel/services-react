import 'firebase/firestore';
import { firebase } from '../connection/firebase';

export const getServices = async (category) =>{
    
    console.log("getservices", category)
    const db = firebase.firestore()
    try{
        let data = null;
        if(category !="nocategory"){
            data = await db.collection('services').where("type", "==", category).get();
        }
        else{
            data = await db.collection('services').get()
        }
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        return arrayData;
    }
    catch(e){
        console.log(e)
    }
    
}