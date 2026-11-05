import React from 'react';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const partnerBrands = [
  {
    id: 'openzeppelin',
    name: 'OpenZeppelin',
    logo: '/img/partners/openzeppelin.svg',
    className: styles.logoOpenZeppelin,
  },
  {
    id: 'polygon',
    name: 'Polygon',
    logo: '/img/partners/polygon.svg',
    className: styles.logoPolygon,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    logo: '/img/partners/ethereum.svg',
    className: styles.logoEthereum,
  },
  {
    id: 'certik',
    name: 'CertiK',
    logo: '/img/partners/certik.svg',
    className: styles.logoCertik,
  },
  {
    id: 'openzeppelin-2',
    name: 'OpenZeppelin',
    logo: '/img/partners/openzeppelin.svg',
    className: styles.logoOpenZeppelin,
  },
  {
    id: 'polygon-2',
    name: 'Polygon',
    logo: '/img/partners/polygon.svg',
    className: styles.logoPolygon,
  },
  {
    id: 'ethereum-2',
    name: 'Ethereum',
    logo: '/img/partners/ethereum.svg',
    className: styles.logoEthereum,
  },
  {
    id: 'certik-2',
    name: 'CertiK',
    logo: '/img/partners/certik.svg',
    className: styles.logoCertik,
  },
];

function BrandCard({ brand }) {
  const logoUrl = useBaseUrl(brand.logo);

  return (
    <div className={styles.brandCard} title={brand.name}>
      <span className={`${styles.cornerDot} ${styles.tl}`} aria-hidden="true" />
      <span className={`${styles.cornerDot} ${styles.tr}`} aria-hidden="true" />
      <span className={`${styles.cornerDot} ${styles.bl}`} aria-hidden="true" />
      <span className={`${styles.cornerDot} ${styles.br}`} aria-hidden="true" />
      <div className={styles.cardInner}>
        <img
          src={logoUrl}
          alt={brand.name}
          className={`${styles.brandLogoImage} ${brand.className}`}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function CategoryMarquee() {
  return (
    <section className={styles.marqueeSection} aria-label="Mitra dan Integrasi">
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <span className={styles.dotLeft} aria-hidden="true" />
          <h2 className={styles.marqueeTitle}>
            <Translate id="marquee.title">
              Didukung oleh Alat dan Integrasi dari Perusahaan di Seluruh Dunia
            </Translate>
          </h2>
          <span className={styles.dotRight} aria-hidden="true" />
        </div>

        <div className={styles.marqueeWrapper}>
          {/* Track 1 */}
          <div className={styles.marqueeTrack}>
            {partnerBrands.map((brand, idx) => (
              <BrandCard key={`${brand.id}-${idx}`} brand={brand} />
            ))}
          </div>

          {/* Track 2 (duplicate for seamless infinite scroll) */}
          <div className={styles.marqueeTrack} aria-hidden="true">
            {partnerBrands.map((brand, idx) => (
              <BrandCard key={`dup-${brand.id}-${idx}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
