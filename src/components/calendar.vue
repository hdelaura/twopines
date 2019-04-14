<template>
<div class="container">
  <section class="is-fullheight-with-navbar">
    <div id="gear-padding">
      <h1 class="title is-full is-centered">Select Date:</h1>
      <div class="columns">
        <div class="column is-full">
          <VueHotelDatepicker />
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
