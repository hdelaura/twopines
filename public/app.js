import Vue from 'vue'

const app = new Vue ({
    el: '#app',
    data: { 
        showHome: true,
        showGear: false,
        showHowItWorks: false,
        showAbout: false,
        showContact: false,
        showCart: false
    },
    methods: {
    }
});

document.addEventListener('DOMContentLoaded', () => {

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
    if ($navbarBurgers.length > 0) {
    
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
            
          const target = el.dataset.target;
          const $target = document.getElementById(target);
    
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
    
        });
      });
    }
    
    });