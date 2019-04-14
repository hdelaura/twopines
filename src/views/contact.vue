<template>
<body>
  <navbar></navbar>
  <contactform></contactform>
  <pagefooter></pagefooter>
</body>
</template>

<script>
import navbar from '../components/navbar.vue'
import contactform from '../components/contactform.vue'
import pagefooter from '../components/pagefooter.vue'

export default {
  name: 'Contact',
  components: {
    navbar,
    contactform,
    pagefooter
  }
}
</script>
