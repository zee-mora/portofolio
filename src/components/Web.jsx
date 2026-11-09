// Original decorative web: radial strands + arcs. Purely visual.
const Web = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" aria-hidden="true" className={className} style={{ clipPath: "circle(100% at 0 0)" }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    {[0, 18, 36, 54, 72, 90].map((a) => (
      <line key={a} x1="0" y1="0" x2={200 * Math.cos((a * Math.PI) / 180)} y2={200 * Math.sin((a * Math.PI) / 180)} />
    ))}
    {[40, 80, 120, 160, 200].map((r) => (
      <path key={r} d={`M${r} 0 Q${r * 0.78} ${r * 0.78} 0 ${r}`} />
    ))}
  </svg>
);

export default Web;
