//download the library
const express = require('express')
//create an app by calling the express function to setup the server
const app = express()
// run the app and listening at 3000 port
app.listen(3000)
/*
* HTTP methods are gonna be avaliable
* app.get()
* app.delete()
* app.post()
*/

//craete an route here, send a hi to user, res can only send response for one tme
/*
1. error:
res.sendStatus(500)
res.send("Hi") 
2. test2:
res.status(500).send("Hi")
res.status(500).json({message: "Error"})
3. test3
app.get('/',(req,res)=>{
    console.log("Here")
    res.json({message: "Error"})
    res.download('server.js')
    
})
4. render a file
*/
app.get('/',(req,res)=>{
    console.log("Here")
    res.render('index')
})