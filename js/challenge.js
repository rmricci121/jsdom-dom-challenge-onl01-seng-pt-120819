const counter = document.getElementById('counter');

let time = counter.innerText

let pause = document.getElementById("pause")
let minus = document.getElementById("minus")
let plus = document.getElementById("plus")

let submit = document.querySelector("#submit")
let commentList = document.querySelector("#list")

minus.addEventListener("click", function(e){
    counter.innerText--;
});

plus.addEventListener("click", function(e){
    counter.innerText++;
});

let intervalID = setInterval(function timerCounter(){
    i =parseInt(counter.innerText)
    i ++ 
    counter.innerText = i
}, 1000);

document.getElementById('heart').addEventListener("click", like)

function like(){
   listItem = document.createElement('li')
   listItem.innerText = `You liked this #${time}`
   const list = document.querySelector('.likes')
   list.appendChild(listItem)
}

pause.addEventListener("click", function(e) {
    if (pause.innerText === 'pause'){
        pause.innerText = "resume"
        clearInterval(intervalID)

        plus.disabled = true
        minus.disabled = true
    }
    else {
        intervalID = setInterval(function timerCounter(){
            i =parseInt(counter.innerText)
            i ++ 
            counter.innerText = i
        }, 1000);
        pause.innerText = "pause"

        plus.disabled = false
        minus.disabled = false
    }
    });

    submit.addEventListener("click", function(e){
        e.preventDefault();
        let comment = document.querySelector("#comment-form > input[type=text]").value
        commentList.innerHTML += `<li>${comment}</li>`
        document.querySelector("#comment-form").reset();
    });