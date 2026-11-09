import { useState } from "react";
import Logo from "./Logo";

const LINKS = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-4 border-ink bg-comic text-white">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <a href="#top" className="flex items-center gap-2 font-display text-2xl tracking-wider" aria-label="Zee, back to top">
          <Logo />
          <span className="[text-shadow:2px_2px_0_#16131f]">Zee<span className="text-white/80">Portofolio</span></span>
        </a>
        <button
          type="button"
          className="btn-paper !min-h-[44px] !px-4 !py-1 !text-xl md:hidden"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <ul id="menu" className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col border-b-4 border-ink bg-comic p-3 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0`}>
          {LINKS.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="nav-link" onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
