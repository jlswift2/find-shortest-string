function findShortestString(arr) {
  let lenArr = arr.map(el => {
    return(el.length)
  })
  let index = lenArr.indexOf(Math.min(...lenArr))
  return(arr[index])
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// method 1
// .map Strings, do .length. 
// find the index of the min, 
// return arr[index]
