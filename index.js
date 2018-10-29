function produceDrivingRange(distance) {
  return function(start, end) {
    let startNum = parseInt(start, 10)
    let endNum = parseInt(end, 10)
    let totalTrip = endNum - startNum
    if(totalTrip < distance) {
      let diff = Math.abs(distance - totalTrip)
      return `within range by ${diff}`
    } else {
      let diff = Math.abs(totalTrip - distance)
      return `${diff} blocks out of range`
    }
  }
}

function produceTipCalculator(rate){
  return function(meal){
    return (meal * rate)
  }
}

function createDriver() {
  let DriverId = 0
  return class {
    constructor(name){
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
