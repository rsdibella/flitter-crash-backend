<<<<<<< HEAD
"strict"
const mongoose = require('mongoose');
const conn = mongoose.connection;

conn.on('error', (err) => {
    console.error('mongodb connection error', err) ; 
    process.exit(1);
} )


conn.once('open', () =>{
    console.log('Connected to mongodb.', mongoose.connection.name);
} );

mongoose.connect('mongodb://127.0.0.1/flitter-crash-backend');

module.exports= conn
=======
'use strict';

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connection.on('error', err => {
    console.log('Eroor de conexiona MonDB', err);
    process.exit(1);
});

mongoose.connection.once('open', () => {
console.log('Conectado a MongoDB en', mongoose.connection.name);
});

mongoose.connect('mongodb://127.0.0.1/nodeapp')

module.exports = mongoose.connection;
>>>>>>> 4452792b262ca473a57dbb0cdb0d5aaf867fd700
