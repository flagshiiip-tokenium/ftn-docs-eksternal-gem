import React from 'react';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function BrandBanner() {
  return (
    <section className={styles.section} aria-label="Informasi Pemilik Brand">
      <div className={styles.container}>
        <div className={styles.bar}>
          <div className={styles.content}>
            <span className={styles.badge}>
              <Translate id="brandBanner.badge">Untuk Brand</Translate>
            </span>
            <span className={styles.text}>
              <Translate id="brandBanner.text">
                Punya brand atau produk sendiri? Yuk, lihat cara Flagshiiip ngelindungin produkmu dari pemalsuan, plus peluang kerja samanya.
              </Translate>
            </span>
          </div>
          <a
            href="https://flagshiiip.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span>
              <Translate id="brandBanner.link">Kunjungi flagshiiip.com</Translate>
            </span>
            <span className={styles.arrow} aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
