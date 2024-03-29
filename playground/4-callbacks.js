// setTimeout(() => {
//     console.log("Two seconds are up")
// }, 2000)

// const names = ['Donald', 'Rebecca', 'Ellie', 'Bob', 'Mark']

// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })

// ---------------------------------------------------------
// Function below takes 2 nums and callback to sum numbers
// ---------------------------------------------------------
const add = (num1, num2, callback) => {
    setTimeout(() => {
        const sum = num1 + num2
        callback(sum)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})
