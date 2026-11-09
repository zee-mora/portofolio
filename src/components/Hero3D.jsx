import { useEffect, useRef } from "react";

// Cel-shaded 3D shapes (toon material + ink outline) floating in the hero's blue panel.
// Positions are fractions of the visible area so nothing gets cut off at any size.
// three.js is loaded lazily; the loop pauses off-screen; skipped for reduced-motion users.
const Hero3D = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    let dispose = () => {};
    let cancelled = false;

    import("three").then((THREE) => {
      if (cancelled) return;
      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      } catch {
        return; // no WebGL: the page still looks fine without it
      }
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
      camera.position.z = 9;
      scene.add(new THREE.AmbientLight(0xffffff, 1.1));
      const sun = new THREE.DirectionalLight(0xffffff, 2.4);
      sun.position.set(3, 4, 5);
      scene.add(sun);

      const ramp = new THREE.DataTexture(new Uint8Array([80, 170, 255]), 3, 1, THREE.RedFormat);
      ramp.minFilter = ramp.magFilter = THREE.NearestFilter;
      ramp.needsUpdate = true;
      const INK = 0x16131f, RED = 0xe0202b, PAPER = 0xf7efdc;

      // [geometry, color, x frac, y frac]
      const shapes = [
        [new THREE.IcosahedronGeometry(0.5, 0), RED, -0.3, 0.34],
        [new THREE.TorusGeometry(0.42, 0.17, 12, 30), PAPER, -0.28, -0.34],
        [new THREE.OctahedronGeometry(0.4), 0xdfe8ff, 0.02, 0.36],
        [new THREE.TetrahedronGeometry(0.4), RED, 0.1, -0.36],
        [new THREE.DodecahedronGeometry(0.45), PAPER, 0.36, 0.3],
        [new THREE.IcosahedronGeometry(0.4, 0), RED, 0.36, -0.32],
      ].map(([geo, color, fx, fy], i) => {
        const g = new THREE.Group();
        g.add(new THREE.Mesh(geo, new THREE.MeshToonMaterial({ color, gradientMap: ramp })));
        const outline = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: INK, side: THREE.BackSide }));
        outline.scale.setScalar(1.12);
        g.add(outline);
        g.userData = { fx, fy, i };
        scene.add(g);
        return g;
      });

      const vis = { w: 8, h: 6 };
      const mouse = { x: 0, y: 0 };
      const onMove = (e) => {
        mouse.x = (e.clientX / innerWidth) * 2 - 1;
        mouse.y = (e.clientY / innerHeight) * 2 - 1;
      };
      addEventListener("pointermove", onMove);

      const resize = () => {
        const { clientWidth: w, clientHeight: h } = el;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        vis.h = 2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360);
        vis.w = vis.h * camera.aspect;
      };
      const ro = new ResizeObserver(resize);
      ro.observe(el);
      resize();

      let visible = true, raf = 0;
      const clock = new THREE.Clock();
      const tick = () => {
        const t = clock.getElapsedTime();
        shapes.forEach((g) => {
          const { fx, fy, i } = g.userData;
          g.position.set(fx * vis.w + mouse.x * 0.15 * (i % 2 ? 1 : -1), fy * vis.h + Math.sin(t * 0.9 + i) * 0.12, 0);
          g.rotation.x = t * 0.35 + i + mouse.y * 0.5;
          g.rotation.y = t * 0.5 + i * 2 + mouse.x * 0.8;
        });
        renderer.render(scene, camera);
        raf = visible ? requestAnimationFrame(tick) : 0;
      };
      const io = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible && !raf) raf = requestAnimationFrame(tick);
      });
      io.observe(el);
      raf = requestAnimationFrame(tick);

      dispose = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        removeEventListener("pointermove", onMove);
        scene.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); o.material.dispose(); } });
        ramp.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => { cancelled = true; dispose(); };
  }, []);

  return <div ref={ref} aria-hidden="true" className="hero-cut pointer-events-none hidden md:block" />;
};

export default Hero3D;
