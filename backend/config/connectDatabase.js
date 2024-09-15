const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log('MangoDB connected to host:' + con.connection.host)
    })
};
module.exports = connectDatabase;