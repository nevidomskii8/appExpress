const express = require('express')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const cardRoutes = require('./routes/card')
const aboutRoutes = require('./routes/about')
const expRoutes = require('./routes/experiences')
const app = express()
const path = require('path')

const hbs = exphbs.create({               //  пердаётся конфигурируемый объект
    defaultLayout: 'main',                // 
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)               // регистрируем в экспрессе движок hbs

app.set('view engine', 'hbs')               // здесь начинаем его использовать
app.set('views', 'views')                   // указываем название папки, где будут храниться шаблоны

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended: true}))

 app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/about', aboutRoutes)
app.use('/Experiences', expRoutes)
app.use('/card', cardRoutes)

// app.get('/', (req, res) => {
    // res.status(200).type('text/plain')
    // res.sendFile(path.join(__dirname, 'views', 'index.html'))
    // res.render('index', {
    //     title: 'Home Page',
    //     isHome: true
    // })                     // указываем как называется страница и рендерим ее
// })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})