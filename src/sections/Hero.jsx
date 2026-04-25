import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText.jsx";
import { Astronaut } from "../components/Astronaut.jsx";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader.jsx";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
      id="home"
    >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-333px] left-0 w-full h-full object-cover -z-20 opacity-95"
        style={{ clipPath: "inset(0 0 45% 0)" }}
      >
        <source src="/assets/bg_assets/blackhole.webm" type="video/webm" />
      </video>


      <div className="">
        <HeroText />
      </div>

      <div>
        <figure
          className="absolute inset-0 mt-[200px] -z-20 md:mt-35 md:ml-45"
          style={{ width: "100%", height: "80vh" }}
        >
          <Canvas camera={{ position: [0, 1, 3] }}>
            <Suspense fallback={<Loader />}>
              <Float>
                <Astronaut
                  scale={isMobile && 0.15}
                  position={isMobile && [0, -1.5, 0]}
                />
              </Float>
              <Rig />
            </Suspense>
          </Canvas>
        </figure>
      </div>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta,
    );
  });
}

export default Hero;
