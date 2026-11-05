import React from 'react';

// 1. Solid Emerald Check Circle (16px) for trust highlights
export function CheckCircleSolid({ size = 16, color = '#10B981', className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
      <circle cx="8" cy="8" r="8" fill={color} />
      <path d="M4.5 8L6.8 10.3L11.5 5.7" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 2. Serrated Verified Seal (Official verification badge)
export function VerifiedSeal({ size = 26, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M9 2.5L10.5 4.5L13 4L13.8 6.4L16.2 6.7L16.2 9.2L18.3 10.5L17.5 12.8L19 14.8L17.5 16.7L18.3 19L16.2 20.3L16.2 22.8L13.8 23.1L13 25.5L10.5 25L9 27L7.5 25L5 25.5L4.2 23.1L1.8 22.8L1.8 20.3L-0.3 19L0.5 16.7L-1 14.8L0.5 12.8L-0.3 10.5L1.8 9.2L1.8 6.7L4.2 6.4L5 4L7.5 4.5L9 2.5Z"
        fill="url(#sealGrad)"
        transform="scale(0.8) translate(3, -1)"
      />
      <circle cx="12" cy="12" r="9.5" fill="url(#sealGrad)" />
      <path d="M8 12L10.8 14.8L16 9.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="sealGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10b981" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 3. Official FTN Token / Coin SVG
export function FtnTokenCoin({ size = 32, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="18" r="17" fill="url(#ftnCoinOuter)" stroke="url(#ftnCoinBorder)" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="13" fill="url(#ftnCoinInner)" opacity="0.9" />
      {/* FTN Stylized Geometric Ribbon / Typography */}
      <path
        d="M12 14.5H24M12 18H20.5M12 21.5H18"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="23" cy="20.5" r="2" fill="#38bdf8" />
      <defs>
        <linearGradient id="ftnCoinOuter" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f59e0b" />
          <stop offset="0.5" stopColor="#d97706" />
          <stop offset="1" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="ftnCoinInner" x1="8" y1="8" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#78350f" />
          <stop offset="1" stopColor="#1e1b4b" />
        </linearGradient>
        <linearGradient id="ftnCoinBorder" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fef08a" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 4. Duotone Hero & Metrics Icons (No box wrapping, 28px - 32px)
export function ShieldDuotone({ size = 30, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L4 5.5V12C4 17.5 7.5 21.5 12 23C16.5 21.5 20 17.5 20 12V5.5L12 2Z" fill="#38bdf8" fillOpacity="0.2" />
      <path d="M12 2L4 5.5V12C4 17.5 7.5 21.5 12 23C16.5 21.5 20 17.5 20 12V5.5L12 2Z" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12L11 14L15 10" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LightningDuotone({ size = 30, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13 2L4 14H12L11 22L20 10H12L13 2Z" fill="#f59e0b" fillOpacity="0.22" />
      <path d="M13 2L4 14H12L11 22L20 10H12L13 2Z" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GiftTokenDuotone({ size = 30, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" fill="#a855f7" fillOpacity="0.2" />
      <circle cx="12" cy="12" r="9" stroke="#c084fc" strokeWidth="2" />
      <path d="M8 12H16M12 8V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" />
    </svg>
  );
}

export function CertificateDuotone({ size = 30, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" fill="#38bdf8" fillOpacity="0.18" />
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="#38bdf8" strokeWidth="2" />
      <path d="M8 7H16M8 11H13" stroke="#e0f2fe" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="14" cy="15" r="3" fill="#10b981" />
      <path d="M13 15L13.8 15.8L15.2 14.4" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 5. Official Google "G" Logo
export function GoogleLogo({ size = 18, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
    </svg>
  );
}

// 6. Passkey / Fingerprint Biometric SVG
export function PasskeyFingerprint({ size = 18, color = '#38bdf8', className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/>
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88"/>
      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/>
      <path d="M2 12a10 10 0 0 1 18-6"/>
      <path d="M2 16h.01"/>
      <path d="M21.8 16c.2-2 .131-5.354 0-6"/>
      <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/>
      <path d="M8.65 22c.21-.66.45-1.32.57-2"/>
      <path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>
    </svg>
  );
}

// 7. Workflow Step Duotone Icons
export function PackageQrDuotone({ size = 32, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M16.5 9.4L7.55 4.24M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.27 6.96L12 12.01L20.73 6.96M12 22.08V12" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" fill="#00f0ff" fillOpacity="0.4" />
    </svg>
  );
}

export function CornersScanDuotone({ size = 32, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="4" y1="12" x2="20" y2="12" stroke="#00f0ff" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="12" cy="12" r="4" fill="#38bdf8" fillOpacity="0.3" stroke="#ffffff" strokeWidth="1.5" />
    </svg>
  );
}

export function SealCheckDuotone({ size = 32, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" />
      <path d="M8.5 12L11 14.5L15.5 9.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WalletTokenDuotone({ size = 32, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="6" width="20" height="13" rx="2" fill="#a855f7" fillOpacity="0.2" stroke="#c084fc" strokeWidth="2" />
      <path d="M16 12.5H22V15.5H16C15.2 15.5 14.5 14.8 14.5 14C14.5 13.2 15.2 12.5 16 12.5Z" fill="#f59e0b" stroke="#fef08a" strokeWidth="1.2" />
      <circle cx="18" cy="14" r="1" fill="#ffffff" />
    </svg>
  );
}

export function LifebuoyDuotone({ size = 32, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="#f59e0b" strokeWidth="2" fill="#f59e0b" fillOpacity="0.15" />
      <circle cx="12" cy="12" r="4" stroke="#f59e0b" strokeWidth="2" />
      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function HelpQuestionDuotone({ size = 32, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="#38bdf8" strokeWidth="2" fill="#38bdf8" fillOpacity="0.15" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="17" r="1.2" fill="#38bdf8" />
    </svg>
  );
}

// 8. Unified Brand Line Icons (Phosphor/Lucide style, single #CC710B color)
export function BrandScanIcon({ size = 24, color = '#CC710B', className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <line x1="7" y1="12" x2="17" y2="12" />
    </svg>
  );
}

export function BrandShieldCheckIcon({ size = 24, color = '#CC710B', className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function BrandGiftIcon({ size = 24, color = '#CC710B', className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

export function BrandHelpIcon({ size = 24, color = '#CC710B', className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
    </svg>
  );
}

export function BrandFaqIcon({ size = 24, color = '#CC710B', className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export function BrandLightningIcon({ size = 24, color = '#CC710B', className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function BrandCertificateIcon({ size = 24, color = '#CC710B', className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

export function BrandHeartHandshakeIcon({ size = 24, color = '#CC710B', className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}


