'use strict'

const botaoMostrarNumeros = document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarDobro = document.getElementById('botao-mostrar-dobro')
const botaoMostrarProximoPar = document.getElementById('botao-mostrar-proximo-par')
const botaoMostrarMultiplos3e5 = document.getElementById('botao-mostrar-multiplos-3e5')
const botaoMostrarMultiplos3ou5 = document.getElementById('botao-mostrar-multiplos-3ou5')
const botaoMostrarProximoPrimo = document.getElementById('botao-mostrar-proximo-primo')

function mostrarNumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for(let contador=0; contador < ultimoIndice; contador++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador]
        container.appendChild(novoSpan)

    }
}
function mostrarNumerosPares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-pares')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for(let contador=0; contador < ultimoIndice; contador++){
       if(numeros[contador] % 2 == 0){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador]
        container.appendChild(novoSpan)
       }

    }
}

function mostrarDobro(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-dobro')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for(let contador=0; contador < ultimoIndice; contador++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador] * 2
        container.appendChild(novoSpan)
    }
}

function mostrarProximoPar(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-proximo-par')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for(let contador=0; contador < ultimoIndice; contador++){
        if(numeros[contador]%2==0){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = Number(numeros[contador])+2
        container.appendChild(novoSpan)
        }else{
        const novoSpan = document.createElement('span')
        novoSpan.textContent = Number(numeros[contador])+1
        container.appendChild(novoSpan)

        }
    }
}

function mostrarMultiplos3e5(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-multiplos-3e5')

    const ultimoIndice = numeros.length
    container.replaceChildren('') 
for(let contador=0; contador < ultimoIndice; contador++){
    if(numeros[indice] % 3 == 0 && numeros[indice] % 5 == 0){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[indice]
        container.appendChild(novoSpan)
        }
        
    }
}

function mostrarMultiplos3ou5(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-multiplos-3ou5')

    const ultimoIndice = numeros.length
    container.replaceChildren('')

    for(let indice = 0; indice < ultimoIndice; indice++ ){
        if(numeros[indice] % 3 == 0 || numeros[indice] % 5 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}


botaoMostrarNumeros.addEventListener('click', mostrarNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarDobro.addEventListener('click', mostrarDobro)
botaoMostrarProximoPar.addEventListener('click', mostrarProximoPar)
botaoMostrarMultiplos3e5.addEventListener('click', mostrarMultiplos3e5)
botaoMostrarMultiplos3ou5.addEventListener('click', mostrarMultiplos3ou5)
botaoMostrarProximoPrimo.addEventListener('click', mostrarProximoPrimo)