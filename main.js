

const carouselList = document.querySelector('.carousel-list').children;
const nextBTn = document.getElementById("carousel-control-next");
const prevBTn = document.getElementById("carousel-control-prev");
const carouselListLenght = carouselList.length;
let index = 0; 

nextBTn.onclick = function (){
    next("next"); 
}
prevBTn.oneclick = function (){
    prev("prev"); 
}

function next(direction){
    if(direction =="next"){
        index++;
        if(index == carouselListLenght){
        index=0;
    }
}
else{
    if(index==0){
        index = carouselListLenght-1;
    }
    else{
        index--;
    }
}

for(i=0; i< carouselList.length; i++){
    carouselList[i].classList.remove("active");
}
carouselList[index].classList.add("active"); 
}





const stBTn = document.querySelector(".pure-button active");
const ndBTn = document.querySelector(".pure-button");
const rdBTn = document.querySelector(".pure-button");


const stImg = document.querySelector(".carousel-item active");
const ndImg = document.querySelector(".carousel-item");
const rdImg = document.querySelector(".carousel-item");







