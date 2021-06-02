"use strict";

// Solution 1
const duplicateCount = text => {
  let myObj = new Object();
  
  let textArr = [...text];
  
  let count = 0;
  
  textArr.forEach(item => {
    if (myObj.hasOwnProperty(item.toLowerCase())) {
      myObj[item.toLowerCase()]++;
    } else {
      myObj[item.toLowerCase()] = 1;
    }
  })
  
  for (let keys in myObj) {
    if (myObj[keys] > 1) {
      count += 1;
    }
  }
  
  return count;
};

// Solution 2
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

// Solution 3
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}