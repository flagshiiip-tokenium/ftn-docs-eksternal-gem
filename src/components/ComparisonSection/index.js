import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function ComparisonSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <Translate id="comparison.eyebrow">PERBANDINGAN SOLUSI &bull; KEAMANAN MUTLAK</Translate>
          </span>
          <h2 className={styles.title}>
            <Translate id="comparison.title.part1">Mengapa barcode konvensional</Translate>
            <br />
            <span className={styles.titleLight}>
              <Translate id="comparison.title.part2">tidak lagi melindungi produk?</Translate>
            </span>
          </h2>
          <p className={styles.subtitle}>
            <Translate id="comparison.subtitle">
              Barcode hitam-putih biasa sangat mudah difotokopi oleh sindikat pemalsu, dan poin belanja konvensional sering hangus sepihak.
              Flagshiiip hadir dengan stiker pintar berkunci kriptografi dan hadiah aset digital permanen.
            </Translate>
          </p>
        </div>

        {/* 2 Comparison Cards */}
        <div className={styles.cardsGrid}>
          {/* Card A: Konvensional */}
          <div className={`${styles.card} ${styles.cardConventional}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardBadgeNegative}>
                <span className={styles.badgeDot}></span>
                <Translate id="comparison.conventional.badge">Sistem Lama • Sering Merugikan</Translate>
              </div>
              <h3 className={styles.cardTitle}>
                <Translate id="comparison.conventional.title">Barcode Biasa &amp; Poin Toko Tradisional</Translate>
              </h3>
              <p className={styles.cardDesc}>
                <Translate id="comparison.conventional.desc">
                  Sistem lama yang mudah ditiru sindikat barang palsu dan minim perlindungan untuk pembeli.
                </Translate>
              </p>
            </div>

            <ul className={styles.featureList}>
              <li className={styles.itemNegative}>
                <div className={styles.iconNeg}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <div>
                  <b>Barcode Biasa Gampang Difotokopi</b>
                  <p>1 gambar barcode yang sama dicetak pada jutaan kemasan, sehingga pemalsu cukup memfotokopinya ke barang tiruan.</p>
                </div>
              </li>
              <li className={styles.itemNegative}>
                <div className={styles.iconNeg}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <div>
                  <b>Poin Toko Sering Hangus Sepihak</b>
                  <p>Hanya berlaku di gerai tertentu dan sering ada tanggal kedaluwarsa sepihak yang merugikan pembeli.</p>
                </div>
              </li>
              <li className={styles.itemNegative}>
                <div className={styles.iconNeg}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <div>
                  <b>Tidak Ada Bukti Kepemilikan Sah</b>
                  <p>Konsumen tidak punya bukti resmi kalau barangnya asli saat mau dijual kembali ke orang lain di pasar sekunder.</p>
                </div>
              </li>
              <li className={styles.itemNegative}>
                <div className={styles.iconNeg}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <div>
                  <b>Produsen Tidak Tahu Ada Barang Palsu</b>
                  <p>Pemilik merek tidak bisa melacak di mana barang tiruan beredar sampai ada laporan pembeli yang tertipu.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Card B: Flagshiiip */}
          <div className={`${styles.card} ${styles.cardFlagshiiip}`}>
            <div className={styles.highlightGlow}></div>
            <div className={styles.cardHeader}>
              <div className={styles.cardBadgePositive}>
                <span className={styles.badgePulseDot}></span>
                <Translate id="comparison.flagshiiip.badge">Solusi Flagshiiip • Pasti Aman &amp; Menguntungkan</Translate>
              </div>
              <h3 className={styles.cardTitle}>
                <Translate id="comparison.flagshiiip.title">Stiker Pintar Flagshiiip &amp; Hadiah FTN</Translate>
              </h3>
              <p className={styles.cardDesc}>
                <Translate id="comparison.flagshiiip.desc">
                  Perlindungan total keaslian produk fisik dan program hadiah digital bernilai riil untuk pembeli.
                </Translate>
              </p>
            </div>

            <ul className={styles.featureList}>
              <li className={styles.itemPositive}>
                <div className={styles.iconPos}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <b>1 Stiker Fisik Unik = 1x Klaim Saja</b>
                  <p>Setiap barang punya stiker khusus yang langsung terkunci otomatis setelah discan. Mustahil difotokopi atau diduplikasi.</p>
                </div>
              </li>
              <li className={styles.itemPositive}>
                <div className={styles.iconPos}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <b>Hadiah Token FTN Jadi Hak Milik Anda</b>
                  <p>Tersimpan aman di akun Anda, tidak bisa hangus sepihak oleh toko, dan bernilai ekonomis nyata.</p>
                </div>
              </li>
              <li className={styles.itemPositive}>
                <div className={styles.iconPos}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <b>Sertifikat Keaslian Resmi di HP Anda</b>
                  <p>Tercatat permanen sebagai bukti sah kepemilikan Anda yang aman dan tidak bisa dipalsukan oleh siapa pun.</p>
                </div>
              </li>
              <li className={styles.itemPositive}>
                <div className={styles.iconPos}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <b>Alarm Otomatis untuk Pemilik Merek</b>
                  <p>Produsen langsung menerima notifikasi seketika jika ada pihak yang mencoba memalsukan produk di wilayah tertentu.</p>
                </div>
              </li>
            </ul>

            <div className={styles.cardFooter}>
              <Link to="/docs/teknologi/keamanan-dan-anti-duplikasi" className={styles.learnMoreLink}>
                <span>Pelajari Cara Kerja Sistem Keamanan Ini</span>
                <span className={styles.linkArrow}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
