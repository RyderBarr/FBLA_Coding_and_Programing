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







let username = "J0hnDo3"
let password = "123321"
let email = "johndoe@gmail.com"
let balance = 0
let fName = "John"
let lName = "Doe"

let data = fs.readFileSync("UserDataBase.json", 'utf8')
let users = JSON.parse(data);
let lastJson = 0


function collect()
{
    username = document.getElementById("username")
    password = document.getElementById("password")
    email = document.getElementById("email")
    balance = document.getElementById("balance")
    fName = document.getElementById("fname")
    lName = document.getElementById("lname")
    

    for (i in users){
        lastJson = i - 1 + 2
    }

    const Obj = {
        userName: username, 
        userPassword: password, 
        userEmail: email,
        userBalance: balance,
        userFName: fName,
        userLName: lName,
        id: [lastJson]
    
    }
    users.push(Obj)
    
    write(users)
}

for (i in users){
    lastJson = i - 1 + 2
}

const Obj = {
    userName: username, 
    userPassword: password, 
    userEmail: email,
    userBalance: balance,
    userFName: fName,
    userLName: lName,
    id: [lastJson]

}
users.push(Obj)

write(users)

// console.log(Object.keys("UserDataBase.json").length)