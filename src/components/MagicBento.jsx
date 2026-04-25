// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";

// <style>
// {`
// .magic-card {
//   position: relative;
//   border-radius: 16px;
// }

// .magic-card::after {
//   content: '';
//   position: absolute;
//   inset: 0;
//   padding: 2px;
//   border-radius: inherit;

//   background: radial-gradient(
//     var(--glow-radius, 200px) circle at var(--glow-x, 50%) var(--glow-y, 50%),
//     rgba(var(--glow-color, 132,0,255), calc(var(--glow-intensity, 0) * 0.8)) 0%,
//     rgba(var(--glow-color, 132,0,255), calc(var(--glow-intensity, 0) * 0.4)) 30%,
//     transparent 60%
//   );

//   -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//   -webkit-mask-composite: xor;
//   mask-composite: exclude;

//   pointer-events: none;
//   transition: opacity 0.2s ease;
// }
// `}
// </style>


// const MagicBento = ({
//   children,
//   className = "",
//   particleCount = 10,
//   glowColor = "132, 0, 255",
//   enableTilt = false,
//   enableMagnetism = false,
//   clickEffect = true,
// }) => {
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const el = cardRef.current;
//     if (!el) return;

//     let particles = [];

//     const createParticle = (x, y) => {
//       const p = document.createElement("div");
//       p.style.cssText = `
//         position:absolute;
//         width:4px;
//         height:4px;
//         border-radius:50%;
//         background:rgba(${glowColor},1);
//         box-shadow:0 0 6px rgba(${glowColor},0.6);
//         pointer-events:none;
//         z-index:100;
//         left:${x}px;
//         top:${y}px;
//       `;
//       return p;
//     };

//     const spawnParticles = () => {
//       const rect = el.getBoundingClientRect();

//       for (let i = 0; i < particleCount; i++) {
//         const p = createParticle(
//           Math.random() * rect.width,
//           Math.random() * rect.height
//         );

//         el.appendChild(p);
//         particles.push(p);

//         gsap.fromTo(
//           p,
//           { scale: 0, opacity: 0 },
//           { scale: 1, opacity: 1, duration: 0.3 }
//         );

//         gsap.to(p, {
//           x: (Math.random() - 0.5) * 80,
//           y: (Math.random() - 0.5) * 80,
//           duration: 2,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//         });
//       }
//     };

//     const clearParticles = () => {
//       particles.forEach((p) => {
//         gsap.to(p, {
//           scale: 0,
//           opacity: 0,
//           duration: 0.3,
//           onComplete: () => p.remove(),
//         });
//       });
//       particles = [];
//     };

//     const handleEnter = () => {
//       spawnParticles();
//       gsap.to(el, { scale: 1.02, duration: 0.2 });
//     };

//     const handleLeave = () => {
//       clearParticles();
//       gsap.to(el, { scale: 1, duration: 0.2 });
//       gsap.to(el, { x: 0, y: 0, rotateX: 0, rotateY: 0 });
//     };

//     const handleMove = (e) => {
//       const rect = el.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;

//       if (enableTilt) {
//         const rotateX = ((y - centerY) / centerY) * -8;
//         const rotateY = ((x - centerX) / centerX) * 8;

//         gsap.to(el, {
//           rotateX,
//           rotateY,
//           duration: 0.1,
//           transformPerspective: 800,
//         });
//       }

//       if (enableMagnetism) {
//         gsap.to(el, {
//           x: (x - centerX) * 0.05,
//           y: (y - centerY) * 0.05,
//           duration: 0.2,
//         });
//       }
//     };

//     const handleClick = (e) => {
//       if (!clickEffect) return;

//       const rect = el.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       const ripple = document.createElement("div");

//       ripple.style.cssText = `
//         position:absolute;
//         width:200px;
//         height:200px;
//         border-radius:50%;
//         background:radial-gradient(circle, rgba(${glowColor},0.4) 0%, transparent 70%);
//         left:${x - 100}px;
//         top:${y - 100}px;
//         pointer-events:none;
//       `;

//       el.appendChild(ripple);

//       gsap.fromTo(
//         ripple,
//         { scale: 0, opacity: 1 },
//         {
//           scale: 2,
//           opacity: 0,
//           duration: 0.6,
//           onComplete: () => ripple.remove(),
//         }
//       );
//     };

//     el.addEventListener("mouseenter", handleEnter);
//     el.addEventListener("mouseleave", handleLeave);
//     el.addEventListener("mousemove", handleMove);
//     el.addEventListener("click", handleClick);

//     return () => {
//       el.removeEventListener("mouseenter", handleEnter);
//       el.removeEventListener("mouseleave", handleLeave);
//       el.removeEventListener("mousemove", handleMove);
//       el.removeEventListener("click", handleClick);
//       clearParticles();
//     };
//   }, [particleCount, glowColor, enableTilt, enableMagnetism, clickEffect]);

//   return (
//     <div ref={cardRef} className={`relative overflow-hidden ${className}`}>
//       {children}
//     </div>
//   );
// };

// export default MagicBento;




import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const MagicBento = ({
  children,
  className = "",
  particleCount = 10,
  glowColor = "132, 0, 255",
  enableTilt = false,
  enableMagnetism = false,
  clickEffect = true,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    let particles = [];

    const createParticle = (x, y) => {
      const p = document.createElement("div");
      p.style.cssText = `
        position:absolute;
        width:4px;
        height:4px;
        border-radius:50%;
        background:rgba(${glowColor},1);
        box-shadow:0 0 6px rgba(${glowColor},0.6);
        pointer-events:none;
        z-index:100;
        left:${x}px;
        top:${y}px;
      `;
      return p;
    };

    const spawnParticles = () => {
      const rect = el.getBoundingClientRect();

      for (let i = 0; i < particleCount; i++) {
        const p = createParticle(
          Math.random() * rect.width,
          Math.random() * rect.height
        );

        el.appendChild(p);
        particles.push(p);

        gsap.fromTo(
          p,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3 }
        );

        gsap.to(p, {
          x: (Math.random() - 0.5) * 80,
          y: (Math.random() - 0.5) * 80,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    };

    const clearParticles = () => {
      particles.forEach((p) => {
        gsap.to(p, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          onComplete: () => p.remove(),
        });
      });
      particles = [];
    };

    const handleEnter = () => {
      spawnParticles();
      gsap.to(el, { scale: 1.02, duration: 0.2 });
    };

    const handleLeave = () => {
      clearParticles();
      gsap.to(el, { scale: 1, duration: 0.2 });
      gsap.to(el, { x: 0, y: 0, rotateX: 0, rotateY: 0 });

      // remove glow
      el.style.setProperty("--glow-intensity", "0");
    };

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // 🔥 glow logic
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;

      el.style.setProperty("--glow-x", `${percentX}%`);
      el.style.setProperty("--glow-y", `${percentY}%`);
      el.style.setProperty("--glow-intensity", "1");
      el.style.setProperty("--glow-radius", "300px");
      el.style.setProperty("--glow-color", glowColor);

      // tilt
      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        gsap.to(el, {
          rotateX,
          rotateY,
          duration: 0.1,
          transformPerspective: 800,
        });
      }

      // magnetism
      if (enableMagnetism) {
        gsap.to(el, {
          x: (x - centerX) * 0.05,
          y: (y - centerY) * 0.05,
          duration: 0.2,
        });
      }
    };

    const handleClick = (e) => {
      if (!clickEffect) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement("div");

      ripple.style.cssText = `
        position:absolute;
        width:200px;
        height:200px;
        border-radius:50%;
        background:radial-gradient(circle, rgba(${glowColor},0.4) 0%, transparent 70%);
        left:${x - 100}px;
        top:${y - 100}px;
        pointer-events:none;
      `;

      el.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 2,
          opacity: 0,
          duration: 0.6,
          onComplete: () => ripple.remove(),
        }
      );
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("click", handleClick);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("click", handleClick);
      clearParticles();
    };
  }, [particleCount, glowColor, enableTilt, enableMagnetism, clickEffect]);

  return (
    <>
      {/* 🔥 Glow CSS */}
      <style>
        {`
        .magic-card {
          position: relative;
          border-radius: 16px;
        }

        .magic-card::after {
          content: '';
          position: absolute;
          inset: 0;
          padding: 5px;
          border-radius: inherit;

          background: radial-gradient(
            var(--glow-radius, 200px) circle at var(--glow-x, 50%) var(--glow-y, 50%),
            rgba(var(--glow-color, 132,0,255), calc(var(--glow-intensity, 0) * 0.8)) 0%,
            rgba(var(--glow-color, 132,0,255), calc(var(--glow-intensity, 0) * 0.4)) 30%,
            transparent 60%
          );

          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;

          pointer-events: none;
        }
        `}
      </style>

      <div
        ref={cardRef}
        className={`magic-card relative overflow-hidden ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default MagicBento;