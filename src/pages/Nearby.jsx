import Sidebar from "../components/Sidebar";

import {
  MapPin,
  Hospital,
  Shield,
} from "lucide-react";

function Nearby() {

  return (

    <div className="flex bg-[#020617] text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8 md:p-10">

        <h1 className="text-5xl font-black">

          Nearby
          <span className="text-green-400"> Help</span>

        </h1>

        <p className="text-gray-400 mt-4 text-lg">

          Find nearby hospitals, police stations, and support.

        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">

          <div className="bg-[#0f172a] border border-green-500/30 rounded-3xl p-8">

            <Hospital
              size={45}
              className="text-green-400"
            />

            <h2 className="text-2xl font-bold mt-6">

              City Hospital

            </h2>

            <p className="text-gray-400 mt-4">

              2.4 KM Away

            </p>

          </div>

          <div className="bg-[#0f172a] border border-blue-500/30 rounded-3xl p-8">

            <Shield
              size={45}
              className="text-blue-400"
            />

            <h2 className="text-2xl font-bold mt-6">

              Police Station

            </h2>

            <p className="text-gray-400 mt-4">

              1.2 KM Away

            </p>

          </div>

          <div className="bg-[#0f172a] border border-pink-500/30 rounded-3xl p-8">

            <MapPin
              size={45}
              className="text-pink-400"
            />

            <h2 className="text-2xl font-bold mt-6">

              Women Safety Center

            </h2>

            <p className="text-gray-400 mt-4">

              3.8 KM Away

            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Nearby;