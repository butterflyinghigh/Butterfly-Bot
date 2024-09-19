const antiLink = (sock, message) => {
    const linkPatterns = [
        /https?:\/\/(?:www\.)?example\.com\/.*$/, // Ganti dengan daftar situs yang tidak diinginkan
        /https?:\/\/(?:www\.)?example2\.com\/.*$/
    ];

    const messageText = message.message.conversation || message.message.extendedTextMessage?.text;

    if (linkPatterns.some(pattern => pattern.test(messageText))) {
        sock.sendMessage(message.key.remoteJid, { text: 'Tautan tidak diperbolehkan di grup ini!' });
        sock.removeParticipant(message.key.remoteJid, message.key.participant);
    }
};

module.exports = antiLink;
