import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowLeft, faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset requested for:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="card-glass">
            {submitted ? (
              <div className="text-center">
                <div className="mb-6">
                  <FontAwesomeIcon 
                    icon={faCheckCircle} 
                    className="text-gold text-5xl mb-4"
                  />
                  <div className="h-2 w-20 bg-gradient-to-r from-gold to-gold-deep mx-auto rounded-full mb-6"></div>
                </div>
                
                <h3 className="text-2xl font-playfair font-bold text-purple-deep mb-4">
                  Check Your Email
                </h3>
                
                <p className="text-purple-muted mb-8 leading-relaxed">
                  Password reset instructions have been sent to{" "}
                  <span className="font-semibold text-purple-main">{email}</span>.
                  Please check your inbox and follow the instructions to reset your password.
                </p>
                
                <div className="space-y-4">
                  <button 
                    onClick={() => navigate("/login")}
                    className="w-full py-3 rounded-full bg-gradient-gold text-purple-dark font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Back to Login</span>
                  </button>
                  
                  <p className="text-sm text-purple-muted">
                    Didn't receive the email?{" "}
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-gold hover:text-gold-deep font-medium transition-colors"
                    >
                      Try again
                    </button>
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-playfair font-bold text-purple-deep text-center mb-6">
                  Forgot Password
                </h2>
                
                <div className="mb-8">
                  <p className="text-purple-muted text-center leading-relaxed">
                    Enter your email address and we'll send you instructions to reset your password.
                  </p>
                  <div className="h-1 w-16 bg-gradient-to-r from-gold to-gold-deep mx-auto mt-4 rounded-full"></div>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
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
                    <p className="text-sm text-purple-light mt-2">
                      Enter the email associated with your account
                    </p>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-3 rounded-full bg-gradient-gold text-purple-dark font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mb-6"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <span>Send Reset Instructions</span>
                  </button>
                  
                  <div className="text-center">
                    <Link 
                      to="/login"
                      className="text-gold hover:text-gold-deep font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faArrowLeft} />
                      <span>Back to Login</span>
                    </Link>
                    
                    <p className="mt-6 text-purple-muted">
                      Remember your password?{" "}
                      <Link 
                        to="/login" 
                        className="text-gold hover:text-gold-deep font-medium transition-colors"
                      >
                        Login here
                      </Link>
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      
      <div className="hidden md:block absolute top-1/4 left-10 w-20 h-20 rounded-full bg-gold/10 blur-xl"></div>
      <div className="hidden md:block absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-purple-light/10 blur-xl"></div>
    </div>
  );
}