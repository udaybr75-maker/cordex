/**
 * YADHU // SERIES 01 — REACT + FRAMER MOTION COMPONENT REFERENCE
 * ----------------------------------------------------------------------------
 * Note: Your live server at http://localhost:8080 runs index.html + styles.css
 * + script.js directly (with zero build step required).
 * If you also use React / Next.js / Vite, this file provides the exact
 * declarative `framer-motion` implementation of the same Apple-style page.
 */
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const APPLE_SPRING = { type: "spring", stiffness: 100, damping: 30, mass: 1 };

const fadeUpVariant = {
  hidden: { opacity: 0, y: 48, scale: 0.96, filter: "blur(10px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { ...APPLE_SPRING, delay }
  })
};

export const AI_TOOLS = [
  {
    name: "AI Chat Assistant",
    description: "Deep multi-turn reasoning co-pilot for architecture, brainstorming, and problem solving.",
    latency: "0.32 ms",
    tier: "Explorer & Up"
  },
  {
    name: "AI Image Generator",
    description: "Photonic diffusion engine synthesizing 4K sci-fi environments, textures, and concept art.",
    latency: "1.10 s",
    tier: "Voyager Pro"
  },
  {
    name: "AI Text Summarizer",
    description: "Distills 300-page PDFs, technical papers, and mission logs into structured executive briefs.",
    latency: "0.28 ms",
    tier: "Explorer & Up"
  },
  {
    name: "AI Code Helper",
    description: "AST-aware code synthesis, real-time refactoring, and zero-latency bug diagnostics.",
    latency: "0.39 ms",
    tier: "Voyager Pro"
  },
  {
    name: "AI Voice Tool",
    description: "48kHz neural voice synthesis and real-time multilingual audio log transcription.",
    latency: "0.24 s",
    tier: "Voyager Pro"
  },
  {
    name: "AI Writing Assistant",
    description: "Surgical prose refinement, tone calibration, and long-form narrative co-authoring.",
    latency: "0.30 ms",
    tier: "Explorer & Up"
  }
];

export default function YadhuSeries01Page() {
  const heroRef = useRef(null);
  const [cadence, setCadence] = useState("monthly");

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const smoothHero = useSpring(heroScroll, { stiffness: 100, damping: 30, mass: 1 });
  const titleScale = useTransform(smoothHero, [0, 1], [1, 0.86]);
  const titleY = useTransform(smoothHero, [0, 1], [0, -75]);
  const titleOpacity = useTransform(smoothHero, [0, 0.75], [1, 0]);
  const coreScale = useTransform(smoothHero, [0, 1], [0.88, 1.24]);
  const coreRotate = useTransform(smoothHero, [0, 1], [0, 38]);

  return (
    <div className="yadhu-spatial-app">
      {/* CHAPTER 01: BUTTON-LESS MONUMENT HERO */}
      <section ref={heroRef} className="hero-scroll-track">
        <div className="hero-sticky-viewport">
          <div className="container hero-monument-layout">
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0}
              className="hero-meta-row"
            >
              <span className="meta-pill">YADHU SPATIAL ARCHITECTURE · FIRST EDITION</span>
            </motion.div>

            <motion.div
              style={{ scale: titleScale, y: titleY, opacity: titleOpacity }}
              className="hero-typography-stage"
            >
              <h1 className="hero-display-title">
                <span>Beyond the template.</span>
                <span className="hero-gradient-line">Engineered for thought.</span>
              </h1>
              <p className="hero-editorial-lead">
                Welcome to Yadhu’s universe—reimagined as a precision-crafted spatial instrument.
                No buttons in the hero. Just pure architecture, six neural AI engines, and
                transparent pricing.
              </p>
            </motion.div>

            <motion.div
              style={{ scale: coreScale, rotateZ: coreRotate }}
              className="artifact-chassis"
            >
              <div className="artifact-core-chip">
                <span className="chip-code">YADHU // NPU-X1</span>
                <span className="chip-title">NEURAL CORE</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CHAPTER 03: BENTO AI TOOLS */}
      <section className="bento-section">
        <div className="container">
          <div className="bento-tools-grid">
            {AI_TOOLS.map((tool, idx) => (
              <motion.article
                key={tool.name}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={(idx % 3) * 0.1}
                className="bento-tool-card"
              >
                <h3 className="tool-card-title">{tool.name}</h3>
                <p className="tool-card-desc">{tool.description}</p>
                <div className="tool-card-footer">
                  <span className="tool-tier-badge">{tool.tier}</span>
                  <span className="tool-latency-tag">{tool.latency}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
