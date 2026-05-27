import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";
import Contacts from "../pages/Contacts";
import Emergency from "../pages/Emergency";
import NGOs from "../pages/NGOs";
import Alerts from "../pages/Alerts";
import Location from "../pages/Location";
import Community from "../pages/Community";
import History from "../pages/History";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Notifications from "../pages/Notifications";
import NearbyHelp from "../pages/NearbyHelp";
import Volunteer from "../pages/Volunteer";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {

  return (

    <Routes>

      {/* PUBLIC ROUTES */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* PROTECTED ROUTES */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/contacts"
        element={
          <ProtectedRoute>
            <Contacts />
          </ProtectedRoute>
        }
      />

      <Route
        path="/emergency"
        element={
          <ProtectedRoute>
            <Emergency />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ngos"
        element={
          <ProtectedRoute>
            <NGOs />
          </ProtectedRoute>
        }
      />

      <Route
        path="/alerts"
        element={
          <ProtectedRoute>
            <Alerts />
          </ProtectedRoute>
        }
      />

      <Route
        path="/location"
        element={
          <ProtectedRoute>
            <Location />
          </ProtectedRoute>
        }
      />

      <Route
        path="/community"
        element={
          <ProtectedRoute>
            <Community />
          </ProtectedRoute>
        }
      />

      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nearby-help"
        element={
          <ProtectedRoute>
            <NearbyHelp />
          </ProtectedRoute>
        }
      />

      <Route
        path="/volunteer"
        element={
          <ProtectedRoute>
            <Volunteer />
          </ProtectedRoute>
        }
      />

      {/* INVALID URL */}

      <Route
        path="*"
        element={<Home />}
      />

    </Routes>

  );

}

export default AppRoutes;