import express from 'express';
import fs from 'fs'
import path from 'path'
import App from '../src/App';
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('1..')
 
 
fs.readFile(path.resolve('./build/index.html'),'utf8',(err,data)=>{
  if(err)
  {
    return res.status(500).send('An error occured')
  }
  return res.send(data.replace(`<div id="root"></div>`,`<div id="root">${ReactDOMServer.renderToString(<App/>)}</div>`)
    
  );
})
  
});

app.listen(3005, () => {
  console.log('Server is running on http://localhost:3005');
});
