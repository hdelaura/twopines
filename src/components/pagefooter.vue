<template>
<footer class="pagefooter">
    <div class="level">
        <p class="level-item has-text-centered">
            <a class="link is-info">Home</a>
        </p>
        <p class="level-item has-text-centered">
            <a class="link is-info">About</a>
        </p>
        <p class="level-item has-text-centered is-hidden-mobile">
            <img src="../../public/assets/twopinetrees_logo.png" href="/index.html" alt="Two Pines" width="60" height="20">
        </p>
        <p class="level-item has-text-centered">
            <a class="link is-info">Reservations</a>
        </p>
        <p class="level-item has-text-centered">
            <a class="link is-info">Contact</a>
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
  margin-top: 15px;
}

.pagefooter a.link {
  color: white;
}

.pagefooter .a:hover {
  color: #77824D;
}
</style>
