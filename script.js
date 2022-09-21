// Variables
let canvas = document.querySelector('canvas'),
    screen = document.querySelector('.screen')
    ctx = canvas.getContext('2d'),
    mouse = {x: 0, y: 0},
    draw = false

// standard canvas properties
ctx.strokeStyle = 'black'
ctx.lineWidth = 1;

// pressing the button
canvas.addEventListener('mousedown', function(e) {
    let clientRect = this.getBoundingClientRect();

    mouse.x = e.clientX - clientRect.left;
    mouse.y = e.clientY - clientRect.top;

    draw = true
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y)
})

// draw
canvas.addEventListener('mousemove', function(e){
    if(draw == true) {
        let clientRect = this.getBoundingClientRect();

        mouse.x = e.clientX - clientRect.left;
        mouse.y = e.clientY - clientRect.top;
    
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke()
    }
})
// squeeze the button 
canvas.addEventListener('mouseup', function(e) {
    let clientRect = this.getBoundingClientRect();
    
    mouse.x = e.clientX - clientRect.left;
    mouse.y = e.clientY - clientRect.top;

    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    ctx.closePath();
    draw = false
})

document.querySelector('.green').addEventListener('click', () => ctx.strokeStyle = 'green')
document.querySelector('.red').addEventListener('click', () => ctx.strokeStyle = 'red')
document.querySelector('.blue').addEventListener('click', () => ctx.strokeStyle = 'blue')
document.querySelector('.black').addEventListener('click', () => ctx.strokeStyle = 'black')
document.querySelector('.clear').addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))

document.querySelector('.plus').addEventListener('click', (e) => {
    let lw = ctx.lineWidth++
    screen.innerHTML = lw
})

document.querySelector('.minus').addEventListener('click', (e) => {
    let lw = ctx.lineWidth--
    screen.innerHTML = lw
})



