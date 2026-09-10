"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "low-power"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    // Create glowing particle constellation
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      scales[i] = Math.random() * 0.8 + 0.3;
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    // Particle texture
    const canvasTexture = document.createElement("canvas");
    canvasTexture.width = 32;
    canvasTexture.height = 32;
    const ctx = canvasTexture.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(147, 197, 253, 1)");
      gradient.addColorStop(0.4, "rgba(1, 114, 255, 0.7)");
      gradient.addColorStop(1, "rgba(0, 82, 204, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvasTexture);

    const material = new THREE.PointsMaterial({
      size: 1.2,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Modern THREE.Timer loop as recommended in r183 / threejs-animation skill
    const timer = new THREE.Timer();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height, false);
        }
      }
    });
    resizeObserver.observe(canvas);

    renderer.setAnimationLoop(() => {
      timer.update();
      const elapsed = timer.getElapsed();

      particles.rotation.y = elapsed * 0.03;
      particles.rotation.x = Math.sin(elapsed * 0.05) * 0.04;

      renderer.render(scene, camera);
    });

    return () => {
      renderer.setAnimationLoop(null);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60 dark:opacity-75"
      aria-hidden="true"
    />
  );
}
