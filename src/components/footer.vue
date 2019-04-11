<template>
<footer class="footer">
    <div class="level">
        <p class="level-item has-text-centered">
            <img src="images/twopinetrees_logo.png" href="/index.html" alt="Two Pines" width="60" height="30">
        </p>
        <p class="level-item has-text-centered">
            <a class="link is-info">Menu</a>
        </p>
        <p class="level-item has-text-centered">
            <img src="https://bulma.io/images/bulma-type.png" alt="" style="height: 30px;">
        </p>
        <p class="level-item has-text-centered">
            <a class="link is-info">Reservations</a>
        </p>
        <p class="level-item has-text-centered">
            <a class="link is-info" v-on:click="(showContact=true),(showHome=false),(showGear=false),(showHowItWorks=false),(showAbout=false),(showCart=false)">Contact</a>
        </p>
    </div>
</footer>
</template>