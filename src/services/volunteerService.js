import {
collection,
addDoc,
query,
orderBy,
onSnapshot
} from "firebase/firestore";

import { db } from "../firebase/config";

export const saveVolunteer =
async(data)=>{

try{

await addDoc(

collection(
db,
"volunteers"
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

export const subscribeVolunteers =
(callback)=>{

const q = query(

collection(
db,
"volunteers"
),

orderBy(
"createdAt",
"desc"
)

);

return onSnapshot(

q,

(snapshot)=>{

const volunteers =
snapshot.docs.map(

(doc)=>({

id:doc.id,

...doc.data()

})

);

callback(volunteers);

}

);

};