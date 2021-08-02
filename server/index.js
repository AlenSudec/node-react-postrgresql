const express = require('express')
const multer = require('multer')
const cors = require('cors');
require('dotenv').config()

const app = express()
const port = process.env.SRVR_PORT;
const model = require('./model')
const d = new Date();
const path = require('path');
const fs = require('fs');
const parse = require('csv-parse');
const sendGraphInfo = "123";

app.use(cors());
//added
app.set('view engine', 'ejs');
//file upload and save
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'csvList')
  },
  filename: function (req, file, cb) {
    cb(null, d.getDate() + '-'  + (d.getMonth()+1) + '-' + file.originalname)
  }
})

const upload = multer ({ storage: storage }).single('file')

app.post('/upload', function(req,res){

  upload(req, res, function(err) {
    if(err instanceof multer.MulterError){
      return res.status(500).json(err)
    } else if (err){
      return res.status(500).json(err)
    }
    return res.status(200).send(req.file)
  })
});
//file upload and save in csvList directory

app.use(express.json())
app.use(function( req ,res ,next ) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});


app.get('/', (req, res) => {
  model.getList()
  .then(response => {
    res.status(200).send(response);
    
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/list',(req,res) => {
  model.insertIntoList(req.body)
  .then(response=> {
    res.status(200).send(response);
    
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/graph:id', function(req,res) { 
  let parsedCsv = {};
  model.getListById(req.params.id)
  .then(response => {
      function resolveReadStream(){
        return new Promise(resolve=> {
          fs.createReadStream(__dirname+'/csvList/' + response.rows[0].csvname).pipe(parse({columns:true, trim:true, encoding:true,bom:true},function(err,records){
              parsedCsv = records;
              resolve(parsedCsv);
            }))
        })
      }
      async function send(){
        await resolveReadStream();
        res.render('graph', {
          'sendGraphInfo' : response,
          'parsedCsv' : parsedCsv
        })
      }
      send();
    })
    
 
  
})    

app.get('/download', function(req,res) {
  res.download(path.join(__dirname,'examples/examples.rar'));
  
})
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})