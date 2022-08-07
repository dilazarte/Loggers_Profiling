const {faker} = require('@faker-js/faker')
faker.locale = 'es'

async function randomsProds(){
    const productos = []
    for(let i = 0; i < 5; i++){
        let producto = {
            id: faker.random.numeric(),
            nombre: faker.commerce.productName(),
            precio: faker.commerce.price(500, 1500),
            foto: faker.image.image(50,50)
        }
        productos.push(producto)
    }
    return productos
}

module.exports = {randomsProds}