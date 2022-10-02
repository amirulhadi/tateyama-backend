const {career} = require ('../model')

exports.sendResume = async (body) => {
    console.log('body: ', body)
    return await career.create(body)
}