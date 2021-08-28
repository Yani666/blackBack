const cloudinary = require('cloudinary').v2
const multer = require('multer')
const {CloudinaryStorage} = require('multer-storage-cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const studio = new CloudinaryStorage({
    cloudinary,
    /* params: (req, file) =>{
        return {
            folder: 'black_Images',
            allowedFormats: ['png', 'jpg', 'PDF', 'pdf','jpeg'],
            fileFilter: function(req, file, cb){
                if(!file.originalname.match(/\.(pdf|jpg|png|jpeg)$/)){
                    return cb(new Error('el archivo no es valido'))
                }
                cb(null, file.originalname)
            },
            public_id: `app-${file.originalname}`
        }
    } */
    params:{
        folder:"black_Images",
        allowedFormats: ['png', 'jpg', 'PDF', 'pdf','jpeg'],
        use_filename: true
    }
})

const uploadDoc = multer({studio})

module.exports = uploadDoc