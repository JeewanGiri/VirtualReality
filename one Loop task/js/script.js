const bar =document.getElementById('bar');
const nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
const close = document.getElementById('close');
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
document.addEventListener('DOMContentLoaded', (event) => {
    const profileButton = document.getElementById('profileButton');
    const profileDetails = document.getElementById('profileDetails');

    profileButton.addEventListener('click', () => {
        if (profileDetails.classList.contains('hidden')) {
            profileDetails.classList.remove('hidden');
            profileDetails.style.display = 'block';
        } else {
            profileDetails.classList.add('hidden');
            profileDetails.style.display = 'none';
        }
    });
});

// slider js
let sliderItems = document.getElementsByClassName('slider-item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let sliderDots = document.getElementsByClassName('dot')
// console.log(sliderDots);
let index =0;
sliderItems[index].classList.add('show-item')
// sliderDots[0].classList.add('active-dot ')

next.addEventListener('click',()=>{
  if(index < sliderItems.length-1){
    sliderItems[index].classList.remove('show-item')
    index ++
    sliderItems[index].classList.add('show-item')
  }
  else{
    sliderItems[index].classList.remove('show-item')
    index = 0
    sliderItems[index].classList.add('show-item')
  }
})

prev.addEventListener('click',()=>{
  if(index == 0){
    sliderItems[index].classList.remove('show-item')
    index = sliderItems.length-1
    sliderItems[index].classList.add('show-item')
  }
  else{
    sliderItems[index].classList.remove('show-item')
    index --
    sliderItems[index].classList.add('show-item')
  }
})

for(let i = 0; i < sliderItems.length; i++){
  document.getElementById('dots').innerHTML += ` <div class="dot">
      </div>`
}
// scrool js
const initSlider =()=>{
  const imageList= document.querySelector(".slider-wrapper .image-list");
  const slideButtons= document.querySelectorAll(".slider-wrapper .slide-button");

  slideButtons.forEach(button =>{
      button.addEventListener("click", () => {
          const direction= button.id === "previous-slide" ? -1 : 1;
          const scrollAmount= imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior:"smooth"});
      });
      });
}
window.addEventListener("load", initSlider);

// js for video
document.addEventListener('DOMContentLoaded',function(){
  const video=document.getElementById('myVideo');
  const Playbutton=document.getElementById('animated-button');
 const close=document.getElementById('close');
  Playbutton.addEventListener('click', function () {
      video.style.visibility = 'visible';
      video.play();
  });
  close.addEventListener('click',function (){
    video.pause();
    video.style.visibility='hidden';
  });
})