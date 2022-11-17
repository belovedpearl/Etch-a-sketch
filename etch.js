const container = document.getElementById("container");
let reset = document.getElementById('reset')
let black = document.getElementById('black')
let rgbbtn = document.getElementById('rgb')
let color = document.getElementById('color')
let slider = document.getElementById('slider')
let valuer = document.getElementById('value')


slider.addEventListener ('change', function(){
    valuer.innerText = slider.value
})

function gridMaker(){
    container.style.setProperty('--grid-rows', 16);
    container.style.setProperty('--grid-cols', 16);
    for (let i = 0; i < (16 *16); i++){
        let cell = document.createElement('div');
        cell.classList.add('grid-item')
        cell.addEventListener('mouseenter', function(e){
         e.target.style.backgroundColor = 'black'
        })
        container.appendChild(cell)
    }
}

gridMaker()


