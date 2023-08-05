
function fill(arr) {
    for (let i = 0; i < arr.length; i++) {
     
      let randomNumber = Math.floor(Math.random() * 100);
      let randomDate = new Date(Date.now() + Math.floor(Math.random() * 1000000));
      let randomString = "";
      for (let j = 0; j < 5; j++) {
        let randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        randomString += randomChar;
      }
      let obj = {
        number: randomNumber,
        date: randomDate,
        string: randomString
      };
      arr[i] = obj;
    }
    return arr;
  }
let arr = [null, null, null];
fillArray(arr);
alert(fillArray(arr));


function celcios(x){
    return (x*9)/5+32
}



function searchWord(sentence, word) {
    if (sentence.includes(word)) {
      return true;
    } else {
      return false;
    }
  }
  
  const sentence = "this a sam";
  const word = "sam";
  let result = searchWord(sentence, word);  
  console.log(result);
  
 