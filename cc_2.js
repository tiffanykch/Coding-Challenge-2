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

