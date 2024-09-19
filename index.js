const makeWASocket = require('@whiskeysockets/baileys').default;
const { useMultiFileAuthState } = require('@whiskeysockets/baileys');
const welcome = require('./lib/welcome');
const menu = require('./lib/menu');
const stickerMeme = require('./lib/sticker/meme');
const stickerGif = require('./lib/sticker/gif');
const stickerText = require('./lib/sticker/text');
const ai = require('./lib/ai');
const tiktok = require('./lib/downloader/tiktok');
const instagram = require('./lib/downloader/instagram');
const antiLink = require('./lib/antilink');
const antiLinkPorn = require('./lib/antilinkporn');
const antiPromosi = require('./lib/antipromosi');
const removeBg = require('./lib/removebg');
const del = require('./lib/del');
const broadcastAllContacts = require('./lib/broadcastAllContacts');
const broadcastAllGroups = require('./lib/broadcastAllGroups');
const getContact = require('./lib/getcontact');
const download = require('./lib/download');
const simiSimi = require('./lib/simisimi');

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('./auth_info');
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('messages.upsert', async (m) => {
        const message = m.messages[0];
        if (!message.message || message.key.fromMe) return;

        const pesanMasuk = message.message.conversation || message.message.extendedTextMessage?.text;

        // Fitur khusus owner
        await del(sock, message);
        await broadcastAllContacts(sock, message);
        await broadcastAllGroups(sock, message);
        await getContact(sock, message);
        await download(sock, message);
        await simiSimi(sock, message);
        await stickerMeme(sock, message);
        await stickerGif(sock, message);
        await stickerText(sock, message);

        // Fitur lainnya
        await menu(sock, message, pesanMasuk);
        await ai(sock, message, pesanMasuk);
        await tiktok(sock, message, pesanMasuk);
        await instagram(sock, message, pesanMasuk);
        await antiLink(sock, message);
        await antiLinkPorn(sock, message);
        await antiPromosi(sock, message);
        await removeBg(sock, message);
    });

    sock.ev.on('group-participants.update', async (update) => {
        await welcome(sock, update);
    });
}

startBot();
