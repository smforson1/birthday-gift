//document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {   
     count += 1
     countEl.textContent = count
}

function save () {
    let  save  = count + " - "
    saveEl.textContent += save
    console.log(count)
    countEl.textContent = 0
    count = 0
}


