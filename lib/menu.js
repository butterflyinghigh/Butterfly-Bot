module.exports = async (sock, message, pesanMasuk) => {
    const sender = message.key.participant || message.key.remoteJid;
    const [command] = pesanMasuk.split(' ');

    let menuText = '';

    if (command === '.menu') {
        menuText = `
*Menu Bot Butterfly*
- .ytmusic [URL]: Unduh audio dari YouTube
- .ytvideo [URL]: Unduh video dari YouTube
- .smeme | [Teks]: Buat stiker meme
- .sgif: Buat stiker GIF
- .stext | [Teks]: Buat stiker tulisan
- .simi [Pertanyaan]: Tanya Simi Simi
- .getcontact [@Sebut]: Dapatkan informasi kontak
- .removebg: Hapus latar belakang dari gambar

*Menu Owner* (Hanya untuk owner)
- .del [ID Pesan]: Hapus pesan dari grup
- .broadcastall [Teks]: Kirim pesan broadcast ke semua kontak
- .broadcastgroups [Teks]: Kirim pesan broadcast ke semua grup
- .getcontact [@Sebut]: Dapatkan informasi kontak
- .download [URL]: Unduh musik atau video dari YouTube
- .simi [Pertanyaan]: Tanya Simi Simi

*Menu Grup* (Hanya di grup)
- .welcome: Dapatkan pesan sambutan saat anggota baru bergabung
- .antilink: Anti-link untuk mencegah spam di grup
- .antilinkporn: Anti-link pornografi
- .antipromosi: Anti-promosi

*Menu Pengguna*
- .menu: Tampilkan menu ini
- .removebg: Hapus latar belakang dari gambar
        `;

        await sock.sendMessage(message.key.remoteJid, { text: menuText });
    }
};
