const navBar = document.querySelector('.nav-bar-container');
let scrollTrack;
let newScroll;
const curtain = document.querySelector('.navbar-curtain');


document.addEventListener('scroll', (e)=>{
    scrollTrack  =  window.scrollY;
    if (scrollTrack > newScroll){
        navBar.classList.add('scrolled')
        curtain.classList.add('showCurtain')
        curtain.style.display='block'
    } else {
        if(navBar.classList.contains('scrolled')){
            navBar.classList.remove('scrolled');
            curtain.classList.remove('showCurtain')
            curtain.style.display='none'
        }
    }
    newScroll = scrollTrack;
})

const video = document.querySelector('.video');
const playPause = document.querySelector('.play-button');
const play = document.getElementById('play');
const pause = document.getElementById('pause');

playPause.addEventListener('click',(e)=>{
    if(play.classList.contains('hidden')){
        play.classList.remove('hidden');
        pause.classList.add('hidden');
        video.pause();
    } else if(pause.classList.contains('hidden')){
        pause.classList.remove('hidden');
        play.classList.add('hidden');
        video.play();
    }
})





let carouselInnerContainer = document.querySelector('.carousel-inner-container');
let Translation = new Number;
let pastTr;


let left = document.querySelector('.left')
let right = document.querySelector('.right')

console.log(left)
console.log(right)

left.addEventListener('click',(e)=>{
    if(Translation>0){
        pastTr = Translation - 1030;

        let i = setInterval(()=>{
            if (Translation <= pastTr) {
                clearInterval(i);
            }

            Translation -= 20;
            carouselInnerContainer.style.transform = `translateX(-${Translation}px)`
        },2);
    }
})
right.addEventListener('click',(e)=>{
    if(Translation < 6180){
        pastTr = Translation + 1030;

        let i = setInterval(()=>{
            if (Translation >= pastTr) {
                clearInterval(i);
            }

            Translation += 20;
            carouselInnerContainer.style.transform = `translateX(-${Translation}px)`
        },2);


    }
})


