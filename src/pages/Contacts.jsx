import { useState } from "react";
import PageLayout from "../components/PageLayout";

function Contacts() {

const [contacts,setContacts]=useState([]);

const [name,setName]=useState("");

const [phone,setPhone]=useState("");

const saveContact=()=>{

if(!name || !phone){

alert("Fill all fields");

return;

}

setContacts(

[

...contacts,

{name,phone}

]

);

setName("");
setPhone("");

};

return(

<PageLayout
title="Emergency Contacts"
subtitle="Call emergency services or save trusted contacts."
>

<div className="max-w-2xl mx-auto">

<div className="bg-[#0f172a] p-8 rounded-3xl border border-gray-800">

<h2 className="text-3xl font-black mb-6">

Add Personal Contact

</h2>

<input

value={name}

onChange={(e)=>setName(e.target.value)}

placeholder="Contact Name"

className="w-full p-4 rounded-xl bg-[#020617] mb-4"

/>

<input

value={phone}

onChange={(e)=>setPhone(e.target.value)}

placeholder="Phone Number"

className="w-full p-4 rounded-xl bg-[#020617]"

/>

<button

onClick={saveContact}

className="w-full mt-6 bg-pink-500 py-4 rounded-xl font-bold"

>

Save Contact

</button>

</div>

<div className="mt-8 space-y-4">

{

contacts.map(

(contact,index)=>(

<div

key={index}

className="bg-[#0f172a] p-5 rounded-2xl"

>

<h3>

{contact.name}

</h3>

<p>

{contact.phone}

</p>

</div>

)

)

}

</div>

</div>

</PageLayout>

);

}

export default Contacts;