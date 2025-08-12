'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-primary/10 bg-surface p-6 shadow-md shadow-primary/10">
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-text-muted mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-primary/20 bg-surface-light px-4 py-2 outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm text-text-muted mb-1" htmlFor="message">Message (optional)</label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-none rounded-lg border border-primary/20 bg-surface-light px-4 py-2 outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="Tell me what you’re looking for…"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-lg bg-primary py-2 font-medium text-white hover:bg-primary-dark disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : 'Get Resume via Email'}
        </button>
        {status === 'success' && (
          <p className="text-sm text-green-400">Thanks! I’ll get back to you soon.</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-400">{error}</p>
        )}
      </div>
    </form>
  );
}


