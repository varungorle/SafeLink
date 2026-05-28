import { Link } from "react-router-dom";

import {
ShieldCheck,
Siren,
Users,
HeartHandshake,
Bell,
ArrowRight,
Phone,
Mail,
MapPin,
Menu,
X,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

function Home() {

const [mobileMenu, setMobileMenu] = useState(false);

const features = [

{
title: "Emergency Alerts",
icon: <Bell size={34} />,
description:
"Receive instant real-time alerts for nearby emergencies and safety threats.",
color: "from-pink-500 to-purple-500",
},

{
title: "NGO Assistance",
icon: <HeartHandshake size={34} />,
description:
"Connect with NGOs and rescue organizations during critical situations.",
color: "from-blue-500 to-cyan-500",
},

{
title: "Real-Time Safety",
icon: <ShieldCheck size={34} />,
description:
"Track safety zones, live updates, and emergency monitoring in realtime.",
color: "from-green-500 to-emerald-500",
},

{
title: "SOS System",
icon: <Siren size={34} />,
description:
"Trigger emergency SOS alerts instantly with live GPS tracking support.",
color: "from-red-500 to-pink-500",
},

{
title: "Community Protection",
icon: <Users size={34} />,
description:
"Empower communities through collaborative safety and volunteer support.",
color: "from-purple-500 to-indigo-500",
},

];

return (

<div className="min-h-screen bg-[#020617] text-white overflow-hidden relative">

{/* BACKGROUND GLOW EFFECTS */}

<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 blur-[140px] rounded-full" />

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full" />

<div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full" />

{/* NAVBAR */}

<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">

<div className="max-w-7xl mx-auto px-6 lg:px-10">

<div className="flex items-center justify-between h-20">

{/* LOGO */}

<Link
to="/"
className="flex items-center gap-3"
>

<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-[0_0_25px_rgba(236,72,153,0.7)]">

<Siren size={24} />

</div>

<h1 className="text-3xl font-black tracking-wide">

SafeLink

</h1>

</Link>

{/* DESKTOP MENU */}

<div className="hidden lg:flex items-center gap-10">

<a
href="#features"
className="hover:text-pink-400 transition"
>

Features

</a>

<a
href="#services"
className="hover:text-pink-400 transition"
>

Services

</a>

<a
href="#contact"
className="hover:text-pink-400 transition"
>

Contact

</a>

</div>

{/* BUTTONS */}

<div className="hidden lg:flex items-center gap-4">

<Link
to="/login"
className="px-6 py-3 rounded-2xl border border-white/20 hover:border-pink-500 transition"
>

Login

</Link>

<Link
to="/register"
className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(236,72,153,0.5)]"
>

Get Started

</Link>

</div>

{/* MOBILE MENU */}

<button
onClick={() =>
setMobileMenu(!mobileMenu)
}
className="lg:hidden"
>

{

mobileMenu ?

<X size={32} /> :

<Menu size={32} />

}

</button>

</div>

</div>

{/* MOBILE DROPDOWN */}

{

mobileMenu && (

<div className="lg:hidden px-6 pb-6 space-y-5 bg-[#020617]/95 backdrop-blur-xl border-t border-white/10">

<a
href="#features"
className="block hover:text-pink-400"
>

Features

</a>

<a
href="#services"
className="block hover:text-pink-400"
>

Services

</a>

<a
href="#contact"
className="block hover:text-pink-400"
>

Contact

</a>

<div className="flex flex-col gap-4 pt-4">

<Link
to="/login"
className="w-full text-center py-3 rounded-2xl border border-white/20"
>

Login

</Link>

<Link
to="/register"
className="w-full text-center py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500"
>

Get Started

</Link>

</div>

</div>

)

}

</nav>

{/* HERO SECTION */}

<section className="relative pt-40 pb-28 px-6 lg:px-10">

<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

{/* LEFT CONTENT */}

<motion.div

initial={{ opacity: 0, y: 60 }}

animate={{ opacity: 1, y: 0 }}

transition={{ duration: 1 }}

>

<div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-8">

<div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" />

<p className="text-sm text-gray-300">

Realtime Emergency Protection Platform

</p>

</div>

<h1 className="text-5xl md:text-7xl font-black leading-tight">

Protecting Communities With

<span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">

{" "}
AI-Powered Safety

</span>

</h1>

<p className="text-gray-400 text-lg md:text-xl leading-relaxed mt-8 max-w-2xl">

SafeLink is a futuristic emergency response platform
providing realtime alerts, SOS protection,
community support, NGO assistance, and
live safety monitoring.

</p>

<div className="flex flex-col sm:flex-row gap-5 mt-12">

<Link
to="/register"
className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(236,72,153,0.5)] flex items-center justify-center gap-3 text-lg font-bold"
>

Get Started

<ArrowRight size={22} />

</Link>

<Link
to="/login"
className="px-8 py-4 rounded-2xl border border-white/20 hover:border-pink-500 hover:bg-white/5 transition-all duration-300 text-lg font-bold"
>

Live Dashboard

</Link>

</div>

</motion.div>

{/* RIGHT ILLUSTRATION */}

<motion.div

initial={{ opacity: 0, scale: 0.8 }}

animate={{ opacity: 1, scale: 1 }}

transition={{ duration: 1 }}

className="relative flex justify-center"

>

<div className="relative w-[360px] h-[360px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-pink-500/30 to-blue-500/30 backdrop-blur-3xl border border-white/10 flex items-center justify-center shadow-[0_0_100px_rgba(236,72,153,0.3)]">

<div className="absolute inset-0 rounded-full border border-pink-500/20 animate-ping" />

<div className="absolute inset-10 rounded-full border border-blue-500/20 animate-pulse" />

<div className="w-44 h-44 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-[0_0_80px_rgba(236,72,153,0.8)]">

<Siren size={90} />

</div>

</div>

</motion.div>

</div>

</section>

{/* FEATURES */}

<section
id="features"
className="relative py-24 px-6 lg:px-10"
>

<div className="max-w-7xl mx-auto">

<div className="text-center mb-20">

<h2 className="text-5xl font-black">

Advanced Safety Features

</h2>

<p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">

Powerful realtime emergency tools designed
to keep communities protected and connected.

</p>

</div>

<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

{

features.map((feature, index) => (

<motion.div

key={index}

whileHover={{ y: -10 }}

className="relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8 hover:border-pink-500/50 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.03)]"

>

<div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10`} />

<div className="relative z-10">

<div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.4)]`}>

{feature.icon}

</div>

<h3 className="text-3xl font-black mt-8">

{feature.title}

</h3>

<p className="text-gray-400 leading-relaxed mt-5 text-lg">

{feature.description}

</p>

</div>

</motion.div>

))

}

</div>

</div>

</section>

{/* SERVICES SECTION */}

<section
id="services"
className="py-24 px-6 lg:px-10"
>

<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div>

<h2 className="text-5xl font-black leading-tight">

Realtime Emergency Monitoring & Community Protection

</h2>

<p className="text-gray-400 text-lg leading-relaxed mt-8">

SafeLink integrates realtime emergency services,
live notifications, GPS tracking, NGO support,
and volunteer response systems into one unified platform.

</p>

<div className="space-y-6 mt-10">

<div className="flex items-start gap-5">

<div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center">

<ShieldCheck className="text-pink-500" />

</div>

<div>

<h3 className="text-2xl font-bold">

Realtime SOS Tracking

</h3>

<p className="text-gray-400 mt-2">

Live GPS-based emergency monitoring system.

</p>

</div>

</div>

<div className="flex items-start gap-5">

<div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">

<Users className="text-blue-500" />

</div>

<div>

<h3 className="text-2xl font-bold">

Volunteer Rescue Network

</h3>

<p className="text-gray-400 mt-2">

Connect instantly with active nearby volunteers.

</p>

</div>

</div>

</div>

</div>

<div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl shadow-[0_0_60px_rgba(236,72,153,0.1)]">

<div className="space-y-8">

<div className="flex items-center justify-between">

<h3 className="text-2xl font-black">

Live Protection Status

</h3>

<div className="px-4 py-2 rounded-full bg-green-500/20 text-green-400">

ACTIVE

</div>

</div>

<div className="space-y-5">

<div className="bg-[#0f172a] rounded-3xl p-6 border border-white/10">

<div className="flex items-center justify-between">

<p>Emergency Alerts</p>

<p className="text-pink-400 font-bold">

12 Active

</p>

</div>

</div>

<div className="bg-[#0f172a] rounded-3xl p-6 border border-white/10">

<div className="flex items-center justify-between">

<p>Volunteers Online</p>

<p className="text-blue-400 font-bold">

48 Available

</p>

</div>

</div>

<div className="bg-[#0f172a] rounded-3xl p-6 border border-white/10">

<div className="flex items-center justify-between">

<p>NGO Support</p>

<p className="text-green-400 font-bold">

24 Connected

</p>

</div>

</div>

</div>

</div>

</div>

</div>

</section>

{/* FOOTER */}

<footer
id="contact"
className="border-t border-white/10 bg-white/5 backdrop-blur-xl py-16 px-6 lg:px-10 mt-20"
>

<div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">

<div>

<div className="flex items-center gap-3">

<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">

<Siren size={24} />

</div>

<h2 className="text-3xl font-black">

SafeLink

</h2>

</div>

<p className="text-gray-400 mt-6 leading-relaxed">

Next-generation emergency response platform
focused on community safety and realtime protection.

</p>

</div>

<div>

<h3 className="text-2xl font-bold mb-6">

Quick Links

</h3>

<div className="space-y-4 text-gray-400">

<p>Home</p>

<p>Features</p>

<p>Services</p>

<p>Dashboard</p>

</div>

</div>

<div>

<h3 className="text-2xl font-bold mb-6">

Emergency Contact

</h3>

<div className="space-y-5 text-gray-400">

<div className="flex items-center gap-4">

<Phone size={20} />

<p>+91 98765 43210</p>

</div>

<div className="flex items-center gap-4">

<Mail size={20} />

<p>support@safelink.com</p>

</div>

<div className="flex items-center gap-4">

<MapPin size={20} />

<p>India</p>

</div>

</div>

</div>

<div>

<h3 className="text-2xl font-bold mb-6">

Follow Us

</h3>

<div className="flex gap-5">

<div className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-pink-500 transition flex items-center justify-center cursor-pointer">

F

</div>

<div className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-blue-500 transition flex items-center justify-center cursor-pointer">

X

</div>

<div className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-purple-500 transition flex items-center justify-center cursor-pointer">

I

</div>

</div>

</div>

</div>

<div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">

© 2026 SafeLink. All rights reserved.

</div>

</footer>

</div>

);

}

export default Home;