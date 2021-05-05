// dependency
const http =require('http')


// getting handlereqres from halper folder
const {handleReqRes} = require('./helpers/handleReqRes')


//creating a app object
const app ={}

// creating configue
app.config ={
    port: 4000
}

 app.createServer =()=>{
    const server =http.createServer(app.handleReqRes)

    server.listen(app.config.port, ()=>{
     console.log(`server is connected to the port of ${app.config.port}`)
        })
    }
// 
app.handleReqRes =handleReqRes


app.createServer() 
