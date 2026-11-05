import React from 'react';
import {useColorMode} from '@docusaurus/theme-common';

export default function DocDiagram({desktop, mobile, alt, className = ''}) {
  const {colorMode} = useColorMode();
  const desktopSrc = desktop[colorMode] ?? desktop.dark;
  const mobileSrc = mobile?.[colorMode] ?? mobile?.dark;

  return (
    <>
      <picture className={`docDiagram docDiagram--desktop ${className}`.trim()}>
        <img src={desktopSrc} alt={alt} loading="lazy" />
      </picture>
      {mobileSrc && (
        <picture className={`docDiagram docDiagram--mobile ${className}`.trim()}>
          <img src={mobileSrc} alt={alt} loading="lazy" />
        </picture>
      )}
    </>
  );
}
