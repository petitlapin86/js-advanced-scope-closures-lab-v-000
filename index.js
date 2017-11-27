





function produceTipCalculator(amount){
  return function(tip){
    return tip * amount;
  }
}

function produceDrivingRange(trip){
  return function(distance){
    return distance * trip;
  }
}

