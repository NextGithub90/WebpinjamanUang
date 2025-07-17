# PinjamanExpress - Website Pinjaman Uang Malaysia

## Deskripsi Proyek

PinjamanExpress adalah website pinjaman uang untuk pasar Malaysia yang menawarkan pinjaman peribadi hingga RM10,000 dengan proses permohonan yang cepat dan mudah. Website ini dirancang dengan tampilan modern, responsif, dan menggunakan bahasa Malaysia.

## Fitur Utama

- Desain responsif yang bekerja di semua perangkat (desktop, tablet, mobile)
- Formulir permohonan pinjaman online yang mudah digunakan
- Integrasi dengan WhatsApp untuk komunikasi langsung dengan pelanggan
- Tampilan modern dengan animasi dan efek visual yang menarik
- Informasi lengkap tentang proses permohonan pinjaman
- Bagian testimoni pelanggan untuk meningkatkan kepercayaan
- FAQ untuk menjawab pertanyaan umum
- Formulir kontak untuk pertanyaan lebih lanjut

## Teknologi yang Digunakan

- HTML5
- CSS3 (dengan variabel CSS untuk konsistensi desain)
- JavaScript (vanilla JS tanpa framework)
- Bootstrap 5 (untuk layout responsif dan komponen UI)
- Font Awesome (untuk ikon)
- Google Fonts (font Poppins)
- SVG untuk grafik dan ilustrasi

## Struktur Folder

```
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       ├── logo.svg
│       ├── logo-white.svg
│       ├── favicon.svg
│       ├── hero-image.svg
│       ├── step1.svg
│       ├── step2.svg
│       ├── step3.svg
│       ├── testimonial1.svg
│       ├── testimonial2.svg
│       ├── testimonial3.svg
│       ├── partner1.svg
│       ├── partner2.svg
│       ├── partner3.svg
│       ├── partner4.svg
│       └── partner5.svg
└── index.html
```

## Cara Menjalankan Proyek

1. Clone atau download repository ini
2. Buka file `index.html` di browser web Anda

Atau, Anda dapat menggunakan server lokal:

```bash
# Menggunakan Python
python -m http.server

# Atau menggunakan Node.js dengan http-server
npm install -g http-server
http-server
```

## Fitur WhatsApp Integration

Website ini memiliki integrasi dengan WhatsApp untuk memudahkan komunikasi dengan pelanggan. Ketika pengguna mengklik tombol "Mohon Sekarang" setelah mengisi formulir, mereka akan diarahkan ke WhatsApp dengan pesan yang sudah diisi otomatis berisi informasi permohonan pinjaman mereka.

## Kustomisasi

Untuk mengubah nomor WhatsApp bisnis, edit variabel `businessNumber` di file `assets/js/script.js`.

```javascript
// WhatsApp business number - replace with your actual business number
const businessNumber = "60123456789";
```

## Lisensi

Proyek ini dibuat untuk tujuan demonstrasi dan pembelajaran.
