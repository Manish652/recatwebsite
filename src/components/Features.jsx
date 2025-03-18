import React from 'react'

function Features() {
    return (
      <section className="py-20 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "World-Class Faculty", description: "Learn from the best in the industry with decades of experience." },
              { title: "State-of-the-Art Facilities", description: "Access cutting-edge labs, libraries, and research centers." },
              { title: "Global Opportunities", description: "Study abroad programs and international collaborations." },
            ].map((feature, index) => (
              <div key={index} className="bg-black/30 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  

export default Features