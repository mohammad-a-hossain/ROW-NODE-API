  //module scaffolding
  const handler ={}

  handler.sampleHandler=(requestProperty,callback)=>{
      callback(200,{
          title:'this is from sample handler url'
      })
  }
  
  module.exports = handler












/* const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
   

    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler; */