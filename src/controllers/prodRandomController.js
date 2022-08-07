const {randomsProds} =  require('../services/prodServices')

async function getProdsRandoms(req, res) {
    const data = await randomsProds()
    res.status(200).json(data)
}

module.exports = {getProdsRandoms}