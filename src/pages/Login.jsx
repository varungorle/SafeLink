import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import toast from "react-hot-toast";

function Login(){

const navigate=useNavigate();

const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const handleLogin=async(e)=>{

e.preventDefault();

try{

await signInWithEmailAndPassword(
auth,
email,
password
);

toast.success("Login Successful");

navigate("/dashboard");

}catch{

toast.error("Invalid Email or Password");

}

};

return(

<div className="min-h-screen bg-[#020617] flex justify-center items-center px-6">

<div className="bg-[#0f172a] p-10 rounded-[35px] border border-gray-800 w-full max-w-md">

<h1 className="text-white text-5xl font-black text-center">

Login

</h1>

<form
onSubmit={handleLogin}
className="space-y-5 mt-8"
>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="w-full bg-[#1e293b] p-4 rounded-2xl text-white"

required

/>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="w-full bg-[#1e293b] p-4 rounded-2xl text-white"

required

/>

<button

className="w-full bg-pink-500 py-4 rounded-2xl font-bold"

>

Login

</button>

</form>

<p className="text-gray-400 mt-6 text-center">

No account?

<Link
to="/register"
className="text-pink-500 ml-2"
>

Register

</Link>

</p>

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

export default Login;