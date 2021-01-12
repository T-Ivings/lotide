const flatten = function(array) {
  let newArray = [];
  for (let item of array) {

    if(Array.isArray(item)){
      for(let items of item){
        newArray.push(items)
      }
    } else {
      newArray.push(item);
    }

} return newArray;
}

module.exports = flatten;

console.log(flatten([1, [2, 3], 4]))