<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <router-link to="/home">
        <a class="navbar-item">
            <img src="images/twopinetrees_logo.png" alt="Two Pines" width="112" height="30">
        </a>
        </router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>
    <div id="navbarBasic" class="navbar-menu">
        <div class="navbar-end">
            <router-link to="/gear">
            <a class="navbar-item"> RENTAL GEAR </a>
            </router-link>
            
            <router-link to="/howitworks">
            <a class="navbar-item"> HOW IT WORKS</a>
            </router-link>

            <router-link to="/about">
            <a class="navbar-item">ABOUT US</a>
            </router-link>

            <router-link to="/contact">
            <a class="navbar-item">CONTACT</a>
            </router-link>

            <router-link to="/booking">
            <a class="navbar-item">BOOKING</a>
            </router-link>
        </div>
    </div>
</nav>
</template>

<script>
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
</script>
