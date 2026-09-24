import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

export default function ConnectedDotsBackground() {
  const [init, setInit] = useState(false);

  // تهيئة المحرك عند تشغيل التطبيق لأول مرة
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null; // لا ترسم شيئاً حتى يتم التهيئة

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false }, // يجعل الجزيئات تلتزم بحجم الـ Container
        background: {
          color: { value: "transparent" } // اجعلها شفافة لترى ما خلفها في App.js
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              links: { opacity: 0.8 }
            }
          }
        },
        particles: {
          color: { value: "#0e6157" },
          links: {
            color: "#94f6db",
            distance: 130,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.8,
            outModes: { default: "bounce" }
          },
          number: {
            density: { enable: true, area: 800 },
            value: 500
          },
          opacity: { value: 0.6 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } }
        },
        detectRetina: true
      }}
      className="w-full h-full" // تأكد من أخذ كامل المساحة
    />
  );
}