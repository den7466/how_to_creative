const headerMenuBtn = document.querySelector(".header__menu-button");
const headerMenuList = document.querySelector(".header__menu-list");

headerMenuBtn.addEventListener("click", function(e) {
  console.log(e.target);
  if(document.querySelector(".header__menu-button_active") || document.querySelector(".header__menu-list_active")){
    headerMenuBtn.classList.remove("header__menu-button_active");
    headerMenuList.classList.remove("header__menu-list_active");
  }else{
    headerMenuBtn.classList.add("header__menu-button_active");
    headerMenuList.classList.add("header__menu-list_active");
  }
});