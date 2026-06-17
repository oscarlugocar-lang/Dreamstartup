'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <main style={{ maxWidth: 400, margin: '4rem auto', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '2rem' }}>Iniciar Sesión</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <button onClick={() => signIn('github', { callbackUrl: '/dashboard' })} style={btnStyle}>
          Continuar con GitHub
        </button>
        <button onClick={() => signIn('google', { callbackUrl: '/dashboard' })} style={btnStyle}>
          Continuar con Google
        </button>
      </div>

      <div style={{ margin: '1.5rem 0', color: '#666' }}>o</div>

      <form onSubmit={async (e) => {
        e.preventDefault();
        await signIn('email', { email, callbackUrl: '/dashboard' });
        setSent(true);
      }} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" style={{ ...btnStyle, background: '#6366f1', color: '#fff' }}>
          {sent ? '📧 Revisa tu correo' : 'Enviar Magic Link'}
        </button>
      </form>
    </main>
  );
}

const btnStyle: React.CSSProperties = {
  padding: '0.75rem 1.5rem',
  borderRadius: 8,
  border: '1px solid #333',
  background: '#1a1a2e',
  color: '#f8fafc',
  cursor: 'pointer',
  fontSize: '0.95rem',
  fontWeight: 600,
};

const inputStyle: React.CSSProperties = {
  padding: '0.75rem 1rem',
  borderRadius: 8,
  border: '1px solid #333',
  background: '#0a0a0f',
  color: '#f8fafc',
  fontSize: '0.95rem',
};
