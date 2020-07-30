var arr1 = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];

function collectAnagram(arr) {
  var arrAns = [];
  var arr2D = [];

  for (let i = 0; i < arr.length; i++) {
    arrAns.push(arr[i]);
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && sortWord(arr[i]) === sortWord(arr[j])) {
        arrAns.push(arr[j]);
      }
    }
    let skip = false;
    for (let i in arr2D) {
      if (
        JSON.stringify(sortArr(arr2D[i])) === JSON.stringify(sortArr(arrAns))
      ) {
        skip = true;
      }
    }
    if (!skip) {
      arr2D.push(arrAns);
    }
    arrAns = [];
  }

  return arr2D;
}

function sortWord(wrd) {
  var wrdArr = wrd.split("");
  var length = wrdArr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (wrdArr[j] > wrdArr[j + 1]) {
        var tmp = wrdArr[j];
        wrdArr[j] = wrdArr[j + 1];
        wrdArr[j + 1] = tmp;
      }
    }
  }

  return wrdArr.join("");
}

function sortArr(arr) {
  var length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}

console.log(collectAnagram(arr1));
