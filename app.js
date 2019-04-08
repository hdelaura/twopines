const app = new Vue ({
    el: '#app',
    data: { 
        showHome: true,
        showGear: false,
        showHowItWorks: false,
        showAbout: false,
        showContact: false,
        showCart: false
    },
    methods: {
        toggleBox() {
            this.display == 'redbox' ? this.display = 'greenbox' : this.display = 'redbox'
        }
    }
});