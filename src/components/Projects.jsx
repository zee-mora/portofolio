import Section from "./Section";
import { PROJECTS } from "../constants";

// wireframe bar widths for the mock browser window, one row-set per card
const WIRES = [[70, 45, 85], [55, 80, 40], [85, 35, 60], [40, 70, 55]];

const Projects = () => (
  <Section id="projects" title="Selected Projects" className="bg-paper-deep">
    <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
      {PROJECTS.map((p, i) => (
        <li key={p.title} className="card lift panel wobble relative flex flex-col overflow-visible sm:odd:-rotate-1 sm:even:mt-12 sm:even:rotate-1">
          <span className="burst" aria-hidden="true" />
          <div className={`${i === 1 ? "halftone-red" : "halftone-blue"} wobble-top relative h-48 overflow-hidden border-b-4 border-ink`} aria-hidden="true">
            <span className="absolute left-5 top-3 font-display text-6xl leading-none text-white [text-shadow:3px_3px_0_#16131f]">#{i + 1}</span>
            <div className="absolute -bottom-1 right-5 w-[62%] border-4 border-ink bg-paper shadow-comic-sm">
              <div className="flex gap-1.5 border-b-4 border-ink bg-comic-light p-2">
                <i className="h-2.5 w-2.5 rounded-full bg-pop" /><i className="h-2.5 w-2.5 rounded-full bg-ink" /><i className="h-2.5 w-2.5 rounded-full bg-ink/40" />
              </div>
              <div className="space-y-2 p-3">
                {WIRES[i % WIRES.length].map((w, k) => (
                  <div key={k} className={`h-3 ${k === 0 ? "bg-ink" : "bg-ink/20"}`} style={{ width: `${w}%` }} />
                ))}
                <div className="h-6 w-1/3 border-2 border-ink bg-pop" />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-3xl leading-none sm:text-4xl">{p.title}</h3>
              {p.sample && <span className="shrink-0 border-2 border-ink bg-pop px-2 py-0.5 text-xs font-bold uppercase text-white">Sample</span>}
            </div>
            <p className="mt-3 text-lg">{p.description}</p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Technologies">
              {p.tags.map((t) => (
                <li key={t} className="border-2 border-ink bg-comic-light px-2.5 py-1 text-sm font-bold text-comic-dark">{t}</li>
              ))}
            </ul>
            <div className="mt-5 flex items-center justify-between border-t-4 border-dashed border-ink/30 pt-4">
              <span className="font-display text-xl tracking-widest text-ink/60">Case file #{String(i + 1).padStart(2, "0")}</span>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-red !min-h-[44px] !py-0 !text-xl">View →</a>
              ) : (
                <span className="font-display text-xl tracking-widest text-pop">Coming soon</span>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </Section>
);

export default Projects;
