// Procurar o botao
document.querySelector("#add-time")
//Quando  clicar no botao
.addEventListener('click', cloneField)


// Executar uma acao
function cloneField() {


    // pegar os campos. Qual campos?
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // limpar os campos. quais campos?
    const fields = newFieldContainer.querySelectorAll('input')
    // para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field do momento e limpa ele
        field.value = ""
    })
    //Colocar na página. onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}