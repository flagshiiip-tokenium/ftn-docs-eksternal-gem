import React from 'react';
import {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';

import HeroSection from '@site/src/components/HeroSection';
import CategoryMarquee from '@site/src/components/CategoryMarquee';
import QuickLinksSection from '@site/src/components/QuickLinksSection';
import StepsSection from '@site/src/components/StepsSection';
import WhyFlagshiiipSection from '@site/src/components/WhyFlagshiiipSection';
import BrandBanner from '@site/src/components/BrandBanner';

export default function Home() {
  return (
    <Layout
      title={translate({
        id: 'homepage.layoutTitle',
        message: 'Dokumentasi Flagshiiip',
      })}
      description={translate({
        id: 'homepage.layoutDescription',
        message:
          'Bantu pastikan barang yang kamu beli asli, cukup scan stiker di kemasan pakai kamera ponsel.',
      })}
    >
      <main>
        {/* Urutan dan isi halaman utama dikelola lewat komponen per bagian. */}
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Mitra dan integrasi */}
        <CategoryMarquee />

        {/* 3. Tautan cepat */}
        <QuickLinksSection />

        {/* 4. Alur pemeriksaan keaslian */}
        <StepsSection />

        {/* 5. Manfaat Flagshiiip */}
        <WhyFlagshiiipSection />

        {/* 6. Informasi untuk brand */}
        <BrandBanner />
      </main>
    </Layout>
  );
}