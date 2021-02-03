// getting tags from HTML 
const counter = document.querySelector(".counter");
const finalText = document.querySelector(".final");
const spans =document.querySelectorAll("span");
const replay = document.querySelector("#replay");

animation()


function resetAll(){
    counter.classList.remove("hide")
    finalText.classList.remove("show")

    spans.forEach((num)=>{
    num.classList.value= "3"
})

    spans[0].classList.add("in")
}


function animation(){
    spans.forEach((num, index)=>{
        const nextToLast = spans.length - 1;

        num.addEventListener("animationend",(e) => {
       if(e.animationName === "goIn" && index != nextToLast){
            num.classList.remove("in")
            num.classList.add("out")
        }
        else if(e.animationName=== "goOut"&& num.nextElementSibling){
            num.nextElementSibling.classList.add('in') 
    
        }else{
            counter.classList.add("hide");
            finalText.classList.add("show");
        }
    })
})
}

replay.addEventListener("click", ()=>{
    resetAll()
    animation()
})


