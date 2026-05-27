function Card({

title,

value

}){

return(

<div className="bg-[#0f172a] p-8 rounded-3xl border border-gray-800">

<p className="text-gray-400">

{title}

</p>

<h2 className="text-5xl font-black text-pink-500 mt-5">

{value}

</h2>

</div>

);

}

export default Card;