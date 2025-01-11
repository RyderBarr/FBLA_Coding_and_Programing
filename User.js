// node user
const fs = require('fs')

function read(database = "UserDataBase.json"){
    const data = fs.readFileSync(database, 'utf8')
    return JSON.parse(data)
}

function write(obj,database = 'UserDataBase.json') {

    if ( !obj ) 

    {

        return console.log('please provide data to save')

    }

    try

    {

        fs.writeFileSync( database , JSON.stringify( obj ) )
        
    }

    catch ( err ) 
    {
        console.log( "there is an error" )
    }
}

module.exports = { read, write }

let data = fs.readFileSync("UserDataBase.json", 'utf8')
let users = JSON.parse(data);



let lastJson = 0

for (i in users){
    lastJson = i
}

const Obj = {
    firstName: 'John', 
    lastName: 'Doe', 
    id: [lastJson+1]

}
users.push(Obj)

write(users)

// console.log(Object.keys("UserDataBase.json").length)