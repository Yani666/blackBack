const cloudinary = require("cloudinary")

exports.upload = async(req,res) =>{
    const up = (file, folder) =>{
        return new Promise(resolve =>{
           cloudinary.uploader.upload(file, (result)=>{
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
    const uploader = async(path) => await up(path, 'docs')

    if(req.method==="POST"){
    const urls = []
    console.log(req.files)

    const files = req.files
    for(const file of files){
        const {path} = file
        console.log("hola files", file)
        console.log("hola path", path)
        const newPath = await uploader(path)
        console.log(newPath)
        urls.push({newPath, name: file.originalname})
    
    } 
     
    res.status(200).json({
        message: 'imagen se subio exitosamente',
        data: urls
    })

}   else{
    res.status(405).json({
        err: `${req.method} method not allowed`
    })
}}