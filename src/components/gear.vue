<template>
<div class="container" v-if="showGear">
    <section class="is-fullheight-with-navbar">
        <div id="gear-padding">
            <h1 class="title is-full is-centered">GEAR</h1>
            <div class="columns">
                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                    <figure class="image is-3by2"><img src="images/gear-setup.jpg"></figure>
                </div>
                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                    <p>2 Person Tent</p>
                </div>

                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                    <figure class="image is-3by2"><img src="images/4tent.jpg"></figure>
                </div>
                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                    <p>4 Person Tent</p>
                </div>
                <div class="modal">
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head">
                        <p class="modal-card-title">Title</p>
                        <button class="delete" aria-label="close"></button>
                        </header>
                        <section class="modal-card-body">
                        <!-- Content ... -->
                        </section>
                        <footer class="modal-card-foot">
                        <button class="button is-success">Save changes</button>
                        <button class="button">Cancel</button>
                        </footer>
                    </div>
                </div>
            </div>

            <div class="columns">
                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                    <figure class="image is-3by2"><img src="images/6tent.jpg"></figure>
                </div>
                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                    <p>6 Person Tent</p>
                </div>

                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <figure class="image is-3by2"><img src="images/6tent.jpg"></figure>
                    </div>
                    <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <p>6 Person Tent</p>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
