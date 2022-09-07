const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let maxLength = 'undefined'
  if (arrayOfString !=null && arrayOfString !=`undefined`) {
    for (let i = 0; i < arrayOfString.length; i++) {
      console.log(arrayOfString[i].length)
      if (arrayOfString[i].length > maxLength.length)
        maxLength = arrayOfString[i]
    }
  }
  return maxLength
}
module.exports = getMaxLengthString
