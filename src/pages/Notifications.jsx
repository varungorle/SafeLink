import PageLayout from "../components/PageLayout";

function Notifications(){

const alerts=[

"Heavy Rain Alert",

"Nearby NGO Volunteer Available",

"Community Safety Update",

"Accident Reported Nearby"

];

return(

<PageLayout

title="Notifications"

subtitle="Community safety alerts"

>

<div className="space-y-5">

{

alerts.map(

(alert,index)=>(

<div

key={index}

className="bg-[#0f172a] p-6 rounded-3xl"

>

⚠ {alert}

</div>

)

)

}

</div>

</PageLayout>

);

}

export default Notifications;