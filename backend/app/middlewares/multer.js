const multer = require('multer');

// set storage
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'path_to_upload_directory'); // Replace with the actual path
    },
    filename: function (req, file, cb) {
        var ext = file.originalname.substr(file.originalname.lastIndexOf('.'));
        cb(null, Date.now() + ext); // Use timestamp as the filename
    },
});

// Create a multer instance with the corrected storage configuration
var store = multer({ storage: storage });

module.exports = store;
