import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {
  BrandScanIcon,
  BrandShieldCheckIcon,
  BrandGiftIcon,
  BrandHelpIcon,
  BrandFaqIcon,
} from '../Icons';
import styles from './styles.module.css';

const quickLinksData = [
  {
    title: <Translate id="quickLinks.scanQr.title">Scan QR</Translate>,
    desc: (
      <Translate id="quickLinks.scanQr.desc">
        Arahkan kamera ke stiker pada kemasan produk.
      </Translate>
    ),
    to: '/docs/panduan-pengguna/scan-qr',
    icon: <BrandScanIcon size={24} />,
  },
  {
    title: <Translate id="quickLinks.verify.title">Cek Keaslian</Translate>,
    desc: (
      <Translate id="quickLinks.verify.desc">
        Biar paham arti status verifikasi dan sertifikat digitalmu.
      </Translate>
    ),
    to: '/docs/cara-kerja/verifikasi-keaslian',
    icon: <BrandShieldCheckIcon size={24} />,
  },
  {
    title: <Translate id="quickLinks.claim.title">Klaim Hadiah</Translate>,
    desc: (
      <Translate id="quickLinks.claim.desc">
        Kumpulin token FTN dari brand favoritmu.
      </Translate>
    ),
    to: '/docs/panduan-pengguna/klaim-token',
    icon: <BrandGiftIcon size={24} />,
  },
  {
    title: <Translate id="quickLinks.help.title">Ada Kendala</Translate>,
    desc: (
      <Translate id="quickLinks.help.desc">
        Stiker rusak atau scan nggak kebaca? Tenang, ada solusinya.
      </Translate>
    ),
    to: '/docs/panduan-pengguna/pemecahan-masalah',
    icon: <BrandHelpIcon size={24} />,
  },
  {
    title: <Translate id="quickLinks.faq.title">FAQ</Translate>,
    desc: (
      <Translate id="quickLinks.faq.desc">
        Jawaban buat pertanyaan yang paling sering ditanyain.
      </Translate>
    ),
    to: '/docs/faq',
    icon: <BrandFaqIcon size={24} />,
  },
];

export default function QuickLinksSection() {
  return (
    <section className={styles.section} id="tautan-cepat">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <Translate id="quickLinks.eyebrow">Mau mulai dari mana?</Translate>
          </span>
          <h2 className={styles.title}>
            <Translate id="quickLinks.title">Mau mulai dari mana?</Translate>
          </h2>
          <p className={styles.subtitle}>
            <Translate id="quickLinks.subtitle">
              Pilih topik yang kamu cari, yuk.
            </Translate>
          </p>
        </div>

        <div className={styles.grid}>
          {quickLinksData.map((item, idx) => (
            <Link key={idx} to={item.to} className={styles.card}>
              <div className={styles.iconWrap}>
                {item.icon}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
              <span className={styles.arrowBadge} aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
