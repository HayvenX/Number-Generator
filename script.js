const number = document.getElementById("number")
const generate = document.getElementById("generate")

generate.onclick = function()
{
  
    const minInput = document.getElementById("minInput")
    const maxInput = document.getElementById("maxInput")
    
    const min = Number(minInput.value)
    const max = Number(maxInput.value)

    if(min >= max)
   {
    alert("ERROR!")
   }
   else
   {
    result = Math.floor(Math.random() * (max - min + 1)) + min
    number.innerText = result
   }
}
