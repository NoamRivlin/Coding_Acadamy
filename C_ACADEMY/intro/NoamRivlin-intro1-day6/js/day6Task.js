
// 1.objects
// var person1 = {
//     name: 'puki',
//     age: 10,
//     address: 'there',
// };
// console.log('person', person);
// console.log('*' + person.name + '*');

// console.log('person.age', person.age);
// person.age = 11;
// console.log('person.age', person.age);

// 2.Array of Objects

// var person1 = {
//     name: 'puki',
//     age: 18,
//     address: 'there street',
// };

// var person2 = {
//     name: 'shuki',
//     age: 12,
//     address: 'here street',
// };

// var twoPersons = [person1, person2];
// console.log('person2', person2);
// console.log('person2.name', person2.name);

// for (var i = 0; i < twoPersons.length; i++) {
//     var currPerson = twoPersons[i];
//     // console.log('twoPersons[i]', twoPersons[i]);
//     console.log('currPerson', currPerson);
//     if (currPerson.age >= 18) {
//         console.log('Welcome ' + currPerson.name);

//     } else {
//         console.log('Maybe next time ' + currPerson.name + '...');
//     }
// }

//3. Array of arrays

// var nums1 = [1, 2, 3];
// var nums2 = [4, 5, 6];
// var nums3 = [7, 8, 9];
// var mat = [nums1, nums2, nums3];
// console.log('mat', mat);


// var sum = 0;

// for (var i = 0; i < mat.length; i++) {
//     currArray = mat[i];
//     console.log('currArray', currArray);

//     for (var j = 0; j < currArray.length; j++) {
//         var currNum = currArray[j];
//         console.log('currNum', currNum);
//         sum = sum + currNum;
//     }
// }
// console.log('sum', sum);

// 4. Functions


// why can't we put array with numbers inside the parameter -> printAvg([10, 5, 9]); ?
// either way this function still doesn't work. logs to the console -> numAvarge NaN:
// var sum = 0;
// function printAvg([a, b, c]) {
//     for (var i = 0; i < printAvg.length; i++) {
//         var currNum = printAvg[i];
//         sum = sum + currNum;
//         var numAvarge = sum / printAvg.length;
//     }
//     console.log('numAvarge', numAvarge);
//     return numAvarge;
// }
// printAvg([10, 5, 9]);



// var nums = [10, 5, 9]
// var sum = 0;
// printAvg(nums);
// function printAvg(nums) {

//     for (var i = 0; i < nums.length; i++) {
//         var currNum = nums[i];
//         sum = sum + currNum;
//         var numsAvarge = sum / nums.length;
//     }
//     console.log('numsAvarge', numsAvarge);
//     return numsAvarge;
// }



// var nums = [10, 5, 9]
// var sumMult = 1;
// getMult(nums);
// function getMult(nums) {

//     for (var i = 0; i < nums.length; i++) {
//         var currNum = nums[i];
//         sumMult = sumMult * currNum;
//     }
//     console.log('sumMult', sumMult);
//     // return sumMult why isn't the return matters here? unlike the the next function example below
// }


// var sum = 0;
// var res = getSum([30, 6, 22, 8, 13, 90])
// console.log('res', res);
// function getSum(nums) {
//     for (var i = 0; i < nums.length; i++) {
//         var currNum = nums[i];
//         sum = sum + currNum;
//     }
//     return sum
// }

