function galToL(gallon){
  return(gallon/.26417);
}

function litToGal(liter){
  return(liter*.26417);
}

var liter = parseFloat(prompt("liter: "));
alert(litToGal(liter));

var gallon = parseFloat(prompt("gallon: "));
alert(galToL(gallon));
