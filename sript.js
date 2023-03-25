const boxes = document.querySelectorAll(".box")
const switchBtn = document.querySelector(".mode-btn")

switchBtn.addEventListener("click", (e)=> {
 let etarg = e.currentTarget
 etarg.classList.add("on")
 addDark()


 document.body.classList.add("dark")
 etarg.addEventListener("click", (e)=> {

  if(e.currentTarget.classList.contains("on")){
   e.currentTarget.classList.remove("on")
  removeDark()
  }
  else{
   e.currentTarget.classList.add("on")
   addDark()
}
  
 })
})

function addDark(){
   boxes.forEach((btn)=>{btn.classList.add("dark")})
   document.body.classList.add("dark")
}
function removeDark(){
   document.body.classList.remove("dark")
   boxes.forEach((btn)=>{btn.classList.remove("dark")})


}