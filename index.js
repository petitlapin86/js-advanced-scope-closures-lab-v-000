





function produceTipCalculator(amount){
  return function(tip){
    return tip * amount;
  }
}

function produceDrivingRange(blockRange){ //function with one argument
  return function(startingBlock, endingBlock){ // returns a new function

    let start = parseInt(startingBlock); // calculates if something is within range
    let end = parseInt(endingBlock);
    let distanceToTravel = Math.abs(end - start);
    let difference = blockRange - distanceToTravel;

    if( difference > 0){
      return `within range by ${difference}` // returns either within range
    } else {
      return `${Math.abs(difference)} blocks out of range` // or out of range
    }
  }
}


function createDriver(){
  let driverId = 0 // driver count starts at zero inside of scope
  return class { //returns a new class within the function
    constructor(name){ //constructor with argument of name
      this.id = ++driverId //adding to counter 1 for each new driver
      this.name = name
    }
  }
}
