<template>
    <section class="hero is-fullheight-with-navbar background" v-if="showHome">
        <div class="container">
            <div class="hero-body">
                <div class="columns is-mobile is-centered">
                    <a class="button is-medium" id="start-button" v-on:click="(showGear=true),(showHome=false)">
                        Start Your Adventure
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>