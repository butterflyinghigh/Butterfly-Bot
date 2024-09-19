const broadcastAllGroups = async (sock, message) => {
    const [command, ...args] = message.message.conversation.split(' ');

    if (command === '.broadcastgroups') {
        const text = args.join(' ');
        // Kode untuk broadcast ke semua grup
    }
};

module.exports = broadcastAllGroups;
