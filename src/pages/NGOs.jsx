import PageLayout from "../components/PageLayout";

function NGOs(){

const ngos=[

{
name:"Women Safety NGO",
phone:"9876543210"
},

{
name:"Child Rescue NGO",
phone:"9988776655"
},

{
name:"Disaster Help NGO",
phone:"9012345678"
}

];

return(

<PageLayout

title="NGO Assistance"

subtitle="Connect with trusted support organizations."

>

<div className="grid md:grid-cols-3 gap-8">

{

ngos.map(

(ngo,index)=>(

<div

key={index}

className="bg-[#0f172a] p-8 rounded-3xl"

>

<h2 className="text-2xl font-black">

{ngo.name}

</h2>

<p className="mt-3">

{ngo.phone}

</p>

<a href={`tel:${ngo.phone}`}>

<button

className="mt-6 w-full bg-green-500 py-3 rounded-xl"

>

Contact NGO

</button>

</a>

</div>

)

)

}

</div>

</PageLayout>

);

}

export default NGOs;