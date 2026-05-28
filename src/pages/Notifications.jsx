import { useEffect, useState } from "react";

import PageLayout from "../components/PageLayout";

import {
Bell,
AlertTriangle
} from "lucide-react";

import {
subscribeNotifications
} from "../services/notificationService";

function Notifications(){

const [notifications,setNotifications] =
useState([]);

useEffect(()=>{

const unsubscribe =

subscribeNotifications(

(data)=>{

setNotifications(data);

}

);

return ()=>unsubscribe();

},[]);

return(

<PageLayout

title="Notifications"

subtitle="Realtime emergency and community notifications."

>

<div className="grid grid-cols-1 gap-8">

{

notifications.length > 0 ?

(

notifications.map((item,index)=>(

<div

key={index}

className="bg-[#0f172a] border border-gray-800 rounded-[35px] p-8"

>

<div className="flex items-start gap-5">

<div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center">

<AlertTriangle

size={32}

className="text-red-400"

/>

</div>

<div className="flex-1">

<h2 className="text-3xl font-black">

{item.title}

</h2>

<p className="text-gray-400 text-lg mt-3">

{item.message}

</p>

<p className="text-gray-500 mt-5">

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

<div className="flex flex-col items-center justify-center py-24">

<Bell

size={80}

className="text-gray-500"

/>

<h2 className="text-4xl font-black mt-8">

No Notifications

</h2>

<p className="text-gray-400 mt-4 text-lg">

No notifications available yet.

</p>

</div>

)

}

</div>

</PageLayout>

);

}

export default Notifications;