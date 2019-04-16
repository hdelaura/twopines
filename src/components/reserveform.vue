<template>
<div class="container">
    <section class="is-fullheight-with-navbar">
        <div id="gear-padding">
            <h1 class="title is-full is-centered">Select Date:</h1>
            <div class="columns">
                <div class="column is-half">
                    <VueHotelDatepicker />
                </div>
                <div class="field">
                    <div class="column">
                        <label class="checkbox">
                        <input type="checkbox">
                        Tents
                        </label>
                    </div>
                    <div class="column">
                        <div class="control">
                        <div class="select">
                            <select>
                            <option>QTY</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div class="column is-half"></div>
                    <div class="column">
                        <label class="checkbox">
                        <input type="checkbox">
                        Sleeping Bags
                        </label>
                    </div>
                    <div class="column">
                        <div class="select">
                            <select>
                            <option>QTY</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            </select>
                        </div>
                    </div>
                    <div class="column is-half"></div>
                    <div class="column">
                        <label class="checkbox">
                        <input type="checkbox">
                        Cookware Set
                        </label>
                    </div>
                    <div class="column">
                        <div class="select">
                        <select>
                            <option>QTY</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        </div>
                    </div>
                    <div class="column is-half"></div>
                    <div class="column">
                        <label class="checkbox">
                        <input type="checkbox">
                        Car Shade
                        </label>
                    </div>
                    <div class="column">
                        <div class="select">
                        <select>
                            <option>QTY</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import VueHotelDatepicker from '@northwalker/vue-hotel-datepicker'
export default {
  name: 'App',
  components: {
    VueHotelDatepicker
  }
  //
  // skip
  //
}
</script>
