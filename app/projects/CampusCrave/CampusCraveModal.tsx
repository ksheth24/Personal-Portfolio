"use client";

import CampusCraveContent from "./CampusCraveContent";

export default function CampusCraveModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
      />

      <div
        className="relative z-50 w-[90%] max-w-5xl max-h-[85vh]
                   overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl
                   animate-[fadeIn_0.2s_ease-out]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
        >
          x
        </button>

        <CampusCraveContent />
      </div>
    </div>
  );
}
