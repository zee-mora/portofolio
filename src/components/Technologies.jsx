import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaServer } from 'react-icons/fa';
import { SiExpress, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

const Technologies = () => {
  // Definisikan animasi untuk ikon
  const iconAnimation = {
    initial: { y: 0 }, // Posisi awal
    animate: { y: [0, -10, 0] }, // Gerakan naik dan turun
    transition: {
      duration: 1, // Durasi satu siklus
      repeat: Infinity, // Ulangi terus menerus
      ease: 'easeInOut', // Kurva transisi
      delay: 0.2, // Penundaan sebelum mulai animasi
    },
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl font-light">Technologies I Use</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8 md:px-20">
        {/* MongoDB */}
        <div className="text-center">
          <motion.div {...iconAnimation}>
            <FaDatabase className="mx-auto text-6xl text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold mt-4">MongoDB</h2>
          <p className="mt-2 text-neutral-300">
            A NoSQL database used for storing and retrieving data in a flexible and scalable way.
          </p>
        </div>
        {/* Express.js */}
        <div className="text-center">
          <motion.div {...iconAnimation}>
            <SiExpress className="mx-auto text-6xl text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold mt-4">Express.js</h2>
          <p className="mt-2 text-neutral-300">
            A web framework for Node.js used to build fast and scalable backend applications.
          </p>
        </div>
        {/* React.js */}
        <div className="text-center">
          <motion.div {...iconAnimation}>
            <FaReact className="mx-auto text-6xl text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold mt-4">React.js</h2>
          <p className="mt-2 text-neutral-300">
            A JavaScript library for building user interfaces, focusing on reusable components and efficient rendering.
          </p>
        </div>
        {/* Node.js */}
        <div className="text-center">
          <motion.div {...iconAnimation}>
            <FaNodeJs className="mx-auto text-6xl text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold mt-4">Node.js</h2>
          <p className="mt-2 text-neutral-300">
            A runtime environment that allows JavaScript to be used for server-side programming.
          </p>
        </div>
        {/* Tailwind CSS */}
        <div className="text-center col-span-1 md:col-span-2">
          <motion.div {...iconAnimation}>
            <SiTailwindcss className="mx-auto text-6xl text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold mt-4">Tailwind CSS</h2>
          <p className="mt-2 text-neutral-300">
            A utility-first CSS framework that allows rapid UI development with pre-built classes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
