// syncronisation code with callback
console.log('Ask data from server ...');

setTimeout(() => {
    console.log('Manage data for answer from server ...');

    const product = {
        name: 'Laptop',
        price: 3000,
    }

    setTimeout(() => {
        product.status = 'inStock';
        console.log(product)
    }, 2000)
}, 5000)

// promise

const req = new Promise((resolve, reject) => {})
//////resolve
// const req2 = new Promise((resolve, reject) => {
//     console.log('Ask data from server ...');

//     setTimeout(() => {
//         console.log('Manage data for answer from server ...');
    
//         const product = {
//             name: 'Laptop',
//             price: 3000,
//         }
//         resolve(product);
//     }, 5000)

// })

// req2.then ((product)=>{
//     setTimeout(() => {
//          product.status = 'inStock';
//         console.log(product)
//     }, 2000)
// })

// const req2 = new Promise((resolve, reject) => {
//     console.log('Ask data from server ...');

//     setTimeout(() => {
//         console.log('Manage data for answer from server ...');
    
//         const product = {
//             name: 'Laptop',
//             price: 3000,
//         }
//         resolve(product);
//     }, 5000)

// })

// req2.then ((dataFromReq2Promis)=>{ // Name dataFromReq2Promis can be changed to product
//     const req3 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             dataFromReq2Promis.status = 'inStock';
//            resolve(dataFromReq2Promis)
//        }, 2000)
//     })
//     req3.then((someObj) => { // Name someObj can be changed to product
//         console.log(someObj)
//     })
// })

// const req2 = new Promise((resolve, reject) => {
//     console.log('Ask data from server ...');

//     setTimeout(() => {
//         console.log('Manage data for answer from server ...');
    
//         const product = {
//             name: 'Laptop',
//             price: 3000,
//         }
//         resolve(product);
//     }, 5000)

// })

// req2.then ((dataFromReq2Promis)=>{ // Name dataFromReq2Promis can be changed to product
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             dataFromReq2Promis.status = 'inStock';
//            resolve(dataFromReq2Promis)
//        }, 2000)
//     })
// }).then((data) => {
//     data.isModified = true;
//     return data
// }).then((somedata) => {
//     console.table(somedata)
// })

//--reject 

const req2 = new Promise((resolve, reject) => {
    console.log('Ask data from server ...');

    setTimeout(() => {
        let errorHappened = false; 
        console.log('Manage data for answer from server ...');
    
        const product = {
            name: 'Laptop',
            price: 3000,
        }

        if (errorHappened) {
            reject()
        }

        resolve(product);

    }, 5000)

})

req2.then ((dataFromReq2Promis)=>{ // Name dataFromReq2Promis can be changed to product
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            dataFromReq2Promis.status = 'inStock';
           resolve(dataFromReq2Promis)
       }, 2000)
    })
}).then((data) => {
    data.isModified = true;
    return data
}).then((somedata) => {
    console.table(somedata)
}).catch(() => {
    console.log('Error Came to US!');
}).finally(() => {
    console.table('This code executes in any cases')
})