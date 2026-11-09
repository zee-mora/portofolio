import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiPostgresql, SiSupabase, SiCodeigniter, SiPhp, SiLaravel } from "react-icons/si";
import Section from "./Section";

const TECH = [
  [SiExpress, "Express.js", "Fast, scalable Node.js backends."],
  [FaReact, "React.js", "Reusable components for user interfaces."],
  [SiLaravel, "Laravel", "PHP framework with elegant syntax."],
  [SiCodeigniter, "CodeIgniter", "Lightweight PHP web framework."],
  [FaNodeJs, "Node.js", "JavaScript on the server."],
  [SiTailwindcss, "Tailwind CSS", "Utility-first rapid UI styling."],
  [SiHtml5, "HTML", "Markup for the web."],
  [SiCss3, "CSS", "Styling for the web."],
  [SiPhp, "PHP", "Server-side scripting."],
  [SiJavascript, "JavaScript", "The language of the browser."],
  [SiPostgresql, "PostgreSQL", "Relational database."],
  [SiSupabase, "Supabase", "Open-source database platform."],
];

const Technologies = () => (
  <Section id="skills" title="Technologies I Use">
    <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {TECH.map(([Icon, name, desc]) => (
        <li key={name} className="card lift panel flex aspect-square flex-col items-center justify-center rounded-full p-3 text-center sm:even:mt-8">
          <Icon aria-hidden="true" className="mx-auto text-4xl text-comic sm:text-5xl" />
          <h3 className="mt-1 text-xl sm:text-2xl">{name}</h3>
          <p className="sr-only">{desc}</p>
        </li>
      ))}
    </ul>
  </Section>
);

export default Technologies;
