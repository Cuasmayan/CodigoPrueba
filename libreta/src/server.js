const express = require('express');
const app = express();
const cors = require('cors');
const routes =require('./controllers/libreta');

// Settings
app.set('port', process.env.PORT || 4000);

app.use(express.json());
app.use(cors());

app.get('/', routes);

app.get('/api', (req, res)=>{
  res.send('servicio')
})



app.use(require('./controllers/libreta'));


// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});