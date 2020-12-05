module.exports = app => {

    // Base URLS
    app.use('/api/books', require('./book.routes.js'))

}