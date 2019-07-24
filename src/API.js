
const x = fetch('https://swapi.co/api/people/1/')



x.then((response) => {
    console.log(response)
    return response.json()
})

.then((data) => {
    console.log(data)
})

function myFetch(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('hello ssuka')
        }, 4000)
    })
}

const y = myFetch('hello')

y.then((str) => {
    console.log(str)
}).then(() => {

})

const xyz = fetch('https://google.com');

xyz.then((res) => {
    return res.json()
}).then((data) => {
    console.log(data)
})
