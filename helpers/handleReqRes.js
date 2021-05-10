//getting dependencies
const url =require('url')
const { StringDecoder } = require('string_decoder')
const routes = require('../route')
const { notFoundHandler } = require('../handlers/routHandlers/Notfound')
const {parseJSON} =require('../helpers/utilites')



//module scaffolding
const handler ={}





// creating a handler for req and response
handler.handleReqRes=(req, res) =>{
  //handling request url
  const parsedUrl= url.parse(req.url, true)
 // console.log(parsedUrl)
  // path
  const path =parsedUrl.pathname
  // path trimmed
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');
 
  //method for lower case
  const method =req.method.toLowerCase()
  // query string set
  const queryStringObject = parsedUrl.query
 //console.log(queryString)
  //header object
  const headersObject =req.headers

  // making a request property object
   const requestProperty={
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headersObject
   }
  
  
  // set decoder for string
  const decoder = new StringDecoder('utf-8')
  // set a realdata name
  let realData =""

    // declare a var that will find which trimmed path is exist or not
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath]: notFoundHandler

  //setting a req data event on fire
  req.on('data',(buffer)=>{
      realData += decoder.write(buffer)
  })

  req.on('end',()=>{
  realData += decoder.end()

  // parsing realdata into json object
  requestProperty.body =parseJSON(realData)
  //console.log(requestProperty.body)
  // chosenHandler is set 
 
   //then call a function that will send statuscode and payload
          chosenHandler(requestProperty,(statusCode, payload)=>{
      
            statusCode = typeof statusCode === "number" ?statusCode:500;
            payload = typeof payload === "object" ? payload: {}
           
            //now strinyfy data payload
            const payloadString = JSON.stringify(payload)
            
            //testing a data if json object and sending through body
            res.setHeader('Content-Type: application/json')
          
           // final response
           res.writeHead(statusCode)
           res.end(payloadString)
          })

          //res.end('welcome my row node aPi') 
  })


}

module.exports =handler

























/* 
  // dependencies
const url = require('url');
const {StringDecoder}=require('string_decoder')// for decoding string
const routes =require('../route')
const notFoundHandler =require('../handlers/routHandlers/Notfound')

// modue scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8')
    let realData='';

    //setting a validatation for handlers
    let chosenHandler =routes[trimmedPath] ? routes[trimmedPath]:notFoundHandler;

    
     req.on('data',(buffer)=>{
       realData += decoder.write(buffer)// here the buffer will b data and store in realdata
     })
       //ending buffer 
     req.on('end',()=>{
       realData += decoder.end()
     
       /* console.log(realData) 
       chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};
  
        const payloadString = JSON.stringify(payload);
  
        // return the final response
        res.writeHead(statusCode);
        res.end(payloadString);
    });
  
       res.end('welcome my row node aPi')
     })
  }
  module.exports = handler
*/