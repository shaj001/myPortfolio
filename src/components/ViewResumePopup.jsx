import { useState } from "react";
import { createPortal } from "react-dom";

function ViewResumeButton() {
  const [isOpen, setIsOpen] = useState(false);

  const Modal = () =>
    createPortal(
      <div
        onClick={() => setIsOpen(false)} // outside click closes
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      >
        <div
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          className="relative bg-white w-[95%] md:w-[70%] h-[85%] rounded-lg shadow-xl animate-fadeIn"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded"
          >
            ✕
          </button>

          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>,
      document.getElementById("modal-root"),
    );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex justify-center items-center gap-2 text-[10px] md:text-base 
        bg-gray-600 text-white px-4 py-2 rounded-lg cursor-pointer 
        hover:-translate-y-1 hover:bg-indigo-700
        active:scale-95 active:bg-indigo-700
        transition duration-150 ease-in-out"
      >
        View Resume
        <img
          src="/assets/logos/viewIcon.png"
          alt="view"
          className="w-auto h-4 invert"
        />
      </button>

      {isOpen && <Modal />}
    </>
  );
}

export default ViewResumeButton;
