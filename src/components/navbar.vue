<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <router-link to="/">
        <a class="navlogo">
            <img src="../../public/assets/twopinetrees_logo.png" alt="Two Pines" width="45" height="20">
        </a>
        </router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"  @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>
    <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
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
export default {
    data: function() {
        return {
            isOpen: false
        }
    }
}
</script>

<style>
.navbar-item:hover {
    background-color: #77824D;
    color: white;
}
</style>
