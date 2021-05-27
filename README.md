# my row node.js learning path
## this is basic node.js API project ,without database, only file system: -teaching from Sumit-sir
* step1 working with response
--require http
--set app object
--set app configue
--create server http
--create server request method
--create server listen port
--start server method

* step2 working with request method 
--set url path and trim for unwanted / \ in url
--set method lower case
--set query string
--set header
--set payload buffer decoder
--set req.on event and convert the buffer into data 
--req.on event  listen and get data buffer convert into data
--set buffer on and end // post method send data from body

* step3 code refactoring 
--make folder HELPERS for handleReqRes
--handleReqRes mehtod export to index and use in app.handleReqRes

* step4 Routing setup
--a file for route.js
--make another folder for HANDLERS ->routHandlers ->--file for samplehandler.js
--make another file for notfoundhandler.js
--set some validation property in handlerReqRes and make a function chosenHandler
CHOSENHANDLER fuction will set if a request come and which handler will handle this incoming request
chosenHandler function will place inside the end event handler
--set decoder for string 
--set event data on and then end event data

* step 5 set environment variable
--set a file in handler folder
--set environment var staging,production and port is different
--set the config in server 

* step 6 data save and store and CRUD OPERATION
--make a data folder (mkdir .data) 
--make a lib folder for storing all data file 
--maket data and create read update and delete file

* step 7 set a user crud operation
--set res.setHeader in reqres function and test data from  post man
--first make a user handler function in routhandler forlder and a rout for user import to route
--then set method in userHandler and declare all method for crud operation

* step 8 make a  for validation users crud
--make a utility file in handler for error handling during request in url then import handle in handlereqres page
--in handlereqres realdata is inserted into parseJson
--now set all validation of url in userHandler method _user.post
--now import data from library and inquery if file exist or not
-- now make a users folder in db folder 

* step 9 password hashing
-- now set a core module name CRYPTO in utility page for password encrypt
--then get secretkey for password encryption goto environment page and import it to utility page
--now get hash from utility and 









