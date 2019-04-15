<template>
<body>
    <navbar></navbar>
    <start></start>
    <pagefooter></pagefooter>
</body>
</template>

<script>
import navbar from '../components/navbar.vue'
import start from '../components/start.vue'
import pagefooter from '../components/pagefooter.vue'

export default {
  name: 'Home',
  components: {
    navbar,
    start,
    pagefooter
  }
}
</script>
