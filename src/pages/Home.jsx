import { Link } from "react-router-dom";

import {
  ShieldAlert,
  HeartHandshake,
  Activity,
  ArrowRight,
} from "lucide-react";

function Home() {

  const handleSOS = () => {

    navigator.geolocation.getCurrentPosition(

      (position) => {

        const latitude =
          position.coords.latitude;

        const longitude =
          position.coords.longitude;

        const location =
          `https://maps.google.com/?q=${latitude},${longitude}`;

        alert(

`🚨 SOS ACTIVATED

Location Shared Successfully

${location}

`

        );

      },

      () => {

        alert(
          "Location Permission Denied"
        );

      }

    );

  };

  return (

    <div className="min-h-screen bg-[#020617] text-white">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-gray-800">

        {/* LOGO */}

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-pink-500 flex items-center justify-center text-2xl font-black">

            S

          </div>

          <h1 className="text-4xl font-black">

            Safe

            <span className="text-pink-500">

              Link

            </span>

          </h1>

        </div>

        {/* NAV LINKS */}

        <div className="hidden md:flex items-center gap-8 text-lg font-semibold">

          <Link
            to="/emergency"
            className="hover:text-pink-400 transition"
          >

            Emergency

          </Link>

          <Link
            to="/ngos"
            className="hover:text-pink-400 transition"
          >

            NGOs

          </Link>

          <Link
            to="/contacts"
            className="hover:text-pink-400 transition"
          >

            Contacts

          </Link>

        </div>

        {/* AUTH */}

        <div className="flex items-center gap-4">

          <Link to="/login">

            <button className="px-6 py-3 rounded-2xl border border-gray-700 hover:border-pink-500 transition">

              Login

            </button>

          </Link>

          <Link to="/register">

            <button className="px-6 py-3 rounded-2xl bg-pink-500 hover:bg-pink-600 transition font-bold">

              Register

            </button>

          </Link>

        </div>

      </nav>

      {/* HERO */}

      <section className="px-6 md:px-12 py-20 text-center">

        <h1 className="text-6xl md:text-8xl font-black leading-tight">

          Smart Community

          <br/>

          <span className="text-pink-500">

            Emergency Platform

          </span>

        </h1>

        <p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto leading-relaxed">

          SafeLink helps communities stay protected through
          emergency alerts, NGO support, SOS systems,
          and real-time location safety services.

        </p>

        {/* SOS BUTTON */}

        <div className="flex justify-center mt-14">

          <button

            onClick={handleSOS}

            className="

            w-52
            h-52

            rounded-full

            bg-red-600

            hover:bg-red-700

            border-[10px]

            border-red-400

            flex

            flex-col

            justify-center

            items-center

            shadow-[0_0_70px_rgba(255,0,0,0.55)]

            hover:scale-105

            duration-300

            "

          >

            <ShieldAlert size={65}/>

            <span className="text-5xl font-black mt-2">

              SOS

            </span>

          </button>

        </div>

        {/* BUTTONS */}

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-14">

          <Link to="/register">

            <button className="bg-pink-500 hover:bg-pink-600 transition px-10 py-5 rounded-2xl text-xl font-bold flex items-center gap-3">

              Get Started

              <ArrowRight size={24}/>

            </button>

          </Link>

          <Link to="/dashboard">

            <button className="border border-gray-700 hover:border-pink-500 transition px-10 py-5 rounded-2xl text-xl font-bold">

              Open Dashboard

            </button>

          </Link>

        </div>

      </section>

      {/* FEATURES */}

      <section className="px-6 md:px-12 pb-20">

        <div className="grid md:grid-cols-3 gap-8">

          {/* ALERTS */}

          <Link to="/alerts">

            <div className="bg-[#0f172a] border border-red-500/20 hover:border-red-500 transition rounded-[35px] p-10 cursor-pointer hover:-translate-y-2 duration-300">

              <ShieldAlert
                size={55}
                className="text-red-400"
              />

              <h2 className="text-3xl font-black mt-8">

                Emergency Alerts

              </h2>

              <p className="text-gray-400 mt-5 text-lg leading-relaxed">

                Receive instant emergency notifications
                and critical community safety updates.

              </p>

            </div>

          </Link>

          {/* NGO */}

          <Link to="/ngos">

            <div className="bg-[#0f172a] border border-green-500/20 hover:border-green-500 transition rounded-[35px] p-10 cursor-pointer hover:-translate-y-2 duration-300">

              <HeartHandshake
                size={55}
                className="text-green-400"
              />

              <h2 className="text-3xl font-black mt-8">

                NGO Assistance

              </h2>

              <p className="text-gray-400 mt-5 text-lg leading-relaxed">

                Connect with trusted NGOs for women safety,
                rescue support and emergency assistance.

              </p>

            </div>

          </Link>

          {/* REAL TIME */}

          <Link to="/location">

            <div className="bg-[#0f172a] border border-pink-500/20 hover:border-pink-500 transition rounded-[35px] p-10 cursor-pointer hover:-translate-y-2 duration-300">

              <Activity
                size={55}
                className="text-pink-400"
              />

              <h2 className="text-3xl font-black mt-8">

                Real-Time Safety

              </h2>

              <p className="text-gray-400 mt-5 text-lg leading-relaxed">

                Share your live GPS location and access
                nearby emergency support instantly.

              </p>

            </div>

          </Link>

        </div>

      </section>

    </div>

  );

}

export default Home;