// getting tags from HTML 
const counter = document.querySelector(".counter");
const finalText = document.querySelector(".final");
const spans =document.querySelectorAll("span");
const replay = document.querySelector("#replay");
const time = document.querySelector(".time");
const remlad = document.querySelector("h2");
const h5 = document.querySelector("h5")

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

var d = new Date();
  let hours = d.getHours()

 if (hours >=12){
      time.textContent = value
     = "Good Afternoon"
 }else if(hours >16 && hours < 20 ){
     time.textContent= "Good Evening"
 }else if(hours >= 20){
    time.textContent= "Good Night"
 }else{
    time.textContent= "Good Morning"
 }
function remladInfo(){
 
 
 remlad.classList.add("remladFont")
 remlad.classList.add("remladFont") 
    remlad.textContent ="Want to Buy DATA, Please call 07033637349"
}
 function remladInfos(){
    remlad.classList.remove("remladFont") 
    remlad.textContent ="REMLAD" 
 }

remlad.addEventListener("mouseover", remladInfo)
 remlad.addEventListener("mouseout", remladInfos)

