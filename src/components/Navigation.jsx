import React from 'react'

function Navigation() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-30 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="text-white font-bold text-2xl flex items-center">
            <div className="w-10 h-10 rounded-full bg-indigo-600 mr-3 flex items-center justify-center">
              UN
            </div>
            University Name
          </div>
          <ul className="hidden md:flex space-x-8">
            {["Home", "About", "Programs", "Campus", "Admissions", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-white hover:text-indigo-300 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }

export default Navigation