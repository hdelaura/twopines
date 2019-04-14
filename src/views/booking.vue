<template>
<body>
    <navbar></navbar>
    <calendar></calendar>
    <pagefooter></pagefooter>
</body>
</template>

<script>
import navbar from '../components/navbar.vue'
import calendar from '../components/calendar.vue'
import pagefooter from '../components/pagefooter.vue'

export default {
  name: 'booking',
  components: {
    navbar,
    calendar,
    pagefooter
  }
}
</script>
