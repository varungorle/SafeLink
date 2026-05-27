import {
collection,
addDoc,
serverTimestamp
} from "firebase/firestore";

import { db } from "../firebase/config";

export const saveEmergency = async(data)=>{

try{

await addDoc(

collection(
db,
"emergencies"
),

{

userName:

data.userName ||

"Unknown User",

email:

data.email ||

"",

latitude:

data.latitude ||

0,

longitude:

data.longitude ||

0,

message:

data.message ||

"Emergency SOS Triggered",

createdAt:

serverTimestamp()

}

);

return true;

}

catch(error){

console.log(

"Emergency Save Error:",

error

);

return false;

}

};