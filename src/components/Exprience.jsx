import { useEffect, useState } from "react";
import Bee from "../assets/Bee.png";
import Frontend from "../assets/Frontend.png";
import Javascript from "../assets/Javascript.png";
import LKS from "../assets/LKS.webp";
import Magang from "../assets/magang.png";
import Section from "./Section";

const ITEMS = [
  [LKS, "Participant of LKS AI Competition", "Participated in the LKS AI Competition in 2026, gaining valuable experience in artificial intelligence and algorithms."],
  [Magang, "Internship at PT. HyperData", "Completed a fullstack developer internship at PT. HyperData Solusindo Mandiri in 2025."],
  [Bee, "Champion of Bee Coding", "Won 3rd place in the Bee Coding Championship in 2024."],
  [Frontend, "Frontend Junior Certificate", "Achieved the Frontend Junior Certificate from Dicoding in 2024."],
  [Javascript, "Javascript Basic Certificate", "Earned the Javascript Basic Certificate from Dicoding in 2024."],
];

const Experience = () => {
  const [sel, setSel] = useState(null);

  useEffect(() => {
    if (!sel) return;
    const onKey = (e) => e.key === "Escape" && setSel(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sel]);

  return (
    <Section id="experience" title="Experience" className="bg-paper-deep">
      <ol className="space-y-6">
        {ITEMS.map(([img, title, desc]) => (
          <li key={title} className="card lift panel wobble relative flex items-start gap-4 p-4 md:w-[85%] md:even:ml-auto md:even:-rotate-1 md:odd:rotate-1">
            <button type="button" onClick={() => setSel({ img, title })} className="group shrink-0 border-4 border-ink" aria-label={`Enlarge image: ${title}`}>
              <img src={img} alt="" className="h-24 w-20 object-cover" />
            </button>
            <div>
              <h3 className="text-2xl sm:text-3xl">{title}</h3>
              <p className="mt-1">{desc}</p>
            </div>
          </li>
        ))}
      </ol>

      {sel && (
        <div role="dialog" aria-modal="true" aria-label={sel.title} className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4" onClick={() => setSel(null)}>
          <div className="panel relative max-h-full max-w-2xl overflow-auto p-2" onClick={(e) => e.stopPropagation()}>
            <img src={sel.img} alt={sel.title} className="max-h-[80vh] w-full object-contain" />
            <button type="button" autoFocus onClick={() => setSel(null)} className="btn-red absolute right-3 top-3 !min-h-[44px] !px-4 !py-0">Close</button>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Experience;
