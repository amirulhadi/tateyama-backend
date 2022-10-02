const service = require('../services/contact_service')
const { success } = require('../shared/response_util')

exports.submitMessage = async (req, res) => {
  console.log('sini')
    try {
      let origin = req.body
      console.log('origi: ', origin)
      const send = await service.submitMessage(origin)
      success(req, res, send)
    } catch(error) {
      console.log('error: ', error)
    }
  }
