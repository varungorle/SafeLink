import { useState } from "react";

import PageLayout from "../components/PageLayout";

function Settings(){

const [theme,setTheme]=useState("Dark");

return(

<PageLayout

title="Settings"

subtitle="Manage preferences"

>

<div className="bg-[#0f172a] p-10 rounded-3xl max-w-3xl">

<div className="flex justify-between">

<h2>

Theme

</h2>

<button

onClick={()=>

setTheme(

theme==="Dark"

?

"Light"

:

"Dark"

)

}

className="bg-pink-500 px-5 py-2 rounded-xl"

>

{theme}

</button>

</div>

</div>

</PageLayout>

);

}

export default Settings;