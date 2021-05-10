//getting dependecy
const fs = require('fs')

const path =require('path')



const lib={}

// setting base directory of data folder
 const basedir = path.join(__dirname,'/../.DB/') 
//const basedir =path.join(__dirname,'../db/')

//console.log(basedir)

lib.create = (dir, file, data, callback) => {
    // open file for writing
    //fs.open(`${basedir +dir}/${file}.json`,'wx',(err,fileDescriptor)=>{
    fs.open(`${basedir}+${dir}/${file}.json`,'wx',(err,fileDescriptor)=>{
        console.log(`${basedir+dir}/${file}.json`)
        if (!err && fileDescriptor) {
            // convert data to stirng
            const stringData = JSON.stringify(data);

            // write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                console.log(stringData,err2)
                if (!err2) {
                    fs.close(fileDescriptor, (err3) => {
                        if (!err3) {
                            callback(false);
                        } else {
                            callback('Error closing the new file!');
                        }
                    });
                } else {
                    callback('Error writing to new file!');
                }
            });
        } else {
            callback('There was an error, file may already exists!');
        }
    })
    
};

//  lib.create = function(dir,file,data,callback){
//     // console.log(dir,file,data)
//      ///file open for writing
//      fs.open(`${basedir}/${dir}/${file}.json`,'wx',(err,fileDescriptor)=>{
//          console.log(`${lib.basedir+dir}/${file}.json`)
//           if(!err && fileDescriptor){
//                 //getting file data into stringify
//                 const stringData =JSON.stringify(data)
//                 // now write file and close fiel
//                 fs.writeFile(fileDescriptor,stringData,(err1)=>{
//                     if(!err1){
//                         fs.close(fileDescriptor,(err2)=>{
//                                 if(!err2){
//                                     callback(false)
//                                 }else{
//                                     callback('error in closing file')
//                                 }
//                         })

//                     }else{
//                         callback('error in writing file')
//                     }

//                 })

//           }else{
//             callback('there is an error file already exist')
//           }
//      })

//  }
 lib.read=(dir,file,callback)=>{
      fs.readFile(`${basedir}/${dir}/${file}.json`,'utf8',(err,data)=>{
      console.log(err,data)
      })
 }
lib.update= (dir, file, data, callback)=>{
    // now open the file for writing write and update mode r+
    fs.open(`${basedir}/${dir}/${file}.json`,'r+',(err,fileDescriptor)=>{
        if(!err && fileDescriptor){
            //take data to be strigify
            const stringData =JSON.stringify(data)
            //now empty the file 
            fs.ftruncate(fileDescriptor, (err)=>{
                if(!err){
                    //now writing file and close file
                    fs.writeFile(fileDescriptor,stringData, (err)=>{
                        if(!err){
                          // then close the file 
                          fs.close(fileDescriptor,(err)=>{
                              if(!err){
                                  callback(false)
                              }else{
                                  callback('error in closing the file')
                              }
                          })
                        }else{
                            callback('error in writing the file')
                        }
                    })
                }else{
                    callback('error in truncate the file')
                }
            })
        }else{
            callback('something wrong update file data')
        }

    })
}
lib.delete =(dir,file,callback)=>{
    //for deleting the file 
    fs.unlink(`${basedir}/${dir}/${file}.json`,(err)=>{
        if(!err){
            callback(false)
        }else{
            callback('error in file deleting',err)
        }
    })
}

 module.exports =lib


        



















/* const fs=require('fs')
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
 */
  