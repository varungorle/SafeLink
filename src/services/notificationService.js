import {
collection,
addDoc,
query,
orderBy,
onSnapshot
} from "firebase/firestore";

import { db } from "../firebase/config";

export const saveNotification =
async(data)=>{

try{

await addDoc(

collection(
db,
"notifications"
),

{

...data,

createdAt:
new Date()

}

);

}catch(error){

console.log(error);

}

};

export const subscribeNotifications =
(callback)=>{

const q = query(

collection(
db,
"notifications"
),

orderBy(
"createdAt",
"desc"
)

);

return onSnapshot(

q,

(snapshot)=>{

const notifications =
snapshot.docs.map(

(doc)=>({

id:doc.id,

...doc.data()

})

);

callback(notifications);

}

);

};