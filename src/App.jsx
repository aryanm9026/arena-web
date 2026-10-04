import { Routes, Route, Navigate, Link } from "react-router-dom";
import { useAuth } from "./auth/AuthContext.jsx";
import Login from "./pages/Login.jsx";
import Events from "./pages/Events.jsx";
import Profile from "./pages/Profile.jsx";

// TODO: redirect to /login when not authenticated.
function Protected({ children }) {
  const { isLoggedIn } = useAuth();
  return children; // replace with a real guard
}
export default function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: 16, padding: 12 }}>
        <Link to="/events">Events</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/events" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/events"
          element={
            <Protected>
              <Events />
            </Protected>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
      </Routes>
    </>
  );
}
