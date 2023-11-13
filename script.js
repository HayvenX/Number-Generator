let number = document.getElementById("number")
const generate = document.getElementById("generate")

generate.onclick = function()
{
  
    let minInput = document.getElementById("minInput")
    let maxInput = document.getElementById("maxInput")
    
    let min = Number(minInput.value)
    let max = Number(maxInput.value)

    if(min >= max)
   {
    alert("ERROR!")
   }
   else
   {
    let result = Math.floor(Math.random() * (max - min + 1)) + min
    number.innerText = result
   }
}