
import React, { useEffect, useRef } from "react";
import "./DotGlobe.css";

const DOT_COUNT = 900;

export default function DotGlobe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let animationFrame;

    let rotationX = -0.35;
    let rotationY = 0;
    let velocityX = 0.008;
    let velocityY = 0;

    let isDragging = false;
    let previousX = 0;
    let previousY = 0;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const points = [];

    // Generate Fibonacci sphere points
    for (let i = 0; i < DOT_COUNT; i++) {
      const y = 1 - (i / (DOT_COUNT - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const angle = Math.PI * (3 - Math.sqrt(5)) * i;

      points.push({
        x: Math.cos(angle) * radius,
        y,
        z: Math.sin(angle) * radius,
      });
    }

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const rotatePoint = (point) => {
      let { x, y, z } = point;

      // X-axis rotation
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);

      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;

      y = y1;
      z = z1;

      // Y-axis rotation
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      const x1 = x * cosY + z * sinY;
      const z2 = -x * sinY + z * cosY;

      return { x: x1, y, z: z2 };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Globe position and size
      const centerX = width * 0.60;
      const centerY = height * 0.55;
      const radius = Math.min(width * 0.27, height * 0.27, 270);

      points.forEach((point) => {
        const rotated = rotatePoint(point);

        const depth = (rotated.z + 1) / 2;

        const x = centerX + rotated.x * radius;
        const y = centerY + rotated.y * radius;

        const isFront = rotated.z > 0;

        const dotSize = 0.55 + depth * 1.35;

        let opacity;

        if (isFront) {
          opacity = 0.18 + depth * 0.72;
        } else {
          opacity = 0.07 + depth * 0.16;
        }

        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);

        // Orange-golden highlights
        //  if (isFront && depth > 0.76) {
       //   ctx.fillStyle = `rgba(255, 166, 91, ${opacity})`;
      //  }
        // Blue-purple front dots
         if (isFront) {
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        }
        // Subtle back-side dots
        else {
          ctx.fillStyle = `rgba(91, 105, 177, ${opacity})`;
        }

        ctx.fill();
      });

      // Automatic rotation
      if (!isDragging && !prefersReducedMotion) {
        rotationY += velocityX;
        rotationX += velocityY;

        velocityX *= 0.995;
        velocityY *= 0.995;

        if (Math.abs(velocityX) < 0.008) {
          velocityX = 0.008;
        }

        if (Math.abs(velocityY) < 0.0005) {
          velocityY = 0;
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    const handlePointerDown = (e) => {
      isDragging = true;
      previousX = e.clientX;
      previousY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
      if (!isDragging) return;

      const dx = e.clientX - previousX;
      const dy = e.clientY - previousY;

      rotationY += dx * 0.006;
      rotationX += dy * 0.006;

      rotationX = Math.max(-1.3, Math.min(1.3, rotationX));

      velocityX = dx * 0.0005;
      velocityY = dy * 0.0005;

      previousX = e.clientX;
      previousY = e.clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    resizeCanvas();
    draw();

    window.addEventListener("resize", resizeCanvas);

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointercancel", handlePointerUp);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resizeCanvas);

      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="dot-globe-canvas"
      aria-hidden="true"
    />
  );
}
