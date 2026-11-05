import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {
  CornersScanDuotone,
  ShieldDuotone,
  SealCheckDuotone,
  FtnTokenCoin,
  GoogleLogo,
  PasskeyFingerprint,
} from '../Icons';
import styles from './styles.module.css';

export default function FeaturesBento() {
  const [activeCategory, setActiveCategory] = useState('all');

  const showCard = (category) => {
    if (activeCategory === 'all') return true;
    return activeCategory === category;
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <Translate id="features.eyebrow">FITUR EKOSISTEM &bull; MADE FOR EVERYONE</Translate>
          </span>
          <h2 className={styles.title}>
            <Translate id="features.title.part1">Didesain untuk kemudahan.</Translate>
            <br />
            <span className={styles.titleLight}>
              <Translate id="features.title.part2">Dibangun untuk skala enterprise.</Translate>
            </span>
          </h2>
          <p className={styles.subtitle}>
            <Translate id="features.subtitle">
              Tidak perlu mengerti istilah kripto rumit. Flagshiiip dirancang agar siapa pun bisa memastikan keaslian barang belanjaan dan menerima aset digital bernilai hanya dengan satu kali scan kamera ponsel.
            </Translate>
          </p>
        </div>

        {/* Solana-Style Category Switcher Bar */}
        <div className={styles.terminalBar}>
          <div className={styles.terminalHeader}>
            <span className={styles.terminalDot}></span>
            <span className={styles.terminalLabel}>TERMINAL EKOSISTEM</span>
          </div>
          <div className={styles.categoryTabs}>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeCategory === 'all' ? styles.tabActive : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              Semua Fitur
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeCategory === 'consumer' ? styles.tabActive : ''}`}
              onClick={() => setActiveCategory('consumer')}
            >
              Konsumen &amp; Pembeli
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeCategory === 'brand' ? styles.tabActive : ''}`}
              onClick={() => setActiveCategory('brand')}
            >
              Brand &amp; Manufaktur
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeCategory === 'token' ? styles.tabActive : ''}`}
              onClick={() => setActiveCategory('token')}
            >
              Web3 &amp; Token FTN
            </button>
          </div>
        </div>

        <div className={styles.bentoGrid}>
          {/* Card 1: Span 2 - Realtime Scanner Viewfinder */}
          {showCard('consumer') && (
            <Link to="/docs/panduan-pengguna/scan-qr" className={`${styles.card} ${activeCategory === 'all' ? styles.spanTwo : ''}`}>
              <div className={styles.cardGlowGreen} aria-hidden="true"></div>
              <div className={styles.cardHeaderClean}>
                <span className={styles.badgeHighlight}>
                  <CornersScanDuotone size={14} className={styles.inlineBadgeIcon} />
                  <span>Sangat Cepat &amp; Praktis</span>
                </span>
              </div>
              
              <h3 className={styles.cardTitle}>Cek Keaslian 1-Detik Lewat Kamera Ponsel</h3>
              <p className={styles.cardDesc}>
                Buka aplikasi Flagshiiip di ponsel Anda, lalu arahkan kamera ke stiker di kemasan produk. Hasil keaslian langsung muncul di layar seketika: membuktikan barang 100% asli resmi dari produsen.
              </p>

              {/* Viewfinder UI Component */}
              <div className={styles.viewfinderBox}>
                <div className={styles.vfTop}>
                  <span className={styles.vfStatusDot}></span>
                  <span className={styles.vfStatusText}>KAMERA AKTIF &bull; ARAHKAN KE STIKER</span>
                </div>
                <div className={styles.vfTarget}>
                  <span className={`${styles.vfCorner} ${styles.vfTl}`}></span>
                  <span className={`${styles.vfCorner} ${styles.vfTr}`}></span>
                  <span className={`${styles.vfCorner} ${styles.vfBl}`}></span>
                  <span className={`${styles.vfCorner} ${styles.vfBr}`}></span>
                  <div className={styles.vfScanBeam}></div>
                  <div className={styles.vfCenterCode}>
                    <span className={styles.vfSerial}>STIKER PRODUK RESMI</span>
                    <span className={styles.vfMatchTag}>100% TERBUKTI ASLI &check;</span>
                  </div>
                </div>
              </div>

              <span className={styles.cardLink}>
                Lihat panduan scan <span className={styles.cardArrow}>&rarr;</span>
              </span>
            </Link>
          )}

          {/* Card 2: Span 1 - Anti-Duplikasi */}
          {showCard('brand') && (
            <Link to="/docs/teknologi/keamanan-dan-anti-duplikasi" className={styles.card}>
              <div className={styles.cardHeaderCleanBetween}>
                <div className={styles.layeredSymbol}>
                  <ShieldDuotone size={28} />
                </div>
                <span className={styles.badge}>Single-Scan Nonce Lock</span>
              </div>
              <h3 className={styles.cardTitle}>Mustahil Difotokopi Pemalsu</h3>
              <p className={styles.cardDesc}>
                Setiap stiker fisik memiliki kunci kriptografi unik yang terkunci otomatis di blockchain setelah scan pertama. Jika ada yang mencoba memfotokopi stiker Anda, sistem langsung menolak dan membunyikan alarm ke dashboard brand.
              </p>
              <div className={styles.cryptoNonceBox}>
                <div className={styles.nonceRow}>
                  <span className={styles.nonceKey}>STATUS KUNCI:</span>
                  <span className={styles.nonceValLocked}>HANYA 1x KLAIM</span>
                </div>
                <div className={styles.nonceHash}>Terkunci Permanen di Smart Contract</div>
              </div>
              <span className={styles.cardLink}>
                Cara kerjanya <span className={styles.cardArrow}>&rarr;</span>
              </span>
            </Link>
          )}

          {/* Card 3: Span 1 - Sertifikat Kepemilikan Digital */}
          {(activeCategory === 'all' || activeCategory === 'consumer') && (
            <Link to="/docs/cara-kerja/kepemilikan-digital" className={styles.card}>
              <div className={styles.cardHeaderCleanEnd}>
                <span className={styles.badge}>Sertifikat Sah</span>
              </div>
              <h3 className={styles.cardTitle}>Sertifikat Digital di Saku Anda</h3>
              <p className={styles.cardDesc}>
                Setelah memindai barang, Anda otomatis menerima sertifikat kepemilikan resmi yang tersimpan di akun Anda sebagai bukti sah keaslian saat ingin menjual kembali barang koleksi Anda di pasar sekunder.
              </p>
              <div className={styles.certBadgePreview}>
                <div className={styles.certSealIcon}>
                  <SealCheckDuotone size={30} />
                </div>
                <div className={styles.certBadgeText}>
                  <span className={styles.certTitle}>Sertifikat Orisinalitas Resmi</span>
                  <span className={styles.certPolygon}>TERVERIFIKASI DI POLYGON L2</span>
                </div>
              </div>
              <span className={styles.cardLink}>
                Pelajari sertifikat <span className={styles.cardArrow}>&rarr;</span>
              </span>
            </Link>
          )}

          {/* Card 4: Span 2 - Loyalitas Menjadi Aset (FTN Token Coin) */}
          {showCard('token') && (
            <Link to="/docs/token/token-ftn" className={`${styles.card} ${activeCategory === 'all' ? styles.spanTwo : ''}`}>
              <div className={styles.cardGlowPurple} aria-hidden="true"></div>
              <div className={styles.cardHeaderCleanBetween}>
                <div className={styles.tokenBrandPill}>
                  <FtnTokenCoin size={26} />
                  <span className={styles.tokenBrandName}>FTN Tokenium</span>
                </div>
                <span className={styles.badgeReward}>Where Loyalty Becomes an Asset</span>
              </div>
              <h3 className={styles.cardTitle}>Dapatkan Hadiah Token FTN Bernilai Riil</h3>
              <p className={styles.cardDesc}>
                Setiap kali memverifikasi produk asli, Anda dihadiahi token digital FTN. Berbeda dari poin toko biasa yang punya batas masa kedaluwarsa, token FTN adalah aset digital hak milik Anda selamanya tanpa potongan biaya transaksi.
              </p>

              {/* Wallet Token Balance Card Simulation */}
              <div className={styles.walletBox}>
                <div className={styles.walletHeader}>
                  <div className={styles.walletMeta}>
                    <span className={styles.walletLabel}>SALDO DOMPET DIGITAL ANDA</span>
                    <span className={styles.walletAddress}>Terhubung Aman di Ponsel Anda</span>
                  </div>
                  <div className={styles.gaslessTag}>Bebas Biaya Gas &bull; 0 Admin</div>
                </div>
                <div className={styles.walletAmountRow}>
                  <div className={styles.coinBalanceIcon}>
                    <FtnTokenCoin size={32} />
                  </div>
                  <span className={styles.walletNumber}>250.00</span>
                  <span className={styles.walletCurrency}>FTN Token</span>
                  <span className={styles.walletGain}>+50 FTN Hadiah Masuk!</span>
                </div>
              </div>

              <span className={styles.cardLink}>
                Pelajari hadiah token FTN <span className={styles.cardArrow}>&rarr;</span>
              </span>
            </Link>
          )}

          {/* Card 5: Span 1 - Ramah Pengguna Awam (Google + Passkey Biometric) */}
          {(activeCategory === 'all' || activeCategory === 'consumer') && (
            <Link to="/docs/teknologi/blockchain" className={styles.card}>
              <div className={styles.cardHeaderCleanEnd}>
                <span className={styles.badge}>Social Login</span>
              </div>
              <h3 className={styles.cardTitle}>Mudah untuk Pemula &amp; Awam</h3>
              <p className={styles.cardDesc}>
                Tidak perlu menghafal sandi rumit atau memahami dunia Web3. Anda bisa langsung masuk menggunakan akun Google atau Apple hanya dengan satu kali ketuk atau biometrik sidik jari.
              </p>
              <div className={styles.socialLoginBox}>
                <div className={styles.loginProvidersGroup}>
                  <GoogleLogo size={20} />
                  <span className={styles.loginDivider}>&bull;</span>
                  <PasskeyFingerprint size={20} color="#14F195" />
                </div>
                <span className={styles.loginText}>Masuk via Google &amp; Biometrik</span>
              </div>
              <span className={styles.cardLink}>
                Panduan pemula <span className={styles.cardArrow}>&rarr;</span>
              </span>
            </Link>
          )}

          {/* Card 6: Span 2 - Dashboard Monitoring & Radar Telemetri */}
          {showCard('brand') && (
            <Link to="/docs/layanan/paket-layanan" className={`${styles.card} ${activeCategory === 'all' ? styles.spanTwo : ''}`}>
              <div className={styles.cardHeaderCleanBetween}>
                <div className={styles.nodeNetworkIcon}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#14F195" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" fill="#14F195" fillOpacity="0.25"/>
                    <circle cx="6" cy="12" r="3" fill="#14F195" fillOpacity="0.25"/>
                    <circle cx="18" cy="19" r="3" fill="#14F195" fillOpacity="0.25"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                </div>
                <span className={styles.badge}>Khusus Pemilik Merek (flagshiiip.com)</span>
              </div>
              <h3 className={styles.cardTitle}>Pantau Distribusi Produk &amp; Tangkal Pemalsuan</h3>
              <p className={styles.cardDesc}>
                Bagi pemilik bisnis atau produsen, Anda mendapatkan panel kontrol langsung untuk melihat di kota mana saja produk Anda sedang dipindai oleh pembeli, serta menerima alarm otomatis jika ada oknum yang mencoba memalsukan produk Anda di lapangan.
              </p>

              {/* Radar Telemetry Live Widget */}
              <div className={styles.telemetryBox}>
                <div className={styles.radarVisual}>
                  <div className={styles.radarCircle1}></div>
                  <div className={styles.radarCircle2}></div>
                  <div className={styles.radarSweep}></div>
                  <span className={`${styles.radarBlip} ${styles.blipJakarta}`}></span>
                  <span className={`${styles.radarBlip} ${styles.blipSurabaya}`}></span>
                  <span className={`${styles.radarBlip} ${styles.blipBali}`}></span>
                </div>
                <div className={styles.telemetryStats}>
                  <div className={styles.telItem}>
                    <span className={styles.telVal}>48,290</span>
                    <span className={styles.telLabel}>Produk Terverifikasi Pembeli</span>
                  </div>
                  <div className={styles.telItem}>
                    <span className={styles.telValGreen}>0 Masalah</span>
                    <span className={styles.telLabel}>Pelanggaran / Pemalsuan</span>
                  </div>
                </div>
              </div>

              <span className={styles.cardLink}>
                Pelajari solusi perlindungan brand <span className={styles.cardArrow}>&rarr;</span>
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
