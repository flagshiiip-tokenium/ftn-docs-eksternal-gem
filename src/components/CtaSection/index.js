import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { CheckCircleSolid } from '../Icons';
import styles from './styles.module.css';

export default function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.solanaAura} aria-hidden="true"></div>
          
          <div className={styles.content}>
            <div className={styles.badgeWrapper}>
              <span className={styles.pulseDot}></span>
              <span className={styles.badge}>
                <Translate id="cta.badge">MULAI SEKARANG &bull; GRATIS &amp; INSTAN</Translate>
              </span>
            </div>

            <h2 className={styles.title}>
              <Translate id="cta.title.part1">Siap menghubungkan produk fisik</Translate>
              <br />
              <span className={styles.titleLight}>
                <Translate id="cta.title.part2">ke ekosistem aset digital?</Translate>
              </span>
            </h2>

            <p className={styles.subtitle}>
              <Translate id="cta.subtitle">
                Pelajari panduan praktis cara memindai kemasan barang belanjaan Anda lewat aplikasi,
                atau daftarkan merek bisnis Anda untuk memutus rantai pemalsuan dan membangun loyalitas pelanggan bernilai riil.
              </Translate>
            </p>

            <div className={styles.actions}>
              <Link
                to="/docs/panduan-pengguna/install-aplikasi"
                className={styles.btnSolanaPrimary}
              >
                <span>
                  <Translate id="cta.btn.user">Mulai Panduan Pengguna</Translate>
                </span>
                <span className={styles.arrowCircleBadge}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-7.85-1.42 1.42 5.43 5.43H5v2z"/>
                  </svg>
                </span>
              </Link>
              <Link
                to="/docs/layanan/paket-layanan"
                className={styles.btnSolanaSecondary}
              >
                <Translate id="cta.btn.brand">Solusi untuk Pemilik Brand</Translate>
              </Link>
            </div>

            <div className={styles.trustBadges}>
              <div className={styles.trustItem}>
                <CheckCircleSolid size={16} />
                <span>100% Aman &amp; Resmi</span>
              </div>
              <span className={styles.trustDot}>&bull;</span>
              <div className={styles.trustItem}>
                <CheckCircleSolid size={16} />
                <span>Kompatibel Android &amp; iOS</span>
              </div>
              <span className={styles.trustDot}>&bull;</span>
              <div className={styles.trustItem}>
                <CheckCircleSolid size={16} />
                <span>Bebas Biaya Gas &amp; Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
