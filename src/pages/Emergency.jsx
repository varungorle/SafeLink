import { Link } from "react-router-dom";

import {
ShieldAlert,
Bell,
PhoneCall
} from "lucide-react";

import PageLayout from "../components/PageLayout";

function Emergency() {

const activateSOS=()=>{

navigator.geolocation.getCurrentPosition(

(position)=>{

alert(

`SOS Activated

Latitude:
${position.coords.latitude}

Longitude:
${position.coords.longitude}`

);

}

);

};

return(

<PageLayout

title={<>Emergency <span className="text-red-500">Support</span></>}

subtitle="Immediate emergency response and safety assistance."

>

<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-[#0f172a] p-8 rounded-3xl border border-red-500/20">

<ShieldAlert
size={55}
className="text-red-400"
/>

<h2 className="text-3xl font-black mt-6">

SOS Alert

</h2>

<p className="text-gray-400 mt-4">

Send emergency alert instantly.

</p>

<button

onClick={activateSOS}

className="mt-8 bg-red-600 px-8 py-4 rounded-2xl font-bold w-full"

>

Activate SOS

</button>

</div>

<div className="bg-[#0f172a] p-8 rounded-3xl border border-yellow-500/20">

<Bell
size={55}
className="text-yellow-400"
/>

<h2 className="text-3xl font-black mt-6">

Emergency Alerts

</h2>

<p className="text-gray-400 mt-4">

View latest alerts.

</p>

<Link to="/alerts">

<button

className="mt-8 bg-yellow-500 px-8 py-4 rounded-2xl font-bold w-full"

>

View Alerts

</button>

</Link>

</div>

<div className="bg-[#0f172a] p-8 rounded-3xl border border-green-500/20">

<PhoneCall
size={55}
className="text-green-400"
/>

<h2 className="text-3xl font-black mt-6">

Quick Call

</h2>

<p className="text-gray-400 mt-4">

Emergency services.

</p>

<a href="tel:112">

<button

className="mt-8 bg-green-500 px-8 py-4 rounded-2xl font-bold w-full"

>

Call 112

</button>

</a>

</div>

</div>

</PageLayout>

);

}

export default Emergency;