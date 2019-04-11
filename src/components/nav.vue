<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/index.html">
            <img src="images/twopinetrees_logo.png" alt="Two Pines" width="112" height="30">
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>
    <div id="navbarBasic" class="navbar-menu">
        <div class="navbar-end">
            <a class="navbar-item" href="/gear.html">
                RENTAL GEAR
            </a>
            
            <a class="navbar-item" href="/howitworks.html">
                HOW IT WORKS
            </a>

            <a class="navbar-item" href="/aboutus.html">
                ABOUT US
            </a>

            <a class="navbar-item" href="/contact.html">
                CONTACT
            </a>

            <a class="navbar-item" href="/booking.html">
                BOOKING
            </a>
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
