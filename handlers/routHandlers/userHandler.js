  //import data object to check validatin user
  const data =require('../../lib/data')
  const {hash} = require('../../helpers/utilites')
   const { parseJSON } =require('../../helpers/utilites')
  
  //module scaffolding
  const handler ={}

  handler.userHandler=(requestProperty,callback)=>{
      const acceptableMethod =['get','post','put','delete']
      //checking the method is in the array 
      
      if(acceptableMethod.indexOf(requestProperty.method)> -1){
//console.log(requestProperty.method)
          handler._user[requestProperty.method](requestProperty,callback)
         // console.log(acceptableMethod)
      }else{
        callback(405,{
          title:'this is from user post wrong url'
      })   
      }
     
  }
  handler._user ={}

  handler._user.post = (requestProperty,callback)=>{
   
    const firstName =
    typeof requestProperty.body.firstName === 'string' &&
    requestProperty.body.firstName.trim().length > 0
        ? requestProperty.body.firstName
        : false;

const lastName =
    typeof requestProperty.body.lastName === 'string' &&
    requestProperty.body.lastName.trim().length > 0
        ? requestProperty.body.lastName
        : false;

const phone =
    typeof requestProperty.body.phone === 'string' &&
    requestProperty.body.phone.trim().length === 11
        ? requestProperty.body.phone
        : false;

const password =
    typeof requestProperty.body.password === 'string' &&
    requestProperty.body.password.trim().length > 0
        ? requestProperty.body.password
        : false;

const tosAgreement =
    typeof requestProperty.body.tosAgreement === 'boolean' &&
    requestProperty.body.tosAgreement
        ? requestProperty.body.tosAgreement
        : false;

      if (firstName && lastName && phone && password && tosAgreement) {
          
        // make sure that the user doesn't already exists
        data.read('users', phone, (err1) => {
            if (err1) {
                const userObject = {
                    firstName,
                    lastName,
                    phone,
                    password: hash(password),
                    tosAgreement,
                };
                // store the user to db
                data.create('users', phone, userObject, (err2) => {
                    console.log(userObject,err2)
                    if (!err2) {
                        callback(200, {
                            message: 'User was created successfully!',
                        });
                    } else {
                        callback(500, { error: 'Could not create user!' });
                    }
                });
            } else {
                callback(500, {
                    error: 'There was a problem in server side!',
                });
            }
        });
    } else {
         callback(400, {
             error: 'You have a problem in your request',
         });
    }
};

       
 // get data from users
  handler._user.get =(requestProperty,callback)=>{
    const phone =
    typeof requestProperty.queryStringObject.phone === 'string' &&
    requestProperty.queryStringObject.phone.trim().length === 11
        ? requestProperty.queryStringObject.phone
        : false;
if (phone) {
    // lookup the user
    data.read('users', phone, (err, u) => {
        const user = { ...parseJSON(u) };
        if (!err && user) {
            delete user.password;
            callback(200, user);
        } else {
            callback(404, {
                error: 'Requested user was not found!',
            });
        }
    });
} else {
    callback(404, {
        error: 'Requested user was not found!',
    });
}
  }

  // updating data from users
  handler._user.put =(requestProperty,callback)=>{

  }
  handler._user.delete = (requestProperty,callback)=>{

  }
  
  module.exports = handler

