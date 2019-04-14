<template>
<body>
    <navbar></navbar>
    <rentals></rentals>
    <pagefooter></pagefooter>
</body>
</template>

<script>
import navbar from '../components/navbar.vue'
import rentals from '../components/rentals.vue'
import pagefooter from '../components/pagefooter.vue'

export default {
  name: 'gear',
  components: {
    navbar,
    rentals,
    pagefooter
  }
}
</script>
