

var pets = ['Chipi', 'Bobi', 'Charli', 'Puki'];
// console.log('pets', pets);
// console.log('pets.length', pets.length);

// console.log('pets[0]', pets[0]);
// console.log('pets[1]', pets[1]);
// console.log('pets[2]', pets[2]);
// console.log('pets[3]', pets[3]);

// pets[3] = 'Puki';
// console.log('pets', pets);
// console.log('pets.length', pets.length);

// console.log('Hi', pets[0]);
// console.log('Hi', pets[1]);
// console.log('Hi', pets[2]);
// console.log('Hi', pets[3]);


// for (var i = 0; i < pets.length; i++) {
//     console.log('i', i);
//     console.log('pets[i]', pets[i]);
//     console.log('Hi', pets[i]);
// }


// var scores = [67, 73, 82, 48];
// for (var i = 0; i < scores.length; i++) {
//     var currScore = scores[i];
//     console.log(currScore)
// }


// Create an array of numbers , and sum up all the numbers.

var nums = [3, 6, 5, 3, 7, 1];
// console.log('nums', nums);

// var sum = 0;

// for (var i = 0; i < nums.length; i++) {
//     // console.log('i', i);
//     var currNum = nums[i];
//     console.log('currNum', currNum);
//     sum = sum + currNum;
// }

// console.log('sum', sum);


// Find the bigger number in the array

// var biggerNum = 0;

// for (var i = 0; i < nums.length; i++) {
//     var currNum = nums[i]; //3,6,5,3,7,1
//     console.log('currNum', currNum);
//     if (currNum > biggerNum) {
//         biggerNum = currNum //3,6,7
//     }
// }

// console.log('biggerNum', biggerNum);



// Write a function that gets 2 arrays of numbers
// and returns the longest array

var longestArray = getLongestArray([1, 2, 3, 10], [4, 5, 6, 7]);
console.log('longestArray', longestArray);

function getLongestArray(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return nums1;
    } else if (nums2.length > nums1.length) {
        return nums2;
    } else {
        return 'Same length';
    }
}



// for (var x = 0; x < 5; x++) {
//     console.log('x', x);
//     console.log('Hi');
// }


// var x = 0;
// console.log('x', x);
// x = x + 1;
// console.log('x', x);
// x += 1;
// console.log('x', x);
// x++;
// console.log('x', x);
