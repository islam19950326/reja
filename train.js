// task C

function getReverse(str) {
  return str.split('').reverse().join('');
}

// Misol
console.log(getReverse("busan")); // Natija: "nasub"











// //task D
// function checkContent(str1, str2) {
//   // Agar uzunliklar har xil bo‘lsa, to‘g‘ridan-to‘g‘ri false qaytaramiz
//   if (str1.length !== str2.length) return false;

//   // Satrlarni massivga aylantirib, harflarni tartiblab, stringga qayta aylantiramiz
//   let sorted1 = str1.split('').sort().join('');
//   let sorted2 = str2.split('').sort().join('');

//   // Ikkala satr tartiblangan holatda teng bo‘lsa, true qaytariladi
//   return sorted1 === sorted2;
// }

// // Misol:
// console.log(checkContent("mitgroup", "gmtiprou")); // true
// console.log(checkContent("hello", "olelh"));       // true
// console.log(checkContent("abc", "def"));           // false












// // Task C

// class Shop {
//     constructor(non, lagmon, cola) {
//       this.products = {
//         non: non,
//         lagmon: lagmon,
//         cola: cola
//       };
//     }
  
//     // Vaqtni olish uchun yordamchi metod
//     getCurrentTime() {
//       const now = new Date();
//       const hours = String(now.getHours()).padStart(2, "0");
//       const minutes = String(now.getMinutes()).padStart(2, "0");
//       return `${hours}:${minutes}`;
//     }
  
//     // 📦 Qoldiqni ko‘rsatish
//     qoldiq() {
//       const time = this.getCurrentTime();
//       console.log(
//         `Hozir ${time}da ${this.products.non}ta non, ${this.products.lagmon}ta lag'mon va ${this.products.cola}ta cola mavjud`
//       );
//     }
  
//     //  Sotish
//     sotish(nomi, soni) {
//       if (this.products[nomi] === undefined) {
//         console.log(`Mahsulot topilmadi: ${nomi}`);
//         return;
//       }
  
//       if (this.products[nomi] < soni) {
//         console.log(`Xatolik: Yetarli ${nomi} mavjud emas`);
//       } else {
//         this.products[nomi] -= soni;
//         const time = this.getCurrentTime();
//         console.log(`Hozir ${time}da ${soni}ta ${nomi} sotildi.`);
//       }
//     }
  
//     // 🚚Qabul qilish
//     qabul(nomi, soni) {
//       if (this.products[nomi] === undefined) {
//         console.log(`Mahsulot topilmadi: ${nomi}`);
//         return;
//       }
  
//       this.products[nomi] += soni;
//       const time = this.getCurrentTime();
//       console.log(`Hozir ${time}da ${soni}ta ${nomi} qabul qilindi.`);
//     }
//   }




// B-TASK

// function countDigits(str) {
//     return (str.match(/\d/g) || []).length;
// }

// const result = countDigits("ad2a54y79wet0sfgb9");
// console.log(result); 





// function countDigits(str) {
//     let count = 0;
//     for (let i = 0; i < stgit ir.length; i++) {
//         if (!isNaN(str[i]) && str[i] !== " ") {

//         }
//     }
//     return count;
// }

// console.log(countDigits("hello123"));











// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri boshliq tanlang va ko'proq hato qiling", // 20-30
//     "o'zingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling", //  40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yo'q endi", // 60
// ];


// // CALL BACK FUNCTION
// function maslahatBering(a, callback) {
//     if(typeof a !== "number") callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a >20 && a<=30) callback(null, list[1]);
//     else if(a >30 && a<=40) callback(null, list[2]);
//     else if(a >40 && a<=50) callback(null, list[3]);
//     else if(a >50 && a<=60) callback(null, list[4]);
//     else {
//        setInterval(function() {
//         callback(null, list[5]);
//        }, 1000);
//     }
// }


// console.log("passed here 0");
// maslahatBering(10, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     console.log("javob:", data);
// });

// console.log("passed here 1");


// // ASYNC FUNCTION 
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri boshliq tanlang va ko'proq hato qiling", // 20-30
//     "o'zingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling", //  40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yo'q endi", // 60
// ];

// function maslahatBering(a) {
//     if(typeof a !== "number") throw new Error("insert a number");
//     else if(a <= 20) return(list[0]);
//     else if(a >20 && a<=30) return list[1];
//     else if(a >30 && a<=40) return list[2];
//     else if(a >40 && a<=50) return list[3];
//     else if(a >50 && a<=60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             } 5000);
//         });
//     }
// }

// // then/catch~~~
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();



// THEN/CATCH

// console.log("passed here 0");
// maslahatBering(65)
// .then((data) => {
//     console.log("javob:", data);
// })

// .catch((err) => {
//     console.log("ERROR:", err);
// });
// console.log("passeed here 1");


// ==============================================================================================
// TASK-A 
// function countLetter(letter, word) {
//     const count = 0;
//     for (const char of word) {
//         if (char === letter) {
//             count++;
//         }
//     }
//     return count;
// }


// console.log(countLetter("o", "football"));
// console.log(countLetter("f", "football"));
// console.log(countLetter("t", "football"));
// console.log(countLetter("b", "football"));
// console.log(countLetter("l", "football"));

// function countLetter(letter, word) {
//     let count = 0; 
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countLetter("E", "Engineer"));

// function countLetter(letter, word) {
//     let count = 0;
//     for (let char of word) {
//         if (char === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countLetter("m", "communication"));


// function countLetter(o, football) {
//     let count = 0;
//     letter = letter.toLowerCase();
//     word = word.toLowerCase();

//     for (let char of word) {
//         if (char === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log("Natija:", countLetter("o", "football"));


// TASK-A
// function countLetter(letter, word) {
//     let count = 0;

//     letter = letter.toLowerCase();
//     word = word.toLowerCase();

//     for (let char of word) {
//         if (char === letter) {
//             count++;
//         }
//     }
//     return count:
// }

// console.log(countLetter("o", "fottball"));


// TASK-A 
// function countLetter(letter, word) {
//     const count = 0;
//     for (const char of word) {
//         if (char === letter) {
//             count++;
//         }
//     }
//     return count;
// }


// console.log(countLetter("o", "football"));
// console.log(countLetter("f", "football"));
// console.log(countLetter("t", "football"));
// console.log(countLetter("b", "football"));
// console.log(countLetter("l", "football"));





