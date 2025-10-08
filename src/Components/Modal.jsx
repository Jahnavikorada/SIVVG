import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ open, title, onClose, children, actions }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      {/* backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* panel */}
      <div className="relative z-10 max-w-3xl w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-2xl shadow-xl overflow-hidden">
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
          <h3 id="modal-title" className="text-lg font-semibold">
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <FaTimes />
          </button>
        </header>

        <div className="px-6 py-5 max-h-[60vh] overflow-y-auto prose prose-sm dark:prose-invert">
          {children}
        </div>

        { (actions) && (
          <footer className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex justify-end gap-3">
            {actions}
          </footer>
        )}
      </div>
    </div>
  );
};

export default Modal;
