const crypto = require('crypto');
const salt = crypto.randomBytes(16).toString('hex');

const generateHashedPassword = (password) => {
    const hash = crypto.pbkdf2Sync(password, salt,
        1000, 64, `sha512`).toString(`hex`);
    return hash;
}

const compareHash = (inputPasssword , storedHash) => {
    const hashFromInput = crypto.pbkdf2Sync(inputPasssword, salt,
        1000, 64, `sha512`).toString(`hex`);
    return hashFromInput === storedHash;
}

module.exports = {
    generateHashedPassword,
    compareHash
}