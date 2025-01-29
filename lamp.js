let OnOff = document.getElementById('onoff')

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
function lampOnOff() {
    if(OnOff.textContent == ('On')) {
        lampOn()
        OnOff.textContent = 'Off'
    } else {
        lampOff()
        OnOff.textContent = 'On'
    }
}

// adicionando o evento:

OnOff.addEventListener('click', lampOnOff)

lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseout', lampOff)
lamp.addEventListener('dblclick', lampBr)