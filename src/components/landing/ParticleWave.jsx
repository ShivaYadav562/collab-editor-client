
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleWave = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas.parentElement;

    // 1. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio || 1, 2)
    );

    // 2. Scene and Camera
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      1,
      0.1,
      200
    );

    camera.position.set(0, 9, 26);
    camera.lookAt(0, 0, 0);

    // 3. Particle Positions
    const GRID = 100;
    const SPACING = 0.6;

    const TOTAL_PARTICLES = GRID * GRID;

    const positions = new Float32Array(
      TOTAL_PARTICLES * 3
    );

    let index = 0;

    for (let ix = 0; ix < GRID; ix++) {
      for (let iz = 0; iz < GRID; iz++) {
        positions[index++] =
          (ix - GRID / 2) * SPACING;

        positions[index++] = 0;

        positions[index++] =
          (iz - GRID / 2) * SPACING;
      }
    }

    // 4. Buffer Geometry
    const geometry = new THREE.BufferGeometry();

    const positionAttribute = new THREE.BufferAttribute(
      positions,
      3
    );

    positionAttribute.setUsage(THREE.DynamicDrawUsage);

    geometry.setAttribute(
      "position",
      positionAttribute
    );

    // 5. Particle Material
    const material = new THREE.PointsMaterial({
      color: 0x8fa0ff,
      size: 0.12,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    });

    // 6. Particle System
    const points = new THREE.Points(
      geometry,
      material
    );

    scene.add(points);

    // 7. Responsive Resize
    function resize() {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) return;

      renderer.setSize(width, height, false);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    const resizeObserver = new ResizeObserver(resize);

    resizeObserver.observe(container);
    resize();

    // 8. Animation Settings
    const clock = new THREE.Clock();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationId;

    // 9. Particle Wave Animation
    function animate() {
      animationId = requestAnimationFrame(animate);

      const time = reduceMotion
        ? 0
        : clock.getElapsedTime();

      const array = geometry.attributes.position.array;

      let i = 0;

      for (let ix = 0; ix < GRID; ix++) {
        for (let iz = 0; iz < GRID; iz++) {
          const wave1 =
            Math.sin(ix * 0.3 + time * 1.2) * 0.9;

          const wave2 =
            Math.sin(iz * 0.25 + time * 0.9) * 0.9;

          array[i + 1] = wave1 + wave2;

          i += 3;
        }
      }

      geometry.attributes.position.needsUpdate = true;

      if (!reduceMotion) {
        points.rotation.y = time * 0.05;
      }

      renderer.render(scene, camera);
    }

    animate();

    // 10. Cleanup
    return () => {
      cancelAnimationFrame(animationId);

      resizeObserver.disconnect();

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="scene"
      aria-hidden="true"
    />
  );
};

export default ParticleWave;
