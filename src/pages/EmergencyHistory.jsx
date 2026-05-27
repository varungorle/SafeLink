import { useEffect,useState } from "react";
import { collection,getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

function EmergencyHistory(){

const[alerts,setAlerts]=useState([]);

useEffect(()=>{

const loadAlerts=async()=>{

const data=
await getDocs(
collection(db,"alerts")
);

setAlerts(

data.docs.map(

doc=>({

id:doc.id,

...doc.data()

})

)

);

};

loadAlerts();

},[]);

return(

<div className="min-h-screen bg-[#020617] text-white p-10">

<h1 className="text-5xl font-black">

Emergency History

</h1>

<div className="mt-10 space-y-5">

{

alerts.map(

(item)=>(

<div

key={item.id}

className="bg-[#0f172a] p-6 rounded-3xl"

>

<h2>

Emergency Alert

</h2>

<p>

{item.location}

</p>

<p>

{item.time}

</p>

</div>

)

)

}

</div>

</div>

);

}

export default EmergencyHistory;