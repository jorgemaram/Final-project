const mongoose = require('mongoose')
const User = require('../models/user.model')
// const Book = require('../models/book.model')
const Event = require('../models/event.model')

const dbtitle = 'Proyecto-final'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useUnifiedTopology: true, useNewUrlParser: true })

User.collection.drop()
Event.collection.drop()
// Book.collection.drop()

// const books = [
//     {
//         title: "Aventuras divertidas",
//         genre: "Novela negra",
//         resume: "Un libro muy divertido",
//         chapters: [],
//         author: {
//             name: 'Jorge Martín',
//             gender: "Masculino",
//             username: "jorgem",
//             password: "jorge1234"

//         }
//     },

// ]

const events = [
    {
        name: "Presentación del libro",
        place: "FNAC Callao",
        author: {
            name: 'Jorge Martín',
            gender: "Masculino",
            username: "jorgem",
            password: "jorge1234"

        },
        capacity: 10,

    },

]

Promise.all(events.map(event => User.create(event.author).then(author => author.name)))
    .then(() => events.map(event => User.findOne({ name: event.author.name }).then(author => Object.assign({}, event, { author: author._id }))))
    .then(findAuthors => Promise.all(findAuthors).then(events => events.map(event => Event.create(event))))
    .then(savedEvents => Promise.all(savedEvents).then(events => events.forEach(event => console.log(`Evento ${event.name} creado`))).then(() => mongoose.connection.close()))
    .catch(error => console.log('Error: ', error))