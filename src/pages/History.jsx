import { useEffect, useState } from "react";

import PageLayout from "../components/PageLayout";

import {
MapPin,
Clock,
ShieldAlert
} from "lucide-react";

import {
subscribeEmergencies
} from "../services/emergencyService";

function History(){

const [emergencies,setEmergencies] =
useState([]);

useEffect(()=>{

const unsubscribe =

subscribeEmergencies(

(data)=>{

setEmergencies(data);

}

);

return ()=>unsubscribe();

},[]);

return(

<PageLayout

title="Emergency History"

subtitle="Previous SOS emergency alerts and tracking history."

>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

{

emergencies.length > 0 ?

(

emergencies.map((item,index)=>(

<div

key={index}

className="bg-[#0f172a] border border-gray-800 rounded-[35px] p-8"

>

<div className="flex items-center justify-between">

<div>

<h2 className="text-3xl font-black">

{item.userName}

</h2>

<p className="text-gray-400 mt-2">

{item.email}

</p>

</div>

<div className="bg-red-500/20 text-red-400 px-4 py-2 rounded-2xl font-bold">

{item.status}

</div>

</div>

<div className="mt-8 space-y-5">

<div className="flex items-center gap-4">

<MapPin className="text-pink-500"/>

<p>

{item.latitude},
{item.longitude}

</p>

</div>

<div className="flex items-center gap-4">

<Clock className="text-yellow-400"/>

<p>

{

item.createdAt?.toDate?.()

?.toLocaleString()

||

"Time unavailable"

}

</p>

</div>

</div>

</div>

))

)

:

(

<div className="col-span-2 flex flex-col items-center justify-center py-24">

<ShieldAlert

size={80}

className="text-gray-500"

/>

<h2 className="text-4xl font-black mt-8">

No Emergency Records

</h2>

<p className="text-gray-400 mt-4 text-lg">

No SOS alerts have been triggered yet.

</p>

</div>

)

}

</div>

</PageLayout>

);

}

export default History;