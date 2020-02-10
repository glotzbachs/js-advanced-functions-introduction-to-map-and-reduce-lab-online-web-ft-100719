// Your code here
function mapToNegativize(array) {
    return array.map(i => i * -1)
}

function mapToNoChange(array) {
    return array.map(i => i)
}

function mapToDouble(array) {
    return array.map(i => i * 2)
}

function mapToSquare(array) {
    return array.map(i => i ** 2)
}

function reduceToTotal(array, start=0) {
    return array.reduce((acc, value) =>  acc + value, start)
}

function reduceToAllTrue(array) {
   return array.reduce((acc,val) => acc = val ? true:false)
}

function reduceToAnyTrue(array) {
    return array.reduce((acc,val) => acc = val ? true:false)
 }