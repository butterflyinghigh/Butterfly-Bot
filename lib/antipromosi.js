const antiPromosi = (sock, message) => {
    const promosiPatterns = [
        /https?:\/\/(?:www\.)?promosi\.com\/.*$/,
        /diskon|sale|harga|murah|gratis/i
    ];

    const messageText = message.message.conversation || message.message.extendedTextMessage?.text;

    if (promosiPatterns.some(pattern => pattern.test(messageText))) {
        sock.sendMessage(message.key.remoteJid, { text: 'Promosi tidak diperbolehkan di grup ini!' });
        sock.removeParticipant(message.key.remoteJid, message.key.participant);
    }
};

module.exports = antiPromosi;
