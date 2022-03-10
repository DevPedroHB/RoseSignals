const multer = require('multer');
const path = require('path');
const crypto = require("crypto");

module.exports = {
    dest: path.resolve(__dirname, "..", "uploads", "users"),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, "..", "uploads", "users"));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(8, (err, hash) => {
                if (err) cb(err);
                const filename = `${hash.toString("hex")}-${file.originalname.replace(/\s/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
                cb(null, filename);
            });
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/gif"
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Tipo do arquivo inválido!"));
        }
    }
}