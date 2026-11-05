const fs = require('fs');
const path = require('path');

const diagramDir = path.join(__dirname, '..', 'static', 'img', 'diagram');

const scanqrB64 = fs.readFileSync(path.join(__dirname, '..', 'static', 'scanqr.png')).toString('base64');
const hasilB64 = fs.readFileSync(path.join(__dirname, '..', 'static', 'hasil.png')).toString('base64');
const klaimB64 = fs.readFileSync(path.join(__dirname, '..', 'static', 'klaim.png')).toString('base64');

const scanqrDataUrl = `data:image/png;base64,${scanqrB64}`;
const hasilDataUrl = `data:image/png;base64,${hasilB64}`;
const klaimDataUrl = `data:image/png;base64,${klaimB64}`;

function generateDesktopSvg(isEn, isDark) {
  const cardBg = isDark ? '#121212' : '#FFFFFF';
  const cardBorder = isDark ? '#2e2318' : '#E5E7EB';
  const card4Border = isDark ? '#CC710B' : '#CC710B';
  const titleColor = isDark ? '#EAF5F3' : '#111827';
  const descColor = isDark ? '#9FB8B3' : '#6B7280';
  const phoneBg = '#000000';
  const phoneBorder = isDark ? '#2e2318' : '#D1D5DB';

  const texts = isEn
    ? {
        t1: 'Find sticker',
        d1a: 'On packaging with',
        d1b: 'unique QR code',
        t2: 'Scan with phone',
        d2a: 'Open app, then point',
        d2b: 'camera at sticker',
        t3: 'See results',
        d3a: 'Authenticity certificate',
        d3b: 'displays instantly',
        t4: 'Claim rewards',
        d4a: 'If the brand offers',
        d4b: 'loyalty reward',
      }
    : {
        t1: 'Cari stikernya',
        d1a: 'Ada di kemasan produk',
        d1b: 'dengan kode QR unik',
        t2: 'Scan pakai ponsel',
        d2a: 'Buka aplikasi, lalu arahkan',
        d2b: 'kamera ke stiker',
        t3: 'Lihat hasilnya',
        d3a: 'Sertifikat keaslian',
        d3b: 'langsung tampil',
        t4: 'Klaim hadiah',
        d4a: 'Kalau produknya',
        d4b: 'memberi hadiah',
      };

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 380" width="1200" height="380" role="img" aria-label="Alur cek keaslian produk dalam empat langkah">
<defs>
  <clipPath id="screenClip2"><rect x="408" y="68" width="84" height="160" rx="12"/></clipPath>
  <clipPath id="screenClip3"><rect x="708" y="68" width="84" height="160" rx="12"/></clipPath>
  <clipPath id="screenClip4"><rect x="1008" y="68" width="84" height="160" rx="12"/></clipPath>
</defs>

<!-- Card 1: Cari Stikernya (Box) -->
<rect x="25" y="30" width="250" height="320" rx="20" fill="${cardBg}" stroke="${cardBorder}" stroke-width="2"/>
<ellipse cx="150" cy="240" rx="82" ry="9" fill="#000000" opacity=".35"/>
<polygon points="84,125 150,100 216,125 150,150" fill="#783f06"/>
<polygon points="84,125 150,150 150,235 84,210" fill="#5c3004"/>
<polygon points="150,150 216,125 216,210 150,235" fill="#3b1f03"/>
<polygon points="84,125 150,100 216,125 150,150" fill="none" stroke="#FFFFFF" stroke-opacity=".5" stroke-width="1.5"/>
<polygon points="140,112 150,100 160,125 150,137" fill="#FFFFFF" fill-opacity=".28"/>
<g transform="translate(94,143) skewY(20.75)">
  <rect x="0.0" y="0.0" width="48.0" height="48.0" rx="3" fill="#FFFFFF"/>
  <rect x="0.4" y="0.4" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="5.7" y="0.4" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="11.1" y="0.4" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="21.7" y="0.4" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="32.4" y="0.4" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="37.7" y="0.4" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="43.1" y="0.4" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="0.4" y="5.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="11.1" y="5.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="21.7" y="5.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="27.1" y="5.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="32.4" y="5.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="43.1" y="5.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="0.4" y="11.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="5.7" y="11.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="11.1" y="11.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="21.7" y="11.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="32.4" y="11.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="37.7" y="11.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="43.1" y="11.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="16.4" y="16.4" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="21.7" y="16.4" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="27.1" y="16.4" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="0.4" y="21.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="11.1" y="21.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="21.7" y="21.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="32.4" y="21.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="43.1" y="21.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="5.7" y="27.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="16.4" y="27.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="21.7" y="27.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="27.1" y="27.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="37.7" y="27.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="0.4" y="32.4" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="5.7" y="32.4" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="11.1" y="32.4" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="21.7" y="32.4" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="32.4" y="32.4" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="0.4" y="37.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="11.1" y="37.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="21.7" y="37.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="27.1" y="37.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="37.7" y="37.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="43.1" y="37.7" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="0.4" y="43.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="5.7" y="43.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="11.1" y="43.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="21.7" y="43.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="32.4" y="43.1" width="4.5" height="4.5" fill="#12201E"/>
  <rect x="43.1" y="43.1" width="4.5" height="4.5" fill="#12201E"/>
</g>
<circle cx="55" cy="62" r="16" fill="#CC710B"/>
<text x="55.0" y="68.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF">1</text>
<text x="150.0" y="288.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="19" font-weight="700" fill="${titleColor}">${texts.t1}</text>
<text x="150.0" y="313.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="14" font-weight="400" fill="${descColor}">${texts.d1a}</text>
<text x="150.0" y="332.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="14" font-weight="400" fill="${descColor}">${texts.d1b}</text>

<!-- Arrow 1 -> 2 -->
<line x1="283" y1="190" x2="307" y2="190" stroke="#CC710B" stroke-width="3" stroke-dasharray="2 7" stroke-linecap="round"/>
<polygon points="319,190 309,183 309,197" fill="#CC710B"/>

<!-- Card 2: Scan Pakai Ponsel (scanqr.png) -->
<rect x="325" y="30" width="250" height="320" rx="20" fill="${cardBg}" stroke="${cardBorder}" stroke-width="2"/>
<ellipse cx="450" cy="240" rx="58" ry="8" fill="#000000" opacity=".35"/>
<rect x="402" y="62" width="96" height="172" rx="17" fill="${phoneBg}" stroke="${phoneBorder}" stroke-width="2"/>
<image x="408" y="68" width="84" height="160" preserveAspectRatio="xMidYMid slice" clip-path="url(#screenClip2)" xlink:href="${scanqrDataUrl}"/>
<rect x="437" y="65" width="26" height="4" rx="2" fill="#221c15"/>
<circle cx="355" cy="62" r="16" fill="#CC710B"/>
<text x="355.0" y="68.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF">2</text>
<text x="450.0" y="288.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="19" font-weight="700" fill="${titleColor}">${texts.t2}</text>
<text x="450.0" y="313.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="14" font-weight="400" fill="${descColor}">${texts.d2a}</text>
<text x="450.0" y="332.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="14" font-weight="400" fill="${descColor}">${texts.d2b}</text>

<!-- Arrow 2 -> 3 -->
<line x1="583" y1="190" x2="607" y2="190" stroke="#CC710B" stroke-width="3" stroke-dasharray="2 7" stroke-linecap="round"/>
<polygon points="619,190 609,183 609,197" fill="#CC710B"/>

<!-- Card 3: Lihat Hasilnya (hasil.png) -->
<rect x="625" y="30" width="250" height="320" rx="20" fill="${cardBg}" stroke="${cardBorder}" stroke-width="2"/>
<ellipse cx="750" cy="240" rx="58" ry="8" fill="#000000" opacity=".35"/>
<rect x="702" y="62" width="96" height="172" rx="17" fill="${phoneBg}" stroke="${phoneBorder}" stroke-width="2"/>
<image x="708" y="68" width="84" height="160" preserveAspectRatio="xMidYMid slice" clip-path="url(#screenClip3)" xlink:href="${hasilDataUrl}"/>
<rect x="737" y="65" width="26" height="4" rx="2" fill="#221c15"/>
<circle cx="655" cy="62" r="16" fill="#CC710B"/>
<text x="655.0" y="68.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF">3</text>
<text x="750.0" y="288.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="19" font-weight="700" fill="${titleColor}">${texts.t3}</text>
<text x="750.0" y="313.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="14" font-weight="400" fill="${descColor}">${texts.d3a}</text>
<text x="750.0" y="332.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="14" font-weight="400" fill="${descColor}">${texts.d3b}</text>

<!-- Arrow 3 -> 4 -->
<line x1="883" y1="190" x2="907" y2="190" stroke="#CC710B" stroke-width="3" stroke-dasharray="2 7" stroke-linecap="round"/>
<polygon points="919,190 909,183 909,197" fill="#CC710B"/>

<!-- Card 4: Klaim Hadiah (klaim.png) -->
<rect x="925" y="30" width="250" height="320" rx="20" fill="${cardBg}" stroke="${card4Border}" stroke-width="2" stroke-dasharray="9 7"/>
<ellipse cx="1050" cy="240" rx="58" ry="8" fill="#000000" opacity=".35"/>
<rect x="1002" y="62" width="96" height="172" rx="17" fill="${phoneBg}" stroke="${phoneBorder}" stroke-width="2"/>
<image x="1008" y="68" width="84" height="160" preserveAspectRatio="xMidYMid slice" clip-path="url(#screenClip4)" xlink:href="${klaimDataUrl}"/>
<rect x="1037" y="65" width="26" height="4" rx="2" fill="#221c15"/>
<circle cx="955" cy="62" r="16" fill="#CC710B"/>
<text x="955.0" y="68.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF">4</text>
<text x="1050.0" y="288.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="19" font-weight="700" fill="${titleColor}">${texts.t4}</text>
<text x="1050.0" y="313.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="14" font-weight="400" fill="${descColor}">${texts.d4a}</text>
<text x="1050.0" y="332.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="14" font-weight="400" fill="${descColor}">${texts.d4b}</text>
</svg>`;
}

function generateMobileSvg(isEn, isDark) {
  const cardBg = isDark ? '#121212' : '#FFFFFF';
  const cardBorder = isDark ? '#2e2318' : '#E5E7EB';
  const card4Border = isDark ? '#CC710B' : '#CC710B';
  const titleColor = isDark ? '#EAF5F3' : '#111827';
  const descColor = isDark ? '#9FB8B3' : '#6B7280';
  const phoneBg = '#000000';
  const phoneBorder = isDark ? '#2e2318' : '#D1D5DB';

  const texts = isEn
    ? {
        t1: 'Find sticker',
        d1a: 'On packaging with',
        d1b: 'unique QR code',
        t2: 'Scan with phone',
        d2a: 'Open app, then point',
        d2b: 'camera at sticker',
        t3: 'See results',
        d3a: 'Authenticity certificate',
        d3b: 'displays instantly',
        t4: 'Claim rewards',
        d4a: 'If the brand offers',
        d4b: 'loyalty reward',
      }
    : {
        t1: 'Cari stikernya',
        d1a: 'Ada di kemasan produk',
        d1b: 'dengan kode QR unik',
        t2: 'Scan pakai ponsel',
        d2a: 'Buka aplikasi, lalu arahkan',
        d2b: 'kamera ke stiker',
        t3: 'Lihat hasilnya',
        d3a: 'Sertifikat keaslian',
        d3b: 'langsung tampil',
        t4: 'Klaim hadiah',
        d4a: 'Kalau produknya',
        d4b: 'memberi hadiah',
      };

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 380 742" width="380" height="742" role="img" aria-label="Alur cek keaslian produk dalam empat langkah">
<defs>
  <clipPath id="mScreenClip2"><rect x="52" y="16" width="56" height="118" rx="8"/></clipPath>
  <clipPath id="mScreenClip3"><rect x="52" y="16" width="56" height="118" rx="8"/></clipPath>
  <clipPath id="mScreenClip4"><rect x="52" y="16" width="56" height="118" rx="8"/></clipPath>
</defs>

<!-- Card 1 -->
<g transform="translate(20,20)">
  <rect x="0" y="0" width="340" height="150" rx="18" fill="${cardBg}" stroke="${cardBorder}" stroke-width="2"/>
  <g transform="translate(78.0,75.0) scale(0.66) translate(-125,-150)">
    <ellipse cx="125" cy="240" rx="82" ry="9" fill="#000000" opacity=".35"/>
    <polygon points="59,125 125,100 191,125 125,150" fill="#783f06"/>
    <polygon points="59,125 125,150 125,235 59,210" fill="#5c3004"/>
    <polygon points="125,150 191,125 191,210 125,235" fill="#3b1f03"/>
    <polygon points="59,125 125,100 191,125 125,150" fill="none" stroke="#FFFFFF" stroke-opacity=".5" stroke-width="1.5"/>
    <polygon points="115,112 125,100 135,125 125,137" fill="#FFFFFF" fill-opacity=".28"/>
    <g transform="translate(69,143) skewY(20.75)">
      <rect x="0.0" y="0.0" width="48.0" height="48.0" rx="3" fill="#FFFFFF"/>
      <rect x="0.4" y="0.4" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="5.7" y="0.4" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="11.1" y="0.4" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="21.7" y="0.4" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="32.4" y="0.4" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="37.7" y="0.4" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="43.1" y="0.4" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="0.4" y="5.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="11.1" y="5.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="21.7" y="5.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="27.1" y="5.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="32.4" y="5.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="43.1" y="5.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="0.4" y="11.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="5.7" y="11.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="11.1" y="11.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="21.7" y="11.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="32.4" y="11.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="37.7" y="11.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="43.1" y="11.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="16.4" y="16.4" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="21.7" y="16.4" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="27.1" y="16.4" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="0.4" y="21.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="11.1" y="21.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="21.7" y="21.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="32.4" y="21.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="43.1" y="21.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="5.7" y="27.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="16.4" y="27.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="21.7" y="27.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="27.1" y="27.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="37.7" y="27.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="0.4" y="32.4" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="5.7" y="32.4" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="11.1" y="32.4" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="21.7" y="32.4" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="32.4" y="32.4" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="0.4" y="37.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="11.1" y="37.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="21.7" y="37.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="27.1" y="37.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="37.7" y="37.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="43.1" y="37.7" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="0.4" y="43.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="5.7" y="43.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="11.1" y="43.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="21.7" y="43.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="32.4" y="43.1" width="4.5" height="4.5" fill="#12201E"/>
      <rect x="43.1" y="43.1" width="4.5" height="4.5" fill="#12201E"/>
    </g>
  </g>
  <circle cx="22" cy="22" r="13" fill="#CC710B"/>
  <text x="22.0" y="27.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">1</text>
  <text x="150.0" y="62.0" text-anchor="start" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="17" font-weight="700" fill="${titleColor}">${texts.t1}</text>
  <text x="150.0" y="88.0" text-anchor="start" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="13" font-weight="400" fill="${descColor}">${texts.d1a}</text>
  <text x="150.0" y="106.0" text-anchor="start" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="13" font-weight="400" fill="${descColor}">${texts.d1b}</text>
</g>

<!-- Arrow 1 -> 2 -->
<line x1="190" y1="174" x2="190" y2="190" stroke="#CC710B" stroke-width="3" stroke-dasharray="2 7" stroke-linecap="round"/>
<polygon points="190,201 183,191 197,191" fill="#CC710B"/>

<!-- Card 2 (scanqr.png) -->
<g transform="translate(20,204)">
  <rect x="0" y="0" width="340" height="150" rx="18" fill="${cardBg}" stroke="${cardBorder}" stroke-width="2"/>
  <g transform="translate(22,12)">
    <rect x="48" y="12" width="64" height="126" rx="12" fill="${phoneBg}" stroke="${phoneBorder}" stroke-width="2"/>
    <image x="52" y="16" width="56" height="118" preserveAspectRatio="xMidYMid slice" clip-path="url(#mScreenClip2)" xlink:href="${scanqrDataUrl}"/>
  </g>
  <circle cx="22" cy="22" r="13" fill="#CC710B"/>
  <text x="22.0" y="27.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">2</text>
  <text x="150.0" y="62.0" text-anchor="start" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="17" font-weight="700" fill="${titleColor}">${texts.t2}</text>
  <text x="150.0" y="88.0" text-anchor="start" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="13" font-weight="400" fill="${descColor}">${texts.d2a}</text>
  <text x="150.0" y="106.0" text-anchor="start" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="13" font-weight="400" fill="${descColor}">${texts.d2b}</text>
</g>

<!-- Arrow 2 -> 3 -->
<line x1="190" y1="358" x2="190" y2="374" stroke="#CC710B" stroke-width="3" stroke-dasharray="2 7" stroke-linecap="round"/>
<polygon points="190,385 183,375 197,375" fill="#CC710B"/>

<!-- Card 3 (hasil.png) -->
<g transform="translate(20,388)">
  <rect x="0" y="0" width="340" height="150" rx="18" fill="${cardBg}" stroke="${cardBorder}" stroke-width="2"/>
  <g transform="translate(22,12)">
    <rect x="48" y="12" width="64" height="126" rx="12" fill="${phoneBg}" stroke="${phoneBorder}" stroke-width="2"/>
    <image x="52" y="16" width="56" height="118" preserveAspectRatio="xMidYMid slice" clip-path="url(#mScreenClip3)" xlink:href="${hasilDataUrl}"/>
  </g>
  <circle cx="22" cy="22" r="13" fill="#CC710B"/>
  <text x="22.0" y="27.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">3</text>
  <text x="150.0" y="62.0" text-anchor="start" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="17" font-weight="700" fill="${titleColor}">${texts.t3}</text>
  <text x="150.0" y="88.0" text-anchor="start" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="13" font-weight="400" fill="${descColor}">${texts.d3a}</text>
  <text x="150.0" y="106.0" text-anchor="start" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="13" font-weight="400" fill="${descColor}">${texts.d3b}</text>
</g>

<!-- Arrow 3 -> 4 -->
<line x1="190" y1="542" x2="190" y2="558" stroke="#CC710B" stroke-width="3" stroke-dasharray="2 7" stroke-linecap="round"/>
<polygon points="190,569 183,559 197,559" fill="#CC710B"/>

<!-- Card 4 (klaim.png) -->
<g transform="translate(20,572)">
  <rect x="0" y="0" width="340" height="150" rx="18" fill="${cardBg}" stroke="${card4Border}" stroke-width="2" stroke-dasharray="9 7"/>
  <g transform="translate(22,12)">
    <rect x="48" y="12" width="64" height="126" rx="12" fill="${phoneBg}" stroke="${phoneBorder}" stroke-width="2"/>
    <image x="52" y="16" width="56" height="118" preserveAspectRatio="xMidYMid slice" clip-path="url(#mScreenClip4)" xlink:href="${klaimDataUrl}"/>
  </g>
  <circle cx="22" cy="22" r="13" fill="#CC710B"/>
  <text x="22.0" y="27.0" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">4</text>
  <text x="150.0" y="62.0" text-anchor="start" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="17" font-weight="700" fill="${titleColor}">${texts.t4}</text>
  <text x="150.0" y="88.0" text-anchor="start" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="13" font-weight="400" fill="${descColor}">${texts.d4a}</text>
  <text x="150.0" y="106.0" text-anchor="start" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="13" font-weight="400" fill="${descColor}">${texts.d4b}</text>
</g>
</svg>`;
}

const filesToWrite = [
  { name: 'alur-4-langkah-dark-id.svg', content: generateDesktopSvg(false, true) },
  { name: 'alur-4-langkah-dark-en.svg', content: generateDesktopSvg(true, true) },
  { name: 'alur-4-langkah-light-id.svg', content: generateDesktopSvg(false, false) },
  { name: 'alur-4-langkah-light-en.svg', content: generateDesktopSvg(true, false) },
  { name: 'alur-4-langkah-mobile-dark-id.svg', content: generateMobileSvg(false, true) },
  { name: 'alur-4-langkah-mobile-dark-en.svg', content: generateMobileSvg(true, true) },
  { name: 'alur-4-langkah-mobile-light-id.svg', content: generateMobileSvg(false, false) },
  { name: 'alur-4-langkah-mobile-light-en.svg', content: generateMobileSvg(true, false) },
];

filesToWrite.forEach(f => {
  fs.writeFileSync(path.join(diagramDir, f.name), f.content, 'utf8');
  console.log('Wrote:', f.name);
});

console.log('All SVG diagrams updated successfully!');

