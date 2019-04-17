<template>
<div class="container">
  <section class="is-fullheight-with-navbar">
    <div id="gear-padding">
      <h1 class="title is-1 is-spaced">HOW IT WORKS</h1>
      <div class="columns">
        <div class="column is-full">
          <badger-accordion>
            <badger-accordion-item>
                <template slot="header"><span class="is-size-4">What are the rental terms?</span></template>    
                <template slot="content">Whatever you need! We can rent from one night to multi-week trips. Each rental duration is based on the number of nights you will be ‘using’ the gear, starting with a minimum cost of 3 nights. Trips longer than 7 nights are subject to custom pricing to get you the best deal.</template>  
            </badger-accordion-item>
            <badger-accordion-item>
                <template slot="header"><span class="is-size-4">How does Two Pines distribute the gear?</span></template>    
                <template slot="content">Part of what keeps our services competitively priced is that we don’t have a store front.  Instead, we use self-serve pick up from drop boxes located in both Cedar City & St. George. This is convenient for locals and travelers alike. And some of our drop boxes are even at breweries! Delivery is possible, for a prearranged charge. Orders needed within 24 hours may not be eligible for delivery.</template>  
            </badger-accordion-item>
            <badger-accordion-item>
                <template slot="header"><span class="is-size-4">How do I find out what's available?</span></template>    
                <template slot="content">The first step is to visit our "Gear" page. Click on the item you are interested in. This will take you to our booking page, which will allow you to see which dates it is available.</template>  
            </badger-accordion-item>
            <badger-accordion-item>
                <template slot="header"><span class="is-size-4">What is the cancellation policy?</span></template>    
                <template slot="content">As long as Two Pines is notified of your desire to cancel your order in writing (email) 14 days or more from the date of your first rental night, you will receive a full refund, sent back to you from our PayPal system. If Two Pines is notified in fewer than 14 days from the date of your first rental night, a fee will be assessed at 30% of the total rental cost.</template>  
            </badger-accordion-item>
            <badger-accordion-item>
                <template slot="header"><span class="is-size-4">What if I don’t know where to go?</span></template>    
                <template slot="content">No problem! Our team has a strong understanding of the area and we can suggest great destinations based on the type of scenery and experience you’re looking for. (We make no skill level assumptions.) </template>  
            </badger-accordion-item>
        </badger-accordion>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import { BadgerAccordion, BadgerAccordionItem } from 'vue-badger-accordion'
export default {
  name: 'App',
  components: {
    BadgerAccordion,
    BadgerAccordionItem
  }
}
</script>

<style lang="scss">
    .badger-accordion__panel {
        max-height: 75vh;
        overflow: hidden;
        // scss-lint:disable ImportantRule
        &.-ba-is-hidden {
            max-height: 0 !important;
        }
    }
    // transition is added via `badger-accordion--initialized` to stop animation on initalition
    .badger-accordion--initialized {
        .badger-accordion__panel {
            transition: max-height ease-in-out 0.2s;
        }
    }
    .badger-accordion__header {
        .js-badger-accordion-header {
            display: flex;
            align-items: center;
            .badger-accordion-toggle {
                flex: 0 0 90%;
                cursor: pointer;
            }
            .badger-toggle-indicator {
                flex: 0 0 10%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                cursor: pointer;
            }
        }
    }
</style>
