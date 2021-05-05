//require http dependency
const http =require('http')
const environment = require('./helpers/environment')
const data =require('./lib/data')



//getting handler from helpers
const {handleReqRes} =require('./helpers/handleReqRes')

//creating an app object
const app ={}

//testing to create data
/* data.create('test','textFile',{name:'aaron',lastName:'hossain',age:'23'},(err)=>{
    console.log(err)
}) */
//reading file
/* data.read('test','textFile',(err,result)=>{
    console.log(err,result)
})
 */
// updateing the file data
/* data.update('test','textFile',{name:'aaron',lastName:'hossain',age:'10'},(err)=>{
    console.log(err)
}) */

// deleting the file
data.delete('test','textFile',(err)=>{
    console.log(err)
})
// setting a configuration


// creating a server 
app.createServer=()=>{
const server =http.createServer(app.handleReqRes)
      server.listen(environment.port, ()=>{
      console.log(`this server is listening on port of ${environment.port}`)
      })
    }

// creating a handler to helpers
app.handleReqRes =handleReqRes

// calling the server

app.createServer()
