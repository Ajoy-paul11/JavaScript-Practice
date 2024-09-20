// The "delete" operator removes a property from an object
// It returns "true" if it deletes that property
// It returns "false" if the value is not associate with an object

const fullName = {
    firstName: "Ajoy",
    lastName: "Paul"
}

var num = 5
let randomString = "Prototype"
const age = 22

color = "Magenta"

console.log(delete fullName.firstName) // true

console.log(delete num);  // false
console.log(delete randomString); // false

// These variable doesn't associate with object
// so it's return false.

console.log(delete color);  // true

// The "color" variable return true because this
// attach with global window Object. 