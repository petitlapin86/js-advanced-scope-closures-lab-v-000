





function produceTipCalculator(amount){
  return function(tip){
    return tip * amount;
  }
}

function produceDrivingRange(blockRange){
  return function(distance){
    return distance * blockRange;
  }
}
