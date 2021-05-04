//require http dependency
const http =require('http')


//getting handler from helpers
const {handleReqRes} =require('./helpers/handleReqRes')

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

// creating a handler to helpers
app.handleReqRes =handleReqRes

// calling the server
app.createServer()


