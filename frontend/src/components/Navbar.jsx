import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const navigate = useNavigate();
  
  return (
    <nav className="navbar-glass sticky top-0 z-50 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate("/know-more")}
            className="px-6 py-2 rounded-full border-2 border-purple-main text-purple-main font-semibold hover:bg-purple-main hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span>Know More</span>
          </button>
          
          <button 
            onClick={() => navigate("/login")}
            className="px-6 py-2 rounded-full bg-gradient-gold text-purple-dark font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faUser} />
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
}