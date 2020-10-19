<template>
<div class="container">
    <section class="is-fullheight-with-navbar">
        <div id="gear-padding">
            <h1 class="title is-full">GEAR</h1>
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
                    <figure class="image is-3by2"><img src="../../public/assets/gear-setup.jpg"></figure>
                </div>
                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                    <p>2 Person Tent</p>
                    <p class="has-text-weight-semibold">Starting at $29.99/night</p>
                    <div class="control">
                        <router-link to="/booking">
                        <button class="button is-large-mobile is-small-desktop is-danger is-outlined" type="submit" v-on:click="show2tent=true">Book Now</button>
                        </router-link>
                    </div>
                </div>

                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                    <figure class="image is-3by2"><img src="../../public/assets/4tent.jpg"></figure>
                </div>
                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                    <p>4 Person Tent</p>
                    <p>Starting at $59.99/night</p>
                    <p class="has-text-weight-semibold">Starting at $59.99/night</p>
                    <div class="control">
                        <router-link to="/booking">
                        <button class="button is-large-mobile is-small-desktop is-danger is-outlined" type="submit" v-on:click="show4tent=true">Book Now</button>
                        </router-link>
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
                    <figure class="image is-3by2"><img src="../../public/assets/6tent.jpg"></figure>
                </div>
                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                    <p>6 Person Tent</p>
                    <p class="has-text-weight-semibold">Starting at $79.99/night</p>
                    <div class="control">
                        <router-link to="/booking">
                        <button class="button is-large-mobile is-small-desktop is-danger is-outlined" type="submit" v-on:click="show6tent=true">Book Now</button>
                        </router-link>
                    </div>
                </div>

                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <figure class="image is-3by2"><img src="../../public/assets/8tent.jpg"></figure>
                    </div>
                    <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <p>8-10 Person Tent</p>
                        <p>Starting at $119.99/night</p>
                        <p class="has-text-weight-semibold">Starting at $119.99/night</p>
                    <div class="control">
                        <router-link to="/booking">
                        <button class="button is-large-mobile is-small-desktop is-danger is-outlined" type="submit" v-on:click="show8tent=true">Book Now</button>
                        </router-link>
                    </div>
                    </div>
            </div>

            <div class="columns">
                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                    <figure class="image is-1by1"><img src="../../public/assets/mummybag.jpg"></figure>
                </div>
                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                    <p>1 Person Mummy Bag</p>
                    <p class="has-text-weight-semibold">Starting at $8.99/night</p>
                    <div class="control">
                        <router-link to="/booking">
                        <button class="button is-large-mobile is-small-desktop is-danger is-outlined" type="submit" v-on:click="show1bag=true">Book Now</button>
                        </router-link>
                    </div>
                </div>

                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <figure class="image is-1by1"><img src="../../public/assets/2mummybag.jpg"></figure>
                    </div>
                    <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <p>2 Person Mummy Bag</p>
                        <p class="has-text-weight-semibold">Starting at $16.99/night</p>
                    <div class="control">
                        <router-link to="/booking">
                        <button class="button is-large-mobile is-small-desktop is-danger is-outlined" type="submit" v-on:click="show2bag=true">Book Now</button>
                        </router-link>
                    </div>
                    </div>
            </div>

            <div class="columns">
                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                    <figure class="image is-1by1"><img src="../../public/assets/kitchen.jpg"></figure>
                </div>
                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                    <p>Kitchen Set</p>
                    <p class="has-text-weight-semibold">Starting at $15.99/night</p>
                    <div class="control">
                        <router-link to="/booking">
                        <button class="button is-large-mobile is-small-desktop is-danger is-outlined" type="submit" v-on:click="showkitchen=true">Book Now</button>
                        </router-link>
                    </div>
                </div>

                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                    <figure class="image is-1by1"><img src="../../public/assets/chairs.jpg"></figure>
                </div>
                <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                    <p>Camping Chairs</p>
                    <p class="has-text-weight-semibold">Starting at $4.99/night</p>
                    <div class="control">
                        <router-link to="/booking">
                        <button class="button is-large-mobile is-small-desktop is-danger is-outlined" type="submit" v-on:click="showchairs=true">Book Now</button>
                        </router-link>
                    </div>
                </div>
            </div>
            </div>

            <div id="gear-padding">
                <h1 class="title is-full">KITS</h1>
                <div class="columns">
                    <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <figure class="image is-3by2"><img src="../../public/assets/tent-feet.jpg"></figure>
                    </div>
                    <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <p>The Quick Getaway <br> (1-4 Person)</p>
                        <p class="has-text-weight-semibold">Starting at $49.99</p>
                        <div class="control">
                            <router-link to="/booking">
                            <button class="button is-large-mobile is-small-desktop is-danger is-outlined" type="submit" v-on:click="show2tent=true">Book Now</button>
                            </router-link>
                        </div>
                    </div>

                    <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <figure class="image is-3by2"><img src="../../public/assets/hiker.jpg"></figure>
                    </div>
                    <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <p>The Hiker's <br> (1-4 Person)</p>
                        <p class="has-text-weight-semibold">Starting at $79.99</p>
                        <div class="control">
                            <router-link to="/booking">
                            <button class="button is-large-mobile is-large-mobile is-large-mobile is-small-desktop-desktop-desktop is-danger is-outlined" type="submit" v-on:click="show4tent=true">Book Now</button>
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <figure class="image is-3by2"><img src="../../public/assets/glamping.jpg"></figure>
                    </div>
                    <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <p>Glamping<br> (2-6 Person)</p>
                        <p class="has-text-weight-semibold">Starting at $139.99/night</p>
                        <div class="control">
                            <router-link to="/booking">
                            <button class="button is-large-mobile is-small-desktop is-danger is-outlined" type="submit" v-on:click="show2tent=true">Book Now</button>
                            </router-link>
                        </div>
                    </div>

                    <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <figure class="image is-3by2"><img src="../../public/assets/forest-setup.jpg"></figure>
                    </div>
                    <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <p>The Essentials <br> (1-4 Person)</p>
                        <p class="has-text-weight-semibold">Starting at $59.99/night</p>
                        <div class="control">
                            <router-link to="/booking">
                            <button class="button is-large-mobile is-small-desktop is-danger is-outlined" type="submit" v-on:click="show4tent=true">Book Now</button>
                            </router-link>
                        </div>
                    </div>
                </div>

                 <div class="columns rental-padding">
                    <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <figure class="image is-3by2"><img src="../../public/assets/carcamp.jpg"></figure>
                    </div>
                    <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <p>Car Camping <br> (2-4 Person)</p>
                        <p class="has-text-weight-semibold">Starting at $49.99/night</p>
                        <div class="control">
                            <router-link to="/booking">
                            <button class="button is-large-mobile is-small-desktop is-danger is-outlined" type="submit" v-on:click="show2tent=true">Book Now</button>
                            </router-link>
                        </div>
                    </div>

                    <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <figure class="image is-3by2"><img src="../../public/assets/hammock.jpg"></figure>
                    </div>
                    <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-fullhd">
                        <p>Relaxation Kit<br> (2-4 Person)</p>
                        <p class="has-text-weight-semibold">Starting at $79.99/night</p>
                        <div class="control">
                            <router-link to="/booking">
                            <button class="button is-large-mobile is-small-desktop is-danger is-outlined" type="submit" v-on:click="show4tent=true">Book Now</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</div>
</template>
