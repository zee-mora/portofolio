import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const WORDS = ["Full Stack", "React", "Node.js", "Laravel", "Tailwind", "PostgreSQL", "Supabase"];

// Slanted ticker band; scrolling speeds it up in the scroll direction. Static for reduced motion.
const Marquee = () => {
  const track = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = gsap.to(track.current, { xPercent: -50, ease: "none", duration: 28, repeat: -1 });
      const st = ScrollTrigger.create({
        onUpdate: (s) => {
          tween.timeScale(s.direction * Math.min(10, 1 + Math.abs(s.getVelocity()) / 250));
          gsap.to(tween, { timeScale: 1, duration: 0.8, overwrite: true });
        },
      });
      return () => { tween.kill(); st.kill(); };
    });
    return () => mm.revert();
  }, []);

  const group = (
    <div className="flex shrink-0 items-center">
      {WORDS.map((w) => (
        <span key={w} className="flex items-center font-display text-3xl tracking-widest text-white [text-shadow:2px_2px_0_#16131f] sm:text-4xl">
          <span className="px-6">{w}</span><span className="text-ink">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div aria-hidden="true" className="relative z-10 overflow-hidden py-6">
      <div className="-rotate-2 scale-105 border-y-4 border-ink bg-pop py-2 shadow-comic-sm">
        <div ref={track} className="flex w-max whitespace-nowrap">{group}{group}</div>
      </div>
    </div>
  );
};

export default Marquee;
