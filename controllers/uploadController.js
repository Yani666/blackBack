const Cloudinary = require("cloudinary")

exports.upload = async(req,res) =>{
    const up = (file, folder) =>{
        return new Promise(resolve =>{
           Cloudinary.uploader.upload(file, (result)=>{
                resolve({
                    url: result.url,
                    id: result.public_id
                },{
                    resource_type: 'auto',
                    folder: folder
                }
                )
            })
        })

    }
    const uploader = async(path) => await up(path, 'black_Images')

    if(req.method==="POST"){
    /*const urls = []
    
    const files = req.files
    for(const file of files){
        const {path} = file
        console.log("hola files", file)
        console.log("hola path", path)
        const newPath = await uploader(path)
        urls.push({newPath, name: file.originalname})
    
    } */
     console.log(req.file.path)
    res.status(200).json({
        message: 'imagen se subio exitosamente',
        data: "urls"
    })

}   else{
    res.status(405).json({
        err: `${req.method} method not allowed`
    })
}}