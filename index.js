// dependency
const http =require('http')
const { result } = require('lodash')
const environment = require('./helpers/environment')
// getting handlereqres from halper folder
const {handleReqRes} = require('./helpers/handleReqRes')
const data= require('./lib/data')


//creating a app object
const app ={}

// creating configue
/* app.config ={
    port: 4000
}
 */

// create data
/*  data.create('test','textFile',{name:'abu hossain',hobby:'web development',age:40},(err)=>{
    console.log('error in creating file',err)
})  */ 

// read file
/* data.read('test','textFile',(err,result)=>{
    console.log(err,result)
}) */

// update file
/* data.update('test','textFile',{name:'james bond',profession:'acting',age:99},(err)=>{
    console.log(err)
}) */

// deleting the file
/*  data.delete('test','textFile', (err)=>{
    console.log(err)
})  */
 app.createServer =()=>{
    const server =http.createServer(app.handleReqRes)

    server.listen(environment.port, ()=>{
     console.log(`server is connected to the port of ${environment.port}`)
        })
    }
// 
app.handleReqRes =handleReqRes


app.createServer() 
