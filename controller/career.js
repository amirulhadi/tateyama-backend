const service = require('../services/career_service')
const { success } = require('../shared/response_util')

exports.sendResume = async (req, res) => {
  console.log('sini')
    try {
      let origin = req.body
      console.log('origi: ', origin)
      const send = await service.sendResume(origin)
      success(req, res, send)
    } catch(error) {
      console.log('error: ', error)
    }
  }
