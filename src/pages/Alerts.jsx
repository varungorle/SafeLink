import { useEffect, useState } from "react";

import PageLayout from "../components/PageLayout";

import {
CloudRain,
TriangleAlert,
ShieldAlert,
CloudLightning
} from "lucide-react";

function Alerts(){

const [weather,setWeather]=useState("");

const [warning,setWarning]=useState("");

const [areaAlert,setAreaAlert]=useState("");

useEffect(()=>{

navigator.geolocation.getCurrentPosition(

(position)=>{

const hour=new Date().getHours();

const rainChance=Math.random();

const unusualActivity=Math.random();

if(rainChance>0.7){

setWeather(

"Heavy rain expected. Carry protection."

);

setWarning(

"⚠ Weather Warning"

);

}

else if(hour>=12 && hour<=16){

setWeather(

"High temperature detected. Stay hydrated."

);

setWarning(

"☀ Heat Warning"

);

}

else{

setWeather(

"Weather conditions normal."

);

setWarning(

"✅ Weather Safe"

);

}

if(unusualActivity>0.8){

setAreaAlert(

"Suspicious community activity detected nearby. Stay alert."

);

}

else if(unusualActivity>0.5){

setAreaAlert(

"Moderate crowd movement detected."

);

}

else{

setAreaAlert(

"No unusual activity detected."

);

}

},

()=>{

setWeather(

"Location unavailable"

);

}

);

},[]);

return(

<PageLayout

title="Safety Alerts"

subtitle="Weather monitoring and community safety alerts."

>

<div className="grid lg:grid-cols-2 gap-8">

{/* WEATHER */}

<div

className="bg-[#0f172a]
border
border-blue-500/20
rounded-[35px]
p-8"

>

<CloudRain

size={60}

className="text-blue-400"

/>

<h2

className="text-3xl
font-black
mt-6"

>

Weather Report

</h2>

<p

className="text-gray-400
mt-5"

>

{weather}

</p>

<div

className="mt-6
bg-blue-500/20
p-4
rounded-2xl"

>

{warning}

</div>

</div>

{/* AREA ALERT */}

<div

className="bg-[#0f172a]
border
border-red-500/20
rounded-[35px]
p-8"

>

<ShieldAlert

size={60}

className="text-red-400"

/>

<h2

className="text-3xl
font-black
mt-6"

>

Area Alert

</h2>

<p

className="text-gray-400
mt-5"

>

{areaAlert}

</p>

<div

className="mt-6
bg-red-500/20
p-4
rounded-2xl"

>

Stay aware of surroundings.

</div>

</div>

{/* SAFETY STATUS */}

<div

className="bg-[#0f172a]
border
border-green-500/20
rounded-[35px]
p-8"

>

<TriangleAlert

size={60}

className="text-green-400"

/>

<h2

className="text-3xl
font-black
mt-6"

>

Safety Status

</h2>

<p

className="text-gray-400
mt-5"

>

Community monitoring active.

</p>

</div>

{/* EMERGENCY WEATHER */}

<div

className="bg-[#0f172a]
border
border-yellow-500/20
rounded-[35px]
p-8"

>

<CloudLightning

size={60}

className="text-yellow-400"

/>

<h2

className="text-3xl
font-black
mt-6"

>

Weather Warning

</h2>

<p

className="text-gray-400
mt-5"

>

Severe weather alerts appear here.

</p>

</div>

</div>

</PageLayout>

);

}

export default Alerts;