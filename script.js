const somar = document.querySelector("#somar")
const sub = document.querySelector("#sub")
const mult = document.querySelector("#mult")
const div = document.querySelector("#div")

somar.addEventListener("click", function(e){
    const num_1 = document.getElementById("num_1")
    const value_num_1 = parseInt(num_1.value);

    const num_2 = document.getElementById("num_2")
    const value_num_2 = parseInt(num_2.value);

    const result = value_num_1 + value_num_2
       
    const resposta = document.querySelector(".resposta")

    if (Number.isNaN(result) == true){
        alert("Erro! O valor não é um número")
    } else {
        resposta.innerHTML = result
    }
})

sub.addEventListener("click", function(e){
    const num_1 = document.getElementById("num_1")
    const value_num_1 = parseInt(num_1.value);

    const num_2 = document.getElementById("num_2")
    const value_num_2 = parseInt(num_2.value);

    const result = value_num_1 - value_num_2
       
    const resposta = document.querySelector(".resposta")
    if (Number.isNaN(result) == true){
        alert("Erro! O valor não é um número")
    } else {
        resposta.innerHTML = result
    }  
})

mult.addEventListener("click", function(e){
    const num_1 = document.getElementById("num_1")
    const value_num_1 = parseInt(num_1.value);

    const num_2 = document.getElementById("num_2")
    const value_num_2 = parseInt(num_2.value);

    const result = value_num_1 * value_num_2
       
    const resposta = document.querySelector(".resposta")

    if (Number.isNaN(result) == true){
        alert("Erro! O valor não é um número")
    } else {
        resposta.innerHTML = result
    }
})

div.addEventListener("click", function(e){
    const num_1 = document.getElementById("num_1")
    const value_num_1 = parseInt(num_1.value);

    const num_2 = document.getElementById("num_2")
    const value_num_2 = parseInt(num_2.value);

    const result = value_num_1 / value_num_2
       
    const resposta = document.querySelector(".resposta")

    if (Number.isNaN(result) == true){
        alert("Erro! O valor não é um número")
    } else {
        resposta.innerHTML = result
    }   
}) 