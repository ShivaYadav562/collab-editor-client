
import { useEffect, useRef } from "react";
import "./MagneticNode.css";

export default function MagneticNode({ backgroundOnly = false }) {
  const canvasRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;

    if (!canvas || !stage) return;

    const ctx = canvas.getContext("2d");

    // Animation Configuration
    const CONFIG = {
      particleCount: 100,
      connectionDistance: 130,
      mouseRadius: 160,
      mouseForce: 8,
      maxSpeed: 10,
      nodeColor: "#39cfff",
      lineColor: "0, 174, 255",
    };

    let width = 0;
    let height = 0;
    let particles = [];
    let animationId = null;
    let lastTime = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    // Resize Canvas
    function resizeCanvas() {
      const rect = stage.getBoundingClientRect();

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // Particle Class
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        this.vx = (Math.random() - 0.5) * 2.5;
        this.vy = (Math.random() - 0.5) * 2.5;

        this.radius = Math.random() * 0.7 + 1;
      }

      update(delta) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;

        const distance = Math.hypot(dx, dy);

        // Magnetic Repulsion
        if (
          mouse.active &&
          distance < CONFIG.mouseRadius &&
          distance > 0.1
        ) {
          const force =
            (CONFIG.mouseRadius - distance) /
            CONFIG.mouseRadius;

          const push =
            force * force * CONFIG.mouseForce;

          this.vx += (dx / distance) * push * delta;
          this.vy += (dy / distance) * push * delta;
        }

        // Smooth Damping
        this.vx *= Math.pow(0.997, delta);
        this.vy *= Math.pow(0.997, delta);

        // Maintain Minimum Movement
        let speed = Math.hypot(this.vx, this.vy);

        if (speed < 0.8) {
          this.vx += (Math.random() - 0.5) * 0.15;
          this.vy += (Math.random() - 0.5) * 0.15;
        }

        // Maximum Speed
        speed = Math.hypot(this.vx, this.vy);

        if (speed > CONFIG.maxSpeed) {
          this.vx = (this.vx / speed) * CONFIG.maxSpeed;
          this.vy = (this.vy / speed) * CONFIG.maxSpeed;
        }

        // Move Particle
        this.x += this.vx * delta;
        this.y += this.vy * delta;

        // Boundary Collision
        if (this.x <= 0) {
          this.x = 0;
          this.vx = Math.abs(this.vx);
        }

        if (this.x >= width) {
          this.x = width;
          this.vx = -Math.abs(this.vx);
        }

        if (this.y <= 0) {
          this.y = 0;
          this.vy = Math.abs(this.vy);
        }

        if (this.y >= height) {
          this.y = height;
          this.vy = -Math.abs(this.vy);
        }
      }

      // Draw Particle
      draw() {
        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = CONFIG.nodeColor;

        ctx.shadowBlur = 5;
        ctx.shadowColor = "#00bfff";

        ctx.fill();

        ctx.shadowBlur = 0;
      }
    }

    // Create Particles
    function createParticles() {
      particles = [];

      for (let i = 0; i < CONFIG.particleCount; i++) {
        particles.push(new Particle());
      }
    }

    // Draw Connecting Lines
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;

          const distance = Math.hypot(dx, dy);

          if (distance < CONFIG.connectionDistance) {
            const opacity =
              (1 - distance / CONFIG.connectionDistance) * 0.42;

            ctx.beginPath();

            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle =
              `rgba(${CONFIG.lineColor}, ${opacity})`;

            ctx.lineWidth = 0.65;

            ctx.stroke();
          }
        }
      }
    }

    // Mouse Glow
    function drawMouseGlow() {
      if (!mouse.active) return;

      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        CONFIG.mouseRadius
      );

      gradient.addColorStop(
        0,
        "rgba(0, 174, 255, 0.035)"
      );

      gradient.addColorStop(
        1,
        "rgba(0, 174, 255, 0)"
      );

      ctx.fillStyle = gradient;

      ctx.beginPath();

      ctx.arc(
        mouse.x,
        mouse.y,
        CONFIG.mouseRadius,
        0,
        Math.PI * 2
      );

      ctx.fill();
    }

    // Animation Loop
    function animate(timestamp) {
      const delta = lastTime
        ? Math.min((timestamp - lastTime) / 16.67, 2)
        : 1;

      lastTime = timestamp;

      ctx.clearRect(0, 0, width, height);

      drawMouseGlow();

      particles.forEach((particle) => {
        particle.update(delta);
      });

      drawConnections();

      particles.forEach((particle) => {
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    }

    // Mouse Interaction
    function handlePointerMove(event) {
      const rect = stage.getBoundingClientRect();

      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (inside) {
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
        mouse.active = true;
      } else {
        mouse.active = false;
      }
    }

    // Initialize
    function init() {
      resizeCanvas();
      createParticles();

      cancelAnimationFrame(animationId);

      lastTime = 0;

      animationId = requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("resize", init);

    init();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className={
        backgroundOnly
          ? "mag-node-stage mag-node-background"
          : "mag-node-stage"
      }
    >
      <canvas
        ref={canvasRef}
        className="mn-canvas"
        aria-hidden="true"
      />

      {!backgroundOnly && (
        <div className="mn-content">
          <div className="mn-badge">
            PHYSICS MESH
          </div>

          <h1>
            Magnetic Node
            <br />
            Fabric
          </h1>

          <p>
            Points connect dynamically based on proximity
            and scatter elastically around your pointer.
          </p>
        </div>
      )}
    </div>
  );
}

