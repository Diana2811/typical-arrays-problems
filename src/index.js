
exports.min = function min (array) {
  if (array [0] === undefined ){
  return 0;}
  else return Math.min(...array);
    
  }


exports.max = function max (array) {
  if (array[0] === undefined ) {
  return 0;}
  else
    
    return Math.max(...array);
}


exports.avg = function avg (array) {
  if (array === undefined || array.lenght == 0 ){
  return 0;}
  else{
    var avgValue = array([]);
    return (array.reduce ((a, b) => (a + b))/ array.lenght
    )}
}
