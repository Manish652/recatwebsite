import React, { Suspense, useRef, useEffect,useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sparkles, PerspectiveCamera, useGLTF, Environment, Html,Text,useProgress } from '@react-three/drei';
import { motion } from 'framer-motion';
import  Scene  from './newcom/Sence';
import Logo from './newcom/Logo';
const modelPaths = [
  '/3dmodels/robot.glb'
];

modelPaths.forEach(path => {
  useGLTF.preload(path);
});

const Navigation = () => (
  <nav className="flex items-center">
    <ul className="flex space-x-6">
      <li><a href="#" className="text-white hover:text-indigo-300 transition">Home</a></li>
      <li><a href="#" className="text-white hover:text-indigo-300 transition">About</a></li>
      <li><a href="#" className="text-white hover:text-indigo-300 transition">Courses</a></li>
    </ul>
  </nav>
);

const HeroSection = () => {
  const heroMotion = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 } 
    }
  };

  return (
    <motion.div 
      className="w-full max-w-xl" 
      initial="hidden"
      animate="visible"
      variants={heroMotion}
    >
      <h1 className="text-5xl font-bold text-white mb-2">
        Secure <span className="text-purple-400">yours chlid's future</span><br /> 
        with CCLMS
      </h1>
      <p className="text-gray-300 mb-8 max-w-md">
      A Few Words You Have to Know About Our Institute

      The institute is affiliated to the Maulana Abul Kalam Azad University of Technology (formerly known as WBUT, recognised by UGC), with College Code – 340. Since its inception, the institute always focused on imparting value-based quality education. The success of our institute can be seen through our placement records as some of the leading names in the industry have been recruiting students from our institute.
      </p>
      <motion.button 
        className="bg-white text-indigo-900 px-6 py-3 rounded-full font-medium hover:bg-indigo-100 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Admission now
      </motion.button>
    </motion.div>
  );
};

const App = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-indigo-900 min-h-screen overflow-hidden relative">
      <div className="fixed inset-0">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[6, -1, 2]} fov={50} />
          <Scene />
        </Canvas>
      </div>

      <div className="relative z-10">
        <header className="container mx-auto px-6 py-6 flex justify-between items-center">
          <Logo />
          <motion.div className="flex space-x-4 items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Navigation />
            <motion.button 
              className="bg-white bg-opacity-10 text-zinc-900 px-4 py-2 rounded-lg hover:bg-opacity-20 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
            <motion.button 
              className="bg-white text-indigo-900 px-4 py-2 rounded-lg hover:bg-indigo-100 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create Account
            </motion.button>
          </motion.div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <HeroSection />

            <motion.div 
              className="w-full max-w-xl h-96 md:h-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}

            />
          </motion.div>
        </main>
      </div>

      <motion.div 
        className="absolute top-48 right-12 max-w-xs cursor-pointer"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setClicked(!clicked)}
      >
        <motion.div 
          className="bg-blue-900 bg-opacity-30 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg"
          animate={{ rotate: clicked ? 360 : 0, scale: clicked ? 1.2 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-white text-2xl font-bold mb-2">
            {clicked ? "Adventure Awaits!" : "You are one step away from your next adventure"}
          </h3>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-16 right-12 max-w-xs cursor-pointer"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setClicked(!clicked)}
      >
        <motion.div 
          className="bg-blue-800 bg-opacity-30 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg"
          animate={{ rotateY: clicked ? 180 : 0, scale: clicked ? 1.2 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-white text-2xl font-bold mb-2">
            {clicked ? "New Courses Unlocked!" : "Explore our courses"}
          </h3>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute top-16 left-12 w-24 h-24 bg-indigo-500 rounded-full opacity-50"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default App;