const fs=require('fs')
const path =require('path')
const lib={}

// base directory of data folder
const baseDir=path.join(__dirname,'/../.db/')
//console.log(baseDir)

//write data f
 lib.create=(dir, file, data, callback)=>{
//console.log(baseDir,dir,file)

 // console.log(dir,data)
     fs.open(`${baseDir}/${dir}/${file}.json`,'wx',(err, fileDescriptor)=>{
        //console.log(`${lib.baseDir+dir}/${file}.json`)
            if(!err && fileDescriptor){
                //converting data to json file
                const stringData= JSON.stringify(data)
               //write data to file and close it
               fs.writeFile(fileDescriptor,stringData,(err2)=>{
                   if(!err2){
                fs.close(fileDescriptor,(err3)=>{
                    if(!err3){
                        callback(false)
                    }else{
                        callback('error closing nwe file')
                    }
                })
                   }else{
                    callback('error writing new file')
                   }
                })
            }else{
                callback('there is an error file already exist')
            }

        })
    }
         // data reade 
lib.read=(dir,file,callback)=>{
    fs.readFile(`${baseDir}/${dir}/${file}.json`,'utf8',(err,data)=>{
        callback(err,data)
    })
}
//update existing file
lib.update= (dir,file,data,callback)=>{
    fs.open(`${baseDir}/${dir}/${file}.json`,'r+',(err1, fileDescriptor)=>{
        if(!err1 && fileDescriptor){
            //converting data to string
            const stringData= JSON.stringify(data)
            //truncate the file
            fs.ftruncate(fileDescriptor,(err2)=>{
                if(!err2){
                    //write the file and close it
                    fs.writeFile(fileDescriptor,stringData,(err3)=>{
                        if(!err3){
                           //close the file
                           fs.close(fileDescriptor,(err4)=>{
                               if(!err4){
                                   callback(false)
                               }else{
                                   callback('error file closing')
                               }
                           })
                        }else{
                            callback('error writing file')
                        }
                    })

                }else{
                    callback('error truncating the file')
                }
            })

        }else{
            callback('error happen file may be not exist')
        }
    })
} 

lib.delete=(dir,file,callback)=>{
    fs.unlink(`${baseDir}/${dir}/${file}.json`,(err)=>{
        if(!err){
            callback(false)
        }else{
            callback('error in deleting file')
        }
    })
}
    module.exports =lib

  