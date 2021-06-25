// Object property shorthand

const name = "Don"
const userAge = 30

const user = {
    name,
    age: userAge,
    location: "California"
}

console.log(user)

// Object Destructuring

const product = {
    label: 'Red notebook',
    price: 3.00,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label: productLabel, stock, rating} = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type)
    console.log(label)
    console.log(stock)
}

transaction("order", product)