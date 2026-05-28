import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import SOSModal from "../components/SOSModal";

import { auth } from "../firebase/config";

import {
ShieldCheck,
Siren,
Users,
Bell,
MapPin,
Activity,
HeartHandshake,
AlertTriangle,
} from "lucide-react";

function Dashboard() {

const [showSOS, setShowSOS] = useState(false);

const [currentTime, setCurrentTime] = useState("");

useEffect(() => {

const interval = setInterval(() => {

const now = new Date();

setCurrentTime(

now.toLocaleTimeString([], {
hour: "2-digit",
minute: "2-digit",
second: "2-digit",
})

);

}, 1000);

return () => clearInterval(interval);

}, []);

return (

<div className="flex bg-[#020617] text-white min-h-screen pt-[72px] lg:pt-0 overflow-hidden">

{/* SIDEBAR */}

<Sidebar />

{/* MAIN CONTENT */}

<div className="flex-1 w-full">

{/* HEADER */}

<div className="px-6 md:px-10 py-8 border-b border-gray-800 bg-[#020617]/80 backdrop-blur-xl">

<div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">

{/* LEFT SECTION */}

<div>

<h1 className="text-3xl md:text-5xl font-black leading-tight">

Welcome Back,

<span className="text-pink-500">

{" "}
{auth.currentUser?.displayName || "User"}

</span>

</h1>

<p className="text-gray-400 mt-4 text-base md:text-lg">

Realtime emergency monitoring & community safety dashboard.

</p>

</div>

{/* RIGHT SECTION */}

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">

{/* LIVE CLOCK */}

<div className="bg-[#0f172a] border border-gray-800 rounded-2xl px-6 py-4">

<p className="text-gray-400 text-sm">

Live Time

</p>

<h2 className="text-2xl font-black text-pink-500 mt-1">

{currentTime}

</h2>

</div>

{/* PROFILE */}

<div className="flex items-center gap-4 bg-[#0f172a] border border-gray-800 rounded-2xl px-5 py-4">

<div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-2xl font-black uppercase shadow-[0_0_25px_rgba(236,72,153,0.5)]">

{

auth.currentUser?.displayName
?.charAt(0) || "U"

}

</div>

<div>

<h2 className="font-bold text-lg">

{

auth.currentUser?.displayName || "User"

}

</h2>

<p className="text-gray-400 text-sm break-all">

{

auth.currentUser?.email

}

</p>

</div>

</div>

</div>

</div>

</div>

{/* DASHBOARD CONTENT */}

<div className="p-6 md:p-10 space-y-10">

{/* STATS */}

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

{/* CARD 1 */}

<div className="relative overflow-hidden bg-gradient-to-br from-green-500/20 to-[#0f172a] border border-green-500/30 rounded-[32px] p-8 shadow-[0_0_40px_rgba(34,197,94,0.15)] hover:scale-[1.02] transition-all duration-300">

<div className="flex justify-between items-center">

<div>

<p className="text-gray-300">

Safety Status

</p>

<h2 className="text-4xl md:text-5xl font-black text-green-400 mt-4">

SAFE

</h2>

</div>

<div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center">

<ShieldCheck
size={38}
className="text-green-400"
/>

</div>

</div>

</div>

{/* CARD 2 */}

<div className="relative overflow-hidden bg-gradient-to-br from-red-500/20 to-[#0f172a] border border-red-500/30 rounded-[32px] p-8 shadow-[0_0_40px_rgba(239,68,68,0.15)] hover:scale-[1.02] transition-all duration-300">

<div className="flex justify-between items-center">

<div>

<p className="text-gray-300">

Emergency Alerts

</p>

<h2 className="text-4xl md:text-5xl font-black text-red-400 mt-4">

12

</h2>

</div>

<div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center">

<Siren
size={38}
className="text-red-400"
/>

</div>

</div>

</div>

{/* CARD 3 */}

<div className="relative overflow-hidden bg-gradient-to-br from-blue-500/20 to-[#0f172a] border border-blue-500/30 rounded-[32px] p-8 shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:scale-[1.02] transition-all duration-300">

<div className="flex justify-between items-center">

<div>

<p className="text-gray-300">

Active Volunteers

</p>

<h2 className="text-4xl md:text-5xl font-black text-blue-400 mt-4">

48

</h2>

</div>

<div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">

<Users
size={38}
className="text-blue-400"
/>

</div>

</div>

</div>

{/* CARD 4 */}

<div className="relative overflow-hidden bg-gradient-to-br from-yellow-500/20 to-[#0f172a] border border-yellow-500/30 rounded-[32px] p-8 shadow-[0_0_40px_rgba(234,179,8,0.15)] hover:scale-[1.02] transition-all duration-300">

<div className="flex justify-between items-center">

<div>

<p className="text-gray-300">

Notifications

</p>

<h2 className="text-4xl md:text-5xl font-black text-yellow-400 mt-4">

24

</h2>

</div>

<div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center">

<Bell
size={38}
className="text-yellow-400"
/>

</div>

</div>

</div>

</div>

{/* LIVE STATUS */}

<div className="grid lg:grid-cols-2 gap-8">

{/* LOCATION */}

<div className="bg-[#0f172a] border border-gray-800 rounded-[35px] p-8">

<div className="flex items-center justify-between">

<h2 className="text-3xl font-black">

Live Location

</h2>

<MapPin
size={34}
className="text-pink-500"
/>

</div>

<div className="mt-8 bg-[#020617] rounded-3xl border border-gray-800 p-6">

<p className="text-gray-400">

Current Status

</p>

<h3 className="text-2xl font-bold mt-3">

Hyderabad, India

</h3>

<p className="text-green-400 mt-4">

No threats detected in your area.

</p>

</div>

</div>

{/* COMMUNITY */}

<div className="bg-[#0f172a] border border-gray-800 rounded-[35px] p-8">

<div className="flex items-center justify-between">

<h2 className="text-3xl font-black">

Community Support

</h2>

<HeartHandshake
size={34}
className="text-blue-400"
/>

</div>

<div className="mt-8 space-y-5">

<div className="bg-[#020617] border border-gray-800 rounded-2xl p-5 flex justify-between items-center">

<p>Nearby NGOs</p>

<span className="text-green-400 font-bold">

18 Active

</span>

</div>

<div className="bg-[#020617] border border-gray-800 rounded-2xl p-5 flex justify-between items-center">

<p>Emergency Teams</p>

<span className="text-blue-400 font-bold">

12 Available

</span>

</div>

<div className="bg-[#020617] border border-gray-800 rounded-2xl p-5 flex justify-between items-center">

<p>Area Alerts</p>

<span className="text-red-400 font-bold">

2 Warnings

</span>

</div>

</div>

</div>

</div>

{/* SOS SECTION */}

<div className="bg-[#0f172a] border border-gray-800 rounded-[40px] p-10 flex flex-col items-center text-center relative overflow-hidden">

<div className="absolute w-[300px] h-[300px] bg-red-500/10 blur-[120px] rounded-full" />

<h2 className="text-4xl md:text-5xl font-black mb-10 relative z-10">

Emergency SOS

</h2>

<button

onClick={() => setShowSOS(true)}

className="relative z-10 w-48 h-48 md:w-56 md:h-56 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300 text-5xl md:text-6xl font-black shadow-[0_0_90px_rgba(255,0,0,0.8)] animate-pulse"

>

SOS

</button>

<p className="text-gray-400 text-lg md:text-xl mt-8 relative z-10">

Press only during emergency situations

</p>

</div>

{/* ALERT PANEL */}

<div className="bg-[#0f172a] border border-gray-800 rounded-[35px] p-8">

<div className="flex items-center gap-4 mb-8">

<AlertTriangle
size={34}
className="text-red-500"
/>

<h2 className="text-3xl font-black">

Realtime Safety Alerts

</h2>

</div>

<div className="space-y-5">

<div className="bg-[#020617] border border-gray-800 rounded-2xl p-5 flex items-center justify-between">

<div className="flex items-center gap-4">

<Activity className="text-red-400" />

<div>

<h3 className="font-bold">

Weather Warning

</h3>

<p className="text-gray-400 text-sm">

Heavy rainfall expected nearby.

</p>

</div>

</div>

<span className="text-red-400 font-bold">

HIGH

</span>

</div>

<div className="bg-[#020617] border border-gray-800 rounded-2xl p-5 flex items-center justify-between">

<div className="flex items-center gap-4">

<Activity className="text-yellow-400" />

<div>

<h3 className="font-bold">

Traffic Alert

</h3>

<p className="text-gray-400 text-sm">

Road blockage detected in city center.

</p>

</div>

</div>

<span className="text-yellow-400 font-bold">

MEDIUM

</span>

</div>

</div>

</div>

</div>

</div>

{/* SOS MODAL */}

{

showSOS && (

<SOSModal closeModal={() => setShowSOS(false)} />

)

}

</div>

);

}

export default Dashboard;