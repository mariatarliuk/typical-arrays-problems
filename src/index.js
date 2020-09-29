
exports.min = function min (array) {
      if(!arguments.length || array .length ==0) return 0
   let i=0;
   let min = array[0]
   while(i<array.length) {
      if(min>array[i]) min = array[i];
      i++
   }
   return min
}

exports.max = function max (array) {
   if(!arguments.length || array .length ==0) return 0
   let arr = array.sort((a,b)=> b-a)
return arr[0]
}

exports.avg = function avg (array) {
   if(!arguments.length || array.length ==0) return 0;
   return array.reduce((a,b)=> a+b, 0)/array.length
}
