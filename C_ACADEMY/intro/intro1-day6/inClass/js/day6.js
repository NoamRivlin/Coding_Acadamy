

var pet = {
    name: 'Luli',
    age: 4,
    isAwake: false,
};

// console.log('pet', pet);
// console.log('pet.name', pet.name);

pet.name = pet.name + '!';
// console.log('pet', pet);

// console.log('pet.weight', pet.weight);
// pet.weight = 6;
// console.log('pet.weight', pet.weight);
// console.log('pet', pet);

// console.log('pet.age', pet.age);
// console.log('pet[\'age\']', pet['age']);


var pet1 = {
    name: 'Luli',
    age: 4,
    isAwake: false,
};
var pet2 = {
    name: 'Lolo',
    age: 6,
    isAwake: true,
};
var pet3 = {
    name: 'Koko',
    age: 2,
    isAwake: true,
};

var pets = [pet1, pet2, pet3];
// console.log('pets', pets);

// console.log('pets[1]', pets[1]);
// console.log('pets[1].name', pets[1].name);

// Create 3 pets and print the name of the pet that isAwake.

// for (var i = 0; i < pets.length; i++) {
//     // console.log('i', i);
//     var currPet = pets[i];
//     console.log('currPet', currPet);
//     if (currPet.isAwake) {
//         console.log(currPet.name + ' is awake');
//     }
// }


// Calculate the average of the ages of the pets.

// var sum = 0;

// for (var i = 0; i < pets.length; i++) {
//     var currPet = pets[i];
//     // console.log('currPet', currPet);
//     console.log('currPet.age', currPet.age);
//     sum = sum + currPet.age
// }

// console.log('avg', sum / pets.length);

// Create 2d array and find the biggerNum.

var nums1 = [1, 2, 3];
var nums2 = [4, 15, 6];
var nums3 = [7, 8, 9];

var mat = [nums1, nums2, nums3];
console.log('mat', mat);
// console.log('mat[2]', mat[2]);
// console.log('mat[2][0]', mat[2][0]);

var biggerNum = 0;

for (var i = 0; i < mat.length; i++) {
    var currNums = mat[i];
    // console.log('currNums', currNums);
    for (var j = 0; j < currNums.length; j++) {
        var currNum = currNums[j];
        console.log('currNum', currNum);
        if (currNum > biggerNum) {
            biggerNum = currNum;
        }
    }
}

console.log('biggerNum', biggerNum);







