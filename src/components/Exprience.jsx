import { motion } from "framer-motion";
import { useState } from "react";
import Bee from "../assets/Bee.png";
import Frontend from "../assets/Frontend.png";
import Javascript from "../assets/Javascript.png";
import LKS from "../assets/LKS.webp";
import Magang from "../assets/magang.png";

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl font-light">Experience</h1>
      <div className="px-8 md:px-20">
        <ul className="list-disc space-y-8 text-neutral-300">
          <motion.li
            initial="hidden"
            whileInView="visible"
            variants={itemAnimation}
            transition={{ duration: 0.5 }}
            className="flex items-start space-x-4"
          >
            <img
              src={LKS}
              alt="Peserta LKS AI"
              className="w-20 h-25 rounded-lg object-cover cursor-pointer hover:opacity-80"
              onClick={() => handleImageClick(LKS)}
            />
            <div>
              <h2 className="text-2xl font-semibold">
                Participant of LKS AI Competition
              </h2>
              <p className="text-neutral-400">
                Participated in the LKS AI Competition in 2026, gaining valuable
                experience in artificial intelligence and algorithm.
              </p>
            </div>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            variants={itemAnimation}
            transition={{ duration: 0.5 }}
            className="flex items-start space-x-4"
            >
            <img
              src={Magang}
              alt="Internship at PT. HyperData"
              className="w-20 h-25 rounded-lg object-cover cursor-pointer hover:opacity-80"
              onClick={() => handleImageClick(Magang)}
            />
            <div>
              <h2 className="text-2xl font-semibold">
              Internship at PT. HyperData
              </h2>
              <p className="text-neutral-400">
              Completed fullstack developer internship at PT. HyperData Solusindo Mandiri in 2025.
              </p>
            </div>
            </motion.li>
            <motion.li
            initial="hidden"
            whileInView="visible"
            variants={itemAnimation}
            transition={{ duration: 0.5 }}
            className="flex items-start space-x-4"
          >
            <img
              src={Bee}
              alt="Bee Coding Championship"
              className="w-20 h-25 rounded-lg object-cover cursor-pointer hover:opacity-80"
              onClick={() => handleImageClick(Bee)}
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
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start space-x-4"
          >
            <img
              src={Frontend}
              alt="Frontend Junior Certificate"
              className="w-20 h-25 rounded-lg object-cover cursor-pointer hover:opacity-80"
              onClick={() => handleImageClick(Frontend)}
            />
            <div>
              <h2 className="text-2xl font-semibold">
                Frontend Junior Certificate
              </h2>
              <p className="text-neutral-400">
                Achieved the Frontend Junior Certificate from Dicoding in 2024.
              </p>
            </div>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            variants={itemAnimation}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start space-x-4"
          >
            <img
              src={Javascript}
              alt="Javascript basic Certificate"
              className="w-20 h-25 rounded-lg object-cover cursor-pointer hover:opacity-80"
              onClick={() => handleImageClick(Javascript)}
            />
            <div>
              <h2 className="text-2xl font-semibold">
                Javascript Basic Certificate
              </h2>
              <p className="text-neutral-400">
                Earned the Javascript Basic Certificate from Dicoding in 2024.
              </p>
            </div>
          </motion.li>
        </ul>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
          style={{ overflow: "hidden" }}
        >
          <div className="relative max-w-2xl max-h-2xl border-4 border-neutral-600 rounded-lg shadow-2xl">
            <img src={selectedImage} alt="Preview" className="rounded-lg" />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
