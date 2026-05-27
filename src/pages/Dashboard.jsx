import { useState } from "react";

import Sidebar from "../components/Sidebar";
import SOSModal from "../components/SOSModal";
import AnalyticsChart from "../components/AnalyticsChart";

import { auth } from "../firebase/config";

import {
ShieldCheck,
Siren,
Users,
Bell
} from "lucide-react";

function Dashboard(){

const [showSOS,setShowSOS]=useState(false);

return(

<div className="flex bg-[#020617] text-white min-h-screen">

{/* SIDEBAR */}

<Sidebar/>

{/* MAIN */}

<div className="flex-1 overflow-y-auto">

{/* HEADER */}

<div className="px-6 md:px-10 py-8 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-6">

{/* LEFT */}

<div>

<h1 className="text-4xl md:text-5xl font-black">

Welcome Back,

<span className="text-pink-500">

{" "}

{auth.currentUser?.displayName || "User"}

</span>

</h1>

<p className="text-gray-400 mt-3 text-lg">

Monitor emergency alerts and community safety.

</p>

</div>

{/* PROFILE */}

<div className="bg-[#0f172a] border border-gray-800 rounded-3xl px-6 py-4 flex items-center gap-4">

<div className="w-14 h-14 rounded-full bg-pink-500 flex items-center justify-center text-2xl font-black uppercase">

{

auth.currentUser?.displayName?.charAt(0)

||

"U"

}

</div>

<div>

<h2 className="font-bold text-lg">

{

auth.currentUser?.displayName

||

"User"

}

</h2>

<p className="text-gray-400 text-sm">

{

auth.currentUser?.email

}

</p>

</div>

</div>

</div>

{/* STATS */}

<section className="p-6 md:p-10">

<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

{/* CARD 1 */}

<div className="bg-gradient-to-br from-green-500/20 to-[#0f172a] border border-green-500/30 p-8 rounded-[35px]">

<div className="flex justify-between items-center">

<div>

<p className="text-gray-300">

Safety Status

</p>

<h2 className="text-5xl font-black text-green-400 mt-4">

SAFE

</h2>

</div>

<ShieldCheck

size={50}

className="text-green-400"

/>

</div>

</div>

{/* CARD 2 */}

<div className="bg-gradient-to-br from-red-500/20 to-[#0f172a] border border-red-500/30 p-8 rounded-[35px]">

<div className="flex justify-between items-center">

<div>

<p className="text-gray-300">

Emergency Alerts

</p>

<h2 className="text-5xl font-black text-red-400 mt-4">

12

</h2>

</div>

<Siren

size={50}

className="text-red-400"

/>

</div>

</div>

{/* CARD 3 */}

<div className="bg-gradient-to-br from-blue-500/20 to-[#0f172a] border border-blue-500/30 p-8 rounded-[35px]">

<div className="flex justify-between items-center">

<div>

<p className="text-gray-300">

Volunteers

</p>

<h2 className="text-5xl font-black text-blue-400 mt-4">

48

</h2>

</div>

<Users

size={50}

className="text-blue-400"

/>

</div>

</div>

{/* CARD 4 */}

<div className="bg-gradient-to-br from-yellow-500/20 to-[#0f172a] border border-yellow-500/30 p-8 rounded-[35px]">

<div className="flex justify-between items-center">

<div>

<p className="text-gray-300">

Notifications

</p>

<h2 className="text-5xl font-black text-yellow-400 mt-4">

24

</h2>

</div>

<Bell

size={50}

className="text-yellow-400"

/>

</div>

</div>

</div>

</section>

{/* ANALYTICS */}

<section className="px-6 md:px-10 pb-10">

<AnalyticsChart/>

</section>

{/* SOS SECTION */}

<section className="px-6 md:px-10 pb-10">

<div className="bg-[#0f172a] border border-gray-800 rounded-[40px] p-10 flex flex-col items-center">

<h2 className="text-4xl font-black mb-10">

Emergency SOS

</h2>

<button

onClick={()=>setShowSOS(true)}

className="w-56 h-56 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300 text-6xl font-black shadow-[0_0_80px_rgba(255,0,0,0.7)] animate-pulse"

>

SOS

</button>

<p className="text-gray-400 text-xl mt-8">

Press only during emergency situations

</p>

</div>

</section>

</div>

{/* SOS MODAL */}

{

showSOS && (

<SOSModal

closeModal={()=>

setShowSOS(false)

}

/>

)

}

</div>

);

}

export default Dashboard;