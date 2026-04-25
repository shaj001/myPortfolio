// import React, { useState, useEffect } from 'react';
// import { 
//   Code2, 
//   Terminal,
//   Shield, 
//   Cloud,
//   Circle
// } from 'lucide-react';

// const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState(0);

//   const categories = [
//     {
//       id: 0,
//       name: "Frontend",
//       icon: <Code2 className="w-4 h-4" />,
//       skills: ["React", "TypeScript", "Tailwind", "Next.js", "Framer Motion", "Three.js"]
//     },
//     {
//       id: 1,
//       name: "Backend",
//       icon: <Terminal className="w-4 h-4" />,
//       skills: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "GraphQL"]
//     },
//     {
//       id: 2,
//       name: "DevOps",
//       icon: <Cloud className="w-4 h-4" />,
//       skills: ["AWS", "Docker", "Terraform", "CI/CD", "Nginx", "Kubernetes"]
//     },
//     {
//       id: 3,
//       name: "Security",
//       icon: <Shield className="w-4 h-4" />,
//       skills: ["OAuth", "JWT", "Encryption", "OWASP", "Auth0", "Pen-testing"]
//     }
//   ];

//   // Subtle star field
//   const [stars, setStars] = useState([]);
//   useEffect(() => {
//     const s = Array.from({ length: 40 }).map((_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 1.5,
//       opacity: Math.random() * 0.5 + 0.2
//     }));
//     setStars(s);
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#050505] text-slate-300 font-light flex flex-col items-center justify-center p-8 overflow-hidden relative">
      
//       {/* Subtle Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         {stars.map((star) => (
//           <div
//             key={star.id}
//             className="absolute bg-white rounded-full transition-opacity duration-1000"
//             style={{
//               left: `${star.x}%`,
//               top: `${star.y}%`,
//               width: `${star.size}px`,
//               height: `${star.size}px`,
//               opacity: star.opacity,
//               boxShadow: star.opacity > 0.5 ? '0 0 4px #fff' : 'none'
//             }}
//           />
//         ))}
//         {/* Distant Planet Curve (Minimalist) */}
//         <div className="absolute -bottom-[40vh] -left-[10vw] w-[120vw] h-[80vh] border-t border-white/[0.03] rounded-[100%] opacity-50" />
//       </div>

//       <div className="max-w-4xl w-full relative z-10">
        
//         {/* Header */}
//         <header className="mb-20 space-y-4">
//           <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-slate-500">
//             <div className="w-8 h-[1px] bg-slate-800" />
//             <span>Navigation Systems</span>
//           </div>
//           <h1 className="text-4xl font-extralight tracking-tight text-white">
//             Technical <span className="font-medium text-slate-400">Inventory</span>
//           </h1>
//         </header>

//         {/* Interaction Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
//           {/* Category List */}
//           <div className="md:col-span-4 space-y-6">
//             {categories.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => setActiveCategory(cat.id)}
//                 className={`flex items-center gap-4 w-full text-left transition-all duration-500 group ${
//                   activeCategory === cat.id ? 'translate-x-2' : 'opacity-40 hover:opacity-70'
//                 }`}
//               >
//                 <div className={`w-[2px] h-8 transition-colors duration-500 ${
//                   activeCategory === cat.id ? 'bg-white' : 'bg-white/10'
//                 }`} />
//                 <div>
//                   <span className="text-[10px] uppercase tracking-widest block mb-1 opacity-50">Sector 0{cat.id + 1}</span>
//                   <span className={`text-lg tracking-wide ${activeCategory === cat.id ? 'text-white' : ''}`}>
//                     {cat.name}
//                   </span>
//                 </div>
//               </button>
//             ))}
//           </div>

//           {/* Skill Visualization */}
//           <div className="md:col-span-8 min-h-[300px] relative">
//             <div className="absolute inset-0 bg-white/[0.01] border border-white/[0.05] rounded-sm backdrop-blur-3xl" />
            
//             <div className="relative p-10 h-full flex flex-col justify-between">
//               <div className="flex flex-wrap gap-x-12 gap-y-8">
//                 {categories[activeCategory].skills.map((skill, i) => (
//                   <div 
//                     key={skill}
//                     className="group relative animate-in fade-in slide-in-from-left-4 duration-500"
//                     style={{ animationDelay: `${i * 50}ms` }}
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className="w-1.5 h-1.5 rounded-full border border-white/20 group-hover:bg-white group-hover:border-white transition-all duration-300" />
//                       <span className="text-sm tracking-widest text-slate-400 group-hover:text-white transition-colors duration-300">
//                         {skill}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Minimal Decorative Ornament */}
//               <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] tracking-widest uppercase text-slate-600">
//                 <div className="flex items-center gap-2">
//                   <Circle className="w-2 h-2 fill-current opacity-20" />
//                   <span>Subsystem Ready</span>
//                 </div>
//                 <span>MT-01 // STATUS: NOMINAL</span>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Footer Detail */}
//         <footer className="mt-20 flex justify-end">
//           <div className="text-[9px] uppercase tracking-[0.5em] text-slate-700 writing-vertical select-none">
//             Exploring the void since 2020
//           </div>
//         </footer>

//       </div>
//     </div>
//   );
// };

// export default App;

// function App() {
//   return <SkillsSection />;
// }


// 


import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text, Line } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

/* ---------------- SKILL DATA ---------------- */

const layers = [
  {
    radius: 3,
    speed: 0.6,
    skills: ["React", "Node.js", "Python"],
  },
  {
    radius: 5,
    speed: 0.4,
    skills: ["AI/ML", "Next.js", "PostgreSQL"],
  },
  {
    radius: 7,
    speed: 0.25,
    skills: ["Three.js", "System Design", "Docker"],
  },
];

/* ---------------- PLANET ---------------- */

function Planet({ name, radius, speed, index, onClick }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    ref.current.position.x = Math.cos(t + index) * radius;
    ref.current.position.z = Math.sin(t + index) * radius;
  });

  return (
    <group ref={ref}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => onClick(name)}
        scale={hovered ? 1.6 : 1}
      >
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color={hovered ? "#ff4dff" : "#ffffff"}
          emissive={hovered ? "#ff00ff" : "#222"}
          emissiveIntensity={hovered ? 1.5 : 0.3}
        />
      </mesh>

      {hovered && (
        <Text
          position={[0, 0.8, 0]}
          fontSize={0.35}
          color="white"
          anchorX="center"
        >
          {name}
        </Text>
      )}
    </group>
  );
}

/* ---------------- ORBIT RING ---------------- */

function OrbitRing({ radius }) {
  const points = [];
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
  }

  return (
    <Line
      points={points}
      color="#444"
      lineWidth={1}
      transparent
      opacity={0.3}
    />
  );
}

/* ---------------- CORE ---------------- */

function Core() {
  return (
    <mesh>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color="#00ffff"
        emissive="#0088ff"
        emissiveIntensity={2}
      />
    </mesh>
  );
}

/* ---------------- CAMERA FOCUS ---------------- */

function CameraController({ target }) {
  const { camera } = useThree();

  useFrame(() => {
    if (!target) return;
    camera.position.lerp(
      new THREE.Vector3(target.x + 2, 2, target.z + 2),
      0.05
    );
    camera.lookAt(target);
  });

  return null;
}

/* ---------------- MAIN ---------------- */

export default function SkillsOrbitInsane() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="h-screen bg-black">
      <Canvas camera={{ position: [0, 6, 12] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} intensity={2.5} />

        {/* Core */}
        <Core />

        {/* Layers */}
        {layers.map((layer, i) => (
          <group key={i}>
            <OrbitRing radius={layer.radius} />

            {layer.skills.map((skill, j) => (
              <Planet
                key={j}
                name={skill}
                radius={layer.radius}
                speed={layer.speed}
                index={j}
                onClick={(name) => {
                  console.log("Clicked:", name);
                  setSelected({ x: 0, z: 0 }); // placeholder
                }}
              />
            ))}
          </group>
        ))}

        <OrbitControls enableZoom enablePan={false} />

        <CameraController target={selected} />
      </Canvas>
    </div>
  );
}