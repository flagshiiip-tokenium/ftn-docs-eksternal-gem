---
sidebar_position: 1
title: "Blockchain, Dijelaskan Sederhana"
description: "Penjelasan blockchain dengan bahasa sehari-hari dan hubungannya dengan Flagshiiip."
---

import DocDiagram from '@site/src/components/DocDiagram';

# Blockchain, Dijelaskan Sederhana

Anda **tidak perlu memahami halaman ini** untuk memakai Flagshiiip. Halaman ini untuk Anda yang penasaran dengan teknologi di balik layar.

## Bayangkan buku catatan bersama

Bayangkan sebuah buku catatan yang salinannya dipegang banyak orang sekaligus. Setiap ada catatan baru, semua salinan ikut diperbarui. Kalau seseorang diam-diam mengubah catatan di salinannya, salinan milik orang lain akan menunjukkan perbedaannya, sehingga perubahan itu ketahuan.

Itulah gagasan dasar **blockchain**: buku catatan digital yang disimpan di banyak tempat sekaligus, sehingga sulit diubah secara diam-diam.

<DocDiagram
  desktop={{ light: '/img/diagram/buku-catatan-light-id.svg', dark: '/img/diagram/buku-catatan-id.svg' }}
  mobile={{ light: '/img/diagram/buku-catatan-mob-light-id.svg', dark: '/img/diagram/buku-catatan-mob-id.svg' }}
  alt="Buku catatan bersama yang disalin di banyak tempat"
/>

## Apa hubungannya dengan Flagshiiip?

Flagshiiip memakai teknologi ini untuk mendukung hal-hal berikut:

- **Keaslian produk**: hasil scan Anda didukung catatan yang sulit diubah.
- **Sertifikat keaslian digital**: bukti keaslian yang bisa Anda lihat di aplikasi.
- **Catatan kepemilikan produk**.
- **Hadiah loyalitas** berupa token.

## Mengapa Flagshiiip Memilih Jaringan Polygon?

Flagshiiip berjalan di atas jaringan **Polygon (Ethereum Layer-2)**, yang dipilih karena berbagai keunggulan:

- **Kecepatan Tinggi (< 2 Detik)**: Validasi dan klaim instan tanpa menunggu lama.
- **Ramah Lingkungan (*Eco-Friendly*)**: Menggunakan mekanisme konsensus *Proof-of-Stake* dengan efisiensi energi tinggi.
- **Bebas Biaya Gas bagi Pengguna (*Gasless*)**: Sistem Flagshiiip menggunakan teknologi *relayer*, sehingga konsumen tidak perlu membayar biaya transaksi sepeser pun saat memindai atau mengklaim token.
- **Standar Keamanan Tinggi**: Kontrak pintar (*smart contracts*) dibangun menggunakan standar industri terkemuka **OpenZeppelin** dan diaudit oleh firma keamanan Web3 global ternama, **CertiK**.

## Mau tahu lebih jauh?

- [Mengapa Sulit Dipalsukan?](./keamanan-dan-anti-duplikasi.md)
- [Apa itu Token FTN?](../token/token-ftn.md)
- [Struktur Tokenomics](../token/tokenomics.md)
