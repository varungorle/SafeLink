import { useEffect, useState } from "react";

import PageLayout from "../components/PageLayout";

import {
Users,
Plus,
ShieldCheck
} from "lucide-react";

import {
saveVolunteer,
subscribeVolunteers
} from "../services/volunteerService";

function Volunteer(){

const [name,setName] =
useState("");

const [phone,setPhone] =
useState("");

const [status,setStatus] =
useState("Available");

const [volunteers,setVolunteers] =
useState([]);

useEffect(()=>{

const unsubscribe =

subscribeVolunteers(

(data)=>{

setVolunteers(data);

}

);

return ()=>unsubscribe();

},[]);

const addVolunteer =
async()=>{

if(!name || !phone){

alert("Fill all fields");

return;

}

await saveVolunteer({

name,
phone,
status

});

setName("");
setPhone("");

alert("Volunteer Added");

};

return(

<PageLayout

title="Volunteer Network"

subtitle="Realtime volunteer emergency response system."

>

{/* FORM */}

<div className="max-w-3xl mx-auto bg-[#0f172a] border border-gray-800 rounded-[35px] p-8 mb-12">

<h2 className="text-4xl font-black text-center mb-8">

Add Volunteer

</h2>

<div className="space-y-5">

<input

value={name}

onChange={(e)=>
setName(e.target.value)
}

placeholder="Volunteer Name"

className="w-full bg-[#020617] border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-pink-500"

/>

<input

value={phone}

onChange={(e)=>
setPhone(e.target.value)
}

placeholder="Phone Number"

className="w-full bg-[#020617] border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-pink-500"

/>

<select

value={status}

onChange={(e)=>
setStatus(e.target.value)
}

className="w-full bg-[#020617] border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-pink-500"

>

<option>

Available

</option>

<option>

On Rescue

</option>

<option>

Offline

</option>

</select>

<button

onClick={addVolunteer}

className="w-full bg-pink-500 hover:bg-pink-600 transition py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3"

>

<Plus size={22}/>

Add Volunteer

</button>

</div>

</div>

{/* VOLUNTEERS */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

{

volunteers.length > 0 ?

(

volunteers.map((volunteer,index)=>(

<div

key={index}

className="bg-[#0f172a] border border-gray-800 rounded-[35px] p-8"

>

<div className="flex items-center justify-between">

<div>

<h2 className="text-3xl font-black">

{volunteer.name}

</h2>

<p className="text-gray-400 mt-3">

{volunteer.phone}

</p>

</div>

<div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center">

<Users

size={30}

className="text-pink-500"

/>

</div>

</div>

<div className="mt-8 flex items-center justify-between">

<div className="flex items-center gap-3">

<ShieldCheck

className="text-green-400"

/>

<p className="text-lg">

{volunteer.status}

</p>

</div>

<div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-2xl font-bold">

ACTIVE

</div>

</div>

</div>

))

)

:

(

<div className="col-span-3 flex flex-col items-center justify-center py-24">

<Users

size={80}

className="text-gray-500"

/>

<h2 className="text-4xl font-black mt-8">

No Volunteers

</h2>

<p className="text-gray-400 mt-4 text-lg">

No volunteers available yet.

</p>

</div>

)

}

</div>

</PageLayout>

);

}

export default Volunteer;