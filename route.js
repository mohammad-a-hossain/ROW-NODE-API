const {sampleHandler} = require('./handlers/routHandlers/samplehandler')
const { userHandler } = require('./handlers/routHandlers/userHandler')
//modal scaffolding
const routes ={
    sample:sampleHandler,
    user: userHandler

}



module.exports = routes










