<template>
<body>
    <navbar></navbar>
    <reserveform></reserveform>
    <pagefooter></pagefooter>
</body>
</template>

<script>
import navbar from '../components/navbar.vue'
import reserveform from '../components/reserveform.vue'
import pagefooter from '../components/pagefooter.vue'

export default {
  name: 'booking',
  components: {
    navbar,
    reserveform,
    pagefooter
  }
}
</script>
