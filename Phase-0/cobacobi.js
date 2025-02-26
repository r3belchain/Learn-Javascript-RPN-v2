// function printPattern(n) {
//   let hasil = "";

//   for(let i = n; i >= 1; i--) {
//     let baris = ""; 
//     for(let j = 1; j <= i; j++) {
//       baris += i;
//     }
//     hasil += baris + "\n";
//   }

//   for(let i = 2; i <= n; i++) {
//     let baris = "";
//     for(let j = 1; j <= i; j++) {
//       baris+= i
//     }
//     hasil += baris + "\n";
//   }
//   return hasil;
// }

// console.log(printPattern(10))

// console.log("tugas 1")
function doubleReverse(arr){
if (!Array.isArray(arr) || arr.length == 0) {
  return "";
}
let result = [];
for (let i = arr.length - 1; i >= 0; i--) {
  if(arr[i].length % 2 === 0) {
    let reverse = "";
    for( let j = arr[i].length - 1; j >= 0; j--) {
      reverse += arr[i][j];
    }
    result.push(reverse);
  } else {
    result.push(arr[i]);
  }
}
return result;

}

console.log(doubleReverse(['rabu', 'cinta', 'benci', 'masuk', 'nikmat']));
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
console.log(doubleReverse(['aku', 'sayang', 'kamu']));
// [ 'umak', 'gnayas', 'aku' ]
console.log(doubleReverse(['pelakor', 'perusak', 'rumah', 'tangga']));
//[ 'anggnat', 'rumah', 'perusak', 'pelakor' ]
console.log(doubleReverse([]))
// invalid input parameter

// console.log("tugas 2");

// function consonantCounterRecursive(sentences) {
//    const Vowels = ['a','e','i','o','u','A','E','I','O','U'];
//    if (sentences.length == 0) {
//     return 0;
//    }
//    let firstChar = sentences[0];
//    if (
//     (firstChar >= 'A' && firstChar <= 'Z') || (firstChar >= 'a' && firstChar <= 'z')
//    ){
//     let count = Vowels.some(Vowels=> Vowels === firstChar)? 0 : 1;
//     return count + consonantCounterRecursive(sentences.slice(1));
//    }
//    return consonantCounterRecursive(sentences.slice(1));
//   }
  
//   console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
//   console.log(consonantCounterRecursive('AziZy')) // 3
//   console.log(consonantCounterRecursive('awt6an')) // 3
//   console.log("");

//   console.log("tugas 3");


//   function initialObjectGrouping(studentsArr) {
//     let result = {};
//     for (let i = 0; i < studentsArr.length; i++) {
//     let name = studentsArr[i];
//     let firstLetter = name[0];

//     if (!result[firstLetter]) {
//         result[firstLetter] = [];
//     }
//     result[firstLetter].push(name);
//   }
//   return result;
//   }
//   console.log(initialObjectGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
//   /*
//   {
//     B: [ 'Budi', 'Badu' ],
//     J: [ 'Joni', 'Jono' ]
//   }
//   */
//   console.log(initialObjectGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
//   /*
//   {
//     M: [ 'Mickey' ],
//     Y: [ 'Yusuf' ],
//     D: [ 'Donald' ],
//     A: [ 'Ali' ],
//     G: [ 'Gong' ]
//   }
//   */
//   console.log(initialObjectGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
//   /*
//   {
//     R: [ 'Rock', 'Rocker' ],
//     S: [ 'Stone', 'Sticker' ],
//     B: [ 'Brick' ]
//   }
//   */

//   console.log("");

//   console.log("tugas 4");

//   function duplicateCount(text){
//     let count = {};
//     let duplikat = 0;

//     for (let i= 0; i < text.length; i++) {
// let char = text[i].toLowerCase();

// if (!count[char]) { 
//     count[char] = 1;
// }else if (count[char] === 1) {
//     duplikat++;
//     count[char]++;

//     }
    
//   }
//   return duplikat;
// }
  
//   console.log(duplicateCount("")) //0
//   console.log(duplicateCount("abcde")) //0
//   console.log(duplicateCount("aabbcde")) //2
//   console.log(duplicateCount("aabBcde")) //2
//   console.log(duplicateCount("Indivisibility")) //1
//   console.log(duplicateCount("Indivisibilities")) //2
//   console.log(duplicateCount("abcabcdABcefGhg")) //4

//   console.log("");
//   console.log("tugas 5");

//   function piramid2(num) {
//     let result = "";
//     for (let i = num; i >= 1; i--) {
//         for (let j = 0; j < i; j++) {
//         result += i;
//     }
//     result += "\n";
//   }
//   for (let i = 2; i <= num; i++) {
//     for (let j = 0; j < i; j++) {
//         result += i;
//   }
//   result += "\n";
// }
//   return result;
// }

//   console.log(piramid2(10))
  
  /*
  55555
  4444
  333
  22
  1
  22
  333
  4444
  55555
  */
