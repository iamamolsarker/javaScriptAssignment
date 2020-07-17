//////Convert Feet into Mile//////

function feetToMile(feet) {
    let mile = feet * 0.00018939;
    return mile;
}
//Input Your Feet
let yourInput = feetToMile(10000).toFixed(2);
console.log(yourInput + ' miles');





/////// Calculation of Wood///////

function woodCalculator(numChair, numTable, numCot){
    let chair = numChair * 1;
    let table = numTable * 3;
    let cot = numCot * 5;
    let totalWood = chair + table + cot;
    return totalWood;
};
let result = woodCalculator(20, 10, 15);
console.log(result);




////// Calculation of Brick //////

function brickCalculator(floorNumber){
    if (floorNumber <=10 && floorNumber >=1){
        let brickNumber = floorNumber * 15000;
        return brickNumber;
    }
    else if (floorNumber > 10 && floorNumber <= 20) {
        let brickNumber = ((floorNumber - 10) * 12000) + 150000;
        return brickNumber;
    }
    else if (floorNumber > 20){
        let brickNumber =((floorNumber - 20) * 10000) + 270000;
        return brickNumber;
    }
    else {
        return "Input a valid number";
    }
};
let result1 = brickCalculator(10);
console.log(result1);
let result2 = brickCalculator(20);
console.log(result2);
let result3 = brickCalculator(30);
console.log(result3);
let result4 = brickCalculator(0);
console.log(result4);



////// Calculation of Tiny Friend //////

function tinyFriend(friend){
    let myFriend =friend[0];
    for(let i = 0; i < friends.length; i++){
        let element = friends[i];
        if (element < myFriend){
            myFriend = element ;
        }
    }
    return myFriend;
};
let friends =["Saikat", "Rifat", "Sakib", "Rubel", "Sayem" , "Raju"];
let results = tinyFriend(friends);
console.log(results);

////// End of Code! //////