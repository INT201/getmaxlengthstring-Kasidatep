const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let arrLength = arrayOfString.length
  let strLength = 0
  let checkCount
  for(let i = 0; i < arrLength ; i++){
  checkCount = arrayOfString[i].length
    if (checkCount > strLength){
      strLength = checkCount
    }
  }
}
module.exports = getMaxLengthString
