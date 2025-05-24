// import and create an express app
const express = require('express');
const app = express()

// message as response
msg = "Hello world! this is nodejs in a docker container..Trying something new"
// create an end point of the api
app.get('/', (req, res) => res.send(msg));

app.get('/movie',(req,res)=>{
    let obj= {'name': 'Raid 2'}
    res.send(obj)
})

// now run the application and start listening
// on port 80
app.listen(80, () => {
    console.log("app running on port 3000");
})