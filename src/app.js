const express = require('express');
const logeer = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const indexRoutes = require('./routes/index');

//settings
app.set("port", process.env.PORT || 80);
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
//middlewares
app.use(logeer("dev"));
app.use(bodyParser.urlencoded({extended:false}));
//routes
app.use('/',indexRoutes);

app.listen(app.get("port"),()=>{
  console.log("server on port ", app.get("port"));
});
