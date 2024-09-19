const getContact = async (sock, message) => {
    const [command, contact] = message.message.conversation.split(' ');

    if (command === '.getcontact') {
        // Kode untuk mendapatkan informasi kontak
    }
};

module.exports = getContact;
