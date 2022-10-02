const express = require('express');
const careerController = require('./controller/career')
const contactController =  require('./controller/contact')

module.exports = function (app) {
    const apiRoutes = express.Router()
    // Send Resume
    apiRoutes.post('/sendResume', careerController.sendResume)
    apiRoutes.post('/submitMessage', contactController.submitMessage)

    app.use('/api', apiRoutes)
}