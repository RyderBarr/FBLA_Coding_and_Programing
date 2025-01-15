const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const {prohairesis} = require('prohairesis')
// const bodyparser = require('body-parser')



const app = express()
const port = process.env.PORT || 8080

app
    // logs everything in development mode
    .use(morgan('dev'))
    // gives any static file in the public folder
    .use(express.static('public'))
    // parse application/x-www-form-urlencoded
    .use(express.urlencoded({ extend: false}))
    //parse application/json
    .use(express.json())

    //
    .post('/api/user', (req, res) => {
        
        // print req.body
        res.log(req.body)
    })

    // port varible from abov e, a nameless fuction that writes out what port the server is listening to
    .listen(port, () => console.log(`server on ${port}`))