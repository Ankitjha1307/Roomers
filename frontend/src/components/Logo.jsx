import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };
  
  return (
    <button 
      onClick={toTop} 
      className="flex items-center gap-2 text-2xl font-bold text-purple-deep hover:scale-105 transition-transform"
    >
      <FontAwesomeIcon icon={faHome} className="text-gold" />
      <span className="font-playfair">ROOMERS</span>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold to-gold-deep transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
    </button>
  );
}