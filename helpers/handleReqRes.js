 //getting dependencies
 const url=require('url')
 //getting core module class StringDecoder
const {StringDecoder}=require('string_decoder')// for decoding string
//getting routes
const routes =require('../route')
const notfoundHandler =require('../handlers/routHandlers/Notfound')



 const handler={}

handler.handleReqRes =(req,res)=>{
    // handling request url
     const parsedUrl= url.parse(req.url,true)
     console.log(parsedUrl)
     const path= parsedUrl.pathname
     const trimmedPath=path.replace(/^\/+|\/+$/g,'')
     //console.log(trimmedPath)
     const method=req.method.toLowerCase()
     const QueryStringObject= parsedUrl.query
     //console.log(QueryStringObject)
     const headerObject =req.headers
    
     //setting a object of properties for request and apply on chosenHandler
     const requestProperties ={
       parsedUrl,
       path,
       trimmedPath,
       method,
       QueryStringObject,
       headerObject
     }
     


    const decoder = new StringDecoder('utf-8')
    let realData=''

    //setting a validatation for handlers
    const chosenHandlers=routes[trimmedPath]?routes[trimmedPath]:notfoundHandler

    chosenHandlers(requestProperties,()=>{
      
    })
     req.on('data',(buffer)=>{
       realData += decoder.write(buffer)// here the buffer will b data and store in realdata
     })
       //ending buffer 
     req.on('end',()=>{
       realData += decoder.end()
  
       console.log(realData)
       res.end('welcome my row node aPi')
     })
  }
  module.exports = handler