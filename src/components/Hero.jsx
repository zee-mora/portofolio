import { motion } from 'framer-motion'; // Import motion dari framer-motion
import ProfilePicture from '../assets/profile.png'; // Adjust the path as necessary

const Hero = () => {
  // Variants untuk animasi
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <motion.div
            className="flex flex-col items-center lg:items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl lg:text-7xl text-neutral-100 font-light pb-16 tracking-tight lg:mt-16">
              Welcome to <span className="text-cyan-400 font-bold">Zee</span>Portofolio
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent animate-pulse">
              A student of SMK PGRI 3 MALANG
            </span>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img src={ProfilePicture} alt="zaevanza" className='rounded-lg' />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
