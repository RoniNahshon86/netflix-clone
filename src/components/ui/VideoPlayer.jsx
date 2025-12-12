import React, { useEffect } from "react";

const VideoPlayer = ({ isOpen, onClose, videoKey, title }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !videoKey) return null;

  return (
    <div className="fixed inset-0 z-10000 bg-primary-black flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-overlay-black-50 hover:bg-overlay-black-60 flex items-center justify-center text-2xl transition"
      >
        ✕
      </button>

      <iframe
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
