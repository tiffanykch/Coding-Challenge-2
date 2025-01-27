//TASK 1: WORKING WITH ARRAYS - STORE INVENTORY SYSTEM

//Creating an array containing at least 5 products
let products = ["Tomatoes", "Cabbage", "Carrots", "Eggs", "Cilantro"]

//Adding new product to the array
products.push("Maruchan")

//Display new array to the console
console.log("New Inventory:", products)

//Remove last product from the array
products.pop()

//Display final array to the console
console.log("Final Inventory:", products)

//TASK 2: ACCESSING AND MODIFYING ARRAYS

//Creating an array containing at least 5 numerical values
let scores = [15, 45, 52, 90, 100, 89]
console.log("Initial Scores:", scores)

//Update second score in array
scores[1] = 75

//Calculate the average of all scores
let total = scores.reduce((sum, score) => sum + score, 0)
let average = total/scores.length

//Display output to the console
console.log("Updated Scores:", scores)
console.log("Average Score:", average.toFixed(2))

//TASK 3: WORKING WITH OBJECTS - MANAGING EMPLOYEMEE RECORDS

//Declare an object with properties
let employee = {
    name: "Papa Louie",
    age: 50,
    department: "Kitchen",
    isActive: true
}

//Log array to the console
console.log("Employee:", employee)

//Updating the "department" property
employee.department = "Finance"

//Log updated records to the console
console.log("Updated Records:", employee)

//Adding new property to the object
employee.position = "Senior Director"

//Show new property in the console
console.log("New Records:", employee)

//TASK 4: ARRAY OF OBJECTS - CUSTOMER DATA BASE

//Declare array containing at least three objects
let customer = [
    {name: "Big Pauly", email: "bpauly@papa.com", purchaseAmount: 8238},
    {name: "Akari", email: "a@papa.com", purchaseAmount: 442},
    {name: "Captain Cori", email: "ccori@papa.com", purchaseAmount: 12}
]

//Add a new customer object to the array
customer.push({name: "Professor Fitz", email: "pfitz@papa.com", purchaseAmount: 14759})

//Log entire customer array to the console
console.log("Customers:", customer)
