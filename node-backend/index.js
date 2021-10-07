let express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoDb = require('./database/db');

mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
    userNewUrlParser:true,
    useFindAndModify: false,
    userUnifiedTopology: true
}).then(()=>{
    console.log('database success')
}, error => {
    console.log('database error' + error)
})

const bookRoute = require('./routes/book_routes')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist/')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname), 'dist/index.html')
})

app.use('/api', bookRoute);

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log('Listenning on port '+ port)
})

app.use((req, res, next) => {
    next(createError(404))
})

app.use((err, req, res, next) => {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})