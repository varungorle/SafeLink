import { useState } from "react";

import PageLayout from "../components/PageLayout";

import { auth } from "../firebase/config";

function Community(){

const [message,setMessage]=useState("");

const [location,setLocation]=useState("");

const [alertType,setAlertType]=useState("General");

const [posts,setPosts]=useState([]);

const submitPost=()=>{

if(!message || !location){

alert("Fill all fields");

return;

}

const newPost={

id:Date.now(),

userName:

auth.currentUser?.displayName ||

"User",

message,

location,

alertType

};

setPosts(

[newPost,...posts]

);

setMessage("");

setLocation("");

setAlertType("General");

alert("Alert Posted");

};

return(

<PageLayout

title="Community Feed"

subtitle="Community incident reporting."

>

<div className="grid lg:grid-cols-2 gap-8">

{/* LEFT */}

<div className="bg-[#0f172a] p-8 rounded-3xl">

<h2 className="text-3xl font-black mb-6">

Report Alert

</h2>

<select

value={alertType}

onChange={(e)=>

setAlertType(e.target.value)

}

className="w-full p-4 bg-[#020617] rounded-xl mb-4"

>

<option>General</option>

<option>Accident</option>

<option>Weather</option>

<option>Suspicious Activity</option>

<option>Missing Person</option>

</select>

<input

value={location}

onChange={(e)=>

setLocation(e.target.value)

}

placeholder="Area Location"

className="w-full p-4 bg-[#020617] rounded-xl mb-4"

/>

<textarea

rows="5"

value={message}

onChange={(e)=>

setMessage(e.target.value)

}

placeholder="Describe Incident"

className="w-full p-4 bg-[#020617] rounded-xl mb-5"

/>

<button

onClick={submitPost}

className="w-full bg-pink-500 hover:bg-pink-600 py-4 rounded-2xl font-bold"

>

Post Alert

</button>

</div>

{/* RIGHT */}

<div>

<h2 className="text-3xl font-black mb-6">

Community Updates

</h2>

<div className="space-y-5">

{

posts.length===0

?

<div className="bg-[#0f172a] p-6 rounded-3xl">

No community alerts yet.

</div>

:

posts.map((post)=>(

<div

key={post.id}

className="bg-[#0f172a] p-6 rounded-3xl"

>

<h3 className="font-bold text-xl">

{post.alertType}

</h3>

<p className="text-pink-400">

{post.location}

</p>

<p className="mt-3">

{post.message}

</p>

<p className="text-gray-400 mt-3">

By {post.userName}

</p>

</div>

))

}

</div>

</div>

</div>

</PageLayout>

);

}

export default Community;