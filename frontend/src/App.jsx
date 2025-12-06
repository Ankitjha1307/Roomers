import { Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Preferences from "./components/Preferences";

export default function App() {
  return (
    <div className="font-montserrat">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/find-roommates" element={<Preferences />} />
        <Route path="/browse-rooms" element={<Preferences />} />
        <Route path="/know-more" element={
          <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 flex items-center justify-center">
            <div className="container mx-auto px-4 py-12 text-center">
              <h1 className="text-4xl font-playfair font-bold text-purple-deep mb-6">
                Know More About Roomers
              </h1>
              <p className="text-xl text-purple-muted max-w-2xl mx-auto">
                Roomers helps you find perfect roommates based on lifestyle compatibility, 
                preferences, and shared interests. Our intelligent matching system ensures 
                you find your ideal living situation.
              </p>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}