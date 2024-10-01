import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Definisikan variabel untuk animasi
  const aboutAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="border-b border-neutral-900 pb-16 px-8 lg:px-32 mt-16">
      <h1 className="my-20 text-center text-5xl font-semibold">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <motion.div
        initial="hidden"   // Status awal
        whileInView="visible" // Status saat terlihat di viewport
        viewport={{ once: false }} // Tidak hanya sekali
        variants={aboutAnimation} // Variabel animasi
        transition={{ duration: 0.5 }} // Durasi transisi
        className="text-center text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto"
      >
        <p className="mb-6">
          Hello! I'm a student at <span className="text-cyan-400 font-bold">SMK PGRI 3 Malang</span>, currently pursuing a major in <span className="text-cyan-400 font-bold">Rekayasa Perangkat Lunak (Software Engineering)</span>. I am passionate about technology and programming, continuously learning and improving my skills to become a proficient developer.
        </p>
        <p className="mb-6">
          My journey in software development has been exciting, filled with new challenges that help me grow. I am enthusiastic about building web applications, especially working with the <span className="text-cyan-400 font-bold">MERN stack</span>, and I aspire to create innovative solutions that can make a difference.
        </p>
        <p className="mb-6">
          As I continue to learn and develop my skills, I strive to explore various areas in software engineering, from front-end to back-end development, ensuring I have a solid foundation in both. My goal is to become a full-stack developer and contribute meaningfully to the tech community.
        </p>
        <p className="italic text-neutral-500">
          "Learning never stops, and I am committed to pushing myself to the next level, one line of code at a time."
        </p>
      </motion.div>
    </div>
  );
};

export default About;
