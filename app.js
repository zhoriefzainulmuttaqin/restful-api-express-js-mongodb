const express = require('express');
const cors = require('cors');

const app = express()  //memparsing / berisikan object express js

app.use(express.json()); //mendapatkan data json / menentukan ke dalam json
app.use(express.urlencoded({
    extended: true
    }));

    const db = require('./app/models/')
    db.mongoose.set('strictQuery', true);
    db.mongoose.connect(db.url)
        .then(() => {
            console.log(`Database Connected!`);
        }).catch((err) => {
            console.log(`Cannot connect to database!`, err);
            process.exit()
        })

app.get('/', (req, res) => {
    res.json({
        message: "welcome to My Express Tutorial"
    })
});

require('./app/routes/post.routes')(app)

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});