const circles = document.querySelectorAll('.circle');
const prev = document.querySelector('#left');
const next = document.querySelector('#next');
const progress = document.querySelector('#progress');
let currentActive = 1;

next.addEventListener('click', function(){
    currentActive++;
    if(currentActive >  circles.length){
        currentActive = circles.length;
    }
    updateProgressBar();
});

prev.addEventListener('click', function(){
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    updateProgressBar();
});

function updateProgressBar(){
    circles.forEach(function(circle, index){
        if(index < currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }

    const actives = document.querySelectorAll('.active');

   progress.style.width = [(actives.length - 1) / (circles.length - 1)] * 100 + '%';    

   if(currentActive === 1){
    prev.disabled = true;
   }else if(currentActive === circles.length){
    next.disabled = true;
   }else{
    prev.disabled = false;
    next.disabled = false;
   }
});

}