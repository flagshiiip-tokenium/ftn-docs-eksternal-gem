---
sidebar_position: 2
title: "Mengapa Sulit Dipalsukan?"
description: "Cara kerja kode unik Flagshiiip dan apa yang bisa Anda lakukan agar tetap aman."
---

import DocDiagram from '@site/src/components/DocDiagram';

# Mengapa Sulit Dipalsukan?

## Seperti tiket konser

Bayangkan tiket konser. Setiap tiket punya nomor sendiri, dan satu tiket hanya bisa dipakai masuk satu kali. Jika ada orang kedua membawa tiket dengan nomor yang sama, petugas langsung tahu ada yang tidak beres.

Stiker Flagshiiip bekerja dengan cara serupa.

<DocDiagram
  desktop={{ light: '/img/diagram/kode-unik-light-id.svg', dark: '/img/diagram/kode-unik-id.svg' }}
  mobile={{ light: '/img/diagram/kode-unik-mob-light-id.svg', dark: '/img/diagram/kode-unik-mob-id.svg' }}
  alt="Setiap stiker punya kode unik yang hanya bisa diklaim sekali"
/>

## Tiga hal yang melindungi Anda

1. **Kode unik**: setiap stiker punya kode QR sendiri, tidak ada dua stiker yang sama.
2. **Sekali klaim**: satu kode hanya bisa diklaim satu kali.
3. **Catatan yang sulit diubah**: hasil verifikasi didukung teknologi pencatatan digital ([blockchain](./blockchain.md)).

Selain itu, brand dapat memantau aktivitas scan produknya sehingga pola yang mencurigakan lebih mudah dikenali.

## Yang bisa Anda lakukan

- Scan stiker pada produk yang Anda beli, jangan hanya mengandalkan penjelasan penjual.
- Jika hasilnya **tidak terverifikasi**, hubungi penjual atau brand terkait.
- Jaga kata sandi akun Anda, dan jangan pernah membagikan **seed phrase** wallet Anda kepada siapa pun.

## Bagaimana Jika Kode QR Difoto atau Difotokopi Pemalsu?

Ini adalah pertanyaan paling umum dari pembeli dan brand: *Bagaimana jika ada sindikat barang tiruan yang memotret stiker resmi lalu mencetaknya ke ratusan barang tiruan?*

Sistem pertahanan Flagshiiip menangkal modus ini melalui prinsip **Single-Scan Nonce Lock**:

1. **Status Kunci Instan**: Saat pembeli pertama yang sah memindai stiker asli, status kode tersebut di blockchain langsung berubah menjadi **TERKLAIM (*CLAIMED*)**.
2. **Peringatan Otomatis pada Scan Kedua**: Ketika pembeli barang tiruan memindai kode hasil fotokopi tersebut, aplikasi tidak akan menyatakan produk tersebut asli. Aplikasi langsung menampilkan status merah:
   > ⚠️ **Peringatan: Stiker Ini Sudah Pernah Diklaim!**  
   > *Waktu klaim pertama: [Tanggal & Jam]. Harap waspada terhadap indikasi barang tiruan atau bekas.*
3. **Alarm Telemetri untuk Brand**: Pada saat yang sama, koordinat pemindaian kedua dikirimkan ke dashboard produsen di [flagshiiip.com](https://flagshiiip.com) sebagai deteksi anomali pemalsuan di lokasi terkait.
