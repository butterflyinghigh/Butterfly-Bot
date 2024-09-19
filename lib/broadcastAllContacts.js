const broadcastAllContacts = async (sock, message) => {
    const [command, ...args] = message.message.conversation.split(' ');

    if (command === '.broadcastall') {
        const text = args.join(' ');
        // Kode untuk broadcast ke semua kontak
    }
};

module.exports = broadcastAllContacts;
