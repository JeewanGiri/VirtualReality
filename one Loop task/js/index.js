document.addEventListener('DOMContentLoaded',function(){
    const video=document.getElementById('myVideo');
    const Playbutton=document.getElementById('animated-button');
   const close=document.getElementById('close');
    Playbutton.addEventListener('click', function () {
        video.style.visibility = 'visible';
        video.play();
        close.style.visibility='visible';
        
    });
    close.addEventListener('click',function (){
        video.style.visibility='hidden';
        video.pause();
        close.style.visibility='hidden';
    });
})