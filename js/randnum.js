const randNumBtn = document.querySelector("#randNumBtn");
const randResult = document.querySelector("#randResult")
function randNum() {
    randResult.innerHTML = ""
    let randomNum
    let minNum = parseInt(document.querySelector("#minNum").value);
    let maxNum = parseInt(document.querySelector("#maxNum").value);
    randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    console.log(randomNum)
    if(!isNaN(randomNum)){
        randResult.innerHTML = randomNum;
    }
    else{
        randResult.innerHTML = "";
    }
}
randNumBtn.addEventListener("click", randNum)