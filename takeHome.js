//Problem 1

function durhamRules(){
  alert('Durham is awesome!');
}

//Problem 2

const bands = ['Kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];

function favoriteBand(bands) {
  for (var i = 0; i < bands.length; i++) {
    alert(`I love ${bands[i]}`);
  }
}

//Problem 3

function iDontLikeNickelBack(bands) {
  for (var i = 0; i < bands.length; i++) {
    if (bands[i] === 'Nickelback') {
      alert(`I DON'T love ${bands[i]}`);
    } else {
    alert(`I love ${bands[i]}`);
    }
  }
}

//Problem 4

function findAverage(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

//Problem 5

const array = ['a', 'b', 'c', 'd', 'c', 'b', 'b', 'c', 'a', 'e', 'b', 'e'];

function mostAndLeast(array){
  var mostFreq;
  var leastFreq;
  //make an object that holds letters as keys and frequency as values
  var countObj = array.reduce(function(indexes, instance) {
    if (instance in indexes) {
      indexes[instance]++
    } else {
      indexes[instance] = 1;
    }
    return indexes;
  }, {});
  //make an array of just the frequencies
  var arrOfFreq = Object.values(countObj);
  var max = Math.max(...arrOfFreq);
  var min = Math.min(...arrOfFreq);
  //if the value of a key is the maximum/minimum of frequency arr, then make mostFreq and leastFreq those keys
  for (var prop in countObj) {
    if (countObj[prop] === max) {
      mostFreq = prop;
    } else if (countObj[prop] === min) {
      leastFreq = prop;
    }
  }
  return `The most frequent item is: ${mostFreq}. The least frequent item is: ${leastFreq}`;
}

//Problem 6

function overlapIndex(arr1, arr2){
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
   for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        arr2.splice(j, 1);
      }
    }
  }
  return result;
}

//Problem 7

function budgetToBills(cost, bills){
  if (typeof cost !== 'number' || typeof bills !== 'object') {
    return 'Sorry, please enter valid inputs'
  } else {
    var wallet = {};
    function descend(a, b){
      return b - a;
    }
    bills = bills.sort(descend);
    for (var i = 0; i < bills.length; i++) {
      var amountOfBills = Math.floor(cost / bills[i])
      wallet[bills[i]] = amountOfBills;
      cost = cost - amountOfBills * bills[i];
    }
    for (var prop in wallet) {
      if (wallet[prop] === 0) {
        delete wallet[prop];
      }
    }
    return wallet;
  }
}
/*I decided to go with the second version of the function with two inputs;
invalid types of input are resolved in the first couple of lines, although for
efficiency sake, I did not include code to convert string values of each
input, though it would make it more practical in real-life functionality*/
