const boxCards = document.querySelectorAll('.box-card1');

boxCards.forEach(function(x){
    x.addEventListener("mouseenter",function(y){
        y.target.classList.add("besar");
    });
    x.addEventListener("mouseleave",function(y){
        y.target.classList.remove("besar");
    });
});