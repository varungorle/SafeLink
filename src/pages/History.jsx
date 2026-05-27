import {

useState,
useEffect

}

from "react";

import {

collection,
query,
orderBy,
onSnapshot

}

from "firebase/firestore";

import {

db

}

from "../firebase/config";

import PageLayout from "../components/PageLayout";

function History(){

const [history,setHistory]=

useState([]);

useEffect(()=>{

const q=

query(

collection(

db,

"emergencies"

),

orderBy(

"createdAt",

"desc"

)

);

const unsubscribe=

onSnapshot(

q,

(snapshot)=>{

setHistory(

snapshot.docs.map(

(doc)=>({

id:doc.id,

...doc.data()

})

)

);

}

);

return ()=>unsubscribe();

},[]);

return(

<PageLayout

title="Emergency History"

subtitle="SOS activity records"

>

<div className="space-y-5">

{

history.map(

(item)=>(

<div

key={item.id}

className="bg-[#0f172a] p-6 rounded-3xl"

>

<h2 className="text-2xl font-bold">

{item.userName}

</h2>

<p>

{item.email}

</p>

<p>

{item.latitude}

</p>

<p>

{item.longitude}

</p>

<p className="text-red-400">

{item.status}

</p>

</div>

)

)

}

</div>

</PageLayout>

);

}

export default History;