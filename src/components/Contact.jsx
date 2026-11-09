import Section from "./Section";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { CONTACT } from "../constants";

const ROWS = [
  [FaEnvelope, "Email", CONTACT.email, `mailto:${CONTACT.email}`],
  [FaPhoneAlt, "Phone", CONTACT.phone, `tel:${CONTACT.phone.replace(/\s/g, "")}`],
  [FaMapMarkerAlt, "Location", CONTACT.location, "https://www.google.com/maps/search/?api=1&query=Malang%2C+Indonesia"],
];

const Contact = () => (
  <>
    <Section id="contact" title="Contact Me" className="overflow-hidden !border-b-0">
      <div className="grid items-center gap-12 md:grid-cols-5">
        <div className="panel wobble relative p-6 shadow-comic-lg md:col-span-3 md:p-8">
          <h3 className="text-4xl leading-none sm:text-5xl">Got an idea? <span className="text-pop">Let&apos;s team up!</span></h3>
          <p className="mt-3 text-lg">Have a question or want to work together? Reach out, I&apos;d love to hear from you.</p>
          <ul className="mt-6 space-y-3">
            {ROWS.map(([Icon, label, text, href]) => (
              <li key={label}>
                <a href={href} className="group lift flex items-center gap-4 border-2 border-transparent p-1 pr-3 [&:hover]:border-ink" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-4 border-ink bg-comic text-xl text-white shadow-comic-sm"><Icon aria-hidden="true" /></span>
                  <span className="min-w-0"><span className="block text-sm font-bold uppercase tracking-widest text-comic-dark">{label}</span><span className="block break-words text-lg font-semibold">{text}</span></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-4">
            <a href={`mailto:${CONTACT.email}`} className="btn-red">Send email</a>
            {CONTACT.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-paper">{l.label}</a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto grid h-72 w-72 place-items-center md:col-span-2 md:h-96 md:w-full" aria-hidden="true">
          <span className="halftone-blue blob absolute inset-4 rounded-full border-4 border-ink" />
          <span className="star-ink absolute h-64 w-64 rotate-12 md:h-80 md:w-80" />
          <span className="star-red absolute grid h-60 w-60 rotate-12 place-items-center md:h-[19rem] md:w-[19rem]" />
          <span className="relative -rotate-6 text-center font-display text-5xl leading-none text-white [text-shadow:3px_3px_0_#16131f] md:text-6xl">SAY<br />HI!</span>
        </div>
      </div>
    </Section>
    <footer className="halftone-blue relative overflow-hidden border-t-4 border-ink text-white">
      <span className="float-y burst !opacity-100 !absolute !left-[8%] !top-10 !h-14 !w-14 !scale-100" aria-hidden="true" />
      <span className="float-y burst !opacity-100 !absolute !left-auto !right-[10%] !top-24 !h-9 !w-9 !scale-100 [animation-delay:-3s]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-6 pt-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-3xl tracking-wider [text-shadow:2px_2px_0_#16131f]">Built to defy gravity.</p>
          <p className="mt-2 max-w-xs font-medium">Full stack developer from Malang. Always learning, one line at a time.</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-display text-2xl tracking-wider text-white/80">Explore</h2>
          <ul className="mt-2">
            {["About", "Projects", "Skills", "Experience", "Contact"].map((l) => (
              <li key={l}><a className="footer-link" href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-display text-2xl tracking-wider text-white/80">Connect</h2>
          <ul className="mt-2">
            {CONTACT.links.map((l) => (
              <li key={l.label}><a className="footer-link" href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a></li>
            ))}
            <li><a className="footer-link" href={`mailto:${CONTACT.email}`}>Email ↗</a></li>
          </ul>
        </div>
      </div>
      <p aria-hidden="true" className="select-none whitespace-nowrap text-center font-display text-[30vw] leading-[0.75] text-transparent [-webkit-text-stroke:3px_#16131f] translate-y-[20%]">
        ZEE
      </p>
    </footer>
  </>
);

export default Contact;
