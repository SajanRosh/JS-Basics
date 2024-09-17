let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

// Accessing Specific Value
console.log(shoppingList[0]);

// Implementing push Method:
shoppingList.push("Carrots");
console.log(shoppingList)

//Implementing pop method
 shoppingList.pop();
console.log(shoppingList);

// Implementing splice method
shoppingList.splice(4,1 , ["Potatoes","Cucumbers","Bell Peppers"])
console.log(shoppingList);

// Second set
let student = {
    name: "Amit",
    age: 20,
    score: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};
// 1 . Fetching Specific Value:
console.log(student.name);

// 2. Adding Value:
student["phone"] = "123-456-7890"

// 3 . Removing Value:
console.log(student);
delete student.score;
console.log(student);

// 4. Modifying Value:
student.age = 21;
console.log(student);

// if
function number(num){
    if(num > 0){
        return "Positive";
    }
    if (num < 0){
        return "Negative"
    }
    if (num == 0) {
        return "Zero"
    }
}

// else if
function scoreCalculator(score){
    if(score >= 90 && score <= 100){
        console.log("A");
    }else if(score >= 80 && score <= 89){
        console.log("B");
    }else if(score >= 70 && score <= 79){
        console.log("C");
    }else if(score >= 60 && score <= 69){
        console.log("D");
    }else if (score < 60){
        console.log("F");     
    }
}
// truthy & falsy
function truthFalsy(inp){
    if(inp != ''){
        return "Truthy";
    }else{
        return "Falsy";
    }
}

