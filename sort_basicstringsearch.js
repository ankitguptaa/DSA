function stringSearch(sentence, searchWord) {
    let arr = sentence.split(" ");
    let occurence = 0;
    for (let index = 0; index < arr.length; index++) {
        const current = arr[index];
        if(current === searchWord) {
            occurence++;
        }
    }

    return occurence;
}

let sentence = "Lorem ipsum dolor sit amet, consectetur ultricies elit. In sit amet elit ante. Vivamus lacinia nisi ac urna elementum dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sed ante non nulla sagittis ullamcorper quis at metus. Vivamus non fermentum dui. Proin aliquam pulvinar fringilla. Etiam sed arcu pharetra leo dictum varius. Quisque pulvinar pulvinar justo id eleifend. Ut quis porta massa. Nullam suscipit a lorem nec tincidunt. Aliquam commodo laoreet dui et euismod. Morbi sagittis lobortis facilisis. Ut urna lorem, aliquet quis vehicula laoreet, ultricies non lectus. Praesent consectetur aliquam placerat. Proin vel urna nec justo.";
let word = "ultricies";
console.log(stringSearch(sentence, word)); //2