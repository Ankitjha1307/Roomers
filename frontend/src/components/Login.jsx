import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:8000/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (!response.ok) {
    alert(data.message);
    return;
  }

  localStorage.setItem("token", data.data.token);
  navigate("/dashboard");
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="card-glass">
            <h2 className="text-3xl font-playfair font-bold text-purple-deep text-center mb-8">
              Welcome Back
            </h2>
            
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label className="block text-purple-main font-semibold mb-2 flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gold" />
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control-custom"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-purple-main font-semibold mb-2 flex items-center gap-2">
                  <FontAwesomeIcon icon={faLock} className="text-gold" />
                  Password
                </label>
                <input
                  type="password"
                  className="form-control-custom"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <div className="mb-8 flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-gold rounded border-purple-light focus:ring-gold"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="ml-2 text-purple-muted" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 rounded-full bg-gradient-gold text-purple-dark font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mb-6"
              >
                <FontAwesomeIcon icon={faSignInAlt} />
                <span>Login</span>
              </button>
              
              <div className="text-center">
                <Link 
                  to="/forgot-password"
                  className="text-gold hover:text-gold-deep font-medium transition-colors"
                >
                  Forgot Password?
                </Link>
                <p className="mt-4 text-purple-muted">
                  Don't have an account?{" "}
                  <Link 
                    to="/signup" 
                    className="text-gold hover:text-gold-deep font-medium transition-colors"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}