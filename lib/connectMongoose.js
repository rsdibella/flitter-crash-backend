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