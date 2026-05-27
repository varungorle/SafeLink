import { Link, useLocation, useNavigate } from "react-router-dom";

import {
Home,
LayoutDashboard,
Phone,
AlertTriangle,
MapPin,
MapPinned,
HeartHandshake,
Users,
Bell,
History,
User,
Settings,
LogOut
} from "lucide-react";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

function Sidebar() {

const location=useLocation();

const navigate=useNavigate();

const logout=async()=>{

try{

await signOut(auth);

navigate("/");

}

catch(error){

console.log(error);

}

};

const menu=[

{
name:"Home",
path:"/",
icon:Home
},

{
name:"Dashboard",
path:"/dashboard",
icon:LayoutDashboard
},

{
name:"Contacts",
path:"/contacts",
icon:Phone
},

{
name:"Emergency",
path:"/emergency",
icon:AlertTriangle
},

{
name:"GPS Location",
path:"/location",
icon:MapPin
},

{
name:"Nearby Help",
path:"/nearby-help",
icon:MapPinned
},

{
name:"NGOs",
path:"/ngos",
icon:HeartHandshake
},

{
name:"Community",
path:"/community",
icon:Users
},

{
name:"Notifications",
path:"/notifications",
icon:Bell
},

{
name:"History",
path:"/history",
icon:History
},

{
name:"Profile",
path:"/profile",
icon:User
},

{
name:"Settings",
path:"/settings",
icon:Settings
}

];

return(

<div className="w-[280px] min-h-screen bg-[#0f172a] border-r border-gray-800 flex flex-col justify-between">

<div>

{/* LOGO */}

<div className="px-6 py-8 border-b border-gray-800">

<h1 className="text-4xl font-black text-white">

Safe

<span className="text-pink-500">

Link

</span>

</h1>

<p className="text-gray-400 mt-2">

Community Safety Platform

</p>

</div>

{/* MENU */}

<div className="px-4 py-6 space-y-3">

{

menu.map((item)=>{

const Icon=item.icon;

return(

<Link

key={item.path}

to={item.path}

className={`

flex
items-center
gap-4

px-5
py-4

rounded-2xl

transition-all

duration-300

${

location.pathname===item.path

?

"bg-pink-500 text-white"

:

"text-gray-400 hover:bg-[#1e293b] hover:text-white"

}

`}

>

<Icon size={22}/>

<span className="font-semibold">

{item.name}

</span>

</Link>

);

})

}

</div>

</div>

{/* LOGOUT */}

<div className="p-5 border-t border-gray-800">

<button

onClick={logout}

className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-2xl flex items-center justify-center gap-3 font-bold transition"

>

<LogOut size={22}/>

Logout

</button>

</div>

</div>

);

}

export default Sidebar;