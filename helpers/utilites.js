const crypto = require('crypto')
const utility ={}

// getting environment for setting secretKey
const environment = require('../helpers/environment')


//parse json string to object

utility.parseJSON=(jasonString)=>{
    let output;
    try{
        output =JSON.parse(jasonString)
    }catch{
        output={}
    }
    return output
}
// hashing string for password encrypting 
utility.hash=(str)=>{
    
    if(typeof str ==='string' && str.length > 0){
        //console.log(environment,process.env.NODE_ENV)
        const hash =crypto.createHmac('sha256',environment.secretKey).update(str).digest('hex')
        return hash
    }else{
        return false
    }
   
  
}


module.exports = utility