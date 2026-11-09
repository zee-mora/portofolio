import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Exprience from "./components/Exprience";
import Contact from "./components/Contact";

// reducedMotion="user": framer-motion honors the OS reduced-motion setting.
// GSAP: hero word pop-in, hero photo parallax, section title pops, staggered card reveals.
// clearProps hands transform back to CSS afterwards so hover effects keep working.
const useGsapFx = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".hw", { yPercent: 110, rotate: -8, opacity: 0, duration: 0.8, ease: "back.out(1.7)", stagger: 0.12, clearProps: "all" });
      gsap.to(".hero-photo", { yPercent: -10, ease: "none", scrollTrigger: { trigger: "#top", start: "top top", end: "bottom top", scrub: true } });
      gsap.utils.toArray(".section-title").forEach((t) =>
        gsap.from(t, { scrollTrigger: { trigger: t, start: "top 88%" }, scale: 0.5, rotate: -10, opacity: 0, duration: 0.6, ease: "back.out(2)", clearProps: "transform,opacity" })
      );
      gsap.set(".card", { opacity: 0, y: 70 });
      ScrollTrigger.batch(".card", {
        start: "top 90%",
        once: true,
        onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", clearProps: "transform,opacity" }),
      });
    });
    return () => mm.revert();
  }, []);
};

const App = () => {
  useGsapFx();
  return (
  <MotionConfig reducedMotion="user">
    <div className="overflow-x-hidden">
      <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-pop focus:p-3 focus:text-white">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Technologies />
        <Exprience />
        <Contact />
      </main>
    </div>
  </MotionConfig>
  );
};

export default App;
