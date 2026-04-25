import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HeadphoneOff, Headphones } from "lucide-react";

const BgMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showToast, setShowToast] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  // Auto-hide toast after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowToast(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard shortcut 'M' to toggle music
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key.toLowerCase() === "m") {
        toggleMusic();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying]);

  const toggleMusic = () => {
    setShowToast(false); // Hide toast as soon as user interacts with music
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} src="public/assets/bg_assets/bg_music.mp3" loop preload="auto" />

      {/* MUSIC TOGGLE */}
      <button
        onClick={toggleMusic}
        className="flex sm:absolute sm:left-0 items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
        title="Toggle Music"
      >
        {isPlaying ? <Headphones size={20} /> : <HeadphoneOff size={20} />}
      </button>

      {/* Music Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md border border-purple-500/30 shadow-xl shadow-indigo-900/30 rounded-xl p-4 items-start gap-4 w-[90%] sm:w-auto max-w-xs"
          >
            <div className="mt-0.5 text-indigo-400">
              <Headphones size={20} />
            </div>
            <div className="flex-1">
              <h4 className="text-white text-sm font-semibold">Enhance your experience</h4>
              <p className="text-neutral-400 text-xs mt-1 leading-relaxed hidden sm:block">
                Press 'M' or toggle the music icon on the top left of the navigation bar and enjoy the journey!
              </p>
              <p className="text-neutral-400 text-xs mt-1 leading-relaxed sm:hidden">
                Toggle the music icon next to the menu button and enjoy the journey!
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BgMusic;