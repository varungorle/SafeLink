import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800 shadow-xl">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

        {/* LOGO */}

        <Link to="/" className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-pink-500 flex items-center justify-center text-2xl font-bold">

            S

          </div>

          <h1 className="text-3xl font-black text-white">

            Safe<span className="text-pink-500">Link</span>

          </h1>

        </Link>

        {/* DESKTOP MENU */}

        <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

          <Link to="/">
            <li className="hover:text-pink-500 transition cursor-pointer">
              Home
            </li>
          </Link>

          <li className="hover:text-pink-500 transition cursor-pointer">
            Emergency
          </li>

          <li className="hover:text-pink-500 transition cursor-pointer">
            NGOs
          </li>

          <Link to="/dashboard">
            <li className="hover:text-pink-500 transition cursor-pointer">
              Dashboard
            </li>
          </Link>

          <li className="hover:text-pink-500 transition cursor-pointer">
            Contact
          </li>

        </ul>

        {/* RIGHT BUTTONS */}

        <div className="hidden md:flex items-center gap-4">

          <Link to="/login">

            <button className="border border-pink-500 px-5 py-2 rounded-xl hover:bg-pink-500 transition">

              Login

            </button>

          </Link>

          <Link to="/register">

            <button className="bg-pink-500 hover:bg-pink-600 transition px-5 py-2 rounded-xl font-semibold shadow-lg shadow-pink-500/30">

              Signup

            </button>

          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? "✕" : "☰"}

        </button>

      </div>

      {/* MOBILE MENU */}

      {

        menuOpen && (

          <div className="md:hidden bg-[#0f172a] border-t border-gray-800 px-6 py-6">

            <ul className="flex flex-col gap-6 text-lg text-gray-300">

              <Link to="/">
                <li className="hover:text-pink-500 transition">
                  Home
                </li>
              </Link>

              <li className="hover:text-pink-500 transition">
                Emergency
              </li>

              <li className="hover:text-pink-500 transition">
                NGOs
              </li>

              <Link to="/dashboard">
                <li className="hover:text-pink-500 transition">
                  Dashboard
                </li>
              </Link>

              <li className="hover:text-pink-500 transition">
                Contact
              </li>

              <Link to="/login">
                <li className="hover:text-pink-500 transition">
                  Login
                </li>
              </Link>

              <Link to="/register">
                <li className="hover:text-pink-500 transition">
                  Signup
                </li>
              </Link>

            </ul>

          </div>

        )

      }

    </nav>

  );
}

export default Navbar;