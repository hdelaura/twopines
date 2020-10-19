<template>
<footer class="pagefooter is-hidden-mobile">
    <div class="level">
        <p class="level-item has-text-centered">
            <router-link to="/">
            <a class="link is-info">Home</a>
            </router-link>
        </p>
        <p class="level-item has-text-centered">
            <router-link to="/about">
            <a class="link is-info">About</a>
            </router-link>
        </p>
        <p class="level-item has-text-centered is-desktop">
            <img src="../../public/assets/twopinetrees_logo.png" href="/index.html" alt="Two Pines" width="60" height="20">
        </p>
        <p class="level-item has-text-centered">
            <router-link to="/booking">
            <a class="link is-info">Reservations</a>
            </router-link>
        </p>
        <p class="level-item has-text-centered">
            <router-link to="/contact">
            <a class="link is-info">Contact</a>
            </router-link>
        </p>
    </div>
</footer>
</template>

<style>

/* $green: #44540B;
$lightgreen: #77824D; */

.pagefooter {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #44540B;
  color: white;
}

.pagefooter a.link {
  color: white;
}
</style>
