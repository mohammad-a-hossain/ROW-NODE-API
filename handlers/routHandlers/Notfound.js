const handler ={}

handler.notFoundHandler =(requestProperty,callback)=>{
   callback(404,{
       title:'not found any valid url'
   })
}


module.exports = handler

