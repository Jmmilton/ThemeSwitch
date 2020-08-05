// const red = document.querySelector(".red")

// red.addEventListener('click', function(e) {
//     red.classList.add('.redTheme');
//     console.log('clicked')
// })

// const redClicked = function(click) {
//     if
// }

const btn = document.querySelector(".btn")

btn.addEventListener('click', function(e){
    const clicked = document.body.style.backgroundColor;
    document.body.style.backgroundColor = clicked === 'red' ? 'white' : 'red';
    console.log('clicked')
})

const h1 = document.querySelector(".title-h1");
const h1Blue = false;

h1.addEventListener('click', function(){
    if (h1.style.color === 'black'){
        h1.style.color = 'blue'
    }
    else {
        h1.style.color = 'black'
    }
})