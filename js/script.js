let num = document.querySelectorAll(".num")



let numarr = Array.from(num)



numarr.map((item)=>{
  

let endnumber = item.innerHTML
let startnumber = 0
item.innerHTML = 0


function countnumber(){
    startnumber++
    item.innerHTML = startnumber
    if(startnumber == endnumber){
        clearInterval(stop)
    }
}


let stop = setInterval(()=>{
    countnumber()
},item.dataset.time)

})

