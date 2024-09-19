# **Butterfly - WhatsApp Bot**

![Butterfly Logo](https://via.placeholder.com/150?text=Butterfly) <!-- Ganti dengan logo atau gambar relevan -->

**Butterfly** adalah bot WhatsApp yang dirancang untuk mempermudah interaksi di WhatsApp dengan berbagai fitur canggih seperti sambutan anggota baru, anti-link, pembuatan stiker, dan banyak lagi. Bot ini dibangun menggunakan [Baileys](https://github.com/adiwajshing/Baileys), library untuk berinteraksi dengan WhatsApp Web.

## **Fitur Utama**

- **Sambutan Anggota Baru:** Kirim pesan selamat datang otomatis saat anggota baru bergabung di grup.
- **Anti-Link:** Mencegah penyebaran link di grup.
- **Anti-Link Pornografi:** Mendeteksi dan menghapus link ke konten pornografi.
- **Anti-Promosi:** Mencegah promosi berlebihan di grup.
- **Pembuatan Stiker:** Membuat stiker meme, GIF, dan stiker teks dengan nama pembuat 'Butterfly by @Hamhandsme'.
- **Download Media:** Unduh musik dan video dari YouTube dengan command `.ytmusic` dan `.ytvideo`.
- **Broadcast:** Kirim pesan ke semua kontak atau grup yang dimasuki bot.
- **Simi Simi:** Fitur interaksi dengan chatbot Simi Simi.
- **Hapus Pesan:** Hapus pesan orang lain di grup jika bot adalah admin.
- **Remove Background:** Menghapus latar belakang dari gambar.

## **Instalasi di Termux**

Ikuti langkah-langkah berikut untuk menjalankan bot di Termux:

1. **Install Termux:**
   - Download Termux dari [Google Play Store](https://play.google.com/store/apps/details?id=com.termux) atau [F-Droid](https://f-droid.org/packages/com.termux/).

2. **Instalasi Paket Dasar:**

   ```bash
   pkg update && pkg upgrade
   pkg install nodejs git
   ```

3. **Clone Repositori:**

   ```bash
   git clone https://github.com/butterflyinghigh/Butterfly-Bot.git
   cd Butterfly-Bot
   ```

4. **Inisialisasi Proyek:**

   ```bash
   npm install
   ```

5. **Menyiapkan Autentikasi:**

   Jalankan bot untuk mendapatkan QR code:

   ```bash
   node index.js
   ```

   Scan QR code dengan aplikasi WhatsApp pada ponsel Anda.

6. **Menjalankan Bot:**

   ```bash
   node index.js
   ```

   Untuk menjaga bot tetap aktif di background, gunakan `tmux` atau `screen`.

## **Penggunaan**

- **.menu:** Menampilkan menu bot.
- **.ytmusic [URL]:** Unduh audio dari YouTube.
- **.ytvideo [URL]:** Unduh video dari YouTube.
- **.smeme [Teks]:** Buat stiker meme.
- **.sgif:** Buat stiker GIF.
- **.stext [Teks]:** Buat stiker teks.
- **.simi [Pertanyaan]:** Tanya pada Simi Simi.
- **.getcontact [@Sebut]:** Dapatkan informasi kontak.
- **.removebg:** Hapus latar belakang dari gambar.
- **.broadcastall [Teks]:** Kirim pesan broadcast ke semua kontak.
- **.broadcastgroups [Teks]:** Kirim pesan broadcast ke semua grup.

## **Kontribusi**

Jika Anda ingin berkontribusi, silakan lakukan fork pada repositori ini dan kirimkan pull request dengan perubahan Anda. Pastikan untuk membaca [CONTRIBUTING.md](CONTRIBUTING.md) untuk panduan kontribusi.

## **Lisensi**

Bot ini dilisensikan di bawah [MIT License](LICENSE).

## **Kontak**

Jika ada pertanyaan atau masalah, Anda bisa menghubungi saya melalui:

- **Email:** butterflyinghigh@gmail.com
- **GitHub:** [USERNAME](https://github.com/butterflyinghigh)
