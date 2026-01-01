'use client';

import HospitalContent from "./HospitalContent";

export default function HospitalModal({ onClose }: { onClose: () => void }) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
  
        {/* BACKDROP (blur + darken) */}
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-md"
        />
  
        {/* MODAL CONTENT */}
        <div className="relative z-50 w-[90%] max-w-5xl max-h-[85vh]
                        overflow-y-auto rounded-2xl bg-white
                        shadow-2xl p-8
                        animate-[fadeIn_0.2s_ease-out]">
  
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
  
          <HospitalContent />
        </div>
      </div>
    );
  }
  