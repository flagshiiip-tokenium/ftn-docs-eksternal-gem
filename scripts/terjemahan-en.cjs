const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, '..', 'i18n', 'en');

const files = {
  'code.json': {
    'homepage.button': 'What is Flagshiiip? (Start Here)',
    'homepage.layoutTitle': 'Flagshiiip Documentation',
    'homepage.layoutDescription': 'Official documentation for the Flagshiiip platform',
    'homepage.feature1.title': 'Authenticity Verification',
    'homepage.feature1.description': 'Scan the QR on the packaging to confirm the product is authentic and registered.',
    'homepage.feature2.title': 'Digital Ownership',
    'homepage.feature2.description': 'Record product ownership and view its digital certificate of authenticity.',
    'homepage.feature3.title': 'Token-Based Loyalty',
    'homepage.feature3.description': 'A customer loyalty program powered by blockchain technology.',
    'hero.eyebrow': 'PHYSICAL PRODUCT AUTHENTICITY & DIGITAL LOYALTY ECOSYSTEM',
    'hero.friendlyTitle': "Check your product's authenticity",
    'hero.friendlySubtitle': 'Flagshiiip is a blockchain-powered physical product verification and digital asset ecosystem. Simply scan the smart sticker with a unique QR code on the packaging using your phone camera to instantly verify authenticity, secure official digital ownership certificates, and claim FTN token rewards from your favorite brands.',
    'hero.cta.start': 'Get Started',
    'hero.cta.download': 'Download App',
    'hero.cta.about': 'About Flagshiiip',
    'hero.hl1.title': 'Anti-Counterfeit',
    'hero.hl1.desc': 'Unique smart QR sticker, single claim per item.',
    'hero.hl2.title': 'Digital Certificate',
    'hero.hl2.desc': 'Valid ownership proof secured on Polygon blockchain.',
    'hero.hl3.title': 'FTN Loyalty Token',
    'hero.hl3.desc': 'Turn shopping loyalty into real digital assets.',
    'hero.trust1': '100% Free for Buyers',
    'hero.trust2': 'Powered by Polygon',
    'hero.trust3': 'Safe & Verified',
    'marquee.title': 'POWERING TOOLS AND INTEGRATION FROM COMPANIES ALL AROUND THE WORLD',
    'steps.eyebrow': 'HOW IT WORKS',
    'steps.title': 'Check Authenticity in 4 Steps',
    'steps.subtitle': 'The verification system is designed to be simple and fast without requiring any technical expertise.',
    'steps.step1.title': 'Find the sticker',
    'steps.step1.desc': 'On product packaging with unique QR code',
    'steps.step2.title': 'Scan with phone',
    'steps.step2.desc': 'Open the app, then point camera to sticker',
    'steps.step3.title': 'See the result',
    'steps.step3.desc': 'Authenticity certificate appears immediately',
    'steps.step4.title': 'Claim reward',
    'steps.step4.desc': 'If the product offers customer rewards',
    'steps.viewDetail': 'Learn the full product journey',
    'quickLinks.eyebrow': 'USER NAVIGATION',
    'quickLinks.title': 'Quick Links',
    'quickLinks.subtitle': 'Choose a topic you would like to explore to get started with Flagshiiip.',
  },
  'docusaurus-theme-classic/navbar.json': {
    'item.label.Dokumentasi': 'Documentation',
    'item.label.Panduan Pengguna': 'User Guide',
  },
  'docusaurus-theme-classic/footer.json': {
    'link.title.Dokumentasi': 'Documentation',
    'link.item.label.Pengenalan': 'Introduction',
    'link.item.label.Panduan Pengguna': 'User Guide',
    'link.title.Bantuan': 'Help & Support',
    'link.title.Kebijakan & Keamanan': 'Policy & Security',
    'link.title.Ekosistem Flagshiiip': 'Flagshiiip Ecosystem',
    'link.item.label.Mulai Cepat': 'Quick Start',
    'link.item.label.Panduan Scan QR': 'QR Scan Guide',
    'link.item.label.Klaim Hadiah Token': 'Claim Token Rewards',
    'link.item.label.Ada Kendala?': 'Need Help?',
    'link.item.label.Teknologi Blockchain': 'Blockchain Technology',
    'link.item.label.Keamanan & Anti-Duplikasi': 'Security & Anti-Counterfeiting',
    'link.item.label.Glosarium Istilah': 'Glossary of Terms',
    'link.item.label.Solusi Pemilik Brand (flagshiiip.com)': 'Brand Owner Solutions (flagshiiip.com)',
    'link.item.label.Ekosistem Token (flagshiiip.io)': 'Token Ecosystem (flagshiiip.io)',
    'copyright': 'Copyright © 2026 Flagshiiip & PT BMG Capital Technology. All rights reserved.',
  },
  'docusaurus-plugin-content-docs/current.json': {
    'sidebar.tutorialSidebar.category.Pengenalan': 'Introduction',
    'sidebar.tutorialSidebar.category.Cara Kerja': 'How It Works',
    'sidebar.tutorialSidebar.category.Panduan Pengguna': 'User Guide',
    'sidebar.tutorialSidebar.category.Layanan untuk Brand': 'Services for Brands',
    'sidebar.tutorialSidebar.category.Teknologi': 'Technology',
    'sidebar.tutorialSidebar.category.Token': 'Token',
    'sidebar.tutorialSidebar.category.Untuk Brand': 'For Brands',
    'sidebar.tutorialSidebar.category.Standar Operasional Prosedur': 'Standard Operating Procedures',
  },
};

for (const [file, entries] of Object.entries(files)) {
  const p = path.join(base, file);
  if (!fs.existsSync(p)) {
    console.log('TIDAK ADA :', file, '(jalankan write-translations dulu)');
    continue;
  }
  const json = JSON.parse(fs.readFileSync(p, 'utf8'));
  for (const [key, message] of Object.entries(entries)) {
    if (json[key]) {
      json[key].message = message;
      console.log('OK        :', file, '->', key);
    } else {
      json[key] = {message};
      console.log('BARU      :', file, '->', key, '(kunci belum ada, cek ejaan)');
    }
  }
  fs.writeFileSync(p, JSON.stringify(json, null, 2) + '\n');
}
