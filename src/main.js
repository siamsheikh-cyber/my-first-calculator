let getMain = document.getElementById("main");
let getInput = document.querySelector("input");


let counte = "";

getMain.addEventListener("click",(e) => {
    if(e.target.innerHTML == "1"){
        counte += 1;
        getInput.value = counte;
    }else if(e.target.innerHTML == "DE"){
        counte = counte.slice(0, -1);
        getInput.value = counte;
    }else if(e.target.innerHTML == "AC"){
        counte = "";
        getInput.value = counte;
    }else if(e.target.innerHTML == "2"){
        counte += 2;
        getInput.value = counte;
    }else if(e.target.innerHTML == "3"){
        counte += 3;
        getInput.value = counte;
    }else if(e.target.innerHTML == "4"){
        counte += 4;
        getInput.value = counte;
    }else if(e.target.innerHTML == "5"){
        counte += 5;
        getInput.value = counte;
    }else if(e.target.innerHTML == "6"){
        counte += 6;
        getInput.value = counte;
    }else if(e.target.innerHTML == "7"){
        counte += 7;
        getInput.value = counte;
    }else if(e.target.innerHTML == "8"){
        counte += 8;
        getInput.value = counte;
    }else if(e.target.innerHTML == "9"){
        counte += 9;
        getInput.value = counte;
    }else if(e.target.innerHTML == "0"){
        counte += 0;
        getInput.value = counte;
    }else if(e.target.innerHTML == "00"){
        counte += '00';
        getInput.value = counte;
    }else if(e.target.innerHTML == "%"){
        counte += "%";
        getInput.value = counte;
    }else if(e.target.innerHTML == "/"){
        counte += '/';
        getInput.value = counte;
    }else if(e.target.innerHTML == "*"){
        counte += '*';
        getInput.value = counte;
    }else if(e.target.innerHTML == "+"){
        counte += '+';
        getInput.value = counte;
    }else if(e.target.innerHTML == "-"){
        counte += '-';
        getInput.value = counte;
    }else if(e.target.innerHTML == "."){
        counte += '.';
        getInput.value = counte;
    }else if(e.target.innerHTML == "="){
        counte = eval(counte) ;
        getInput.value = counte;
    }
    
    
});