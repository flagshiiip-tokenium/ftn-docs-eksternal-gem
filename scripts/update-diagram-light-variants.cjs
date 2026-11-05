const fs = require('fs');
const path = require('path');

const diagramDir = path.join(__dirname, '..', 'static', 'img', 'diagram');
const diagramNames = [
  'alur-pembeli',
  'buku-catatan',
  'gambaran-umum',
  'hasil-scan',
  'kode-unik',
  'perjalanan-token',
  'poin-vs-token',
  'order-stiker',
];

const surfaces = {
  '#0e0f12': '#f9fafb',
  '#14151a': '#ffffff',
  '#0b0c0e': '#f3f4f6',
  '#1a1b22': '#ffffff',
  '#111217': '#f9fafb',
  '#0d0e12': '#ffffff',
  '#1c1813': '#ffffff',
  '#4b3b2b': '#d1d5db',
  '#33271d': '#e5e7eb',
  '#4a3420': '#d1d5db',
  '#26211a': '#e5e7eb',
  '#241b13': '#ffffff',
  '#15120d': '#ffffff',
  '#121118': '#ffffff',
  '#0b0a0f': '#f9fafb',
  '#1b1822': '#e5e7eb',
  '#15131b': '#ffffff',
  '#110f16': '#ffffff',
  '#262330': '#e5e7eb',
  '#252131': '#e5e7eb',
  '#3f3a4d': '#d1d5db',
  '#1a181a': '#ffffff',
  '#121113': '#ffffff',
  '#24190f': '#ffffff',
  '#140e08': '#ffffff',
  '#0d2e1f': '#dcfce7',
  '#064e3b': '#d1fae5',
  '#0d241c': '#ecfdf5',
  '#0e291f': '#ecfdf5',
  '#081410': '#ecfdf5',
  '#2d1b1e': '#fef2f2',
  '#9ca3af': '#6b7280',
};

function makeLightVariant(source) {
  let svg = fs.readFileSync(source, 'utf8');

  svg = svg.replace(/<text\b[\s\S]*?<\/text>/gi, (text) =>
    text
      .replace(/fill="#ffffff"/gi, 'fill="#111827"')
      .replace(/fill="#cc710b"/gi, 'fill="#8f4f08"')
      .replace(/fill="#e68817"/gi, 'fill="#8f4f08"')
      .replace(/fill="#f59e0b"/gi, 'fill="#8f4f08"')
      .replace(/fill="#10b981"/gi, 'fill="#047857"')
      .replace(/fill="#34d399"/gi, 'fill="#047857"')
      .replace(/fill="#ef4444"/gi, 'fill="#b91c1c"')
      .replace(/fill="#f87171"/gi, 'fill="#b91c1c"')
      .replace(/fill="#d1fae5"/gi, 'fill="#166534"')
      .replace(/fill="#fee2e2"/gi, 'fill="#991b1b"')
      .replace(/fill="#fde047"/gi, 'fill="#854d0e"')
      .replace(/fill="#9ca3af"/gi, 'fill="#6b7280"'),
  );

  for (const [dark, light] of Object.entries(surfaces)) {
    svg = svg.replace(new RegExp(dark, 'gi'), light);
  }

  return svg;
}

for (const name of diagramNames) {
  for (const locale of ['id', 'en']) {
    for (const mobile of [false, true]) {
      const suffix = name === 'order-stiker' && locale === 'id' ? '' : `-${locale}`;
      const sourceName = `${name}${mobile ? '-mob' : ''}${suffix}.svg`;
      const source = path.join(diagramDir, sourceName);
      if (!fs.existsSync(source)) {
        continue;
      }

      const outputName = `${name}${mobile ? '-mob' : ''}-light${suffix}.svg`;
      fs.writeFileSync(path.join(diagramDir, outputName), makeLightVariant(source));
    }
  }
}
