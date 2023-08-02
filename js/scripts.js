let burgerButton = document.querySelector("burger-button");
let mainMenu = document.querySelector("main-menu");

let canSeeMenu = false;

burgerButton.addEventListener("click", () => {
    console.log(canSeeMenu);
    
    if(!canSeeMenu){
        mainMenu.classList.add("show-menu");
        canSeeMenu = true;
    }else{
        mainMenu.classList.remove("show-menu");
        canSeeMenu = false;
    }
})

mainMenu.addEventListener("click", () => {
    mainMenu.classList.remove("show-menu");
    canSeeMenu = false;
})