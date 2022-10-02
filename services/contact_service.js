const {contact} = require ('../model')

exports.submitMessage = async (body) => {
    console.log('body: ', body)
    return await contact.create(body)
}