import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Gear from './views/gear.vue'
import About from './views/About.vue'
import Contact from './views/contact.vue'
import Booking from './views/booking.vue'
import HowItWorks from './views/howitworks.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/booking',
      name: 'Booking',
      component: Booking
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/howitworks',
      name: 'Howitworks',
      component: HowItWorks
    },
    {
      path: '/gear',
      name: 'Gear',
      component: Gear
    }
  ]
})
