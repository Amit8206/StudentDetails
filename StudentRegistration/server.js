const express = require("express")
// const morgan = require("morgan")
const dotenv = require("dotenv");
const bodyparser = require("body-parser")
const path = require("path")

const app = express()


dotenv.config();

const port = process.env.PORT || 8080;

const host = process.env.HOST || "localhost"


app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())




app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'))



var home = require('./controllers/controller');


app.use('/', home);





app.listen(port, () => {
    console.log(`Application is listening on http://${host}:${port}`)
})