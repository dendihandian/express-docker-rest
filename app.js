const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const db = require('./app/models/')
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: true // no need to use when using mongodb 6+
    })
    .then(() => {
        console.log(`Database connected!`)
    })
    .catch((err) => {
        console.log(`Cannot connect to the database`, err)
    })

app.get('/', (req, res) => {
    res.json({message: 'welcome to the express docker rest'})
})

require('./app/routes/post_routes')(app)

const PORT = 8000
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})