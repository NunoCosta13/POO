let table = document.getElementById("tavinho")
let btn = document.getElementById("btn")
let input = document.getElementById("input_text")
let nomes = []

btn.addEventListener("click", function() {
    let table_html = `
        <tr>
            <th>Nome</th>
        </tr>
    `
    let value = input.value
    nomes.push(value)
    nomes.forEach(nome => {
        table_html += `
            <tr>    
                <td>${nome}</td>
            </tr>`
    });
    table.innerHTML = table_html
    input.value = ""
})