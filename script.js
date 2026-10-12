/**
 * ============================================================================
 * YADHU // PHANTOM NEXUS — ULTRA-SMOOTH 60FPS SUB-FRAME BLENDED KNOP ENGINE
 * ============================================================================
 * 1. SPACE_PORTALS (All 11 websites with custom sci-fi icons & colors)
 * 2. ULTRA-SMOOTH BEGINNING INTRO + SUB-FRAME ALPHA BLENDED 240-FRAME ENGINE
 *    - Uses lightweight WebP frames (`knop_fast/ezgif-frame-XXX.webp`)
 *    - Preloads sequentially from Frame 1 -> 60 first so the beginning is 100%
 *      cached within milliseconds
 *    - Sub-frame cross-fade interpolation between adjacent frames (60fps silk)
 *    - Smooth opening auto-intro glide on load + liquid scroll damping
 * 3. 3D WARP STARFIELD CANVAS ENGINE
 * 4. LIVE ORBITING STAR MAP RADAR (11 clickable orbiting satellites)
 * 5. HOLOGRAPHIC PORTAL DECK + CATEGORY FILTER + PRICING SWITCHER
 * ============================================================================
 */

const SPACE_PORTALS = [
  {
    id: "crackone",
    name: "CrackOne Inbox",
    tag: "SUBSPACE COMM TERMINAL",
    category: "comms",
    sector: "COMMS // 01",
    url: "https://inbox.crackone.org/login",
    host: "inbox.crackone.org",
    accent: "#00f0ff",
    glow: "rgba(0, 240, 255, 0.35)",
    orbitRing: 1,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><circle cx="18" cy="15" r="2"/></svg>`
  },
  {
    id: "33mail",
    name: "33Mail Relay",
    tag: "QUANTUM ALIAS SHIELD",
    category: "comms",
    sector: "COMMS // 02",
    url: "https://www.33mail.com/",
    host: "33mail.com",
    accent: "#00f59b",
    glow: "rgba(0, 245, 155, 0.35)",
    orbitRing: 1,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M8 11h8"/><path d="M12 7v8"/></svg>`
  },
  {
    id: "byteplus",
    name: "BytePlus Playground",
    tag: "NEURAL CORE SANDBOX",
    category: "ai",
    sector: "NEURAL // 03",
    url: "https://ai.byteplus.com/en/playground",
    host: "ai.byteplus.com",
    accent: "#b565ff",
    glow: "rgba(181, 101, 255, 0.38)",
    orbitRing: 1,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>`
  },
  {
    id: "simplelogin",
    name: "SimpleLogin Cloak",
    tag: "STEALTH IDENTITY MASK",
    category: "comms",
    sector: "COMMS // 04",
    url: "https://simplelogin.io/",
    host: "simplelogin.io",
    accent: "#ff2a85",
    glow: "rgba(255, 42, 133, 0.35)",
    orbitRing: 2,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1.5"/></svg>`
  },
  {
    id: "videocutter",
    name: "Video Logo Eraser",
    tag: "OPTICAL FRAME PURIFIER",
    category: "media",
    sector: "MEDIA // 05",
    url: "https://online-video-cutter.com/remove-logo",
    host: "online-video-cutter.com",
    accent: "#ffbe0b",
    glow: "rgba(255, 190, 11, 0.35)",
    orbitRing: 2,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="4" width="15" height="16" rx="2"/><polygon points="17 9 22 6 22 18 17 15 17 9"/><line x1="6" y1="8" x2="13" y2="16"/></svg>`
  },
  {
    id: "deepseek",
    name: "DeepSeek Perchance",
    tag: "DEEP-SPACE LOGIC ORACLE",
    category: "ai",
    sector: "NEURAL // 06",
    url: "https://perchance.org/deepseek",
    host: "perchance.org/deepseek",
    accent: "#00f0ff",
    glow: "rgba(0, 240, 255, 0.35)",
    orbitRing: 2,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="21"/><line x1="3" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="21" y2="12"/></svg>`
  },
  {
    id: "raphael",
    name: "Raphael AI Forge",
    tag: "PHOTONIC IMAGE GENERATOR",
    category: "ai",
    sector: "NEURAL // 07",
    url: "https://raphael.app/",
    host: "raphael.app",
    accent: "#ff2a85",
    glow: "rgba(255, 42, 133, 0.38)",
    orbitRing: 2,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>`
  },
  {
    id: "proton",
    name: "Proton Mail Vault",
    tag: "SWISS QUANTUM ENCRYPTION",
    category: "comms",
    sector: "COMMS // 08",
    url: "https://proton.me/mail/pricing?ref=mailheropricing",
    host: "proton.me/mail",
    accent: "#b565ff",
    glow: "rgba(181, 101, 255, 0.38)",
    orbitRing: 3,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/><path d="m9 12 2 2 4-4"/></svg>`
  },
  {
    id: "pollinations",
    name: "Pollinations AI",
    tag: "GENERATIVE SYNTHESIS NEXUS",
    category: "ai",
    sector: "NEURAL // 09",
    url: "https://pollinations.ai/",
    host: "pollinations.ai",
    accent: "#00f59b",
    glow: "rgba(0, 245, 155, 0.35)",
    orbitRing: 3,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="19" r="2"/><line x1="9.8" y1="9.8" x2="6.5" y2="6.5"/><line x1="14.2" y1="9.8" x2="17.5" y2="6.5"/><line x1="14.2" y1="14.2" x2="17.5" y2="17.5"/><line x1="9.8" y1="14.2" x2="6.5" y2="17.5"/></svg>`
  },
  {
    id: "freeaimodels",
    name: "FreeAI Models Chat",
    tag: "MULTI-MIND NEURAL UPLINK",
    category: "ai",
    sector: "NEURAL // 10",
    url: "https://freeaimodels.online/chat/x1mynx8mv3t3xza",
    host: "freeaimodels.online",
    accent: "#00f0ff",
    glow: "rgba(0, 240, 255, 0.35)",
    orbitRing: 3,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8"/><path d="M8 13h5"/></svg>`
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs Sonic",
    tag: "HYPER-REAL VOICE SYNTH",
    category: "media",
    sector: "MEDIA // 11",
    url: "https://elevenlabs.io/app/home",
    host: "elevenlabs.io",
    accent: "#ffbe0b",
    glow: "rgba(255, 190, 11, 0.35)",
    orbitRing: 3,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M2 12h3l3-8 4 16 4-12 3 4h3"/></svg>`
  }
];

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Smoothstep S-curve for ultra-smooth beginning & stage transitions
function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / Math.max(0.0001, edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

/* ============================================================================
   2. ULTRA-SMOOTH 240-FRAME KNOP ENGINE (SUB-FRAME BLENDING + OPENING GLIDE)
   ============================================================================ */
const TOTAL_FRAMES = 240;
const frameImages = new Array(TOTAL_FRAMES + 1).fill(null);
let warpBoost = 0;

function getFastFramePath(index) {
  const padded = String(clamp(Math.round(index), 1, TOTAL_FRAMES)).padStart(3, "0");
  return `knop_fast/ezgif-frame-${padded}.webp`;
}

function getFallbackFramePath(index) {
  const padded = String(clamp(Math.round(index), 1, TOTAL_FRAMES)).padStart(3, "0");
  return `knop/ezgif-frame-${padded}.png`;
}

function findNearestLoadedFrame(targetIndex) {
  const idx = clamp(Math.round(targetIndex), 1, TOTAL_FRAMES);
  if (frameImages[idx]?.complete && frameImages[idx].naturalWidth > 0) {
    return frameImages[idx];
  }
  for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
    const prev = idx - offset;
    const next = idx + offset;
    if (prev >= 1 && frameImages[prev]?.complete && frameImages[prev].naturalWidth > 0) {
      return frameImages[prev];
    }
    if (next <= TOTAL_FRAMES && frameImages[next]?.complete && frameImages[next].naturalWidth > 0) {
      return frameImages[next];
    }
  }
  return null;
}

/**
 * Smooth S-curve stage transform for the 5 scroll-driven feature overlays
 */
function applyStageTransform(el, p, start, enterEnd, exitStart, end, isFirst, isLast) {
  if (!el) return;

  let opacity = 0;
  let y = 64;
  let scale = 0.94;
  let blur = 8;

  if (p >= start && p <= end) {
    if (isFirst && p <= exitStart) {
      const drift = smoothstep(0, exitStart, p);
      opacity = 1;
      y = lerp(0, -24, drift);
      scale = lerp(1, 1.025, drift);
      blur = 0;
    } else if (p < enterEnd) {
      const t = smoothstep(start, enterEnd, p);
      opacity = t;
      y = lerp(64, 0, t);
      scale = lerp(0.94, 1, t);
      blur = lerp(8, 0, t);
    } else if (p <= exitStart || isLast) {
      const drift = smoothstep(enterEnd, exitStart, p);
      opacity = 1;
      y = lerp(0, -16, drift);
      scale = 1;
      blur = 0;
    } else {
      const t = smoothstep(exitStart, end, p);
      opacity = 1 - t;
      y = lerp(-16, -72, t);
      scale = lerp(1, 0.96, t);
      blur = lerp(0, 8, t);
    }
  }

  el.style.opacity = opacity.toFixed(3);
  el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
  el.style.filter = `blur(${blur.toFixed(1)}px)`;
}

function initKnopSequenceAndScroll() {
  const seqCanvas = document.getElementById("knop-sequence-canvas");
  const heroTrack = document.getElementById("hero-stage");
  const progressBar = document.getElementById("scroll-progress-bar");
  const navReadout = document.getElementById("nav-scroll-readout");
  const frameReadout = document.getElementById("frame-readout");
  const hudFrameCounter = document.getElementById("hud-frame-counter");
  const hudFrameFill = document.getElementById("hud-frame-fill");
  const hudBufferStatus = document.getElementById("hud-buffer-status");
  const heroRailFill = document.getElementById("hero-rail-fill");
  const railDots = document.querySelectorAll(".rail-dot");

  const featStages = [
    document.getElementById("hero-feat-0"),
    document.getElementById("hero-feat-1"),
    document.getElementById("hero-feat-2"),
    document.getElementById("hero-feat-3"),
    document.getElementById("hero-feat-4")
  ];

  if (!seqCanvas || !heroTrack) return;
  const ctx = seqCanvas.getContext("2d", { alpha: false });

  function resizeSeqCanvas() {
    seqCanvas.width = window.innerWidth;
    seqCanvas.height = window.innerHeight;
  }
  resizeSeqCanvas();
  window.addEventListener("resize", resizeSeqCanvas);

  /**
   * Draws two adjacent frames with sub-frame alpha blending so even slow
   * scrolling at the beginning looks 60fps silky-smooth with zero frame-stepping!
   */
  function drawBlendedFrames(exactFrameFloat, introScale) {
    const floorIdx = clamp(Math.floor(exactFrameFloat), 1, TOTAL_FRAMES);
    const ceilIdx = clamp(floorIdx + 1, 1, TOTAL_FRAMES);
    const blendAlpha = exactFrameFloat - floorIdx;

    const imgA = findNearestLoadedFrame(floorIdx);
    if (!imgA) return;

    const cw = seqCanvas.width;
    const ch = seqCanvas.height;
    const iw = imgA.naturalWidth || 1440;
    const ih = imgA.naturalHeight || 810;
    const scale = Math.max(cw / iw, ch / ih) * introScale;
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.globalAlpha = 1;
    ctx.drawImage(imgA, dx, dy, dw, dh);

    // Sub-frame cross-dissolve if the next frame is loaded
    const imgB = frameImages[ceilIdx];
    if (blendAlpha > 0.02 && imgB?.complete && imgB.naturalWidth > 0) {
      ctx.globalAlpha = blendAlpha;
      ctx.drawImage(imgB, dx, dy, dw, dh);
      ctx.globalAlpha = 1;
    }
  }

  // Beginning-First Sequential Preloader:
  // Loads Frames 1..60 sequentially FIRST so the beginning is 100% smooth immediately!
  const loadQueue = [];
  const queuedSet = new Set();

  function enqueueFrame(idx) {
    if (idx >= 1 && idx <= TOTAL_FRAMES && !queuedSet.has(idx)) {
      queuedSet.add(idx);
      loadQueue.push(idx);
    }
  }

  // 1. Load the first 65 frames in dense sequence so the beginning never skips a single frame!
  for (let i = 1; i <= 65; i++) enqueueFrame(i);
  // 2. Load every 2nd frame for the rest of the sequence
  for (let i = 66; i <= TOTAL_FRAMES; i += 2) enqueueFrame(i);
  // 3. Fill in all remaining frames
  for (let i = 67; i <= TOTAL_FRAMES; i++) enqueueFrame(i);

  let loadedCount = 0;
  let inFlight = 0;
  const MAX_CONCURRENT = 6; // WebP frames are only ~45KB each!

  function pumpQueue() {
    while (inFlight < MAX_CONCURRENT && loadQueue.length > 0) {
      const nextIdx = loadQueue.shift();
      inFlight++;
      const img = new Image();
      img.decoding = "async";
      img.src = getFastFramePath(nextIdx);

      img.onload = () => {
        inFlight--;
        loadedCount++;
        frameImages[nextIdx] = img;

        if (hudBufferStatus) {
          const pct = Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100));
          hudBufferStatus.textContent =
            pct < 100 ? `60FPS BUFFER (${pct}%)` : "240 FRAMES · 60FPS LOCKED";
        }
        pumpQueue();
      };

      img.onerror = () => {
        // Fallback to original PNG if WebP isn't present
        if (img.src.endsWith(".webp")) {
          img.src = getFallbackFramePath(nextIdx);
          return;
        }
        inFlight--;
        pumpQueue();
      };
    }
  }

  pumpQueue();

  let targetY = window.scrollY;
  let smoothY = window.scrollY;
  let lastY = window.scrollY;
  let smoothHeroProgress = 0;
  let smoothFrameFloat = 1;
  const startTimestamp = performance.now();

  window.addEventListener(
    "scroll",
    () => {
      targetY = window.scrollY;
      const delta = Math.abs(targetY - lastY);
      warpBoost = clamp(delta / 90, 0, 1.5);
      lastY = targetY;
    },
    { passive: true }
  );

  function tick(now) {
    // Ultra-silky exponential damping (0.085 factor eliminates mouse-wheel stepping)
    smoothY = lerp(smoothY, targetY, 0.085);
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const globalProgress = clamp(smoothY / maxScroll, 0, 1);

    if (progressBar) progressBar.style.width = `${(globalProgress * 100).toFixed(2)}%`;
    if (navReadout) navReadout.textContent = `${String(Math.round(globalProgress * 100)).padStart(2, "0")}%`;

    // Hero scroll progress (0.0 -> 1.0 across the 600vh track)
    const rect = heroTrack.getBoundingClientRect();
    const scrollableHero = Math.max(1, heroTrack.offsetHeight - window.innerHeight);
    const rawHeroProgress = clamp(-rect.top / scrollableHero, 0, 1);
    smoothHeroProgress = lerp(smoothHeroProgress, rawHeroProgress, 0.085);

    // Smooth opening intro breathing animation when at the very top of the page
    const elapsedSec = (now - startTimestamp) / 1000;
    const introEase = 1 - Math.pow(1 - clamp(elapsedSec / 2.2, 0, 1), 3);
    // Gentle idle breathing between frames 1 and 18 before the user scrolls
    const idleBreathingFrame = 1 + introEase * 12 + Math.sin(elapsedSec * 1.4) * 3;
    const idleWeight = clamp(1 - smoothHeroProgress * 14, 0, 1);

    const scrollTargetFrame = 1 + smoothHeroProgress * (TOTAL_FRAMES - 1);
    const blendedTargetFrame = lerp(scrollTargetFrame, Math.max(scrollTargetFrame, idleBreathingFrame), idleWeight);

    smoothFrameFloat = lerp(smoothFrameFloat, blendedTargetFrame, 0.12);
    const currentFrameInt = clamp(Math.round(smoothFrameFloat), 1, TOTAL_FRAMES);

    // Subtle cinematic zoom-out on load (1.06 -> 1.00)
    const introScale = lerp(1.06, 1.0, introEase);
    drawBlendedFrames(smoothFrameFloat, introScale);

    const paddedFrame = String(currentFrameInt).padStart(3, "0");
    if (frameReadout) frameReadout.textContent = `FRAME ${paddedFrame} / 240`;
    if (hudFrameCounter) hudFrameCounter.textContent = `FRAME ${paddedFrame} / 240`;
    if (hudFrameFill) hudFrameFill.style.width = `${(smoothHeroProgress * 100).toFixed(1)}%`;
    if (heroRailFill) heroRailFill.style.height = `${(smoothHeroProgress * 100).toFixed(1)}%`;

    // Continuously animate all 5 feature text overlays on top based on smoothHeroProgress
    const p = smoothHeroProgress;
    applyStageTransform(featStages[0], p, 0.0, 0.04, 0.14, 0.21, true, false);
    applyStageTransform(featStages[1], p, 0.18, 0.25, 0.35, 0.42, false, false);
    applyStageTransform(featStages[2], p, 0.39, 0.46, 0.56, 0.63, false, false);
    applyStageTransform(featStages[3], p, 0.60, 0.67, 0.77, 0.84, false, false);
    applyStageTransform(featStages[4], p, 0.81, 0.88, 0.98, 1.0, false, true);

    const activeStageIdx = clamp(Math.floor(p * 5), 0, 4);
    railDots.forEach((dot, idx) => {
      dot.classList.toggle("is-active", idx <= activeStageIdx);
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/* ============================================================================
   3. 3D STARFIELD & WARP DRIVE CANVAS ENGINE
   ============================================================================ */
function initCosmosCanvas() {
  const canvas = document.getElementById("cosmos-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const STAR_COUNT = 240;
  const stars = Array.from({ length: STAR_COUNT }, () => ({
    x: (Math.random() - 0.5) * width * 2,
    y: (Math.random() - 0.5) * height * 2,
    z: Math.random() * width,
    color: Math.random() > 0.78 ? "#00f0ff" : Math.random() > 0.55 ? "#ff2e4c" : "#ffffff"
  }));

  function renderStars() {
    ctx.fillStyle = "rgba(2, 3, 8, 0.4)";
    ctx.fillRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const speed = 2.0 + warpBoost * 24;
    warpBoost *= 0.92;

    for (let i = 0; i < STAR_COUNT; i++) {
      const s = stars[i];
      s.z -= speed;
      if (s.z <= 1) {
        s.z = width;
        s.x = (Math.random() - 0.5) * width * 2;
        s.y = (Math.random() - 0.5) * height * 2;
      }

      const sx = (s.x / s.z) * (width * 0.55) + cx;
      const sy = (s.y / s.z) * (height * 0.55) + cy;
      const radius = Math.max(0.4, (1 - s.z / width) * 2.5);

      if (sx >= 0 && sx < width && sy >= 0 && sy < height) {
        ctx.beginPath();
        ctx.fillStyle = s.color;
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    requestAnimationFrame(renderStars);
  }

  requestAnimationFrame(renderStars);
}

/* ============================================================================
   4. INTERACTIVE ORBITAL STAR MAP (11 WEBSITES ORBITING LIVE)
   ============================================================================ */
function initOrbitalStarMap() {
  const container = document.getElementById("orbital-nodes-container");
  const stage = document.getElementById("starmap-stage");
  if (!container || !stage) return;

  const radii = { 1: 95, 2: 165, 3: 235 };
  let isPaused = false;

  stage.addEventListener("mouseenter", () => {
    isPaused = true;
  });
  stage.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  const nodeElements = SPACE_PORTALS.map((portal, index) => {
    const a = document.createElement("a");
    a.href = portal.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "star-node";
    a.style.setProperty("--node-color", portal.accent);
    a.setAttribute("aria-label", `Launch ${portal.name}`);
    a.innerHTML = `
      <div class="star-node-orb">${portal.icon}</div>
      <span class="star-node-label">${portal.name}</span>
    `;
    container.appendChild(a);

    return {
      el: a,
      ring: portal.orbitRing,
      angle: (index / SPACE_PORTALS.length) * Math.PI * 2,
      speed: (0.0045 / portal.orbitRing) * (portal.orbitRing % 2 === 0 ? -1 : 1)
    };
  });

  function animateOrbit() {
    if (!isPaused) {
      const rect = stage.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const scaleFactor = Math.min(1, rect.width / 560);

      nodeElements.forEach((n) => {
        n.angle += n.speed;
        const r = radii[n.ring] * scaleFactor;
        const x = cx + Math.cos(n.angle) * r;
        const y = cy + Math.sin(n.angle) * r;
        n.el.style.left = `${x}px`;
        n.el.style.top = `${y}px`;
      });
    }
    requestAnimationFrame(animateOrbit);
  }

  requestAnimationFrame(animateOrbit);
}

/* ============================================================================
   5. RENDER THE 11 HOLOGRAPHIC PORTAL CARDS, FILTERS & PRICING
   ============================================================================ */
function renderPortalCards(filter = "all") {
  const grid = document.getElementById("portals-grid");
  if (!grid) return;

  const filtered =
    filter === "all"
      ? SPACE_PORTALS
      : SPACE_PORTALS.filter((item) => item.category === filter);

  grid.innerHTML = filtered
    .map(
      (portal, i) => `
      <article
        class="portal-card fm-reveal is-inview"
        style="--portal-accent: ${portal.accent}; --portal-glow: ${portal.glow}; transition-delay: ${(i % 3) * 60}ms"
        role="listitem"
      >
        <div>
          <div class="portal-visual-banner">
            <div class="portal-cyber-grid" aria-hidden="true"></div>
            <div class="portal-orbit-ring" aria-hidden="true"></div>
            <span class="portal-sector-tag">${portal.sector}</span>
            <span class="portal-live-dot" title="Online"></span>
            <div class="portal-icon-medallion" aria-hidden="true">
              ${portal.icon}
            </div>
          </div>

          <div class="portal-body">
            <span class="portal-short-tag">${portal.tag}</span>
            <h3 class="portal-title">${portal.name}</h3>
            <span class="portal-host">↗ ${portal.host}</span>
          </div>
        </div>

        <div style="padding: 0 1.4rem 1.4rem;">
          <a
            href="${portal.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="portal-launch-btn"
            aria-label="Open ${portal.name} in new tab"
          >
            <span>Engage Portal</span>
            <span aria-hidden="true">⚡</span>
          </a>
        </div>
      </article>
    `
    )
    .join("");
}

function initFiltersAndReveals() {
  const chips = document.querySelectorAll(".filter-chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      renderPortalCards(chip.dataset.filter || "all");
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Number(entry.target.dataset.fmDelay || 0);
          setTimeout(() => entry.target.classList.add("is-inview"), delay);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".fm-reveal").forEach((el) => observer.observe(el));

  const btns = document.querySelectorAll(".cadence-btn");
  const figures = document.querySelectorAll(".price-figure");
  const periods = document.querySelectorAll(".price-period");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cadence = btn.dataset.cadence || "monthly";
      btns.forEach((b) => b.classList.toggle("is-active", b === btn));

      figures.forEach((f) => {
        const val = f.getAttribute(`data-price-${cadence}`);
        if (val !== null) f.textContent = val;
      });
      periods.forEach((p) => {
        const val = p.getAttribute(`data-period-${cadence}`);
        if (val !== null) p.textContent = val;
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initKnopSequenceAndScroll();
  initCosmosCanvas();
  renderPortalCards("all");
  initOrbitalStarMap();
  initFiltersAndReveals();
});
