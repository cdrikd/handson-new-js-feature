// Refactor this code by use && logical operator

// Code 1
const isPresent = true
isPresent && someFunc()

// Code 2
function supplyFatherName(family) {
  return family && family.father && family.father.name
}