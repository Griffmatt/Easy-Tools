const countVowels = document.querySelector("#countVowels")
const vowelInput = document.querySelector("#vowelInput")
const vowels = ["a", "e", "i", "o", "u"]

function countVowel () {
    let n = 0;
    let lowerVowel = vowelInput.value.toLowerCase();
    for (let i = 0; i < vowelInput.value.length; i++) {
        if (vowels.includes(lowerVowel[i])){
            n++; 
        }
        else{
            continue;
        }
    }

    if (n === 1){
        alert(`There is ${n} vowel!`)
    }
    else {
        alert(`There are ${n} vowels!`)
    }
}

countVowels.addEventListener("click", countVowel)