//Sabsse pehle ek variable create kiya search form ke nam se for usme query selector ki madad se hmne apne search form ko get ya select kara liya.

let searchForm = document.querySelector('.search-form');
//queryselector ki madad se jo icon h uspe click hone pr usko active kr dena hai.

document.querySelector('#search-btn').onclick=() =>{
  searchForm.classList.toggle('active');

  shoppingCart.classList.remove('active');
  loginform.classList.remove('active');
  navbar.classList.remove('active');
}



let shoppingCart= document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick=() =>{
  shoppingCart.classList.toggle('active');

  searchForm.classList.remove('active');
  loginform.classList.remove('active');
  navbar.classList.remove('active');
}



let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick=() =>{
  loginform.classList.toggle('active');

  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navbar.classList.remove('active');
}



let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=() =>{
  navbar.classList.toggle('active');

  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginform.classList.remove('active');
}



window.onscroll=()=>{
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginform.classList.remove('active');
  navbar.classList.remove('active');
}


var swiper = new Swiper(".products-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay:{
    delay:2000,
    disableonInteraction:false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay:{
    delay:2000,
    disableonInteraction:false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});