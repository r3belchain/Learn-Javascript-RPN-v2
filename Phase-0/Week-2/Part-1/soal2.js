let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling(data) {
  data.splice(
   1,
   4,
   "Roman Alamsyah Elsharawy",
   "Provinsi Bandar Lampung",
   "21/05/1989",
   "Pria",
   "SMA Internasional Metro"
 );

//  console.log(data);

 let date = data[3].split("/")
//  if(date[1] === "05") {
//   console.log("Mei")
//  }

  // let output3 = data[3].split("/");


  // console.log([date[2], date[0], date[1]]);


  console.log(date.join("-"))


  // console.log(data[1].slice(0, 15))
}

(dataHandling(input));

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
