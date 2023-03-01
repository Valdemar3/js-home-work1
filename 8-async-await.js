async function asyncFn() { // 

}

const asyncFn2 = async () => { // anonymus gfunction
return 'text' // async function alsway return Promise
}

console.log(asyncFn2())

asyncFn2().then( (value) => {
    console.log(value)
})

const timerPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 sec wait')
            resolve()
        }, 2000)
    })
}

const asyncFn3 = async () => {
    console.log('start') 
    await timerPromise()
    console.log('end')
}

asyncFn3();