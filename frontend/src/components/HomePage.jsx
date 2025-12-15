import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function HomePage() {
  const navigate = useNavigate();
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="overlay"></div>
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-purple-deep mb-6">
            Sync With the Right Roommate
            <div className="h-1.5 w-32 bg-gradient-to-r from-gold to-gold-deep mx-auto mt-6 rounded-full"></div>
          </h1>
          
          <p className="text-xl text-purple-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover the easiest way to find compatible roommates and cozy rooms tailored to your lifestyle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => navigate("/find-roommates")}
              className="btn-gradient px-8 py-3 text-lg"
            >
              <FontAwesomeIcon icon={faUserFriends} />
              <span>Find Roommates</span>
            </button>
            
            <button 
              onClick={() => navigate("/browse-rooms")}
              className="btn-outline-purple px-8 py-3 text-lg"
            >
              <FontAwesomeIcon icon={faHome} />
              <span>Browse Rooms</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}