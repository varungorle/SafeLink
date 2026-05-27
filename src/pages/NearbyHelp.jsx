import { useState } from "react";

import PageLayout from "../components/PageLayout";

import {
Hospital,
Shield,
Ambulance,
Flame
} from "lucide-react";

function NearbyHelp() {

const [location,setLocation]=useState(null);

const [selectedPlace,setSelectedPlace]=
useState("");

const services=[

{
name:"Hospital",
icon:Hospital,
color:"text-red-400",
button:"Find Hospital",
desc:"Nearby hospitals and medical help."
},

{
name:"Police Station",
icon:Shield,
color:"text-blue-400",
button:"Find Police",
desc:"Nearby police stations."
},

{
name:"Ambulance",
icon:Ambulance,
color:"text-green-400",
button:"Find Ambulance",
desc:"Nearby ambulance services."
},

{
name:"Fire Station",
icon:Flame,
color:"text-orange-400",
button:"Find Fire Station",
desc:"Nearby fire emergency support."
}

];

const findService=(place)=>{

navigator.geolocation.getCurrentPosition(

(position)=>{

setLocation({

lat:position.coords.latitude,

lng:position.coords.longitude

});

setSelectedPlace(place);

},

()=>{

alert(

"Location permission denied"

);

}

);

};

return(

<PageLayout

title="Nearby Emergency Help"

subtitle="Locate nearby emergency services."

>

<div className="max-w-7xl mx-auto">

<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

{

services.map((item,index)=>{

const Icon=item.icon;

return(

<div

key={index}

className="bg-[#0f172a]
border
border-gray-800
rounded-[35px]
p-8
flex
flex-col
items-center
text-center
min-h-[320px]
hover:border-pink-500
transition"

>

<Icon

size={60}

className={item.color}

/>

<h2 className="text-3xl font-black mt-6">

{item.name}

</h2>

<p className="text-gray-400 mt-5 flex-grow">

{item.desc}

</p>

<button

onClick={()=>

findService(item.name)

}

className="mt-8 bg-pink-500 hover:bg-pink-600 w-full py-4 rounded-2xl font-bold"

>

{item.button}

</button>

</div>

);

})

}

</div>

{

location && selectedPlace &&(

<div className="mt-12">

<div className="bg-[#0f172a] p-6 rounded-3xl border border-gray-800 mb-6 text-center">

<h2 className="text-3xl font-black">

{selectedPlace}

Nearby Location

</h2>

<p className="text-gray-400 mt-4">

Latitude:

{location.lat}

</p>

<p className="text-gray-400">

Longitude:

{location.lng}

</p>

</div>

<div className="bg-[#0f172a] p-5 rounded-3xl border border-gray-800">

<iframe

title="Nearby Map"

width="100%"

height="500"

className="rounded-3xl"

loading="lazy"

src={`https://maps.google.com/maps?q=${selectedPlace}+near+${location.lat},${location.lng}&z=14&output=embed`}

>

</iframe>

</div>

</div>

)

}

</div>

</PageLayout>

);

}

export default NearbyHelp;