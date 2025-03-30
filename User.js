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
let phone = "123-456-7890"
let email = "johndoe@gmail.com"

let data = fs.readFileSync("UserDataBase.json", 'utf8')
let users = JSON.parse(data);

// if phone number is writen like ***-***-****
    phonecheck:if ( phone.length == 12 )
    { 

        phone = phone.substring(0,3) + phone.substring(4,7) + phone.substring(8); //cuting out the - or / in the number
        this.phone = phone;
        
    }

//if phone is writen like **********
    phonecheck:if ( phone.length == 10 )
    {

       this.phone = phone;

    }

let lastJson = 0

for (i in users){
    lastJson = i - 1 + 2
}

const Obj = {
    userName: username, 
    userPassword: password, 
    userPhone: phone,
    userEmail: email,
    id: [lastJson]

}
users.push(Obj)

write(users)

// console.log(Object.keys("UserDataBase.json").length)