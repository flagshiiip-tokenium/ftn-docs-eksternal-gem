const fs = require('fs');
const path = require('path');

const diagramDir = path.join(__dirname, '..', 'static', 'img', 'diagram');

function replaceInFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [from, to] of Object.entries(replacements)) {
    const reg = new RegExp(from, 'gi');
    content = content.replace(reg, to);
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated:', path.basename(filePath));
}

// 1. Dark diagrams
const darkReplacements = {
  '#25C2A0': '#CC710B',
  '#0F1A19': '#121212',
  '#1F5A4E': '#2e2318',
  '#2F7A6B': '#783f06',
  '#215A4E': '#5c3004',
  '#17443B': '#3b1f03',
  '#16403A': '#3b1f03',
  '#0A1B19': '#121212',
  '#13806A': '#ad6009',
  '#1FA88A': '#ad6009',
};

const darkFiles = [
  'alur-4-langkah-dark-id.svg',
  'alur-4-langkah-dark-en.svg',
  'alur-4-langkah-mobile-dark-id.svg',
  'alur-4-langkah-mobile-dark-en.svg',
];

darkFiles.forEach(f => replaceInFile(path.join(diagramDir, f), darkReplacements));

// 2. Light & docs diagrams
const lightReplacements = {
  '#25C2A0': '#CC710B',
  '#F2F7F6': '#F9F9FB',
  '#D5E4E0': '#E5E7EB',
  '#BFE3DA': '#F3E8DB',
  '#CFF3EA': '#FDE68A',
  '#8FDCC9': '#F59E0B',
  '#5CC7AD': '#D97706',
  '#13806A': '#B45309',
  '#1FA88A': '#B45309',
};

fs.readdirSync(diagramDir).forEach(f => {
  if (f.endsWith('.svg') && !darkFiles.includes(f)) {
    replaceInFile(path.join(diagramDir, f), lightReplacements);
  }
});

// Also check subdirectories like mob/ if any
const mobDir = path.join(diagramDir, 'mob');
if (fs.existsSync(mobDir)) {
  fs.readdirSync(mobDir).forEach(f => {
    if (f.endsWith('.svg')) {
      const isDark = f.includes('dark');
      replaceInFile(path.join(mobDir, f), isDark ? darkReplacements : lightReplacements);
    }
  });
}

console.log('All diagrams successfully updated to #CC710B!');
