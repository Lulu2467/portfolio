import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { cardFrag, cardVert, frag, vert } from "./shaders";

const damp = (a, b, k = 0.09, r = 1) => {
  const t = 1 - Math.exp(Math.log(1 - k) * r);
  return a + (b - a) * t;
};

function paintProfileCard(profile) {
  const w = 900;
  const h = 1200;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  roundRect(ctx, 0, 0, w, h, 48);
  ctx.fill();

  ctx.fillStyle = "#111";
  ctx.font = "600 72px 'Noto Serif SC', serif";
  ctx.fillText(profile.name, 64, 140);
  ctx.fillStyle = "#777";
  ctx.font = "400 28px 'Noto Sans SC', sans-serif";
  ctx.fillText(profile.title, 64, 200);

  ctx.fillStyle = "#111";
  ctx.font = "600 34px 'Noto Sans SC', sans-serif";
  ctx.fillText("今天", 64, 320);
  ctx.fillStyle = "#333";
  ctx.font = "400 28px 'Noto Sans SC', sans-serif";
  wrapText(
    ctx,
    "2026 届湖北美术学院艺术与科技。正在看 AI 产品设计与体验设计岗位。",
    64,
    380,
    w - 128,
    42,
  );

  ctx.fillStyle = "#111";
  ctx.font = "600 34px 'Noto Sans SC', sans-serif";
  ctx.fillText("背景", 64, 560);
  ctx.fillStyle = "#333";
  ctx.font = "400 28px 'Noto Sans SC', sans-serif";
  wrapText(
    ctx,
    `${profile.school} · ${profile.major} · 辅修${profile.minor}。GPA ${profile.gpa}。设计 AI 产品里的操作，也设计人在空间里怎么走。`,
    64,
    620,
    w - 128,
    42,
  );

  ctx.fillStyle = "#999";
  ctx.font = "400 22px 'Noto Sans SC', sans-serif";
  ctx.fillText("向下滚动 · 作品在液态玻璃下融化", 64, h - 64);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return { texture: tex, aspect: w / h };
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxW, lineH) {
  let line = "";
  let yy = y;
  for (const ch of text) {
    const test = line + ch;
    if (ctx.measureText(test).width > maxW) {
      ctx.fillText(line, x, yy);
      line = ch;
      yy += lineH;
    } else line = test;
  }
  if (line) ctx.fillText(line, x, yy);
}

/**
 * Vertical card deck + top/bottom liquid-glass lens (WebGL).
 * Inspired by z1han Liquid Lens / Genie liquid slider technique.
 */
export default function LiquidDeck({ profile, cards }) {
  const hostRef = useRef(null);
  const labelRef = useRef(null);
  const navigate = useNavigate();
  const navRef = useRef(navigate);
  navRef.current = navigate;

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const glOk = (() => {
      try {
        const c = document.createElement("canvas");
        return !!(c.getContext("webgl2") || c.getContext("webgl"));
      } catch {
        return false;
      }
    })();

    if (reduce || !glOk) {
      host.dataset.fallback = "1";
      return undefined;
    }

    let width = host.clientWidth;
    let height = host.clientHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let disposed = false;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height);
    renderer.setClearColor(0xededed, 1);
    renderer.domElement.className = "liquid-canvas";
    host.appendChild(renderer.domElement);

    const mediaScene = new THREE.Scene();
    const mediaGroup = new THREE.Group();
    mediaScene.add(mediaGroup);
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(70, width / height, 100, 2000);
    camera.position.set(0, 0, 600);

    const geo = new THREE.PlaneGeometry(1, 1);
    const loader = new THREE.TextureLoader();

    const profilePaint = paintProfileCard(profile);
    const items = [
      {
        slug: null,
        title: profile.name,
        summary: profile.title,
        texture: profilePaint.texture,
        natural: new THREE.Vector2(900, 1200),
      },
      ...cards.map((c) => ({
        slug: c.slug,
        title: c.title,
        summary: c.summary,
        texture: null,
        src: c.cover,
        natural: new THREE.Vector2(1, 1),
      })),
    ];

    const meshes = items.map((item, index) => {
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          tex: { value: item.texture },
          ns: { value: item.natural.clone() },
          ps: { value: new THREE.Vector2(1, 1) },
        },
        transparent: true,
        vertexShader: cardVert,
        fragmentShader: cardFrag,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      mediaGroup.add(mesh);

      if (item.src) {
        loader.load(item.src, (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          const img = tex.image;
          mat.uniforms.tex.value = tex;
          mat.uniforms.ns.value.set(img.naturalWidth || img.width, img.naturalHeight || img.height);
        });
      }

      return { mesh, mat, item, index };
    });

    const rt = new THREE.WebGLRenderTarget(width * dpr, height * dpr, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
    });

    const lensMat = new THREE.ShaderMaterial({
      uniforms: {
        tex: { value: null },
        resolution: { value: new THREE.Vector2(width * dpr, height * dpr) },
        // Original Genie / z1han liquid-lens params
        rf: { value: 1.971 },
        dp: { value: 0.25 },
        colSt: { value: 0.35 },
        col: { value: new THREE.Color("#000000") },
        zm: { value: 1 },
      },
      vertexShader: vert,
      fragmentShader: frag,
    });
    const frame = new THREE.Mesh(geo, lensMat);
    scene.add(frame);

    const scroll = { c: 0, t: 0 };
    let gap = 28;
    let cardH = 0;
    let cardW = 0;
    let clockLast = performance.now();
    let snapTimer = 0;

    const layout = () => {
      width = host.clientWidth;
      height = host.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height);
      rt.setSize(width * dpr, height * dpr);
      lensMat.uniforms.resolution.value.set(width * dpr, height * dpr);
      frame.scale.set(width, height, 1);
      camera.aspect = width / height;
      camera.fov = 2 * Math.atan(height / 2 / 600) * (180 / Math.PI);
      camera.updateProjectionMatrix();

      // z1han mobile: ~349×582 in 384×775 → ≈91% × 75%
      cardW = width * 0.91;
      cardH = height * 0.75;
      gap = height * 0.045;
      meshes.forEach(({ mesh, mat }) => {
        mesh.scale.set(cardW, cardH, 1);
        mat.uniforms.ps.value.set(cardW, cardH);
      });
      placeFixed(scroll.c);
      updateLabel();
    };

    const placeFixed = (s) => {
      const stride = cardH + gap;
      // Center card in the clear lens interior
      const topPad = (height - cardH) / 2;
      meshes.forEach(({ mesh }, i) => {
        const top = topPad + i * stride - s;
        mesh.position.x = 0;
        mesh.position.y = height / 2 - top - cardH / 2;
      });
    };

    const activeIndex = () => {
      const stride = cardH + gap;
      return Math.max(0, Math.min(meshes.length - 1, Math.round(scroll.t / stride)));
    };

    const updateLabel = () => {
      const i = activeIndex();
      const item = items[i];
      if (!labelRef.current || !item) return;
      labelRef.current.innerHTML = `<strong>${item.title}</strong><span>${item.summary || ""}</span>`;
    };

    const onWheel = (e) => {
      e.preventDefault();
      scroll.t += e.deltaY;
      const max = (cardH + gap) * (meshes.length - 1);
      scroll.t = Math.max(0, Math.min(max, scroll.t));
      window.clearTimeout(snapTimer);
      snapTimer = window.setTimeout(() => {
        const stride = cardH + gap;
        scroll.t = Math.round(scroll.t / stride) * stride;
        updateLabel();
      }, 140);
    };

    let touchY = 0;
    const onTouchStart = (e) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      const y = e.touches[0].clientY;
      scroll.t += touchY - y;
      touchY = y;
      const max = (cardH + gap) * (meshes.length - 1);
      scroll.t = Math.max(0, Math.min(max, scroll.t));
    };
    const onTouchEnd = () => {
      const stride = cardH + gap;
      scroll.t = Math.round(scroll.t / stride) * stride;
      updateLabel();
    };

    const onClick = () => {
      const item = items[activeIndex()];
      if (item?.slug) navRef.current(`/work/${item.slug}`);
    };

    const render = () => {
      if (disposed) return;
      const now = performance.now();
      const ratio = (now - clockLast) / (1000 / 60);
      clockLast = now;
      scroll.c = damp(scroll.c, scroll.t, 0.09, ratio);
      placeFixed(scroll.c);
      updateLabel();

      renderer.setRenderTarget(rt);
      renderer.setClearColor(0xededed, 1);
      renderer.clear();
      renderer.render(mediaScene, camera);
      renderer.setRenderTarget(null);
      lensMat.uniforms.tex.value = rt.texture;
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };

    layout();
    updateLabel();
    host.addEventListener("wheel", onWheel, { passive: false });
    host.addEventListener("touchstart", onTouchStart, { passive: true });
    host.addEventListener("touchmove", onTouchMove, { passive: true });
    host.addEventListener("touchend", onTouchEnd);
    host.addEventListener("click", onClick);
    window.addEventListener("resize", layout);
    requestAnimationFrame(render);

    return () => {
      disposed = true;
      window.clearTimeout(snapTimer);
      host.removeEventListener("wheel", onWheel);
      host.removeEventListener("touchstart", onTouchStart);
      host.removeEventListener("touchmove", onTouchMove);
      host.removeEventListener("touchend", onTouchEnd);
      host.removeEventListener("click", onClick);
      window.removeEventListener("resize", layout);
      rt.dispose();
      geo.dispose();
      lensMat.dispose();
      meshes.forEach(({ mat, item }) => {
        mat.dispose();
        item.texture?.dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
    };
  }, [profile, cards]);

  return (
    <div className="liquid-root">
      <div className="liquid-topbar">
        <span className="liquid-brand">YANG XINYUE</span>
        <span className="liquid-hint">滚动 · 液态玻璃</span>
      </div>
      <div className="liquid-host" ref={hostRef} />
      <div className="liquid-label" ref={labelRef} />
      <div className="liquid-fallback">
        {cards.map((c) => (
          <a key={c.slug} href={`/work/${c.slug}`}>
            <img src={c.cover} alt="" />
            <span>{c.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
