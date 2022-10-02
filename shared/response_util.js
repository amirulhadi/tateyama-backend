exports.success = async (req, res, data) => {
    // if (process.env.NODE_ENV != 'test' && req.log) {
    //     await log.updateLog(req.log.id, 200, data || 'Success')
    //     if (req.method === "GET") await log.deleteLog(req.log.id)
    // }

    res.status(200).send({
        'code': '200',
        'message': 'Success',
        'data': data
    })
}