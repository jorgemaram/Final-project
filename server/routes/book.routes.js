const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Book = require('./../models/book.model')
const User = require('./../models/user.model')

router.get('/getAllBooks', (req, res) => {

    Book
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/bookDetails/:book_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.book_id)) {
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

    Book
        .findById(req.params.book_id)
        .populate('author')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newBook', (req, res) => {
    
    Book
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editBook/:book_id', (req, res) => {

    Book
        .findByIdAndUpdate(req.params.book_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/deleteBook/:book_id', (req, res) => {

    Book
        .findByIdAndDelete(req.params.book_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router