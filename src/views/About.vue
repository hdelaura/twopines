<template>
<body>
    <navbar></navbar>
    <aboutus></aboutus>
    <pagefooter></pagefooter>
</body>
</template>

<script>
import navbar from '../components/navbar.vue'
import aboutus from '../components/aboutus.vue'
import pagefooter from '../components/pagefooter.vue'

export default {
  name: 'About',
  components: {
    navbar,
    aboutus,
    pagefooter
  }
}
</script>
