import {
collection,
addDoc,
serverTimestamp
} from "firebase/firestore";

import { db } from "../firebase/config";

export const addCommunityPost = async(data)=>{

try{

await addDoc(

collection(
db,
"community_posts"
),

{

userName:data.userName,

message:data.message,

location:data.location,

alertType:data.alertType,

createdAt:serverTimestamp()

}

);

return true;

}

catch(error){

console.log(error);

return false;

}

};