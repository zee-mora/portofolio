import Section from "./Section";
import { ABOUT } from "../constants";

const About = () => (
  <Section id="about" title="About Me">
    <div className="relative max-w-3xl">
    <span className="star-ink absolute -right-6 -top-10 z-10 hidden h-28 w-28 rotate-12 sm:block" aria-hidden="true" />
    <span className="star-red absolute -right-5 -top-9 z-10 hidden h-28 w-28 rotate-12 place-items-center font-display text-3xl text-white sm:grid" aria-hidden="true">HI!</span>
    <div className="bubble panel wobble space-y-4 p-6 text-lg leading-relaxed md:p-8">
      {ABOUT.map((html, i) => (
        // content is authored in constants, not user input
        <p key={i} className="[&_b]:bg-comic-light [&_b]:px-1 [&_b]:font-bold [&_b]:text-comic-dark" dangerouslySetInnerHTML={{ __html: html }} />
      ))}
    </div>
    </div>
  </Section>
);

export default About;
