//const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let maxLength = ['']
  let j = 0
  if (arrayOfString ==null || arrayOfString ==undefined) {
    return undefined
  } else{
    for (let i = 0; i < arrayOfString.length; i++) {
      if(arrayOfString[i].length > maxLength[(maxLength.length-1)].length){
        maxLength = [arrayOfString[i]]
      }else if(arrayOfString[i].length === maxLength[j].length){
        maxLength.push(arrayOfString[i])
      }

  }
    return maxLength
  }
  
}
//module.exports = getMaxLengthString

getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning']) 
getMaxLengthString(['hi']) 
getMaxLengthString(null)
getMaxLengthString(undefined) 
console.log(getMaxLengthString(['hello', 'hi', 'hey']))
console.log(getMaxLengthString(['hi']) )
console.log(getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning'])
)
console.log(getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning', 'Gooddddddddddddddddddddd'])
)
console.log(getMaxLengthString(null))
console.log(getMaxLengthString(undefined))