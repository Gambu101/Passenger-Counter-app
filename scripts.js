
let count_el = document.getElementById("count-el")
let save_el = document.getElementById("save-el")

let count = 0

function increment(){
    count+=1
    count_el.innerHTML=count
}


function save(){
    let count_pro =" " + count +" -   "
    save_el.innerHTML += count_pro
    count_el.innerHTML = 0
    return count = 0
}



