import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "sharad93100@email.com";

  const copyToClipboard = async () => {
    try {
      // Modern Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older mobile browsers
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);

    } catch (err) {
      alert("Copy failed. Please copy manually.");
    }
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-2 text-xs text-center rounded-full border border-purple-500/20 shadow-xl shadow-indigo-900/30 font-extralight w-[11rem] cursor-pointer overflow-hidden  hover:bg-indigo-700 active:scale-95 active:bg-indigo-700 transition duration-150 ease-in-out"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            key="copied"
            className="flex items-center justify-center gap-2 text-neutral-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1 }}
          >
            <img src="/assets/Icons/otherIcons/copy-done.svg" className="w-5 opacity-70" alt="copy Icon" />
            Email Copied ✓
          </motion.p>
        ) : (
          <motion.p
            key="copy"
            className="flex items-center justify-center gap-2 text-neutral-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img src="/assets/Icons/otherIcons/copy.svg" className="w-5 opacity-70" alt="copy icon" />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;