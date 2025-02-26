/*
=====================
DOUBLE REVERSE ARRAY
=====================

[INSTRUCTION]
Terdapat function doubleReverse yang menerima parameter berupa array of string, 
function ini akan memutar elemen array, string yang berada di dalam elemen array juga akan dibalik atau diputar jika panjang string GENAP

[EXAMPLE]
input: ['rabu', 'cinta', 'benci', 'masuk', 'nikmat']
proses: memutar isi array, dan memutar elemen array yang panjang katanya genap
output: [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]

[RULES]
- Function bawaan javascript yang boleh digunakan hanyalah .push dan .length
- DILARANG menggunakan .reverse()
*/

function doubleReverse(arr) {
  //code here
  if (arr.length === 0) {
    return "invalid input parameter";
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 0) {
      let reverse = "";
      for (let j = arr[i].length - 1; j >= 0; j--) {
        reverse += arr[i][j];
      }
      result.push(reverse);
    } else {
      result.push(arr[i]);
    }
  }

  let hasil = [];
  for (let i = result.length - 1; i >= 0; i--) {
    hasil.push(result[i]);
  }

  return hasil;
}

console.log(doubleReverse(["rabu", "cinta", "benci", "masuk", "nikmat"]));
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
console.log(doubleReverse(["aku", "sayang", "kamu"]));
// [ 'umak', 'gnayas', 'aku' ]
console.log(doubleReverse(["pelakor", "perusak", "rumah", "tangga"]));
//[ 'anggnat', 'rumah', 'perusak', 'pelakor' ]
console.log(doubleReverse([]));
// invalid input parameter

/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
  //code here
  let lowerCase = sentences.toLowerCase();
  let consonant = ["a", "i", "u", "e", "o"];

  let;
}

console.log(consonantCounterRecursive("alDi Suka MakAn baksO")); //10
console.log(consonantCounterRecursive("AziZy")); // 3
console.log(consonantCounterRecursive("awt6an")); // 3
// i hate recursive

/*
=======================
Initial Object Grouping
=======================
​
[INSTRUCTION]
​
Disediakan sebuah function initialObjectGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialObjectGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
sebuah object.
[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke object berdasarkan huruf Awal nama
{
  B: ['Budi', 'Badu'],
  J: ['Joni', 'Jono']
}
[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex
*/
function initialObjectGrouping(studentsArr) {
  //CODE HERE
  let obj = {};

  for (let i = 0; i < studentsArr.length; i++) {
    let hasSem = studentsArr[i];
    if (!obj[studentsArr[i][0]]) {
      obj[studentsArr[i][0]] = [];
    }
    obj[studentsArr[i][0]].push(hasSem);
  }

  return obj;
}
console.log(initialObjectGrouping(["Budi", "Badu", "Joni", "Jono"]));

// {
//   B: [ 'Budi', 'Badu' ],
//   J: [ 'Joni', 'Jono' ]
// }

console.log(
  initialObjectGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"])
);

// {
//   M: [ 'Mickey' ],
//   Y: [ 'Yusuf' ],
//   D: [ 'Donald' ],
//   A: [ 'Ali' ],
//   G: [ 'Gong' ]
// }

console.log(
  initialObjectGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"])
);

// {
//   R: [ 'Rock', 'Rocker' ],
//   S: [ 'Stone', 'Sticker' ],
//   B: [ 'Brick' ]
// }

function piramid2(num) {
  //code here
  let result = "";
  for (let i = num; i >= 1; i--) {
    let hasSem = "";
    for (let j = 1; j <= i; j++) {
      hasSem += i;
    }
    result += hasSem + "\n";
  }

  for (let i = 2; i <= num; i++) {
    let hasSem = "";
    for (let j = 1; j <= i; j++) {
      hasSem += i;
    }
    result += hasSem + "\n";
  }
  return result;
}

console.log(piramid2(5));

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

/*
  menghitung jumlah karakter yang duplikat
  misal ada aabbc maka a dan b adalah duplikat maka return 2
  misal ada AaBbc maka a dan b juga duplikat ga peduli dia huruf besar atau tidak
*/
function duplicateCount(text) {
  //...
  let cekHuruf = [];
  let sdhDihitung = [];
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    let lowCaseText = text[i].toLowerCase();

    if (!cekHuruf.includes(lowCaseText)) {
      cekHuruf.push(lowCaseText);
    } else if (!sdhDihitung.includes(lowCaseText)) {
      sdhDihitung.push(lowCaseText);
      count++;
    }
  }

  return count;
}

console.log(duplicateCount("")); //0
console.log(duplicateCount("abcde")); //0
console.log(duplicateCount("aabbcde")); //2
console.log(duplicateCount("aabBcde")); //2
console.log(duplicateCount("Indivisibility")); //1
console.log(duplicateCount("Indivisibilities")); //2
console.log(duplicateCount("abcabcdABcefGhg")); //4
