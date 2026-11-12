
import { useEffect, useRef } from "react";
import "./WarpSpeed.css";

export default function WarpSpeed() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;

    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");

    const STAR_COUNT = 600;
    const DEPTH = 1000;

    let stars = [];

    let width = 0;
    let height = 0;
    let dpr = 1;

    let speed = 6;
    let targetSpeed = 6;

    let animationId = null;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      speed = 0.6;
      targetSpeed = 0.6;
    }

    // 1. CREATE AND RESET STARS

    function resetStar(star, anyDepth = false) {
      star.x = (Math.random() - 0.5) * width * 2;
      star.y = (Math.random() - 0.5) * height * 2;

      star.z = anyDepth
        ? Math.random() * (DEPTH - 1) + 1
        : DEPTH;

      star.pz = star.z;
    }

    // 2. RESIZE CANVAS

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = wrap.clientWidth;
      height = wrap.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      stars = [];

      for (let i = 0; i < STAR_COUNT; i++) {
        const star = {};

        resetStar(star, true);

        stars.push(star);
      }
    }

    // 3. DRAW STARFIELD

    function draw() {
      ctx.fillStyle = "rgba(2, 3, 10, 0.35)";
      ctx.fillRect(0, 0, width, height);

      speed += (targetSpeed - speed) * 0.05;

      const cx = width / 2;
      const cy = height / 2;

      const focal = width * 0.5;

      // UPDATE EACH STAR

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.pz = star.z;

        star.z -= speed;

        if (star.z < 1) {
          resetStar(star, false);
          continue;
        }

        // PERSPECTIVE PROJECTION

        const x = cx + (star.x / star.z) * focal;
        const y = cy + (star.y / star.z) * focal;

        const px = cx + (star.x / star.pz) * focal;
        const py = cy + (star.y / star.pz) * focal;

        // RECYCLE OUTSIDE VIEWPORT

        if (
          x < 0 || x > width ||
          y < 0 || y > height
        ) {
          resetStar(star, false);
          continue;
        }

        // DEPTH-BASED BRIGHTNESS

        const nearness = 1 - star.z / DEPTH;

        const red = 180 + nearness * 75;
        const green = 190 + nearness * 40;

        const alpha = nearness;

        const lineWidth = 0.4 + nearness * 2.2;

        // DRAW STAR STREAK

        ctx.strokeStyle = `rgba(${red}, ${green}, 255, ${alpha})`;

        ctx.lineWidth = lineWidth;

        ctx.lineCap = "round";

        ctx.beginPath();

        ctx.moveTo(px, py);

        ctx.lineTo(x, y);

        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    }

    // 4. MOUSE AND TOUCH INTERACTION

    function handlePointerDown(event) {
      if (
        event.pointerType === "mouse" &&
        event.button !== 0
      ) {
        return;
      }

      if (!reducedMotion) {
        targetSpeed = 34;
      }
    }

    function handlePointerUp() {
      targetSpeed = reducedMotion ? 0.6 : 6;
    }

    // 5. INITIALIZE

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    window.addEventListener("blur", handlePointerUp);
    window.addEventListener("resize", resize);

    resize();

    draw();

    // 6. CLEANUP

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("blur", handlePointerUp);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div ref={wrapRef} className="warp-wrap">
      <canvas
        ref={canvasRef}
        className="warp-canvas"
        aria-hidden="true"
      />
    </div>
  );
}
