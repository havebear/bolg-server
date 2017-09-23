const writeJson = function(){
    
}

// 将对象转为数组
const objToArray = function(obj){
    // let array = [];
    // for(let key in obj){
    //     array.push(obj[key]);
    // }
    // console.log(array);
    // return array;
    return Object.values(obj);
}

module.exports={
    objToArray: objToArray
}