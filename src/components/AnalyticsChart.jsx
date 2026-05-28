import {
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
PieChart,
Pie,
Cell,
LineChart,
Line
} from "recharts";

function AnalyticsChart(){

const emergencyData=[

{
day:"Mon",
alerts:4
},

{
day:"Tue",
alerts:7
},

{
day:"Wed",
alerts:5
},

{
day:"Thu",
alerts:9
},

{
day:"Fri",
alerts:6
},

{
day:"Sat",
alerts:11
},

{
day:"Sun",
alerts:8
}

];

const volunteerData=[

{
name:"Available",
value:18
},

{
name:"Offline",
value:7
}

];

const COLORS=[

"#ec4899",
"#334155"

];

const communityData=[

{
month:"Jan",
reports:12
},

{
month:"Feb",
reports:18
},

{
month:"Mar",
reports:9
},

{
month:"Apr",
reports:21
},

{
month:"May",
reports:15
}

];

return(

<div className="grid lg:grid-cols-2 gap-8 mt-10">

{/* BAR CHART */}

<div className="bg-[#0f172a] p-8 rounded-[35px] border border-gray-800">

<h2 className="text-3xl font-black mb-8">

Weekly Emergency Alerts

</h2>

<div className="h-[320px]">

<ResponsiveContainer width="100%" height="100%">

<BarChart data={emergencyData}>

<CartesianGrid strokeDasharray="3 3" stroke="#334155"/>

<XAxis dataKey="day" stroke="#fff"/>

<YAxis stroke="#fff"/>

<Tooltip/>

<Bar dataKey="alerts" fill="#ec4899"/>

</BarChart>

</ResponsiveContainer>

</div>

</div>

{/* PIE CHART */}

<div className="bg-[#0f172a] p-8 rounded-[35px] border border-gray-800">

<h2 className="text-3xl font-black mb-8">

Volunteer Availability

</h2>

<div className="h-[320px]">

<ResponsiveContainer width="100%" height="100%">

<PieChart>

<Pie

data={volunteerData}

dataKey="value"

outerRadius={110}

label

>

{

volunteerData.map((entry,index)=>(

<Cell

key={index}

fill={COLORS[index % COLORS.length]}

/>

))

}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

</div>

{/* LINE CHART */}

<div className="bg-[#0f172a] p-8 rounded-[35px] border border-gray-800 lg:col-span-2">

<h2 className="text-3xl font-black mb-8">

Community Reports Analytics

</h2>

<div className="h-[350px]">

<ResponsiveContainer width="100%" height="100%">

<LineChart data={communityData}>

<CartesianGrid strokeDasharray="3 3" stroke="#334155"/>

<XAxis dataKey="month" stroke="#fff"/>

<YAxis stroke="#fff"/>

<Tooltip/>

<Line

type="monotone"

dataKey="reports"

stroke="#ec4899"

strokeWidth={4}

/>

</LineChart>

</ResponsiveContainer>

</div>

</div>

</div>

);

}

export default AnalyticsChart;