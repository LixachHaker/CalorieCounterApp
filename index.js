let addBtn = document.getElementById("addBtn");
let kCal = document.getElementById("kCal");
let textName = document.getElementById("textName");
let removeBtn = document.getElementById("removeBtn");
let totalCal = document.getElementById("calories");


addBtn.addEventListener("click", () =>{

let calories = document.createElement("p");
calories = kCal.appendChild(calories);
calories.innerText = textName.value;
textName.value = "";
document.getElementById("addBtn").onclick = function(){
   totalCal.innerHTML = calories.innerHTML;

}

removeBtn.addEventListener("click", () =>{
calories = kCal.removeChild(calories);
textName.value = "";


})
})
