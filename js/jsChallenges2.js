document.querySelector("#sameAddress").addEventListener("click", function(){
console.log("message")
console.log(document.querySelector("#bill").value)

if(this.checked){
    document.querySelector("#home").textContent = document.querySelector("#bill").value
    document.querySelector("#home").disabled = true
}
else{
    document.querySelector("#home").textContent = ""
    document.querySelector("#home").disabled = false
}
})

