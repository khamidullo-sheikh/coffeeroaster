
// BURGER__MENU

let wrapper = document.querySelector(".wrapper"),
    navToggle = document.querySelector(".nav__button--toggle"),
    navMenu = document.querySelector(".nav__list");

navToggle.addEventListener("click", function(){
    navMenu.classList.toggle("menu__open");
    wrapper.classList.toggle("lock");
    navToggle.classList.toggle("close__btn");
});

// ACTIVE__BUTTON

let bodyBtn = document.querySelector(".body__btn"),
    checkInput = document.querySelectorAll(".check__input"),
    resetBtn = document.getElementById("reset");

for (let i = 0; i < checkInput.length; i++){
    checkInput[i].addEventListener("click", function(){
        if (checkInput[i].checked){
            bodyBtn.classList.remove("btn__disabled");
        }
    });
}

// GETTING__DATA

for (let i = 0; i < 3; i++){
    checkInput[i].addEventListener("click", function(){
        if (checkInput[i].checked){
            let data = document.querySelector(".preferences");
            data.innerHTML = checkInput[i].value;
        }
    });
}

for (let i = 3; i < 6; i++){
    checkInput[i].addEventListener("click", function(){
        if (checkInput[i].checked){
            let data = document.querySelector(".bean__type");
            data.innerHTML = checkInput[i].value;
        }
    });
}

for (let i = 6; i < 9; i++){
    checkInput[i].addEventListener("click", function(){
        if (checkInput[i].checked){
            let data = document.querySelector(".quantity");
            data.innerHTML = checkInput[i].value;
        }
    });
}

for (let i = 9; i < 12; i++){
    checkInput[i].addEventListener("click", function(){
        if (checkInput[i].checked){
            let data = document.querySelector(".grind__option");
            data.innerHTML = checkInput[i].value;
        }
    });
}

for (let i = 12; i < 15; i++){
    checkInput[i].addEventListener("click", function(){
        if (checkInput[i].checked){
            let data = document.querySelector(".delivery");
            data.innerHTML = checkInput[i].value;
        }
    });
}

resetBtn.addEventListener("click", function(){
    let data = "_____",
        selected = document.querySelectorAll(".get__data");
    for (let i = 0; i < selected.length; i++){
        selected[i].innerHTML = data;
    }
    bodyBtn.classList.add("btn__disabled");
});

// COLLAPSE

let boxBody = document.querySelectorAll(".body__box"),
    asideList = document.querySelectorAll(".aside__item");
    
for (let i = 0; i < boxBody.length; i++){
    let btnBox = boxBody[i].querySelector(".box__btn"),
        boxInput = boxBody[i].querySelector(".box__input"),
        asideSpan = asideList[i].querySelector(".aside__span"),
        inputBox = boxBody[i].querySelectorAll(".box__input--box");
    btnBox.addEventListener("click", function(){
        boxInput.classList.toggle("active__input");
        btnBox.classList.toggle("active__btn");
    });
    for (let j = 0; j < inputBox.length; j++){
        let boxLabel = inputBox[j].querySelector(".box__label");
        boxLabel.addEventListener("click", function(){
            asideSpan.classList.add("active__span");
            asideList[i].classList.add("active__aside");
        });
        resetBtn.addEventListener("click", function(){
            asideSpan.classList.remove("active__span");
            asideList[i].classList.remove("active__aside");
        });
    }
}