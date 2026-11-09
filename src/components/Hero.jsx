import { motion } from "framer-motion";
import ProfilePicture from "../assets/Profile.png";
import Hero3D from "./Hero3D";
import { PROFILE } from "../constants";

const Hero = () => (
  <section id="top" className="zig relative overflow-hidden pb-6">
    <div className="hero-cut hero-cut-ink" aria-hidden="true" />
    <div className="hero-cut halftone-blue" aria-hidden="true" />
    <Hero3D />
    <p className="absolute bottom-8 right-6 z-10 hidden -rotate-2 border-4 border-ink bg-paper px-3 py-1 font-display text-lg tracking-wider shadow-comic-sm md:block" aria-hidden="true">Click to shoot a web!</p>
    <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-24">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="mb-3 inline-block rotate-1 border-4 border-ink bg-pop px-3 py-1 font-display text-xl tracking-widest text-white shadow-comic-sm">
          Issue #1 · Origin Story
        </p>
        <h1 className="text-6xl leading-[0.95] sm:text-7xl lg:text-8xl [text-shadow:4px_4px_0_#e0202b]">
          <span className="hw inline-block">Welcome</span> <span className="hw inline-block">to</span>{" "}
          <span className="hw inline-block text-comic">{PROFILE.nick}</span><span className="hw inline-block">Portofolio</span>
        </h1>
        <p className="mt-5 inline-block border-4 border-ink bg-paper px-4 py-1 font-display text-3xl tracking-wider shadow-comic-sm">
          {PROFILE.title}
        </p>
        <p className="mt-5 max-w-md text-lg font-medium">I&apos;m {PROFILE.name}. I build web apps from front-end to back-end.</p>
        <div className="mt-7 flex flex-wrap gap-4">
          <a href="#projects" className="btn-red">See my work</a>
          <a href="#contact" className="btn-paper">Say hello</a>
        </div>
      </motion.div>

      <motion.div className="relative mx-auto w-full max-w-sm" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
        <div className="hero-photo relative">
        <span className="star-ink absolute -inset-6 rotate-12 scale-110" aria-hidden="true" />
        <span className="star-red absolute -inset-6 rotate-12 scale-105" aria-hidden="true" />
        <div className="blob panel relative aspect-square overflow-hidden bg-paper shadow-comic-lg">
          <img src={ProfilePicture} alt={`Portrait of ${PROFILE.name}`} className="h-full w-full object-cover" />
        </div>
        <p className="wobble absolute -left-2 -top-8 z-10 max-w-[14rem] -rotate-3 border-4 border-ink bg-white px-3 py-2 text-sm font-bold shadow-comic-sm sm:-left-8">
          “{PROFILE.tagline}”
        </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
