const antiLinkPorn = (sock, message) => {
    const pornLinkPatterns = [
        /https?:\/\/(?:www\.)?pornhub\.com\/.*$/,
        /https?:\/\/(?:www\.)?xvideos\.com\/.*$/,
        /https?:\/\/(?:www\.)?redtube\.com\/.*$/,
        /https?:\/\/(?:www\.)?youporn\.com\/.*$/,
        /https?:\/\/(?:www\.)?tube8\.com\/.*$/
    ];

    const messageText = message.message.conversation || message.message.extendedTextMessage?.text;

    if (pornLinkPatterns.some(pattern => pattern.test(messageText))) {
        sock.sendMessage(message.key.remoteJid, { text: 'Tautan pornografi tidak diperbolehkan di grup ini!' });
        sock.removeParticipant(message.key.remoteJid, message.key.participant);
    }
};

module.exports = antiLinkPorn;
