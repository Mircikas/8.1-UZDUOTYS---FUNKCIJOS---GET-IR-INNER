// ---------- Pirma užduotis ------------------------

// function great(text) {
//     let a = document.getElementById("txt");
//     a.innerHTML = text;
// }

// great("Špicas")

// ---------- Antra užduotis ------------------------

// x - tekstas ; y - headingo numeris
// function great(x,y) {
//     let a = document.getElementById("container");
//     console.log(x + y);
//     a.innerHTML = "<h" + y + ">" + x + "</h" + y + ">";
// }

// great("labas rytas",5)

// ---------- Trečia užduotis ------------------------

/// isNaN() - funkcija - not a number - nera skaicius !!!!!  su sauktuku  !isNaN() - yra skaicius!!!

// function randomString(length) {
//   let result = "";
//   let characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   console.log("Atsitiktinis stringas: " + result);
//   return result.split("");
// }

// function insertDigits(text) {
//     let a = document.getElementById("txt")
//     a.innerHTML = text;
// }

// function insertChar(text) {
//   let a = document.getElementById("demo")
//   a.innerHTML = text;
// }

// let fresult = randomString(10);
// console.log(fresult);

// let diggit = "";
// let char = "";
// // let tmp = "";

// for (let i = 0; i < fresult.length; i++) {
//   if (!isNaN(fresult[i])) { ////   isNaN!!!
//     diggit += fresult[i];
//   } else {
//     char += fresult[i];
//     if (diggit != "")
//     insertDigits(diggit);
//     insertChar(char);
//   }
// }
// console.log("Skaičiai: " + diggit);
// console.log("Raidės: " + char);

// ---------- Ketvirta užduotis ------------------------

// let divCount = 0;
// let div = "";

// function digitalWithoutRemainCheck (char) {
//   for (let i = 2; i < char; i++) {
//           if (char % i == 0) {
//             divCount ++;
//             div += i + " ";
//           }
//         }
//         return console.log("Esant skaiciui: " + char + " dalikliu skaicius " + divCount + ", dalikliai: " + div);

//     }

// digitalWithoutRemainCheck(135);

// ---------- Penkta užduotis ------------------------

// let arr = [];
// let divArr = [];
// let divCountArr = [];

// for (let i = 0; i < 100; i++) {
//   let arrVal = (Math.floor(Math.random() * (78 - 33) + 33));
//   arr.push(arrVal);
//   digitalWithoutRemainCheck (arrVal);
// }

// function digitalWithoutRemainCheck (arrVal) {
//   divCount = 0;
//   let div = "";
//   for (let i = 0; i < arrVal; i++) {
//     if (arrVal % i == 0) {
//       divCount ++;
//       div += i + " ";
//     }
//   }
//   return divArr.push(divCount);
// }

// console.log(arr);
// console.log(divArr);

// for (let i = 0; i < arr.length - 1 ; i++) {
//   for (let a = 0; a < arr.length ; a++) {
//     if ( divArr[a] >= divArr[a + 1]) {
//       let tmp = divArr[a];
//       divArr[a] = divArr[a + 1];
//       divArr[a + 1] = tmp;

//       let tmp1 = arr[a];
//       arr[a] = arr[a + 1];
//       arr[a + 1] = tmp1;

//     }
//   }
// }

// console.log(arr);
// console.log(divArr);

// ---------- Šešta užduotis ------------------------

let arr = [];
let arrPrimary = [];
let dividers = [];

for (let i = 0; i < 100; i++) {
  let arrRndVal = Math.floor(Math.random() * (778 - 333) + 333);
  arr.push(arrRndVal);
  primaryNumber(arrRndVal);
}

console.log(arr);

function primaryNumber(char) {
  dividers = [];
  for (let i = 0; i <= char; i++) {
    if (char % i == 0) {
      dividers.push(i);
      console.log(i + "  daliklis, skaiciaus " + char);
      console.log(dividers);
    }
  }
}

console.log(arrPrimary);

// for (let a = 0; a < arr.length - 1 ; a++) {
//   digitalWithoutRemainCheck(arr[a]);
//     if (arr[a] > arr[a + 1] ) {

//     }
//   }

// (manual sorting)d
// arr = [1, 22, 3, 44, 5, 6, 37, 8, 9, 70, 1003];

// console.log(arr);
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let a = 0; a < arr.length; a++) {

//         if (arr[i] > arr[i + 1]) {
//             let temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//         }
//     }

// }
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     for (let a = i + 1; a < arr.length; a++) {

//         if (arr[i] < arr[a]) {
//             let temp = arr[i];
//             arr[i] = arr[a];
//             arr[a] = temp;
//         }
//     }

//     console.log(arr);
// }
// (manual sorting)

// sort variantas geresnis negu pacio JS ******
// subArray.sort((a,b)=>a-b);
