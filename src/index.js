module.exports = function getZerosCount(number, base) {
  'use strict';
  var p = base; 

  for(var i = 2; i < base; i++){
    if(base % i == 0){
      var isSimple = true;
      for (var j = 2; j < i; j++){
        if (i % j == 0){
          isSimple = false;
          break;
        }
      }
      if(isSimple){
        p=i;
      }
    }
  }
  var counter = 0;
  for (var i = p; number/i >= 1; i = i * p){
      counter = counter + Math.floor(number/i);
  }  
  return counter;
}