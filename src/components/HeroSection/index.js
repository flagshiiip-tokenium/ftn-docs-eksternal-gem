import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  BrandShieldCheckIcon,
  BrandCertificateIcon,
  BrandGiftIcon,
} from '@site/src/components/Icons';
import styles from './styles.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.ambientGlow}></div>
      </div>

      <div className={styles.container}>
        {/* Main Hero Typography & Actions */}
        <div className={styles.content}>
          {/* Eyebrow Tagline Badge */}
          <div className={styles.taglineBadge}>
            <span className={styles.taglineDot} aria-hidden="true"></span>
            <span>
              <Translate id="hero.eyebrow">
                PLATFORM VERIFIKASI KEASLIAN & LOYALITAS DIGITAL
              </Translate>
            </span>
          </div>

          {/* Friendly Display Headline */}
          <h1 className={styles.title}>
            <Translate id="hero.friendlyTitle">Yuk, pastiin produkmu asli</Translate>
          </h1>

          {/* Informative Explanation about Flagshiiip */}
          <p className={styles.subtitle}>
            <Translate id="hero.friendlySubtitle">
              Flagshiiip bantu kamu mastiin barang yang kamu beli itu beneran asli. Tinggal scan stiker QR di kemasannya pakai kamera HP, hasilnya langsung keluar. Kamu juga dapat sertifikat digital resmi dan bisa klaim hadiah token FTN dari brand favoritmu.
            </Translate>
          </p>

          {/* CTA Buttons: Mulai Sekarang, Unduh Aplikasi & Tentang Flagshiiip */}
          <div className={styles.actions}>
            <Link
              to="/docs/mulai-cepat"
              className={styles.btnPrimary}
            >
              <span>
                <Translate id="hero.cta.start">Yuk Mulai</Translate>
              </span>
              <span className={styles.arrowBadge} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-7.85-1.42 1.42 5.43 5.43H5v2z"/>
                </svg>
              </span>
            </Link>

            <a
              href="https://play.google.com/store/apps/details?id=com.flagshiiip"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnSecondary} ${styles.mobileOnly}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{marginRight: '8px', flexShrink: 0}}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span>
                <Translate id="hero.cta.download">Unduh Aplikasi</Translate>
              </span>
            </a>

            <Link
              to="/docs/pengenalan/apa-itu-flagshiiip"
              className={styles.btnGhost}
            >
              <span>
                <Translate id="hero.cta.about">Kenalan sama Flagshiiip</Translate>
              </span>
              <span aria-hidden="true" style={{marginLeft: '4px'}}>&rarr;</span>
            </Link>
          </div>

          {/* Area Kotak Merah: 3 Highlight Cards yang Mengisi Ruang Kosong */}
          <div className={styles.heroHighlights}>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <BrandShieldCheckIcon size={18} color="#CC710B" />
              </div>
              <div className={styles.highlightContent}>
                <h3 className={styles.highlightTitle}>
                  <Translate id="hero.hl1.title">Anti-Pemalsuan</Translate>
                </h3>
                <p className={styles.highlightDesc}>
                  <Translate id="hero.hl1.desc">Stiker QR pintar unik satu kode per kemasan.</Translate>
                </p>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <BrandCertificateIcon size={18} color="#CC710B" />
              </div>
              <div className={styles.highlightContent}>
                <h3 className={styles.highlightTitle}>
                  <Translate id="hero.hl2.title">Sertifikat Digital</Translate>
                </h3>
                <p className={styles.highlightDesc}>
                  <Translate id="hero.hl2.desc">Bukti kepemilikan sah di blockchain Polygon.</Translate>
                </p>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>
                <BrandGiftIcon size={18} color="#CC710B" />
              </div>
              <div className={styles.highlightContent}>
                <h3 className={styles.highlightTitle}>
                  <Translate id="hero.hl3.title">Token Loyalitas</Translate>
                </h3>
                <p className={styles.highlightDesc}>
                  <Translate id="hero.hl3.desc">Loyalitas belanja diubah jadi aset digital FTN.</Translate>
                </p>
              </div>
            </div>
          </div>

          {/* Trust stats micro-bar */}
          <div className={styles.trustBar}>
            <span className={styles.trustItem}>
              <span className={styles.trustCheck}>✓</span>
              <Translate id="hero.trust1">100% Gratis bagi Pembeli</Translate>
            </span>
            <span className={styles.trustDivider}>•</span>
            <span className={styles.trustItem}>
              <span className={styles.trustCheck}>✓</span>
              <Translate id="hero.trust2">Didukung Jaringan Polygon</Translate>
            </span>
            <span className={styles.trustDivider}>•</span>
            <span className={styles.trustItem}>
              <span className={styles.trustCheck}>✓</span>
              <Translate id="hero.trust3">Aman & Terverifikasi</Translate>
            </span>
          </div>
        </div>

        {/* Right Column: Visual Centerpiece (Phone with Laser Scanner, hidden on mobile <768px) */}
        <div className={styles.visual}>
          <div className={styles.phoneAura} aria-hidden="true"></div>

          <div className={styles.phoneWrapper}>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneTop}>
                <div className={styles.speakerSlit}></div>
                <div className={styles.cameraHole}></div>
              </div>

              <div className={styles.phoneScreen}>
                <img
                  src={useBaseUrl('/img/scan.png')}
                  alt="Ilustrasi pemindaian stiker pintar produk"
                  className={styles.scanImage}
                  width="375"
                  height="812"
                  loading="eager"
                />

                <div className={styles.scanOverlay}>
                  <div className={styles.laserScanLine}></div>
                  <div className={styles.laserScanGlow}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
