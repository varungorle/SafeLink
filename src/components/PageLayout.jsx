import Sidebar from "./Sidebar";

function PageLayout({ title, subtitle, children }) {

return (

<div className="flex min-h-screen bg-[#020617] text-white">

<Sidebar />

<div className="flex-1 overflow-y-auto">

<div className="max-w-7xl mx-auto px-8 md:px-12 py-10">

{/* HEADER */}

<div className="mb-12">

<h1 className="text-5xl md:text-6xl font-black">

{title}

</h1>

{subtitle && (

<p className="text-gray-400 text-lg mt-3">

{subtitle}

</p>

)}

</div>

{/* PAGE CONTENT */}

<div>

{children}

</div>

</div>

</div>

</div>

);

}

export default PageLayout;