import Vue from 'vue'

Vue.component('calendar', require('../src/components/calendar.vue'));
Vue.component('contact', require('../src/components/contact.vue'));
Vue.component('footer', require('../src/components/footer.vue'));
Vue.component('home', require('../src/components/home.vue'));
Vue.component('nav', require('../src/components/nav.vue'));
Vue.component('rentals', require('../src/components/rentals.vue'));

const routes = {
    '/': Home,
    '/about': About,
    '/contact': Contact,
    '/gear': Gear,
    '/booking': Booking,
    '/howitworks': HowItWorks
  }


const app = new Vue ({
    el: '#app',
    el: '#contactform',
    data: { 
        showHome: true,
        showGear: false,
        showHowItWorks: false,
        showAbout: false,
        showContact: false,
        showCart: false,
        user: {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        handleSubmit() {
            // Send data to the server or update your stores and such.
        }
    }
});