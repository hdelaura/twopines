<template>
<body>
    <navbar></navbar>
    <process></process>
    <pagefooter></pagefooter>
</body>
</template>

<script>
import navbar from '../components/navbar.vue'
import process from '../components/process.vue'
import pagefooter from '../components/pagefooter.vue'

export default {
  name: 'howitworks',
  components: {
    navbar,
    process,
    pagefooter
  }
}
</script>
