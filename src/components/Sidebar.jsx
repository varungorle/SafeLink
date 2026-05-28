import { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import {

LayoutDashboard,
Phone,
ShieldAlert,
HeartHandshake,
MapPin,
Users,
History,
Settings,
Bell,
User,
Menu,
X,
LogOut

} from "lucide-react";

import { signOut } from "firebase/auth";

import { auth } from "../firebase/config";

function Sidebar() {

const [open, setOpen] = useState(false);

const location = useLocation();

const logout = async () => {

await signOut(auth);

window.location.href = "/";

};

const navLinks = [

{
name: "Dashboard",
path: "/dashboard",
icon: <LayoutDashboard size={22} />
},

{
name: "Contacts",
path: "/contacts",
icon: <Phone size={22} />
},

{
name: "Emergency",
path: "/emergency",
icon: <ShieldAlert size={22} />
},

{
name: "NGOs",
path: "/ngos",
icon: <HeartHandshake size={22} />
},

{
name: "Location",
path: "/location",
icon: <MapPin size={22} />
},

{
name: "Community",
path: "/community",
icon: <Users size={22} />
},

{
name: "History",
path: "/history",
icon: <History size={22} />
},

{
name: "Notifications",
path: "/notifications",
icon: <Bell size={22} />
},

{
name: "Profile",
path: "/profile",
icon: <User size={22} />
},

{
name: "Settings",
path: "/settings",
icon: <Settings size={22} />
},

];

return (

<>

{/* MOBILE TOPBAR */}

<div className="lg:hidden fixed top-0 left-0 w-full z-50 bg-[#020617]/95 backdrop-blur-xl border-b border-gray-800 px-5 py-4 flex items-center justify-between">

<h1 className="text-2xl font-black text-white">

SafeLink

</h1>

<button
onClick={() => setOpen(true)}
className="text-white"
>

<Menu size={32} />

</button>

</div>

{/* OVERLAY */}

{

open && (

<div

onClick={() => setOpen(false)}

className="fixed inset-0 bg-black/70 z-40 lg:hidden"

/>

)

}

{/* SIDEBAR */}

<div className={`fixed top-0 left-0 z-50 h-screen w-[280px] bg-[#0f172a] border-r border-gray-800 transform transition-transform duration-300

${open ? "translate-x-0" : "-translate-x-full"}

lg:translate-x-0 lg:static lg:flex-shrink-0`}>

<div className="flex flex-col h-full">

{/* HEADER */}

<div className="flex items-center justify-between px-6 py-6 border-b border-gray-800">

<h1 className="text-3xl font-black text-white">

SafeLink

</h1>

<button

onClick={() => setOpen(false)}

className="lg:hidden text-white"

>

<X size={30} />

</button>

</div>

{/* NAVIGATION */}

<div className="flex-1 overflow-y-auto p-5 space-y-3">

{

navLinks.map((link, index) => (

<Link

key={index}

to={link.path}

onClick={() => setOpen(false)}

className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300

${location.pathname === link.path

? "bg-pink-500 text-white shadow-[0_0_30px_rgba(236,72,153,0.5)]"

: "text-gray-300 hover:bg-[#1e293b] hover:text-white"

}`}

>

{link.icon}

<span className="font-semibold text-lg">

{link.name}

</span>

</Link>

))

}

</div>

{/* FOOTER */}

<div className="p-5 border-t border-gray-800">

<button

onClick={logout}

className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 transition py-4 rounded-2xl font-bold text-lg"

>

<LogOut size={22} />

Logout

</button>

</div>

</div>

</div>

</>

);

}

export default Sidebar;