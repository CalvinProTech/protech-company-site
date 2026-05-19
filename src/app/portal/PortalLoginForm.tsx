'use client';

import { useState } from 'react';
import { Loader2, Mail, CheckCircle } from 'lucide-react';

export default function PortalLoginForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === 'sending') return;

    setStatus('sending');
    setErrorMsg(null);

    try {
      const res = await fetch('/api/portal/request-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      // Lead API always returns ok:true to prevent email enumeration.
      // Treat any 2xx as success; only network/server errors surface here.
      if (res.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
        setErrorMsg('Something went wrong. Please try again in a moment.');
      }
    } catch {
      setStatus('error');
      setErrorMsg(
        'Could not reach the server. Check your connection and try again.'
      );
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h2 className="mt-4 text-lg font-semibold text-primary-900">
          Check your inbox
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          If <strong>{email}</strong> matches an active ProTech project, a
          sign-in link is on its way. It will expire in 15 minutes.
        </p>
        <p className="mt-4 text-xs text-neutral-500">
          Didn&rsquo;t get the email? Check your spam folder, or{' '}
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setEmail('');
            }}
            className="text-accent-500 underline hover:text-accent-600"
          >
            try a different email
          </button>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="block text-sm font-semibold text-primary-900">
          Email address
        </span>
        <div className="relative mt-2">
          <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            type="email"
            required
            autoFocus
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            disabled={status === 'sending'}
            className="h-12 w-full rounded-lg border border-neutral-300 bg-white pl-10 pr-3 text-sm focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 disabled:opacity-60"
          />
        </div>
      </label>

      {errorMsg && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={!email || status === 'sending'}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 font-semibold text-white transition-colors hover:bg-accent-600 disabled:opacity-50"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending link...
          </>
        ) : (
          'Send me a sign-in link'
        )}
      </button>
    </form>
  );
}
