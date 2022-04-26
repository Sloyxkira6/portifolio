let esquerdo = document.getElementById('botesrolagem1')
let carrossel = document.getElementById('carrossel')


let cont = 0
let im1 = [
    document.getElementById('itens1'),
    document.getElementById('itens2'),
    document.getElementById('itens3'),
    document.getElementById('itens4'),
    document.getElementById('itens5'),
    document.getElementById('itens6')
]
esquerdo.addEventListener('click', (event)=> {
    cont++
    if(cont==im1.length) {
        cont=0
    }
    window.alert(`${cont}`)
    carrossel.fillRect
    carrossel.drawImage(im1[cont], 500, 250, 500, 250)
    

})



// const imgs = document.getElementById("img")
// const img = document.querySelectorAll("img")

// let id= 0

// function carrossel () {
//     id++

//     if(id > img.length - 1){
//         id = 0
//     }
//     imgs.style.transform = `translateX(${-id * 500}px)`
// }

// setInterval(carrossel, 1800)
    


