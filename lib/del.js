const del = async (sock, message) => {
    const [command, messageId] = message.message.conversation.split(' ');

    if (command === '.del' && message.key.fromMe) {
        await sock.sendMessage(message.key.remoteJid, { delete: { remoteJid: message.key.remoteJid, id: messageId } });
    }
};

module.exports = del;
