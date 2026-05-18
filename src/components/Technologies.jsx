import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiPython, SiHtml5, SiCss3, SiJavascript, SiPostgresql, SiSupabase, SiCodeigniter, SiPhp, SiLaravel } from 'react-icons/si';
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
        {/* Laravel */}
        <div className="text-center">
          <motion.div {...iconAnimation}>
            <SiLaravel className="mx-auto text-6xl text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold mt-4">Laravel</h2>
          <p className="mt-2 text-neutral-300">
            A PHP web framework used for building web applications with an elegant syntax.
          </p>
        </div>
        {/* CodeIgniter */}
        <div className="text-center">
          <motion.div {...iconAnimation}>
            <SiCodeigniter className="mx-auto text-6xl text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold mt-4">CodeIgniter</h2>
          <p className="mt-2 text-neutral-300">
            A web framework for building web applications.
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
        <div className="text-center">
          <motion.div {...iconAnimation}>
            <SiTailwindcss className="mx-auto text-6xl text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold mt-4">Tailwind CSS</h2>
          <p className="mt-2 text-neutral-300">
            A utility-first CSS framework that allows rapid UI development with pre-built classes.
          </p>
        </div>
        {/* Python */}
        {/* <div className="text-center">
          <motion.div {...iconAnimation}>
            <SiPython className="mx-auto text-6xl text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold mt-4">Python</h2>
          <p className="mt-2 text-neutral-300">
            A high-level programming language that is easy to learn and use.
          </p>
        </div> */}
        {/* HTML */}
        <div className="text-center">
          <motion.div {...iconAnimation}>
            <SiHtml5 className="mx-auto text-6xl text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold mt-4">HTML</h2>
          <p className="mt-2 text-neutral-300">
            A markup language for creating web pages.
          </p>
        </div>
        {/* CSS */}
        <div className="text-center">
          <motion.div {...iconAnimation}>
            <SiCss3 className="mx-auto text-6xl text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold mt-4">CSS</h2>
          <p className="mt-2 text-neutral-300">
            A style sheet language for creating web pages.
          </p>
        </div>
        {/* PHP */}
        <div className="text-center">
          <motion.div {...iconAnimation}>
            <SiPhp className="mx-auto text-6xl text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold mt-4">PHP</h2>
          <p className="mt-2 text-neutral-300">
            A server-side scripting language for creating web pages.
          </p>
        </div>
        {/* JavaScript */}
        <div className="text-center">
          <motion.div {...iconAnimation}>
            <SiJavascript className="mx-auto text-6xl text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold mt-4">JavaScript</h2>
          <p className="mt-2 text-neutral-300">
            A programming language for creating web pages.
          </p>
        </div>
        {/* PostgreSQL */}
        <div className="text-center">
          <motion.div {...iconAnimation}>
            <SiPostgresql className="mx-auto text-6xl text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold mt-4">PostgreSQL</h2>
          <p className="mt-2 text-neutral-300">
            A relational database management system.
          </p>
        </div>
        {/* Supabase */}
        <div className="text-center">
          <motion.div {...iconAnimation}>
            <SiSupabase className="mx-auto text-6xl text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold mt-4">Supabase</h2>
          <p className="mt-2 text-neutral-300">
            A modern, open-source database platform.
          </p>
        </div>
        <div className="text-center col-span-1 md:col-span-2">
          <motion.div {...iconAnimation}>
            <SiCodeigniter className="mx-auto text-6xl text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl font-semibold mt-4">CodeIgniter</h2>
          <p className="mt-2 text-neutral-300">
            A web framework for building web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
