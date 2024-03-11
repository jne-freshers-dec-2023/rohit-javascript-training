let p=new Promise((resolve,reject)=>
    {
        let a=1+6;
        if(a==2)
        {
            resolve('success');
        }
        else{
            reject('Failed');
        }
    }
)

p.then((message)=>{
    console.log('This is in the then',message);
}).catch((message)=>{
    console.log('This is in the then',message);
})

//
const userleft=false;
const userWatchingCatMeme=false;

function watchingTutorialCallback(callback,errorCallback)
{
    if(userleft)
    {
        errorCallback(
            {
                name:'user left',
                message:':('
            }
        )
    }
    else if(userWatchingCatMeme)
    {
        errorCallback(
            {
                name:'user watching cat meme',
                message:'webdev simplified < cat'
            }
        )
    }
    else
    {
        callback('Thumbs up');
    }
}

watchingTutorialCallback((message)=>{
    console.log('Success: ',message);
},(error)=>{
    console.log(error.name+' '+error.message);
})

//promise chaning

let a=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

a.then((result) => {
    console.log(result); // 10
    return result * 2;
}).then((result) => {
    console.log(result); // 20
    return result * 3;
}).then((result) => {
    console.log(result); // 60
    return result * 4;
});

