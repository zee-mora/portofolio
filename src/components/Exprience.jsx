import React from 'react';
import { motion } from 'framer-motion';
import Bee from "../assets/Bee.png"; // Ganti dengan URL gambar kejuaraan Bee Coding
import Frontend from "../assets/Frontend.png"; // Ganti dengan URL gambar sertifikat Frontend
import Javascript from "../assets/Javascript.png"; // Ganti dengan URL gambar sertifikat Javascript

const Experience = () => {
  // Definisikan animasi untuk setiap item pengalaman
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 }, // Posisi tersembunyi
    visible: { opacity: 1, y: 0 }, // Posisi terlihat
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl font-light">Experience</h1>
      <div className="px-8 md:px-20">
        <ul className="list-disc space-y-8 text-neutral-300">
          <motion.li
            initial="hidden" // Posisi awal
            whileInView="visible" // Saat masuk tampilan
            variants={itemAnimation}
            transition={{ duration: 0.5 }} // Durasi animasi
            className="flex items-start space-x-4"
          >
            <img
              src={Bee} // Ganti dengan URL gambar kejuaraan Bee Coding
              alt="Bee Coding Championship"
              className="w-20 h-25 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold">Champion of Bee Coding</h2>
              <p className="text-neutral-400">
                Won 3rd place in the Bee Coding Championship in 2024.
              </p>
            </div>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            variants={itemAnimation}
            transition={{ duration: 0.5, delay: 0.1 }} // Penundaan sedikit
            className="flex items-start space-x-4"
          >
            <img
              src={Frontend} // Ganti dengan URL gambar sertifikat Frontend
              alt="Frontend Junior Certificate"
              className="w-20 h-25 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold">Frontend Junior Certificate</h2>
              <p className="text-neutral-400">
                Achieved the Frontend Junior Certificate from Dicoding in 2024.
              </p>
            </div>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            variants={itemAnimation}
            transition={{ duration: 0.5, delay: 0.2 }} // Penundaan lebih
            className="flex items-start space-x-4"
          >
            <img
              src={Javascript} // Ganti dengan URL gambar sertifikat Javascript
              alt="Javascript basic Certificate"
              className="w-20 h-25 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold">Javascript Basic Certificate</h2>
              <p className="text-neutral-400">
                Earned the Javascript Basic Certificate from Dicoding in 2024.
              </p>
            </div>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
