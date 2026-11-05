import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// Ilustrasi box kemasan dengan stiker QR (Langkah 1 - Dipertahankan)
function BoxGraphic() {
  return (
    <svg
      viewBox="70 85 160 165"
      className={styles.boxSvg}
      aria-hidden="true"
    >
      <ellipse cx="150" cy="240" rx="82" ry="9" fill="#000000" opacity=".35" />
      <polygon points="84,125 150,100 216,125 150,150" fill="#783f06" />
      <polygon points="84,125 150,150 150,235 84,210" fill="#5c3004" />
      <polygon points="150,150 216,125 216,210 150,235" fill="#3b1f03" />
      <polygon
        points="84,125 150,100 216,125 150,150"
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity=".5"
        strokeWidth="1.5"
      />
      <polygon
        points="140,112 150,100 160,125 150,137"
        fill="#FFFFFF"
        fillOpacity=".28"
      />
      <g transform="translate(94,143) skewY(20.75)">
        <rect x="0.0" y="0.0" width="48.0" height="48.0" rx="3" fill="#FFFFFF" />
        <rect x="0.4" y="0.4" width="4.5" height="4.5" fill="#12201E" />
        <rect x="5.7" y="0.4" width="4.5" height="4.5" fill="#12201E" />
        <rect x="11.1" y="0.4" width="4.5" height="4.5" fill="#12201E" />
        <rect x="21.7" y="0.4" width="4.5" height="4.5" fill="#12201E" />
        <rect x="32.4" y="0.4" width="4.5" height="4.5" fill="#12201E" />
        <rect x="37.7" y="0.4" width="4.5" height="4.5" fill="#12201E" />
        <rect x="43.1" y="0.4" width="4.5" height="4.5" fill="#12201E" />
        <rect x="0.4" y="5.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="11.1" y="5.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="21.7" y="5.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="27.1" y="5.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="32.4" y="5.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="43.1" y="5.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="0.4" y="11.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="5.7" y="11.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="11.1" y="11.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="21.7" y="11.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="32.4" y="11.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="37.7" y="11.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="43.1" y="11.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="16.4" y="16.4" width="4.5" height="4.5" fill="#12201E" />
        <rect x="21.7" y="16.4" width="4.5" height="4.5" fill="#12201E" />
        <rect x="27.1" y="16.4" width="4.5" height="4.5" fill="#12201E" />
        <rect x="0.4" y="21.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="11.1" y="21.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="21.7" y="21.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="32.4" y="21.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="43.1" y="21.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="5.7" y="27.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="16.4" y="27.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="21.7" y="27.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="27.1" y="27.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="37.7" y="27.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="0.4" y="32.4" width="4.5" height="4.5" fill="#12201E" />
        <rect x="5.7" y="32.4" width="4.5" height="4.5" fill="#12201E" />
        <rect x="11.1" y="32.4" width="4.5" height="4.5" fill="#12201E" />
        <rect x="21.7" y="32.4" width="4.5" height="4.5" fill="#12201E" />
        <rect x="32.4" y="32.4" width="4.5" height="4.5" fill="#12201E" />
        <rect x="0.4" y="37.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="11.1" y="37.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="21.7" y="37.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="27.1" y="37.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="37.7" y="37.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="43.1" y="37.7" width="4.5" height="4.5" fill="#12201E" />
        <rect x="0.4" y="43.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="5.7" y="43.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="11.1" y="43.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="21.7" y="43.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="32.4" y="43.1" width="4.5" height="4.5" fill="#12201E" />
        <rect x="43.1" y="43.1" width="4.5" height="4.5" fill="#12201E" />
      </g>
    </svg>
  );
}

// Mockup frame ponsel besar untuk langkah 2, 3, dan 4
function PhoneMockup({ src, alt }) {
  return (
    <div className={styles.phoneMockup}>
      <div className={styles.phoneFrame}>
        <div className={styles.phoneTop}>
          <div className={styles.speakerSlit}></div>
          <div className={styles.cameraHole}></div>
        </div>
        <div className={styles.phoneScreen}>
          <img
            src={src}
            alt={alt}
            className={styles.phoneImg}
            loading="lazy"
            width="375"
            height="812"
          />
        </div>
      </div>
    </div>
  );
}

// Panah penghubung antar kartu visual
function StepArrow() {
  return (
    <div className={styles.stepArrowWrap} aria-hidden="true">
      <div className={styles.stepArrow}>
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
          <line
            x1="0"
            y1="8"
            x2="15"
            y2="8"
            stroke="#CC710B"
            strokeWidth="2.5"
            strokeDasharray="3 3"
            strokeLinecap="round"
          />
          <polygon points="21,8 13,4 13,12" fill="#CC710B" />
        </svg>
      </div>
    </div>
  );
}

export default function StepsSection() {
  const scanQrImg = useBaseUrl('/scanqr.png');
  const hasilImg = useBaseUrl('/hasil.png');
  const klaimImg = useBaseUrl('/klaim.png');

  return (
    <section className={styles.section} id="alur-verifikasi">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <Translate id="steps.eyebrow">CARA KERJA</Translate>
          </span>
          <h2 className={styles.title}>
            <Translate id="steps.title">Cek Keaslian cuma 4 Langkah</Translate>
          </h2>
          <p className={styles.subtitle}>
            <Translate id="steps.subtitle">
              Gampang dan cepet, nggak perlu paham teknis sama sekali.
            </Translate>
          </p>
        </div>

        {/* 4 Steps Showcase Card */}
        <div className={styles.diagramCard}>
          <div className={styles.stepsTrack}>
            {/* Langkah 1: Cari stikernya */}
            <div className={styles.stepColumn}>
              <div className={styles.visualCard}>
                <span className={styles.stepBadge}>1</span>
                <div className={styles.visualInner}>
                  <BoxGraphic />
                </div>
              </div>
              <div className={styles.stepInfo}>
                <h3 className={styles.stepTitle}>
                  <Translate id="steps.step1.title">Cari stikernya</Translate>
                </h3>
                <p className={styles.stepDesc}>
                  <Translate id="steps.step1.desc">
                    Ada di kemasan produk dengan kode QR unik
                  </Translate>
                </p>
              </div>
            </div>

            {/* Panah 1 -> 2 */}
            <StepArrow />

            {/* Langkah 2: Scan pakai ponsel */}
            <div className={styles.stepColumn}>
              <div className={styles.visualCard}>
                <span className={styles.stepBadge}>2</span>
                <div className={styles.visualInner}>
                  <PhoneMockup
                    src={scanQrImg}
                    alt="Scan QR kemasan dengan ponsel"
                  />
                </div>
              </div>
              <div className={styles.stepInfo}>
                <h3 className={styles.stepTitle}>
                  <Translate id="steps.step2.title">Scan pakai ponsel</Translate>
                </h3>
                <p className={styles.stepDesc}>
                  <Translate id="steps.step2.desc">
                    Buka aplikasi, lalu arahkan kamera ke stiker
                  </Translate>
                </p>
              </div>
            </div>

            {/* Panah 2 -> 3 */}
            <StepArrow />

            {/* Langkah 3: Lihat hasilnya */}
            <div className={styles.stepColumn}>
              <div className={styles.visualCard}>
                <span className={styles.stepBadge}>3</span>
                <div className={styles.visualInner}>
                  <PhoneMockup
                    src={hasilImg}
                    alt="Lihat hasil verifikasi keaslian produk"
                  />
                </div>
              </div>
              <div className={styles.stepInfo}>
                <h3 className={styles.stepTitle}>
                  <Translate id="steps.step3.title">Lihat hasilnya</Translate>
                </h3>
                <p className={styles.stepDesc}>
                  <Translate id="steps.step3.desc">
                    Sertifikat keaslian langsung muncul
                  </Translate>
                </p>
              </div>
            </div>

            {/* Panah 3 -> 4 */}
            <StepArrow />

            {/* Langkah 4: Klaim hadiah */}
            <div className={styles.stepColumn}>
              <div className={`${styles.visualCard} ${styles.visualCardSpecial}`}>
                <span className={styles.stepBadge}>4</span>
                <div className={styles.visualInner}>
                  <PhoneMockup
                    src={klaimImg}
                    alt="Klaim hadiah token loyalitas"
                  />
                </div>
              </div>
              <div className={styles.stepInfo}>
                <h3 className={styles.stepTitle}>
                  <Translate id="steps.step4.title">Klaim hadiah</Translate>
                </h3>
                <p className={styles.stepDesc}>
                  <Translate id="steps.step4.desc">
                    Kalau produknya ada hadiah, tinggal klaim
                  </Translate>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Link to detailed flow */}
        <div className={styles.footerAction}>
          <Link to="/docs/cara-kerja/alur-produk" className={styles.detailLink}>
            <span>
              <Translate id="steps.viewDetail">
                Lihat alur lengkapnya
              </Translate>
            </span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
