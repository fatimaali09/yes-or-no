var names = ["YES", "NO", "Definetly","I don't think so", "Probably", "Maybe", "Why Not?", "DEFINETLY YES", "You know the answer", "Why u asking, if u know", "You already know", "Not yet", "Not yet, but soon"]

document.getElementById("button").addEventListener("click", ()=>{
    var number =  Math.floor(Math.random() * names.length)
    document.getElementById("button").innerText=names[number]
})