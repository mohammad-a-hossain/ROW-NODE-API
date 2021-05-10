const environment ={}
// setting two port
environment.staging={
    port:4000,
    envName:'staging',
    secretKey:'dfd343'
}
environment.production={
    port:5000,
    envName:'production',
    secretKey:'344kre'
}
/* environment.development={
    port:6000,
    envName:'development'
} */

//now determind which environment will pass
 const determindEnvironment= typeof(process.env.NODE_ENV)==="string"?process.env.NODE_ENV:"staging"

  //export corresponding env object
  const environmentToExport= typeof(environment[determindEnvironment])==='object'?environment[determindEnvironment]:environment.staging

  module.exports = environmentToExport

 
























/* const environments={}

environments.staging={
    port : 3000,
    envName :'staging'
}
environments.production ={
    port:5000,
    envName:'production'
}
// check which env is passed ?
const currentEnvironment =typeof(process.env.NODE_ENV)==="string" ?  process.env.NODE_ENV: 'staging';

//export coresponding env object
const environmentToexport=typeof(environments[currentEnvironment]) ==='object' ? environments[currentEnvironment]:environments.staging

///exporting 
module.exports = environmentToexport */