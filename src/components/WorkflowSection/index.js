import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {
  PackageQrDuotone,
  CornersScanDuotone,
  SealCheckDuotone,
  WalletTokenDuotone,
} from '../Icons';
import styles from './styles.module.css';

const steps = [
  {
    step: '01',
    tag: 'Fase 01',
    title: 'Beli Produk Berstiker Resmi',
    desc: 'Pastikan barang yang Anda beli di toko resmi memiliki stiker pintar khusus Flagshiiip di bagian kemasannya.',
    icon: <PackageQrDuotone size={34} />,
  },
  {
    step: '02',
    tag: 'Fase 02',
    title: 'Pindai Pakai Kamera Ponsel',
    desc: 'Buka aplikasi Flagshiiip di ponsel Anda, lalu arahkan kamera ke stiker. Sistem memeriksa keaslian dalam waktu kurang dari 1 detik.',
    icon: <CornersScanDuotone size={34} />,
  },
  {
    step: '03',
    tag: 'Fase 03',
    title: 'Terima Sertifikat Digital',
    desc: 'Smart contract langsung mencatat sertifikat kepemilikan resmi yang tersimpan aman di akun ponsel Anda sebagai bukti sah.',
    icon: <SealCheckDuotone size={34} />,
  },
  {
    step: '04',
    tag: 'Fase 04',
    title: 'Klaim Hadiah Token FTN',
    desc: 'Dapatkan hadiah token FTN langsung ke dompet digital Anda tanpa potongan biaya gas atau admin, siap disimpan selamanya.',
    icon: <WalletTokenDuotone size={34} />,
  },
];

export default function WorkflowSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <Translate id="workflow.eyebrow">ARSITEKTUR &bull; ALUR PENGGUNA</Translate>
          </span>
          <h2 className={styles.title}>
            <Translate id="workflow.title.part1">Dari kemasan produk fisik</Translate>
            <br />
            <span className={styles.titleLight}>
              <Translate id="workflow.title.part2">menjadi aset digital di saku Anda.</Translate>
            </span>
          </h2>
          <p className={styles.subtitle}>
            <Translate id="workflow.subtitle">
              Dari rak toko ritel hingga hadiah tersimpan di dompet digital Anda, seluruh proses berjalan otomatis tanpa gesekan teknis.
            </Translate>
          </p>
        </div>

        {/* Pipeline Cards Grid */}
        <div className={styles.pipelineWrapper}>
          <div className={styles.pipelineLine} aria-hidden="true"></div>
          
          <div className={styles.stepsGrid}>
            {steps.map((item, idx) => (
              <div key={idx} className={styles.stepCard}>
                <div className={styles.stepTopRow}>
                  <span className={styles.stepHugeNumber}>{item.step}</span>
                  <div className={styles.stepDuotoneIcon}>
                    {item.icon}
                  </div>
                </div>

                <div className={styles.stepBadgeWrapper}>
                  <span className={styles.stepTag}>{item.tag}</span>
                </div>

                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.actionRow}>
          <Link to="/docs/cara-kerja/alur-produk" className={styles.guideBtn}>
            <span>Lihat Panduan Lengkap Langkah Demi Langkah</span>
            <span className={styles.btnArrowBadge}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-7.85-1.42 1.42 5.43 5.43H5v2z"/>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
