import { useState } from "react";

import {
createUserWithEmailAndPassword,
updateProfile
} from "firebase/auth";

import { auth } from "../firebase/config";

import { Link,useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

function Register(){

const navigate=useNavigate();

const[name,setName]=useState("");

const[email,setEmail]=useState("");

const[password,setPassword]=useState("");

const register=async(e)=>{

e.preventDefault();

try{

const user=

await createUserWithEmailAndPassword(

auth,
email,
password

);

await updateProfile(

user.user,

{

displayName:name

}

);

toast.success("Account Created");

navigate("/dashboard");

}catch{

toast.error("Registration Failed");

}

};

return(

<div className="min-h-screen bg-[#020617] flex justify-center items-center">

<div className="bg-[#0f172a] p-10 rounded-[35px] w-[450px]">

<h1 className="text-5xl text-white font-black text-center">

Register

</h1>

<form
onSubmit={register}
className="space-y-5 mt-8"
>

<input

placeholder="Name"

value={name}

onChange={(e)=>setName(e.target.value)}

className="w-full p-4 bg-[#1e293b] rounded-2xl"

required

/>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="w-full p-4 bg-[#1e293b] rounded-2xl"

required

/>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="w-full p-4 bg-[#1e293b] rounded-2xl"

required

/>

<button

className="w-full bg-pink-500 py-4 rounded-2xl"

>

Register

</button>

</form>

<Link
to="/"
className="block text-center mt-6 text-gray-500"
>

Back Home

</Link>

</div>

</div>

);

}

export default Register;