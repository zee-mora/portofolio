// Shared section wrapper: title tag. Scroll reveals are done by GSAP in App.jsx.
const Section = ({ id, title, children, className = "" }) => (
  <section id={id} aria-labelledby={`${id}-title`} className={`zig relative py-16 pb-24 md:py-24 md:pb-32 ${className}`}>
    <div className="mx-auto max-w-6xl px-4">
      <h2 id={`${id}-title`} className="section-title mb-10">{title}</h2>
      {children}
    </div>
  </section>
);

export default Section;
