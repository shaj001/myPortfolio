import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "cpp",
    "css",
    "express",
    "git",
    "github",
    "html",
    "javascript",
    "linux",
    "mongodb",
    "NextJs",
    "nodejs",
    "numpy",
    "pandas",
    "python",
    "react",
    "sql",
    "tailwindcss",
    "threejs",
    "ubuntu",
    "vscode",
    "vitejs",
    "wordpress",
    "docker",
    "typescript",
    "django",
    "flask",
    "postgresql",
    "figma",
    "java",
  ];

  // Split into two balanced groups
  const innerSkills = skills.slice(12);
  const outerSkills = skills.slice(5);

  return (
    <div className="relative flex h-[15rem] w-full items-center justify-center overflow-hidden">
      
      {/* Inner Circle */}
      <OrbitingCircles iconSize={25} radius={100} >
        
        {innerSkills.map((skill, index) => (
          <Icon key={skill + index} src={`/assets/Icons/techIcons/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      {/* Outer Circle */}
      <OrbitingCircles iconSize={30} radius={180} reverse speed={1.5}>
        {outerSkills.map((skill, index) => (
          <Icon key={skill + index} src={`/assets/Icons/techIcons/${skill}.svg`} />
        ))}
      </OrbitingCircles>

    </div>
  );
}

const Icon = ({ src }) => (
  <img
    src={src}
    alt="tech icon"
    className="rounded-sm transition-transform duration-200 hover:scale-110"
  />
);