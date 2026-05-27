import { auth } from "../firebase/config";

import { saveEmergency }

from "../services/emergencyService";

function SOSModal({

closeModal

}){

const activateSOS=()=>{

navigator.geolocation.getCurrentPosition(

async(position)=>{

const success=

await saveEmergency({

userId:

auth.currentUser?.uid,

userName:

auth.currentUser?.displayName ||

"User",

email:

auth.currentUser?.email,

latitude:

position.coords.latitude,

longitude:

position.coords.longitude

});

if(success){

alert(

"Emergency Alert Sent Successfully"

);

closeModal();

}

else{

alert(

"Failed to send emergency"

);

}

},

()=>{

alert(

"Location permission denied"

);

}

);

};

return(

<div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

<div className="bg-[#0f172a] p-10 rounded-[40px] w-[500px] border border-red-500">

<div className="flex justify-center">

<div className="w-28 h-28 bg-red-600 rounded-full flex items-center justify-center text-5xl">

!

</div>

</div>

<h1 className="text-5xl font-black text-center mt-8">

Emergency SOS

</h1>

<p className="text-gray-400 text-center mt-4">

Your live location will be shared.

</p>

<button

onClick={activateSOS}

className="mt-8 bg-red-600 w-full py-5 rounded-2xl text-xl font-bold"

>

Send Emergency Alert

</button>

<button

onClick={closeModal}

className="mt-5 border border-gray-700 w-full py-5 rounded-2xl"

>

Cancel

</button>

</div>

</div>

);

}

export default SOSModal;