//require http dependency
const http =require('http')
const url=require('url')
//getting core module class StringDecoder
const {StringDecoder}=require('string_decoder')// for decoding string

//creating an app object
const app ={}

// setting a configuration
app.config ={
    port:4000
}

// creating a server 
app.createServer=()=>{
const server =http.createServer(app.handleReqRes)
      server.listen(app.config.port, ()=>{
      console.log(`this server is listening on port of ${app.config.port}`)
      })
    }

// creating a handler 
  app.handleReqRes =(req,res)=>{
  // handling request url
   const parsedUrl= url.parse(req.url,true)
   console.log(parsedUrl)
   const path= parsedUrl.pathname
   const trimmedPath=path.replace(/^\/+|\/+$/g,'')
   //console.log(trimmedPath)
   const method=req.method.toLowerCase()
   const queryStringObject= parsedUrl.query
   //console.log(QueryStringObject)
   const headerObject =req.headers
   //console.log(headerObject)
  const decoder = new StringDecoder('utf-8')
  let realData=''
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
// calling the server
app.createServer()
