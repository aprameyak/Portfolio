'use client';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';

export default function ContactModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full rounded-lg bg-primary py-2 font-medium text-white hover:bg-primary-dark"
      >
        Get my resume
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-md rounded-xl border border-primary/10 bg-surface shadow-xl shadow-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-primary/10 px-5 py-3">
              <h2 className="text-lg font-semibold">Get my resume</h2>
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-1 text-text-muted hover:bg-surface-light"
              >
                ✕
              </button>
            </div>
            <div className="p-5">
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


