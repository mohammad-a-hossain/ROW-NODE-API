const environments={}

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
module.exports = environmentToexport