import React from 'react';
import Translate from '@docusaurus/Translate';
import {
  BrandLightningIcon,
  BrandCertificateIcon,
  BrandHeartHandshakeIcon,
} from '../Icons';
import styles from './styles.module.css';

const benefits = [
  {
    icon: <BrandLightningIcon size={26} />,
    title: <Translate id="whyFlagshiiip.benefit1.title">Praktis & Cepat</Translate>,
    desc: (
      <Translate id="whyFlagshiiip.benefit1.desc">
        Buka kamera HP, arahin ke stiker, hasilnya keluar dalam hitungan detik. Nggak perlu alat khusus.
      </Translate>
    ),
  },
  {
    icon: <BrandCertificateIcon size={26} />,
    title: <Translate id="whyFlagshiiip.benefit2.title">Bukti Kepemilikan Digital</Translate>,
    desc: (
      <Translate id="whyFlagshiiip.benefit2.desc">
        Sertifikat resmi tersimpan di HP-mu, jadi bisa kamu tunjukin kapan pun butuh bukti barangmu asli.
      </Translate>
    ),
  },
  {
    icon: <BrandHeartHandshakeIcon size={26} />,
    title: <Translate id="whyFlagshiiip.benefit3.title">Apresiasi untuk Pembeli</Translate>,
    desc: (
      <Translate id="whyFlagshiiip.benefit3.desc">
        Brand rekanan ngasih token FTN langsung ke akunmu, sebagai tanda terima kasih karena milih produk asli.
      </Translate>
    ),
  },
];

export default function WhyFlagshiiipSection() {
  return (
    <section className={styles.section} id="kenapa-flagshiiip">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <Translate id="whyFlagshiiip.eyebrow">NILAI UTAMA</Translate>
          </span>
          <h2 className={styles.title}>
            <Translate id="whyFlagshiiip.title">Kenapa Flagshiiip?</Translate>
          </h2>
          <p className={styles.subtitle}>
            <Translate id="whyFlagshiiip.subtitle">
              Pembeli jadi yakin, brand pun makin dipercaya.
            </Translate>
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconContainer}>
                {item.icon}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
