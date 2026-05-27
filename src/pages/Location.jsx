import { useState } from "react";
import PageLayout from "../components/PageLayout";

function Location() {

const [location,setLocation]=useState(null);

const getLocation=()=>{

if(!navigator.geolocation){

alert("Geolocation not supported");

return;

}

navigator.geolocation.getCurrentPosition(

(position)=>{

setLocation({

lat:position.coords.latitude,

lng:position.coords.longitude

});

},

()=>{

alert("Location access denied");

}

);

};

return(

<PageLayout

title="GPS Tracking"

subtitle="Access accurate live location."

>

<div className="max-w-5xl">

<button

onClick={getLocation}

className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-2xl font-bold text-lg"

>

Get Live Location

</button>

{

location && (

<div className="mt-8">

<div className="bg-[#0f172a] p-8 rounded-3xl border border-gray-800">

<h2 className="text-3xl font-black mb-6">

Your Coordinates

</h2>

<p className="text-lg">

Latitude:

<span className="text-pink-400 ml-2">

{location.lat}

</span>

</p>

<p className="text-lg mt-2">

Longitude:

<span className="text-pink-400 ml-2">

{location.lng}

</span>

</p>

</div>

<div className="mt-8 bg-[#0f172a] p-4 rounded-3xl border border-gray-800">

<h2 className="text-3xl font-black mb-5">

Live GPS Map

</h2>

<iframe

title="Google Map"

width="100%"

height="500"

className="rounded-2xl"

loading="lazy"

src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=16&output=embed`}

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

export default Location;