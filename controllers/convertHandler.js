/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result
    if (!Number(input[0]) && !'gLklm'.includes(input[0])) {
      return 'invalid number'
    }
    var arr = input.substring(0, input.search(/[^\d|\/|\.]/)).split('/')
    if (arr.length === 1) {
      if (arr[0] === '') {
        result = 1
      } else {
        result = parseFloat(arr[0])
      }
    } else if(arr.length > 2) {
      result = 'invalid number'
    } else {
      result = parseFloat(arr[0]) / parseFloat(arr[1])
    }

    return result;
  };
  
  this.getUnit = function(input) {
    var result = input.substring(input.search(/[^\d|\/|\.]/))
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit) {
      case 'gal':
        result = 'L'
        break
      case 'L':
        result = 'gal'
        break
      case 'lbs':
        result = 'kg'
        break
      case 'kg':
        result = 'lbs'
        break
      case 'mi':
        result = 'km'
        break
      case 'km':
        result = 'mi'
        break
      default:
        'invalid unit'
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit) {
      case 'gal':
        result = 'galons'
        break
      case 'L':
        result = 'litres'
        break
      case 'lbs':
        result = 'pounds'
        break
      case 'kg':
        result = 'kilograms'
        break
      case 'mi':
        result = 'miles'
        break
      case 'km':
        result = 'kilometres'
        break
      default:
        result = 'invalid unit'
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    if (initNum === 'invalid number') {
      return 'invalid number'
    }
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit) {
      case 'gal':
        result = initNum * galToL
        break
      case 'L':
        result = initNum / galToL
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'kg':
        result = initNum / lbsToKg
        break
      case 'mi':
        result = initNum * miToKm
        break
      case 'km':
        result = initNum / miToKm
        break
      default:
        result = initNum
    }
    
    return result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if (returnNum === 'invalid number' && this.spellOutUnit(returnUnit) === 'invalid unit') {
      return 'invalid number and unit'
    } else if (returnNum === 'invalid number') {
      return 'invalid number'
    } else if (this.spellOutUnit(returnUnit) === 'invalid unit') {
      return 'invalid unit'
    }
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    
    return result;
  };
  
}

module.exports = ConvertHandler;
