var isEven = (element) =>
{ 
    // if(element%2===0)
    // {
    //     return true;
    // }
    return element%2 === 0;
}

var temp= function isEven(element)
{
    if(element%2===0)
    {
        return true;
    }
    return false;
}

var result=[2,4,6,8,10].every(isEven);
console.log(result);
console.log("==============");
var result1=[2,4,6,8,10].every((e)=> e%2 === 0);
console.log(result1);