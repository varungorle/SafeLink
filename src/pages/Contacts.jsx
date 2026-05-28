import { useEffect, useState } from "react";

import PageLayout from "../components/PageLayout";

import {
Phone,
MessageCircle,
Plus
} from "lucide-react";

import {
collection,
addDoc,
getDocs
} from "firebase/firestore";

import {
db,
auth
} from "../firebase/config";

function Contacts() {

const emergencyContacts = [

{
name: "Police",
phone: "100"
},

{
name: "Ambulance",
phone: "108"
},

{
name: "Fire Station",
phone: "101"
},

{
name: "Women Helpline",
phone: "1091"
},

{
name: "Disaster Management",
phone: "1070"
},

{
name: "Cyber Crime",
phone: "1930"
},

{
name: "Child Helpline",
phone: "1098"
}

];

const [contacts, setContacts] =
useState(emergencyContacts);

const [name, setName] =
useState("");

const [phone, setPhone] =
useState("");

useEffect(() => {

loadContacts();

}, []);

const loadContacts = async () => {

try {

const snapshot =
await getDocs(
collection(db, "contacts")
);

const firestoreContacts =
snapshot.docs
.map((doc) => ({
id: doc.id,
...doc.data()
}))

.filter(
(contact) =>

contact.name &&
contact.phone &&
contact.name.trim() !== "" &&
contact.phone.trim() !== ""
);

setContacts([

...emergencyContacts,

...firestoreContacts

]);

} catch (error) {

console.log(error);

}

};

const addContact = async () => {

if (!name || !phone) {

alert("Fill all fields");

return;

}

try {

const newContact = {

name: name.trim(),

phone: phone.trim(),

userId:
auth.currentUser?.uid || "",

createdAt:
new Date()

};

await addDoc(

collection(db, "contacts"),

newContact

);

setContacts((prev) => [

...prev,

newContact

]);

setName("");

setPhone("");

alert("Contact Saved");

} catch (error) {

console.log(error);

alert("Failed to save contact");

}

};

const makeCall = (number) => {

window.location.href = `tel:${number}`;

};

const sendMessage = (number) => {

navigator.geolocation.getCurrentPosition(

(position) => {

const lat =
position.coords.latitude;

const lng =
position.coords.longitude;

const message =

`🚨 Emergency Help Needed 🚨

My Live Location:
https://maps.google.com/?q=${lat},${lng}

Please help immediately.`;

window.open(

`https://wa.me/${number}?text=${encodeURIComponent(message)}`

);

},

() => {

alert("Location access denied");

}

);

};

return (

<PageLayout

title="Emergency Contacts"

subtitle="Emergency services and personal safety contacts."

>

<div className="w-full max-w-7xl mx-auto px-4 md:px-6">

{/* FORM */}

<div className="flex justify-center mb-14">

<div className="w-full max-w-2xl bg-[#0f172a] border border-gray-800 rounded-[35px] p-8 md:p-10">

<h2 className="text-3xl md:text-4xl font-black text-center mb-8">

Add Personal Emergency Contact

</h2>

<div className="space-y-5">

<input

value={name}

onChange={(e)=>
setName(e.target.value)
}

placeholder="Contact Name"

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

<button

onClick={addContact}

className="w-full bg-pink-500 hover:bg-pink-600 transition py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3"

>

<Plus size={22}/>

Save Contact

</button>

</div>

</div>

</div>

{/* CONTACTS GRID */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

{

contacts.map((contact,index)=>(

<div

key={index}

className="bg-[#0f172a] border border-gray-800 hover:border-pink-500 transition rounded-[35px] p-8 flex flex-col justify-between min-h-[280px]"

>

<div>

<h2 className="text-3xl font-black break-words">

{contact.name}

</h2>

<p className="text-gray-400 text-xl mt-4">

{contact.phone}

</p>

</div>

<div className="flex gap-4 mt-10">

<button

onClick={()=>
makeCall(contact.phone)
}

className="flex-1 bg-green-500 hover:bg-green-600 transition py-4 rounded-2xl font-bold flex items-center justify-center gap-2"

>

<Phone size={20}/>

Call

</button>

<button

onClick={()=>
sendMessage(contact.phone)
}

className="flex-1 bg-blue-500 hover:bg-blue-600 transition py-4 rounded-2xl font-bold flex items-center justify-center gap-2"

>

<MessageCircle size={20}/>

Message

</button>

</div>

</div>

))

}

</div>

</div>

</PageLayout>

);

}

export default Contacts;