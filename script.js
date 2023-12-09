const divs=document.querySelectorAll(".an");
let counter=0;
setInterval(() => {
    if(counter===0){
        divs[0].classList.add("w-80");
        divs[0].classList.remove("w-10");
        divs[1].classList.remove("w-80");
        divs[2].classList.remove("w-80");
        divs[1].classList.add("w-10");
        divs[2].classList.add("w-10");
        counter++;
    }
    else if(counter===1){
        divs[1].classList.add("w-80");
        divs[1].classList.remove("w-10");
        divs[0].classList.remove("w-80");
        divs[2].classList.remove("w-80");
        divs[0].classList.add("w-10");
        divs[2].classList.add("w-10");
        counter++;
    }
    else{
        divs[2].classList.add("w-80");
        divs[2].classList.remove("w-10");
        divs[1].classList.remove("w-80");
        divs[0].classList.remove("w-80");
        divs[1].classList.add("w-10");
        divs[0].classList.add("w-10");
        counter=0;
    }
}, 2000);