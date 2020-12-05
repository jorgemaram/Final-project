module.exports = app => {

    // Base URLS {
        
    // app.use('/api/books', require('./books.routes.js'))
    app.use('/api/events', require('./events.routes.js'))
}