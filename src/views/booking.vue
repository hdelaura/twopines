<template>
<body>
    <nav \>
    <calendar \>
    <footer \>
</body>
</template>

<script>
import nav from '../components/nav.vue'
import calendar from '../components/calendar.vue'
import footer from '../components/footer.vue'

export default {
  name: 'App',
  components: {
    nav,
    calendar,
    footer
  }
}
</script>
