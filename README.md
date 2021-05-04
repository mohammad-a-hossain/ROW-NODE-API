* step1 working with response
--require http
--set app object
--set app configue
--create server http
--create server request method
--create server listen port
--start server method

* step2 working with request
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
