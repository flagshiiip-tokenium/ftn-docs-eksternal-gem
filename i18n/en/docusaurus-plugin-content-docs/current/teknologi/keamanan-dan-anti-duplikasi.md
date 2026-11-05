---
sidebar_position: 2
title: "Why Is It Hard to Counterfeit?"
description: "How Flagshiiip's unique codes work and what you can do to stay safe."
---

import DocDiagram from '@site/src/components/DocDiagram';

# Why Is It Hard to Counterfeit?

## Like a Concert Ticket

Think of a concert ticket. Every ticket has its own unique serial number, and that ticket can only be used to enter once. If a second person shows up with a ticket bearing the exact same number, venue staff immediately know something is wrong.

Flagshiiip stickers work on the same principle.

<DocDiagram
  desktop={{ light: '/img/diagram/kode-unik-light-en.svg', dark: '/img/diagram/kode-unik-en.svg' }}
  mobile={{ light: '/img/diagram/kode-unik-mob-light-en.svg', dark: '/img/diagram/kode-unik-mob-en.svg' }}
  alt="Every sticker has a unique code that can only be claimed once"
/>

## Three Layers Protecting You

1. **Unique Code**: Every sticker carries its own cryptographic QR code; no two stickers are ever alike.
2. **Single-Claim Mechanism**: Each code can only be claimed once in the ecosystem.
3. **Tamper-Resistant Records**: Verification results are anchored by decentralized digital ledger technology ([blockchain](./blockchain.md)).

In addition, brands can continuously monitor scan activity across distribution channels, making suspicious activity patterns easily detectable.

## What You Can Do as a Consumer

- Always scan the sticker on the product you purchase rather than relying solely on the seller's claims.
- If the result displays **not verified**, immediately contact the retailer or brand.
- Secure your account credentials, and never share your wallet's **seed phrase** with anyone.

## What Happens If Counterfeiters Photo or Photocopy a QR Sticker?

This is the most common question from both consumers and brands: *What if a counterfeit ring photographs an authentic sticker and prints copies across hundreds of fake items?*

The Flagshiiip defense architecture neutralizes this via the **Single-Scan Nonce Lock**:

1. **Instant State Lock**: When the first genuine buyer scans the physical sticker, the blockchain state for that unique code immediately transitions to **CLAIMED**.
2. **Automated Alert on Subsequent Scans**: When someone scans a copied code on a fake product, the app will never validate it as genuine. Instead, it displays a red alert:
   > ⚠️ **Warning: This Sticker Has Already Been Claimed!**  
   > *Initial claim timestamp: [Date & Time]. Beware of potential counterfeit or second-hand goods.*
3. **Telemetry Alert for Brands**: Simultaneously, telemetry data from the duplicate scan is routed to the manufacturer's dashboard on [flagshiiip.com](https://flagshiiip.com), flagging suspicious location anomalies in real time.
