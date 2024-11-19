let On = document.getElementById('on')
let Off = document.getElementById('off')
let lamp = document.getElementById('lamp')

function lampB() {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn() {
    if(!lampB()) {
   lamp.src = 'ft/ligada.jpg'
    }
}
function lampOff() {
    if(!lampB()) {
    lamp.src = 'ft/desligada.jpg'
    }
}
function lampBr() {
    lamp.src = 'ft/quebrada.jpg'
}
// adicionando o evento:

On.addEventListener('click', lampOn)
Off.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseout', lampOff)
lamp.addEventListener('dblclick', lampBr)