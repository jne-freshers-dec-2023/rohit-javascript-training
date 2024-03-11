async function sayHi() {
    return 'Hi';
}

sayHi().then(console.log);

// used similar to promise function

async function sayHi() {
    return Promise.resolve('Hi');
}

sayHi().then(console.log)

//Error handling

async function getUser(userId) {
    await Promise.reject(new Error('Invalid User Id'));
}

//above code we can write in this way also

async function getUser(userId) {
    throw new Error('Invalid User Id');
}

//we can used try catch block also to handle error

async function getUser(userId) {
    try {
       const user = await Promise.reject(new Error('Invalid User Id'));
    } catch(error) {
       console.log(error);
    }
}

console.log("================================");

function makeRequest(location)
{
    console.log(`making request to ${location}`);
    return new Promise((resolve,reject)=>{
        if(location === 'Google')
        {
            resolve('Google say Hi');
        }
        else{
            reject('we can only talk to Google');
        }
    })
}

function processRequest(response)
{
    return new Promise((resolve,reject)=>{
        console.log('processing response');
        resolve(`Extra information ${response}`);
    })
}

// makeRequest('facebook').then(response =>{
//     console.log('Responsed Received');
//     return processRequest(response); 
// }).then(processResponse => console.log(processResponse)).catch(error => console.log(error));

async function doWork()
{
    try {
        const response=await makeRequest('Google');
        console.log('Responsed Received');
        const processResponse=await processRequest(response);
        console.log('processing response');
    } catch (error) {
        console.log(error);
    }
}

doWork();