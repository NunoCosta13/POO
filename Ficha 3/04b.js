let input = document.getElementById("input_text")
let add = document.getElementById("btn_add")
let count = document.getElementById("btn_contar")
let texto = document.getElementById("paragrafos")
let save

add.addEventListener("click", function() {
    let value = input.value
    let html = `
     <p>${value}<p>     
     `
    texto.innerHTML = html
    save = value
    input.value = ""
})

count.addEventListener("click", function() {
    texto.innerHTML += `(${save.length})`

})