import { useState } from "react";

import PageLayout from "../components/PageLayout";

function Volunteer() {

const [name,setName]=useState("");

const [phone,setPhone]=useState("");

const [available,setAvailable]=
useState(true);

const [volunteers,setVolunteers]=
useState([]);

const addVolunteer=()=>{

if(!name || !phone){

alert("Fill all fields");

return;

}

const volunteer={

id:Date.now(),

name,

phone,

status:

available

?

"Available"

:

"Offline"

};

setVolunteers(

[

...volunteers,

volunteer

]

);

setName("");

setPhone("");

setAvailable(true);

};

return(

<PageLayout

title="Volunteer Network"

subtitle="Community rescue volunteers."

>

<div className="grid lg:grid-cols-2 gap-10">

{/* FORM */}

<div

className="bg-[#0f172a]
p-8
rounded-3xl"

>

<h2

className="text-3xl
font-black
mb-6"

>

Become Volunteer

</h2>

<input

value={name}

onChange={(e)=>

setName(e.target.value)

}

placeholder="Name"

className="w-full
p-4
rounded-xl
bg-[#020617]
mb-4"

/>

<input

value={phone}

onChange={(e)=>

setPhone(e.target.value)

}

placeholder="Phone Number"

className="w-full
p-4
rounded-xl
bg-[#020617]
mb-6"

/>

<label

className="flex
gap-3
mb-6"

>

<input

type="checkbox"

checked={available}

onChange={()=>

setAvailable(

!available

)

}

/>

Available For Rescue

</label>

<button

onClick={addVolunteer}

className="bg-pink-500
w-full
py-4
rounded-2xl
font-bold"

>

Register Volunteer

</button>

</div>

{/* LIST */}

<div>

<h2

className="text-3xl
font-black
mb-6"

>

Community Volunteers

</h2>

<div

className="space-y-5"

>

{

volunteers.map(

(item)=>(

<div

key={item.id}

className="bg-[#0f172a]
p-6
rounded-3xl"

>

<h3

className="text-2xl
font-bold"

>

{item.name}

</h3>

<p>

{item.phone}

</p>

<p

className={

item.status==="Available"

?

"text-green-400"

:

"text-gray-400"

}

>

{item.status}

</p>

</div>

)

)

}

</div>

</div>

</div>

</PageLayout>

);

}

export default Volunteer;