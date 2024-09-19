const ai = async (sock, message, pesanMasuk) => {
    const [command, ...args] = pesanMasuk.split(' ');

    if (command === '.simi') {
        // Kode untuk fitur Simi Simi
        const response = await fetch('https://simi-api.com/api', {
            method: 'POST',
            body: JSON.stringify({ text: args.join(' ') }),
        });
        const data = await response.json();
        await sock.sendMessage(message.key.remoteJid, { text: data.reply });
    }
};

module.exports = ai;
