import {

LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
CartesianGrid

} from "recharts";

function AnalyticsChart(){

const data=[

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
alerts:3
},

{
day:"Thu",
alerts:9
},

{
day:"Fri",
alerts:5
},

{
day:"Sat",
alerts:11
},

{
day:"Sun",
alerts:6
}

];

return(

<div className="bg-[#0f172a] border border-gray-800 rounded-[35px] p-8">

<h2 className="text-3xl font-black mb-8">

Emergency Analytics

</h2>

<div className="w-full h-[350px]">

<ResponsiveContainer>

<LineChart data={data}>

<CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

<XAxis dataKey="day" stroke="#94a3b8" />

<YAxis stroke="#94a3b8" />

<Tooltip />

<Line

type="monotone"

dataKey="alerts"

stroke="#ec4899"

strokeWidth={4}

/>

</LineChart>

</ResponsiveContainer>

</div>

</div>

);

}

export default AnalyticsChart;