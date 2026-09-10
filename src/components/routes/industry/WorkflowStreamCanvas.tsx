"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface WorkflowStreamCanvasProps {
  activeStep: number;
  totalSteps?: number;
}

export function WorkflowStreamCanvas({
  activeStep,
  totalSteps = 4
}: WorkflowStreamCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const activeStepRef = useRef(activeStep);

  useEffect(() => {
    activeStepRef.current = activeStep;
  }, [activeStep]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "low-power"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    // 4 step coordinates in 3D space corresponding to timeline columns
    const stepCoordinates = [
      new THREE.Vector3(-10.2, 1.8, 0),
      new THREE.Vector3(-3.4, 1.8, 0),
      new THREE.Vector3(3.4, 1.8, 0),
      new THREE.Vector3(10.2, 1.8, 0)
    ];

    // Build Catmull-Rom curve connecting nodes with organic 3D wave
    const splinePoints = [
      new THREE.Vector3(-12.5, 1.8, -1),
      stepCoordinates[0],
      new THREE.Vector3(-6.8, 0.6, 1.2),
      stepCoordinates[1],
      new THREE.Vector3(0, 2.6, -1.2),
      stepCoordinates[2],
      new THREE.Vector3(6.8, 0.8, 1.2),
      stepCoordinates[3],
      new THREE.Vector3(12.5, 1.8, -1)
    ];

    const curve = new THREE.CatmullRomCurve3(splinePoints, false, "catmullrom", 0.4);

    // Glowing particle texture
    const makeParticleTexture = () => {
      const texCanvas = document.createElement("canvas");
      texCanvas.width = 64;
      texCanvas.height = 64;
      const ctx = texCanvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, "rgba(255, 255, 255, 1)");
        grad.addColorStop(0.25, "rgba(56, 189, 248, 0.95)");
        grad.addColorStop(0.55, "rgba(1, 114, 255, 0.45)");
        grad.addColorStop(1, "rgba(1, 114, 255, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(texCanvas);
    };

    const particleTexture = makeParticleTexture();

    // 1. Data Stream Packets along the spline
    const streamCount = 85;
    const streamGeom = new THREE.BufferGeometry();
    const streamPositions = new Float32Array(streamCount * 3);
    const streamProgress = new Float32Array(streamCount);
    const streamSpeed = new Float32Array(streamCount);
    const streamOffsets = new Float32Array(streamCount * 3);

    for (let i = 0; i < streamCount; i++) {
      streamProgress[i] = i / streamCount;
      streamSpeed[i] = 0.08 + Math.random() * 0.07;
      streamOffsets[i * 3] = (Math.random() - 0.5) * 0.4;
      streamOffsets[i * 3 + 1] = (Math.random() - 0.5) * 0.4;
      streamOffsets[i * 3 + 2] = (Math.random() - 0.5) * 0.6;
    }

    streamGeom.setAttribute("position", new THREE.BufferAttribute(streamPositions, 3));

    const streamMaterial = new THREE.PointsMaterial({
      size: 0.75,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.85
    });

    const streamParticles = new THREE.Points(streamGeom, streamMaterial);
    scene.add(streamParticles);

    // 2. Fixed Step Node Glows in 3D
    const nodeGeom = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(stepCoordinates.length * 3);
    stepCoordinates.forEach((coord, i) => {
      nodePositions[i * 3] = coord.x;
      nodePositions[i * 3 + 1] = coord.y;
      nodePositions[i * 3 + 2] = coord.z;
    });
    nodeGeom.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));

    const nodeMaterial = new THREE.PointsMaterial({
      size: 1.6,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.65
    });

    const nodePoints = new THREE.Points(nodeGeom, nodeMaterial);
    scene.add(nodePoints);

    // 3. Holographic Active Beacon Orb & Ring
    const beaconGroup = new THREE.Group();
    const currentBeaconPos = new THREE.Vector3().copy(stepCoordinates[0]);
    beaconGroup.position.copy(currentBeaconPos);

    // Inner glowing core
    const coreGeom = new THREE.BufferGeometry();
    coreGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array([0, 0, 0]), 3)
    );
    const coreMat = new THREE.PointsMaterial({
      size: 3.2,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.95
    });
    const beaconCore = new THREE.Points(coreGeom, coreMat);
    beaconGroup.add(beaconCore);

    // Dual orbiting thin rings
    const ringGeom = new THREE.RingGeometry(1.15, 1.25, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    const ring1 = new THREE.Mesh(ringGeom, ringMat);
    ring1.rotation.x = Math.PI / 3;
    beaconGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeom, ringMat.clone());
    ring2.rotation.y = Math.PI / 4;
    beaconGroup.add(ring2);

    scene.add(beaconGroup);

    // 4. Interactive Mouse Tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 2;
      targetMouseY = -y * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 5. Visibility / IntersectionObserver for zero CPU waste
    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(canvas);

    // Resize Handling
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

    // Animation Loop with THREE.Timer
    const timer = new THREE.Timer();

    renderer.setAnimationLoop(() => {
      if (!isVisible) return;

      timer.update();
      const delta = timer.getDelta();
      const elapsed = timer.getElapsed();

      // Smooth mouse parallax
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;
      scene.rotation.y = currentMouseX * 0.12;
      scene.rotation.x = currentMouseY * 0.08;

      // Update particle stream positions along Catmull-Rom curve
      const posAttr = streamGeom.getAttribute("position") as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < streamCount; i++) {
        streamProgress[i] = (streamProgress[i] + streamSpeed[i] * delta * 0.35) % 1.0;
        const pt = curve.getPoint(streamProgress[i]);

        posArray[i * 3] = pt.x + streamOffsets[i * 3];
        posArray[i * 3 + 1] = pt.y + streamOffsets[i * 3 + 1];
        posArray[i * 3 + 2] = pt.z + streamOffsets[i * 3 + 2];
      }
      posAttr.needsUpdate = true;

      // Pulse step nodes
      nodeMaterial.size = 1.6 + Math.sin(elapsed * 2.5) * 0.25;

      // Smooth damped lerp of active holographic beacon towards target step
      const targetCoord =
        stepCoordinates[activeStepRef.current] || stepCoordinates[0];
      currentBeaconPos.lerp(targetCoord, 0.075);
      beaconGroup.position.copy(currentBeaconPos);

      // Rotate beacon rings
      ring1.rotation.z += delta * 1.2;
      ring2.rotation.x += delta * 0.9;
      coreMat.size = 2.8 + Math.sin(elapsed * 4) * 0.5;

      renderer.render(scene, camera);
    });

    return () => {
      renderer.setAnimationLoop(null);
      window.removeEventListener("mousemove", handleMouseMove);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();

      streamGeom.dispose();
      streamMaterial.dispose();
      nodeGeom.dispose();
      nodeMaterial.dispose();
      coreGeom.dispose();
      coreMat.dispose();
      ringGeom.dispose();
      ringMat.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-80"
      aria-hidden="true"
    />
  );
}
