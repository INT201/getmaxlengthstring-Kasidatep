const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let arr = arrayOfString
  let strLength

  for(let i = 0; i < arr.length ; i++)
    let a = arr[i].length
    if (a > strLength){
      strLength = a
    }
}
module.exports = getMaxLengthString
