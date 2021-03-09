// Refactor this code by use && logical operator

// Code 1
const isPresent = true
if (isPresent) {
  someFunc()
}

// Code 2
function supplyFatherName(family) {
  if (family) {
    if (family.father) {
      return family.father.name
    } else {
      return undefined
    }
  } else {
    return undefined
  }
}