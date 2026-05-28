import { useState } from "react";

import {
AlertTriangle,
MapPin
} from "lucide-react";

import {
auth
} from "../firebase/config";

import {
saveEmergency
} from "../services/emergencyService";

import {
saveNotification
} from "../services/notificationService";

function SOSModal({

closeModal

}) {

const [loading, setLoading] =
useState(false);

const sendEmergency = () => {

setLoading(true);

navigator.geolocation.getCurrentPosition(

async (position) => {

try {

const latitude =
position.coords.latitude;

const longitude =
position.coords.longitude;

await saveEmergency({

userName:

auth.currentUser?.displayName ||

"User",

email:

auth.currentUser?.email ||

"No Email",

latitude,

longitude,

status: "ACTIVE"

});

await saveNotification({

title: "Emergency SOS",

message:

`${auth.currentUser?.displayName || "User"} triggered an emergency SOS alert.`,

type: "emergency"

});

alert(

"Emergency Alert Sent Successfully"

);

setLoading(false);

closeModal();

} catch (error) {

console.log(error);

alert(

"Failed to send emergency alert"

);

setLoading(false);

}

},

(error) => {

console.log(error);

alert(

"Location permission denied"

);

setLoading(false);

}

);

};

return (

<div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

<div className="w-full max-w-lg bg-[#0f172a] border border-red-500/40 rounded-[40px] p-8 md:p-10 text-center shadow-[0_0_50px_rgba(255,0,0,0.2)]">

{/* ICON */}

<div className="flex justify-center">

<div className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center shadow-[0_0_70px_rgba(255,0,0,0.7)] animate-pulse">

<AlertTriangle

size={55}

className="text-white"

/>

</div>

</div>

{/* TITLE */}

<h1 className="text-4xl md:text-5xl font-black mt-8 text-white">

Emergency SOS

</h1>

{/* DESCRIPTION */}

<p className="text-gray-400 text-lg leading-relaxed mt-6">

Your live GPS location will be shared
with emergency responders and securely
stored in SafeLink database.

</p>

{/* LOCATION BOX */}

<div className="bg-[#020617] border border-gray-800 rounded-3xl p-5 mt-8 flex items-center gap-4">

<div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center">

<MapPin className="text-pink-500" />

</div>

<div className="text-left">

<h2 className="font-bold text-lg">

Live GPS Tracking

</h2>

<p className="text-gray-400 text-sm mt-1">

Your current location will be attached

</p>

</div>

</div>

{/* BUTTONS */}

<div className="flex flex-col md:flex-row gap-5 mt-10">

<button

onClick={closeModal}

disabled={loading}

className="flex-1 border border-gray-700 hover:border-gray-500 transition py-4 rounded-2xl font-bold text-lg"

>

Cancel

</button>

<button

onClick={sendEmergency}

disabled={loading}

className="flex-1 bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(255,0,0,0.5)]"

>

{

loading ?

"Sending..." :

"Send Emergency"

}

</button>

</div>

</div>

</div>

);

}

export default SOSModal;