import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!formData.agreeTerms) {
      alert("You must agree to the terms and conditions");
      return;
    }
    
    console.log("Signup data:", formData);
    navigate("/preferences");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="card-glass">
            <h2 className="text-3xl font-playfair font-bold text-purple-deep text-center mb-8">
              Create Your Account
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-purple-main font-semibold mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faUser} className="text-gold" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control-custom"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-purple-main font-semibold mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gold" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control-custom"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-purple-main font-semibold mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faLock} className="text-gold" />
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control-custom"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-purple-main font-semibold mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faLock} className="text-gold" />
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control-custom"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-8 flex items-start">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-gold rounded border-purple-light focus:ring-gold mt-1"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
                <label className="ml-2 text-purple-muted" htmlFor="agreeTerms">
                  I agree to the{" "}
                  <a href="#" className="text-gold hover:text-gold-deep font-medium">
                    Terms and Conditions
                  </a>
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 rounded-full bg-gradient-gold text-purple-dark font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mb-6"
              >
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Create Account</span>
              </button>
              
              <div className="text-center">
                <p className="text-purple-muted">
                  Already have an account?{" "}
                  <Link 
                    to="/login" 
                    className="text-gold hover:text-gold-deep font-medium transition-colors"
                  >
                    Login
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