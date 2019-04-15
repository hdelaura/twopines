<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <router-link to="/">
        <a>
            <img src="../../public/assets/twopinetrees_logo.png" alt="Two Pines" width="50" height="25">
        </a>
        </router-link>
    </div>
    <div class="navbar-menu">
        <div class="navbar-end">
            <Slide>
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
            </Slide>
        </div>
    </div>
</nav>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  components: {
    Slide // Register component
  }
}
</script>

<style>
.navbar-brand {
    margin: 15px;
}
.bm-burger-button {
position: fixed;
width: 36px;
height: 30px;
left: 36px;
top: 36px;
cursor: pointer;
}
.bm-burger-bars {
background-color: #373a47;
}
.line-style {
position: absolute;
height: 20%;
left: 0;
right: 0;
}
.cross-style {
position: absolute;
top: 12px;
right: 2px;
cursor: pointer;
}
.bm-cross {
background: #bdc3c7;
}
.bm-cross-button {
height: 24px;
width: 24px;
}
.bm-menu {
height: 100%; /* 100% Full-height */
width: 0; /* 0 width - change this with JavaScript */
position: fixed; /* Stay in place */
z-index: 1000; /* Stay on top */
top: 0;
left: 0;
background-color: white; /* Black*/
overflow-x: hidden; /* Disable horizontal scroll */
padding-top: 60px; /* Place content 60px from the top */
transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}
.bm-overlay {
background: rgba(0, 0, 0, 0.3);
}
.bm-item-list {
color: #b8b7ad;
margin-left: 10%;
font-size: 20px;
}
.bm-item-list > * {
display: flex;
text-decoration: none;
padding: 0.7em;
}
.bm-item-list > * > span {
margin-left: 10px;
font-weight: 700;
color: white;
}
</style>
