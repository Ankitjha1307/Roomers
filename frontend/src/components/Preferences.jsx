import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Preferences() {
  const [preferences, setPreferences] = useState({
    gender: 'No Preference',
    age: '',
    occupation: 'No Preference',
    email: '',
    smoking: 'No Preference',
    pets: 'No Preference',
    cleanliness: 'No Preference',
    habits: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPreferences(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Preferences saved:', preferences);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-purple">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-white text-center mb-10">
            Set Your Roommate Preferences
          </h2>
          
          <div className="bg-purple-dark/80 backdrop-blur-lg border border-gold/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gold-light font-semibold mb-2">
                    Preferred Gender
                  </label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    id="gender"
                    value={preferences.gender}
                    onChange={handleChange}
                  >
                    <option className="text-purple-dark">No Preference</option>
                    <option className="text-purple-dark">Male</option>
                    <option className="text-purple-dark">Female</option>
                    <option className="text-purple-dark">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gold-light font-semibold mb-2">
                    Age Range
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    id="age"
                    value={preferences.age}
                    onChange={handleChange}
                    placeholder="e.g., 20-30"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gold-light font-semibold mb-2">
                    Occupation
                  </label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    id="occupation"
                    value={preferences.occupation}
                    onChange={handleChange}
                  >
                    <option className="text-purple-dark">No Preference</option>
                    <option className="text-purple-dark">Student</option>
                    <option className="text-purple-dark">Professional</option>
                    <option className="text-purple-dark">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gold-light font-semibold mb-2">
                    Your E-Mail ID
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    id="email"
                    value={preferences.email}
                    onChange={handleChange}
                    placeholder="e.g., ursfaith34@gmail.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gold-light font-semibold mb-2">
                    Smoking Preference
                  </label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    id="smoking"
                    value={preferences.smoking}
                    onChange={handleChange}
                  >
                    <option className="text-purple-dark">No Preference</option>
                    <option className="text-purple-dark">Non-Smoker</option>
                    <option className="text-purple-dark">Smoker</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gold-light font-semibold mb-2">
                    Pets
                  </label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    id="pets"
                    value={preferences.pets}
                    onChange={handleChange}
                  >
                    <option className="text-purple-dark">No Preference</option>
                    <option className="text-purple-dark">Okay with Pets</option>
                    <option className="text-purple-dark">Not Okay with Pets</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gold-light font-semibold mb-2">
                  Cleanliness Level
                </label>
                <select 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  id="cleanliness"
                  value={preferences.cleanliness}
                  onChange={handleChange}
                >
                  <option className="text-purple-dark">No Preference</option>
                  <option className="text-purple-dark">Very Neat</option>
                  <option className="text-purple-dark">Average</option>
                  <option className="text-purple-dark">Messy</option>
                </select>
              </div>
              
              <div className="mb-8">
                <label className="block text-gold-light font-semibold mb-2">
                  Lifestyle & Habits
                </label>
                <textarea 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  id="habits" 
                  rows="4"
                  value={preferences.habits}
                  onChange={handleChange}
                  placeholder="Add details like sleep schedule, diet, etc."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="px-10 py-3 rounded-full bg-gradient-gold text-purple-dark font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
                >
                  <FontAwesomeIcon icon={faSave} />
                  <span>Save Preferences</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}