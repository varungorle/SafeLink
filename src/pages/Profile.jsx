import { auth } from "../firebase/config";

import PageLayout from "../components/PageLayout";

function Profile(){

return(

<PageLayout

title="Profile"

subtitle="Personal information"

>

<div className="max-w-3xl">

<div className="bg-[#0f172a] p-10 rounded-3xl">

<div className="flex items-center gap-6">

<div

className="w-24 h-24 rounded-full bg-pink-500 flex items-center justify-center text-4xl"

>

{

auth.currentUser?.displayName

?.charAt(0)

||

"U"

}

</div>

<div>

<h2 className="text-3xl font-black">

{

auth.currentUser?.displayName

||

"User"

}

</h2>

<p className="text-gray-400">

{

auth.currentUser?.email

}

</p>

</div>

</div>

</div>

</div>

</PageLayout>

);

}

export default Profile;