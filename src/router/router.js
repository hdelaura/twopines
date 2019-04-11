const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home</p>' }
const About = { template: '<p>about</p>' }
const Contact = { template: '<p>contact</p>' }
const Gear = { template: '<p>gear</p>' }
const HowItWorks = { template: '<p>howitworks</p>' }
const Booking= { template: '<p>booking</p>' }

const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
  '/gear': Gear,
  '/booking': Booking,
  '/howitworks': HowItWorks
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})