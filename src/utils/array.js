export function diffArray(arr1, arr2) {
  var newArr = [];
  var myArr = arr1.concat(arr2);

  newArr = myArr.filter(function(item){
    return arr2.indexOf(item) < 0 || arr1.indexOf(item) < 0;
  });
  return newArr;
}