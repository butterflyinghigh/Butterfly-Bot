const download = async (sock, message) => {
    const [command, url] = message.message.conversation.split(' ');

    if (command === '.ytmusic') {
        // Kode untuk unduh musik dari YouTube
    } else if (command === '.ytvideo') {
        // Kode untuk unduh video dari YouTube
    }
};

module.exports = download;
